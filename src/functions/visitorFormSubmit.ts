import {visitorFormSendMailToUser, visitorFormSendMailToMarketing} from '../common/sendMail'
import {createResponse} from '../common/util'

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
        const sendMailToMarketing = await visitorFormSendMailToMarketing(req)
        const sendMailToUser = await visitorFormSendMailToUser(req)

         // Check if the email was sent successfully
         if (sendMailToMarketing && sendMailToUser) {
            // Return a success response
            return createResponse(
                "Email sent successfully.", 
                200, 
                { resultData: req.email }, 
                null
                );
        } else {
            // Return an error response
            return createResponse(
                "Error sending email.", 
                500, 
                null, 
                "Email not sent successfully."
                );
        }
        
    }
    catch(error:any) {

        console.error(`Error: ${error}`);
        return createResponse("Error sending email.", 500, null, error.message);
    }
}