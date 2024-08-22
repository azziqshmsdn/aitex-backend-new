import {conferenceFormSendMailToUser, conferenceFormSendMailToMarketing} from '../common/sendMail'
import {createResponse} from '../common/util'
import {insertDataToConference} from '../common/insertDb'
import {updateConferenceGoogleSheet} from '../common/updateGoogleSheets'

export async function conferenceFormSubmit(req: any, res: any) {
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
        const sendMailToMarketing = await conferenceFormSendMailToMarketing(req)
        const sendMailToUser = await conferenceFormSendMailToUser(req);
        const sendToGSheet = await updateConferenceGoogleSheet(req.formData)
        console.log("Data to sheet:", sendToGSheet);
        const sendDataToDB = await insertDataToConference(req.formData);
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