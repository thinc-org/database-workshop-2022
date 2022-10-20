import { Router } from 'express'
import { controllers } from '../controllers'

export const studentRouter = Router()
studentRouter.get('/', controllers.getManyStudent)
studentRouter.get('/:id', controllers.getOneStudent)
studentRouter.post('/', controllers.createStudent)
studentRouter.delete('/:id', controllers.deleteStudent)
studentRouter.get('/:id/bio', controllers.getOneStudentBio)
studentRouter.patch('/:id/bio', controllers.updateStudentBio)

