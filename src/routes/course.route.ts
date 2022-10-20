import { Router } from 'express'
import { controllers } from '../controllers'

export const courseRouter = Router()
courseRouter.get('/', controllers.getManyCourse);
courseRouter.get('/:id', controllers.getOneCourse);
courseRouter.post('/', controllers.createCourse);
courseRouter.delete('/:id', controllers.deleteCourse);

