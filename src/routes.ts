import * as Functions from './index'

export default function (app: any) {
  
  app.get('/healthc', Functions.home_func)
  app.post('/WITAFormSubmit', Functions.WITAFormSubmit_func)
  app.post('/conferenceFormSubmit', Functions.conferenceFormSubmit_func)
  app.post('/exhibitorFormSubmit', Functions.exhibitorFormSubmit_func)
  app.post('/visitorFormSubmit', Functions.visitorFormSubmit_func)
}