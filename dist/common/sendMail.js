"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WITAFormSendMailToUser = exports.WITAFormSendMailToMarketing = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function WITAFormSendMailToMarketing(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transporter = nodemailer_1.default.createTransport({
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
            const sendMail = yield transporter.sendMail(mailOptions);
            return sendMail;
        }
        catch (error) {
            console.log('error in WITAFormSendMailToMarketing function.');
            return null;
        }
    });
}
exports.WITAFormSendMailToMarketing = WITAFormSendMailToMarketing;
function WITAFormSendMailToUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transporter = nodemailer_1.default.createTransport({
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
            const sendMail = yield transporter.sendMail(mailOptions);
            return sendMail;
        }
        catch (error) {
            console.log('error in WITAFormSendMailToUser function.');
            return null;
        }
    });
}
exports.WITAFormSendMailToUser = WITAFormSendMailToUser;
//# sourceMappingURL=sendMail.js.map