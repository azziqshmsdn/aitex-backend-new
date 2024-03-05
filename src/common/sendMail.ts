import nodemailer from 'nodemailer';

function convertJsonToTable(formData:any) {
    let tableHtml = '<table border="1"><tr><th>Field</th><th>Value</th></tr>';

    for (const [key, value] of Object.entries(formData)) {
        tableHtml += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }

    tableHtml += '</table>';
    return tableHtml;
}

export async function WITAFormSendMailToMarketing(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOMARKETING_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOMARKETING_USER,
              pass: process.env.SENDMAILTOMARKETING_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SENDMAILTOMARKETING_USER,
            to: process.env.MARKETING_EMAIL,
            subject: 'WITA Nomination Form Submission',
            html: convertJsonToTable(req.formData),
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in WITAFormSendMailToMarketing function.')
        return null
    }
}

export async function WITAFormSendMailToUser(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOUSER_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOUSER_USER,
              pass: process.env.SENDMAILTOUSER_PASS,
            },
        });

        const textMessage = "Dear " + req.formData.nomineeName + "\n\n" + "Thank you for submitting the nomination form for the Islamic Tourism Awards 2024. We appreciate your interest and participation in recognizing excellence in Islamic tourism. " +
        "Your nomination has been received and forwarded to the awards committee for evaluation. Our dedicated team will carefully review each submission to assess its merits and contributions to the advancement of Islamic tourism.\n\n" +
        "Please note that the evaluation process may take some time as we ensure thorough consideration of all nominees. Rest assured that we will notify you via email of the outcome once the selection process is complete.\n\n" +
        "Should you have any questions or require further assistance, please feel free to reach out to us at marketing@aitex.my. We are here to support you throughout the awards process.\n\n" +
        "Thank you again for your nomination and for being a part of the Islamic tourism community. We look forward to celebrating excellence with you at the Islamic Tourism Awards 2024.\n\nBest regards,\n\n" +
        "World Islamic Tourism - Awards Marketing Team"

        const mailOptions = {
            from: process.env.SENDMAILTOUSER_USER,
            to: req.email,
            subject: 'Auto-Reply: Submission Acknowledgement for Islamic Tourism Awards 2024 Nomination',
            text: textMessage
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in WITAFormSendMailToUser function.')
        return null
    }
}

export async function conferenceFormSendMailToMarketing(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOMARKETING_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOMARKETING_USER,
              pass: process.env.SENDMAILTOMARKETING_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SENDMAILTOMARKETING_USER,
            to: process.env.MARKETING_EMAIL,
            subject: 'AITEX Conference Form Submission',
            html: convertJsonToTable(req.formData),
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in conferenceFormSendMailToMarketing function.')
        return null
    }
}

export async function conferenceFormSendMailToUser(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOUSER_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOUSER_USER,
              pass: process.env.SENDMAILTOUSER_PASS,
            },
        });

        const textMessage = "Dear " + req.formData.firstName + " " + req.formData.lastName + "\n\n" + "Thank you for registering as an attendee for the AITEX Conference 2024. " +
        "We truly appreciate your interest in being a part of this insightful event.\n\n" +
        "Your registration details have been received, and our team is currently in the process of handling the necessary arrangements. Rest assured, we are committed to ensuring a smooth and enriching experience for you during the AITEX Conference 2024.\n\n" +
        "If you have any urgent inquiries or specific requirements leading up to the conference, feel free to contact us at marketing@aitex.my.\n\n" +
        "We eagerly anticipate your participation in the AITEX Conference 2024 and anticipate meaningful discussions and networking opportunities within the Islamic tourism and trade sector.\n\nBest regards,\n\n" +
        "AITEX Conference – Event Team"

        const mailOptions = {
            from: process.env.SENDMAILTOUSER_USER,
            to: req.email,
            subject: 'Auto-Reply: Asia Islamic Tourism & Trade (AITEX 2024) Conference Registration',
            text: textMessage
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in conferenceFormSendMailToUser function.')
        return null
    }
}

export async function exhibitorFormSendMailToMarketing(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOMARKETING_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOMARKETING_USER,
              pass: process.env.SENDMAILTOMARKETING_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SENDMAILTOMARKETING_USER,
            to: process.env.MARKETING_EMAIL,
            subject: 'AITEX Exhibitor Form Submission',
            html: convertJsonToTable(req.formData),
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in exhibitorFormSendMailToMarketing function.')
        return null
    }
}

