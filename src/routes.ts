import * as Functions from './index'

export default function (app: any) {
  
  app.get('/healthc', Functions.home_func)
  app.post('/WITAFormSubmit', Functions.WITAFormSubmit_func)
}