// Imports
import { responseModel } from "../models/responseModel"

export const createResponse = (
    Message: string,
    StatusCode: number,
    Data: any,
    Description: any = ""
 ) => {
    const response: responseModel = new responseModel() 
    response.Message = Message
    response.StatusCode = StatusCode
    response.Data = Data
    response.Description = Description

    return response
}