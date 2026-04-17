import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses() {
    return 'Get All Courses - from Service';
  }

  getCourseById(id: string) {
    return `Get Course with Id ${id} - from Service`;
  }

  createCouse() {
    return 'Create Course - from Service';
  }

  updateCourse(id: string) {
    return `Update Course with Id ${id} - from Service`;
  }

  patchCourse(id: string) {
    return `Patch Course with Id ${id} - from Service`;
  }

  deleteCourse(id: string) {
    return `Delete Course with Id ${id} - from Service`;
  }
}
