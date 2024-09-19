import { handle } from 'hono/vercel'
import AppController from '../controllers/App.controller'
import { app } from '../core/apiApp'

export const runtime = 'edge'

AppController(app);

export const api = handle(app)
