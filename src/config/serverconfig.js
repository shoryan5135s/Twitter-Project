import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const APP_NAME = process.env.APP_NAME

export {
    PORT,
    MONGODB_URI,
    APP_NAME
}