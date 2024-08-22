import {exhibitorFinalFormSendMailToMarketing} from '../common/sendMail'
import {createResponse} from '../common/util'
import {insertDataToExhibitorContract} from '../common/insertDb'
import {updateExhibitorFinalGoogleSheet} from '../common/updateGoogleSheets'

export async function exhibitorFinalFormSubmit(req: any, res: any) {
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
        const sendMailToMarketing = await exhibitorFinalFormSendMailToMarketing(req)
        const sendToGSheet = await updateExhibitorFinalGoogleSheet(req.formData)
        console.log("Data to sheet:", sendToGSheet);
        const sendDataToDB = await insertDataToExhibitorContract(req.formData);
        console.log("Data to DB:", sendDataToDB);

         // Check if the email was sent successfully
         if (sendMailToMarketing) {
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