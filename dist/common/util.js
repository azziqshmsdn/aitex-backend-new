"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
// Imports
const responseModel_1 = require("../models/responseModel");
const createResponse = (Message, StatusCode, Data, Description = "") => {
    const response = new responseModel_1.responseModel();
    response.Message = Message;
    response.StatusCode = StatusCode;
    response.Data = Data;
    response.Description = Description;
    return response;
};
exports.createResponse = createResponse;
//# sourceMappingURL=util.js.map