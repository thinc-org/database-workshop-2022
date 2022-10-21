import { Days, Prefixes } from "@prisma/client"

export interface CourseDto {
  id: number
  name: string
  description: string
  credit: number
  day: Days
  time: string
  students?: StudentDto[]
}

export interface StudentDto {
  id: number
  studentId: string
  prefix: Prefixes
  firstName: string
  lastName: string
  courses?: CourseDto[]
}
