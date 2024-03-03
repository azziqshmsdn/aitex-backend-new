import nodemailer from 'nodemailer';

export async function WITAFormSendMailToMarketing(
    req: any, 
) {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            host: "mail.aitex.my",
            port: 465,
            secure: true, // use TLS
            auth: {
              user: "itsupport@aitex.my",
              pass: "mataadmin@123",
            },
        });

        const mailOptions = {
            from: 'itsupport@aitex.my',
            to: 'azziqsam@gmail.com',
            subject: 'Form Submission',
            text: JSON.stringify(req.formData, null, 2),
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
            host: "mail.aitex.my",
            port: 465,
            secure: true, // use TLS
            auth: {
              user: "itsupport@aitex.my",
              pass: "mataadmin@123",
            },
        });

        const mailOptions = {
            from: 'itsupport@aitex.my',
            to: req.email,
            subject: 'Auto-Reply: Submission Acknowledgement for Islamic Tourism Awards 2024 Nomination',
            text: `
            Dear ${req.formData.nomineeName},
            Thank you for submitting the nomination form for the Islamic Tourism Awards 2024. We appreciate your interest and participation in recognizing excellence in Islamic tourism.
            Your nomination has been received and forwarded to the awards committee for evaluation. Our dedicated team will carefully review each submission to assess its merits and contributions to the advancement of Islamic tourism.
            Please note that the evaluation process may take some time as we ensure thorough consideration of all nominees. Rest assured that we will notify you via email of the outcome once the selection process is complete.
            Should you have any questions or require further assistance, please feel free to reach out to us at marketing@aitex.my. We are here to support you throughout the awards process.
            Thank you again for your nomination and for being a part of the Islamic tourism community. We look forward to celebrating excellence with you at the Islamic Tourism Awards 2024.
            
            Best regards,
            World Islamic Tourism - Awards Marketing Team
            `,
        };

        // Send the email
        const sendMail = await transporter.sendMail(mailOptions);

        return sendMail;
    } catch (error) {
        console.log('error in WITAFormSendMailToUser function.')
        return null
    }
}