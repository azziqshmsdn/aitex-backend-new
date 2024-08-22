import {visitorFormSendMailToUser, visitorFormSendMailToMarketing} from '../common/sendMail'
import {createResponse} from '../common/util'
import {insertDataToVisitor} from '../common/insertDb'
import {updateVisitorGoogleSheet} from '../common/updateGoogleSheets'

export async function visitorFormSubmit(req: any, res: any) {
    const mandatoryFields = [
        req.email
    ]

    if (mandatoryFields.find((mandatoryField) => !mandatoryField) || 
        mandatoryFields.includes(undefined) ||
        mandatoryFields.includes("")) { 
        return {
            message: "Invalid request.",
            data: null
        }
    }

    try {
        const sendMailToMarketing = await visitorFormSendMailToMarketing(req);
        const sendMailToUser = await visitorFormSendMailToUser(req);
        const sendToGSheet = await updateVisitorGoogleSheet(req)
        console.log("Data to sheet:", sendToGSheet);
        const sendDataToDB = await insertDataToVisitor(req.formData);
        console.log("Data to DB:", sendDataToDB);

         // Check if the email was sent successfully
         if (sendMailToMarketing && sendMailToUser) {
            // Return a success response
            return createResponse(
                "Email sent successfully.", 
                200, 
                { resultData: req.formData }, 
                "Email sent successfully."
                );
        } else {
            // Return an error response
            return createResponse(
                "Error sending email.", 
                500, 
                { resultData: req.formData }, 
                "Email not sent successfully."
                );
        }
        
    }
    catch(error:any) {

        console.error(`Error: ${error}`);
        return createResponse("Error sending email.", 500, null, error.message);
    }
}