export async function exhibitorFormSendMailToUser(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOUSER_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOUSER_USER,
              pass: process.env.SENDMAILTOUSER_PASS,
            },
        });

        const textMessage = "Dear " + req.formData.firstName + " " + req.formData.lastName + "\n\n" + "Thank you for expressing interest in exhibiting at the Asia Islamic Tourism & Trade (AITEX 2024) event. We appreciate your enthusiasm and look forward to the possibility of collaborating with you to make this event a success." +
        "We appreciate your enthusiasm and look forward to the possibility of collaborating with you to make this event a success.\n\n" +
        "Your inquiry has been received, and our sales team is eager to assist you further. They will review your request and get in touch with you as soon as possible to discuss the available exhibition opportunities, stand options, and any additional information you may need to participate effectively in AITEX 2024.\n\n" +
        "In the meantime, if you have any urgent questions or specific requirements, please feel free to contact us at marketing@aitex.my. We are here to ensure a smooth and rewarding experience for all exhibitors.\n\n" +
        "Once again, thank you for your interest in AITEX 2024. We look forward to potentially partnering with you to showcase the latest advancements and offerings in Islamic tourism and trade.\n\nBest regards,\n\n" +
        "AITEX – Sales & Marketing Team"

        const mailOptions = {
            from: process.env.SENDMAILTOUSER_USER,
            to: req.email,
            subject: 'Auto-Reply: Expression of Interest in Exhibiting at AITEX 2024',
            text: textMessage
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in exhibitorFormSendMailToUser function.')
        return null
    }
}

export async function visitorFormSendMailToMarketing(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOMARKETING_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOMARKETING_USER,
              pass: process.env.SENDMAILTOMARKETING_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SENDMAILTOMARKETING_USER,
            to: process.env.MARKETING_EMAIL,
            subject: 'AITEX Visitor Form Submission',
            html: convertJsonToTable(req.formData),
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in visitorFormSendMailToMarketing function.')
        return null
    }
}

export async function visitorFormSendMailToUser(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOUSER_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOUSER_USER,
              pass: process.env.SENDMAILTOUSER_PASS,
            },
        });

        let subject = ""
        let textMessage = ""

        if(req.formData.registrationType == "Trade Buyer"){
            subject = "Auto-Reply: Asia Islamic Tourism & Trade (AITEX 2024) Trade Visitor Registration"
        }
        else{
            subject = "Auto-Reply: Asia Islamic Tourism & Trade (AITEX 2024) Visitor Registration"
        }

        if(req.formData.registrationType == "Trade Buyer"){
            textMessage = "Dear " + req.formData.firstName + " " + req.formData.lastName + "\n\n" + "Thank you for registering as a trade visitor for the Asia Islamic Tourism & Trade (AITEX 2024) event. " +
            "Your interest in participating is greatly appreciated.\n\n" +
            "Please note that your registration has been received, and we are processing it accordingly. Our team is diligently working to ensure that your participation in AITEX 2024 is seamless and productive.\n\n" +
            "Should you have any urgent inquiries or specific requirements leading up to the event, please feel free to reach out to us at marketing@aitex.my\n\n" +
            "We look forward to welcoming you to AITEX 2024 and facilitating valuable connections and opportunities within the Islamic tourism and trade sector.\n\nBest regards,\n\n" +
            "AITEX – Event Team"
        }
        else{
            textMessage = "Dear " + req.formData.firstName + " " + req.formData.lastName + "\n\n" + "Thank you for registering as a visitor for the Asia Islamic Tourism & Trade (AITEX 2024) event. " +
            "We are thrilled to have you join us for this exciting gathering.\n\n" + "Your registration has been successfully received, and we are currently processing it. " +
            "As the event approaches, we will keep you updated with important information, including event schedules, featured speakers, exhibitors, and more.\n\n" +
            "Should you have any questions or require assistance leading up to the event, please don't hesitate to contact us at marketing@aitex.my. Our team is here to ensure your experience at AITEX 2024 is enriching and memorable.\n\n" +
            "We eagerly anticipate your presence at AITEX 2024 and the opportunity to showcase the latest developments and innovations in Islamic tourism and trade.\n\nWarm regards,\n\n" +
            "AITEX – Event Team"
        }

        const mailOptions = {
            from: process.env.SENDMAILTOUSER_USER,
            to: req.email,
            subject: subject,
            text: textMessage
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in visitorFormSendMailToUser function.')
        return null
    }
}

export async function exhibitorFinalFormSendMailToMarketing(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.SENDMAILTOMARKETING_HOST,
            port: 465,
            secure: true, // use TLS
            auth: {
              user: process.env.SENDMAILTOMARKETING_USER,
              pass: process.env.SENDMAILTOMARKETING_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SENDMAILTOMARKETING_USER,
            to: process.env.MARKETING_EMAIL,
            subject: 'AITEX Exhibitor Final Form Submission',
            html: convertJsonToTable(req.formData),
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in exhibitorFinalFormSendMailToMarketing function.')
        return null
    }
}