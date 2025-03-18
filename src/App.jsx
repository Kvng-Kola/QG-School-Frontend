import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import Enroll from "./Pages/Enroll";
// Dashboard Routes
import AdminPage from "./(dashboard)/admin/Page";
import StudentPage from "./(dashboard)/student/Page";
import ParentPage from "./(dashboard)/parents/Page";
import TeacherPage from "./(dashboard)/teacher/page";
import TeacherListpage from "./(dashboard)/list/teachers/page";
import StudentListpage from "./(dashboard)/list/students/Page";
import ParentListpage from "./(dashboard)/list/parents/Page";
import SubjectListpage from "./(dashboard)/list/subjects/page";
import ClassListpage from "./(dashboard)/list/classes/page";
import ExamListpage from "./(dashboard)/list/exams/page";
import LessonListpage from "./(dashboard)/list/lessons/page";
import AssignmentListpage from "./(dashboard)/list/assignments/page";
import ResultListpage from "./(dashboard)/list/results/page";
import EventListpage from "./(dashboard)/list/events/page";
import Announcements from "./(dashboard)/components/Announcements";
import AnnouncementListpage from "./(dashboard)/list/announcements/page";
import SingleTeacherPage from "./(dashboard)/list/teachers/[ID]/page";
import SingleStudentPage from "./(dashboard)/list/students/[ID]/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enroll" element={<Enroll />} />
          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminPage />} />
          {/* list page for teachers students and parents and subjects */}
          <Route path="/teacherslist" element={<TeacherListpage />} />
          <Route path="/list/teachers" element={<SingleTeacherPage />} />
          <Route path="/list/students" element={<SingleStudentPage />} />
          <Route path="/studentslist" element={<StudentListpage />} />
          <Route path="/parentslist" element={<ParentListpage />} />
          <Route path="/subjectslist" element={<SubjectListpage />} />
          <Route path="/classlist" element={<ClassListpage />} />
          <Route path="/examlist" element={<ExamListpage />} />
          <Route path="/lessonlist" element={<LessonListpage />} />
          <Route path="/assignmentlist" element={<AssignmentListpage />} />
          <Route path="/resultlist" element={<ResultListpage />} />
          <Route path="/eventlist" element={<EventListpage />} />
          <Route path="/announcementlist" element={<AnnouncementListpage />} />
          {/* students Dashboard Routes */}
          <Route path="/student" element={<StudentPage />} />
          {/* parents Dashboard Routes */}
          <Route path="/parent" element={<ParentPage />} />
          {/* teacher Dashboard Routes */}
          <Route path="/teacher" element={<TeacherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
