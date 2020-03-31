import { Router } from 'express'
import Hello from '../controllers/hello'

const router = Router()

router.get('/', Hello.index)

export default router
