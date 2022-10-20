import * as course from './course.route'
import * as student from './student.route'

export const routes = {
  ...course, ...student
}
