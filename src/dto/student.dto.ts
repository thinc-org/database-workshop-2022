import { Prefixes } from "@prisma/client"
import { StudentDto } from "./common.dto"
import { BioDto } from "./student_bio.dto"

export interface StudentsDto {
  total: number
  students: StudentDto[]
}

export interface CreateStudentDto {
  studentId: string
  prefix: Prefixes
  firstName: string
  lastName: string
  bio: BioDto
}
