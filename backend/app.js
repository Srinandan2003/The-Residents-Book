import express from "express"
import cors from 'cors'

import ResidentRouter from './routes/Residents.route.js'

const app = express();

app.use(express.json());

app.use(cors())

app.use('/residents',ResidentRouter)



export default app