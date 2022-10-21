import { prisma } from '../common/prisma/prisma';
import { Request, Response } from 'express'
import { CourseDto } from '../dto/common.dto';
import { CreateCourseDto } from '../dto/course.dto';

const getOneCourse = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const course = await prisma.course.findUnique({ where: { id }, include: { students: true } })

  if (course === null) {
    res.status(404).send({ message: 'not found' })
    return
  }

  const courseDto: CourseDto = {
    id: course.id,
    name: course.name,
    description: course.description,
    credit: course.credit,
    day: course.day,
    time: course.time,
    students: course.students.map(student => ({
      id: student.id,
      studentId: student.studentId,
      prefix: student.prefix,
      firstName: student.firstName,
      lastName: student.lastName
    }))
  }

  res.status(200).json(courseDto)

}

const getManyCourse = async (req: Request, res: Response) => {
  const courses = await prisma.course.findMany()
  const coursesDto: CourseDto[] = courses.map(course => ({
    id: course.id,
    name: course.name,
    description: course.description,
    credit: course.credit,
    day: course.day,
    time: course.time,
  }))
  res.status(200).json(coursesDto)
}

const createCourse = async (req: Request, res: Response) => {

  const course: CreateCourseDto = req.body

  const result = await prisma.course.create({
    data: {
      name: course.name,
      description: course.description,
      credit: course.credit,
      day: course.day,
      time: course.time,
    },
  })

  const courseDto: CourseDto = {
    id: result.id,
    name: result.name,
    description: result.description,
    credit: result.credit,
    day: result.day,
    time: result.time,
  }

  res.status(201).json(courseDto)
}

const deleteCourse = async (req: Request, res: Response) => {
  const id = req.params.id
  await prisma.course.delete({
    where: {
      id: parseInt(id)
    }
  })
  res.status(204).send()
}

export {
  getOneCourse,
  getManyCourse,
  createCourse,
  deleteCourse
}
