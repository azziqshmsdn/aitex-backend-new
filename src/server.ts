// Node runtime environment
import dotenv from 'dotenv';
dotenv.config()

import Express from 'express'
import Routes from './routes'


// Port, Host config
const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || '0.0.0.0'

// Express server
const app = Express()
app.use(Express.json())

// Routes
Routes(app)

// App listen
app.listen(PORT, HOST, () => {
  console.log(
    `Server listening on ${HOST}:${PORT}`
  )
})

export default app
