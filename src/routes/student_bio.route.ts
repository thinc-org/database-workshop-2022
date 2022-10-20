import { Router } from 'express'
import { controllers } from '../controllers'

const studentBioRouter = Router()
studentBioRouter.get('/:id', controllers.getOneStudentBio)
studentBioRouter.patch('/:id', controllers.updateStudentBio)

export default studentBioRouter
