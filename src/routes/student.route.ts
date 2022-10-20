import { Router } from 'express'
import { controllers } from '../controllers'

const studentRouter = Router()
studentRouter.get('/', controllers.getManyStudent)
studentRouter.get('/:id', controllers.getOneStudent)
studentRouter.post('/', controllers.createStudent)
studentRouter.delete('/:id', controllers.deleteStudent)
