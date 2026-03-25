import express from 'express'
import { refreshController } from '../controllers/refresh.controller.js'

const refreshRouter = express.Router()

refreshRouter.post('/', refreshController)

export default refreshRouter