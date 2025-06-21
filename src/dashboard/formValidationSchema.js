import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(3, { message: "Subject name is required" }),
  level: z.string().min(3, { message: "Level is required" }),
  id: z.coerce.number().optional(),
  teacher: z.array(z.coerce.number()), //teachers ids
});
export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(2, { message: "Subject name is required" }),
  capacity: z.coerce.number().min(1, { message: "Capacity is required" }),
  levelId: z.coerce.number().min(1, { message: "Level is required" }),
  teacherId: z.coerce.number().optional(), //teachers ids
});
export const lessonSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(2, { message: "lesson name is required" }),
  start_time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
      message: "Invalid time format. Use HH:MM:SS (e.g., 19:50:57)",
    })
    .min(1, { message: "Start time is required" }),
  end_time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
      message: "Invalid time format. Use HH:MM:SS (e.g., 19:50:57)",
    })
    .min(1, { message: "end time is required" }),
  class_id: z.coerce.number().min(1, { message: "class ID is required" }),
  subject_id: z.coerce.number().min(1, { message: "subject ID is required" }),
  teacher_id: z.coerce.number().min(1, { message: "teacher ID is required" }),
  day: z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"], {
    message: "day is required!",
  }),
});
export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(2, { message: "exam title is required" }),
  start_time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
      message: "Invalid time format. Use HH:MM:SS (e.g., 19:50:57)",
    })
    .min(1, { message: "Start time is required" }),
  end_time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
      message: "Invalid time format. Use HH:MM:SS (e.g., 19:50:57)",
    })
    .min(1, { message: "End time is required" }),
  lesson_id: z.coerce.number().min(1, { message: "lesson ID is required" }),
});
export const assignmentSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(2, { message: "exam title is required" }),
  start_date: z.coerce.date(1, { message: "Start time is required" }),
  due_date: z.coerce.date(1, { message: "due date is required" }),
  lesson_id: z.coerce.number().min(1, { message: "lesson ID is required" }),
});
export const resultSchema = z.object({
  id: z.coerce.number().optional(),
  score: z.coerce.number().min(1, { message: "score is required" }),
  assignment_id: z.coerce.number().optional().nullable(),
  exam_id: z.coerce.number().optional().nullable(),
});
export const eventSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(2, { message: "exam title is required" }),
  description: z.string().min(2, { message: "description is required" }),
  start_time: z.coerce.date(1, { message: "Start time is required" }),
  end_time: z.coerce.date(1, { message: "end time is required" }),
  class_id: z.coerce.number().min(1, { message: "class ID is required" }),
});
export const announcementSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(2, { message: "exam title is required" }),
  description: z.string().min(2, { message: "description is required" }),
  date: z.coerce.date(1, { message: "date time is required" }),
  class_id: z.coerce.number().min(1, { message: "class ID is required" }),
});

export const registerSchema = z
  .object({
    firstname: z
      .string()
      .min(3, { message: "First name must be at least 3 characters" }),
    lastname: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Where the error will appear
  });
export const loginSchema = z.object({
  email: z.string().min(3, { message: "email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// form validation for teachers
export const teacherSchema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstname: z.string().min(1, { message: "First name is required!" }),
  lastname: z.string().min(1, { message: "Last name is required!" }),
  phone: z.coerce.number().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  dob: z.coerce.date({ message: "date of birth is required!" }),
  sex: z.enum(["MALE", "FEMALE", "OTHERS"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(),
});
// form validation for students
export const studentSchema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstname: z.string().min(1, { message: "First name is required!" }),
  lastname: z.string().min(1, { message: "Last name is required!" }),
  phone: z.coerce.number().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  dob: z.coerce.date({ message: "date of birth is required!" }),
  sex: z.enum(["male", "female", "others"], { message: "Sex is required!" }),
  levelId: z.coerce.number().min(1, { message: "Grade is required!" }),
  classId: z.coerce.number().min(1, { message: "Class is required!" }),
});
// form validation for Parents
export const parentSchema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstname: z.string().min(1, { message: "First name is required!" }),
  lastname: z.string().min(1, { message: "Last name is required!" }),
  phone: z.coerce.number().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  sex: z.enum(["male", "female", "others"], { message: "Sex is required!" }),
});
