import { Request, Response } from 'express'
import { prisma } from '../common/prisma/prisma'
import { StudentDto } from '../dto/common.dto'
import { CreateStudentDto } from '../dto/student.dto'

const getOneStudent = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = await prisma.student.findUnique({ where: { id }, include: { courses: true } })

  if (student === null) return res.status(404).json({ message: 'not found' })

  const studentDto: StudentDto = {
    id: student.id,
    studentId: student.studentId,
    prefix: student.prefix,
    firstName: student.firstName,
    lastName: student.lastName,
    courses: student.courses.map(course => ({
      id: course.id,
      name: course.name,
      description: course.description,
      day: course.day,
      time: course.time,
      credit: course.credit,
    }))
  }
  res.status(200).json(studentDto)
}

const getManyStudent = async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  const studentsDto: StudentsDto = {
    total: students.length,
    students: students.map(student => ({
      id: student.id,
      studentId: student.studentId,
      prefix: student.prefix,
      firstName: student.firstName,
      lastName: student.lastName,
    }))
  }

  res.status(200).json(studentsDto)
}

const createStudent = async (req: Request, res: Response) => {
  const createStudent: CreateStudentDto = req.body;
  const student = await prisma.student.create({
    data: {
      studentId: createStudent.studentId,
      prefix: createStudent.prefix,
      firstName: createStudent.firstName,
      lastName: createStudent.lastName,
      StudentBio: {

        create: {
          highSchoolName: createStudent.bio.highSchoolName,
          birthdate: createStudent.bio.birthdate ?? new Date(),
        }
      }
    }
  })

  const studentDto: StudentDto = {
    id: student.id,
    studentId: student.studentId,
    prefix: student.prefix,
    firstName: student.firstName,
    lastName: student.lastName,
  }
  res.status(201).json(studentDto)
}

const deleteStudent = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await prisma.student.delete({ where: { id } })
  res.status(204).send()
}

const joinCourse = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const courseId = parseInt(req.body.courseId);
  //join course
  const student = await prisma.student.update({
    where: {
      id
    },
    data: {
      courses: {
        connect: { id: courseId }
      }
    },
    include: {
      courses: true,
    }
  })
  const studentDto: StudentDto = {
    id: student.id,
    studentId: student.studentId,
    firstName: student.firstName,
    lastName: student.lastName,
    prefix: student.prefix,
    courses: student.courses.map(course => ({
      id: course.id,
      name: course.name,
      description: course.description,
      day: course.day,
      time: course.time,
      credit: course.credit,
    }))
  }
  res.status(200).json(studentDto)
}

export {
  getOneStudent,
  getManyStudent,
  createStudent,
  deleteStudent,
  joinCourse
}
