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
exports.exhibitorFinalFormSubmit_func = exports.visitorFormSubmit_func = exports.exhibitorFormSubmit_func = exports.conferenceFormSubmit_func = exports.WITAFormSubmit_func = exports.home_func = void 0;
const index_1 = require("./functions/index");
const util_1 = require("./common/util");
function returnBadRequest() {
    return (0, util_1.createResponse)('Bad Request.', 500, null);
}
function home_func(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, index_1.healthc)(req, res);
        return res.status(200).send(result);
    });
}
exports.home_func = home_func;
function WITAFormSubmit_func(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //validate request
        if (!req) {
            const badReq = returnBadRequest();
            return res.status(badReq.StatusCode).json(badReq);
        }
        const payload = req.body;
        const result = yield (0, index_1.WITAFormSubmit)(payload, res);
        return res.status(200).send(result);
    });
}
exports.WITAFormSubmit_func = WITAFormSubmit_func;
function conferenceFormSubmit_func(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //validate request
        if (!req) {
            const badReq = returnBadRequest();
            return res.status(badReq.StatusCode).json(badReq);
        }
        const payload = req.body;
        const result = yield (0, index_1.conferenceFormSubmit)(payload, res);
        return res.status(200).send(result);
    });
}
exports.conferenceFormSubmit_func = conferenceFormSubmit_func;
function exhibitorFormSubmit_func(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //validate request
        if (!req) {
            const badReq = returnBadRequest();
            return res.status(badReq.StatusCode).json(badReq);
        }
        const payload = req.body;
        const result = yield (0, index_1.exhibitorFormSubmit)(payload, res);
        return res.status(200).send(result);
    });
}
exports.exhibitorFormSubmit_func = exhibitorFormSubmit_func;
function visitorFormSubmit_func(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //validate request
        if (!req) {
            const badReq = returnBadRequest();
            return res.status(badReq.StatusCode).json(badReq);
        }
        const payload = req.body;
        const result = yield (0, index_1.visitorFormSubmit)(payload, res);
        return res.status(200).send(result);
    });
}
exports.visitorFormSubmit_func = visitorFormSubmit_func;
function exhibitorFinalFormSubmit_func(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //validate request
        if (!req) {
            const badReq = returnBadRequest();
            return res.status(badReq.StatusCode).json(badReq);
        }
        const payload = req.body;
        const result = yield (0, index_1.exhibitorFinalFormSubmit)(payload, res);
        return res.status(200).send(result);
    });
}
exports.exhibitorFinalFormSubmit_func = exhibitorFinalFormSubmit_func;
//# sourceMappingURL=index.js.map