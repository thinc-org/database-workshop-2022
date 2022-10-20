import * as course from './course.route'
import * as student from './student.route'
import * as studentBio from './student_bio.route'

export const routes = {
  ...course, ...student, ...studentBio
}
