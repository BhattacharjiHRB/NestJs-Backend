import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly couseService: CourseService) {}

  @Get()
  getAllCourses() {
    return this.couseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.couseService.getCourseById(id);
  }

  @Post()
  createCourse() {
    return this.couseService.createCouse();
  }

  @Put(':id')
  updateCourse(@Param('id') id: string) {
    return this.couseService.updateCourse(id);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string) {
    return this.couseService.patchCourse(id);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.couseService.deleteCourse(id);
  }
}
