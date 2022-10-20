import * as course from "./course.controller"
import * as student from "./student.controller"
import * as studentBio from "./student_bio.controller"

export const controllers = {
  ...course, ...student, ...studentBio
}

