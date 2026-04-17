# CourseManagementAPI

A Course Management REST API built with [NestJS](https://nestjs.com/).  
Includes input validation via DTOs & Pipes, and file upload support (Lab Task 01 + 02).

## Project Structure

```
CourseManagementAPI/
├── src/
│   ├── course/
│   │   ├── dto/
│   │   │   ├── create-course.dto.ts
│   │   │   └── update-course.dto.ts
│   │   ├── course.module.ts
│   │   ├── course.controller.ts
│   │   └── course.service.ts
│   ├── uploads/               ← generated at runtime
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── nest-cli.json
```

## Setup & Installation

```bash
# Install NestJS CLI globally (one time only)
npm i -g @nestjs/cli

# Install project dependencies
npm install

# Run the development server
npm run start:dev
```

Visit: http://localhost:3000

## API Endpoints

| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| GET    | /course             | Get all courses          |
| GET    | /course/:id         | Get course by ID         |
| POST   | /course             | Create a new course      |
| PUT    | /course/:id         | Full update a course     |
| PATCH  | /course/:id         | Partial update a course  |
| DELETE | /course/:id         | Delete a course          |
| POST   | /course/:id/upload  | Upload course material   |

## DTO Validation Rules

| Field       | Type   | Required | Rules                 |
|-------------|--------|----------|-----------------------|
| name        | string | Yes      | @IsString, @IsNotEmpty|
| code        | string | Yes      | @IsString, @IsNotEmpty|
| instructor  | string | Yes      | @IsString, @IsNotEmpty|
| credits     | number | Yes      | @Min(1), @Max(6)      |
| description | string | No       | @IsOptional           |

## File Upload Rules
- Field name: `file` (multipart/form-data)
- Allowed types: `.jpg`, `.jpeg`, `.png`, `.pdf`
- Max size: 2MB
