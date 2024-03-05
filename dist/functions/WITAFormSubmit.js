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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WITAFormSubmit = void 0;
const sendMail_1 = require("../common/sendMail");
const util_1 = require("../common/util");
function WITAFormSubmit(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const mandatoryFields = [
            req.email
        ];
        if (mandatoryFields.find((mandatoryField) => !mandatoryField) ||
            mandatoryFields.includes(undefined) ||
            mandatoryFields.includes("")) {
            return {
                message: "Invalid request.",
                data: null
            };
        }
        try {
            const sendMailToMarketing = yield (0, sendMail_1.WITAFormSendMailToMarketing)(req);
            const sendMailToUser = yield (0, sendMail_1.WITAFormSendMailToUser)(req);
            // Check if the email was sent successfully
            if (sendMailToMarketing && sendMailToUser) {
                // Return a success response
                return (0, util_1.createResponse)("Email sent successfully.", 200, { resultData: req.formData }, "Email sent successfully.");
            }
            else {
                // Return an error response
                return (0, util_1.createResponse)("Error sending email.", 500, { resultData: req.formData }, "Email not sent successfully.");
            }
        }
        catch (error) {
            console.error(`Error: ${error}`);
            return (0, util_1.createResponse)("Error sending email.", 500, null, error.message);
        }
    });
}
exports.WITAFormSubmit = WITAFormSubmit;
//# sourceMappingURL=WITAFormSubmit.js.map