import 'dotenv'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

const PORT = process.env.PORT ?? 3001

const app = express()

app.use(cors())
app.use(router)
// app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
