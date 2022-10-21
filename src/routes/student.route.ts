import { Router } from 'express'
import { createStudent, deleteStudent, getManyStudent, getOneStudent, joinCourse } from '../controllers/student.controller'
import { getOneStudentBio, updateStudentBio } from '../controllers/student_bio.controller'

export const studentRouter = Router()
studentRouter.get('/', getManyStudent)
studentRouter.get('/:id', getOneStudent)
studentRouter.post('/', createStudent)
studentRouter.delete('/:id', deleteStudent)
studentRouter.get('/:id/bio', getOneStudentBio)
studentRouter.patch('/:id/bio', updateStudentBio)
studentRouter.post('/:id/join', joinCourse)

