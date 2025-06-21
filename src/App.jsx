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
import ProtectRoute from "./utils/ProtectRoute";
import Unauthorised from "./Pages/Unauthorised";

function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Register />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/unauthorised" element={<Unauthorised />} />

          {/* Admin Dashboard Routes */}
          <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          {/* list page for teachers students and parents and subjects */}
          <Route element={<ProtectRoute allowedRoles={["admin", "teacher"]} />}>
            <Route path="/teacherslist" element={<TeacherListpage />} />
          </Route>
          <Route element={<ProtectRoute allowedRoles={["admin", "teacher"]} />}>
            <Route path="/teacher/:id" element={<SingleTeacherPage />} />
          </Route>
          <Route
            element={
              <ProtectRoute allowedRoles={["admin", "guardian", "student"]} />
            }
          >
            <Route path="/student/:id" element={<SingleStudentPage />} />
          </Route>
          <Route
            element={
              <ProtectRoute allowedRoles={["admin", "teacher", "guardian"]} />
            }
          >
            <Route path="/studentslist" element={<StudentListpage />} />
          </Route>
          <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
            <Route path="/parentslist" element={<ParentListpage />} />
          </Route>
          <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
            <Route path="/subjectslist" element={<SubjectListpage />} />
          </Route>
          <Route element={<ProtectRoute allowedRoles={["admin", "teacher"]} />}>
            <Route path="/classlist" element={<ClassListpage />} />
          </Route>
          <Route
            element={
              <ProtectRoute
                allowedRoles={["admin", "teacher", "student", "guardian"]}
              />
            }
          >
            <Route path="/examlist" element={<ExamListpage />} />
          </Route>
          <Route element={<ProtectRoute allowedRoles={["admin", "teacher"]} />}>
            <Route path="/lessonlist" element={<LessonListpage />} />
          </Route>
          <Route
            element={
              <ProtectRoute
                allowedRoles={["admin", "teacher", "student", "guardian"]}
              />
            }
          >
            <Route path="/assignmentlist" element={<AssignmentListpage />} />
          </Route>
          <Route
            element={
              <ProtectRoute
                allowedRoles={["admin", "teacher", "student", "guardian"]}
              />
            }
          >
            <Route path="/resultlist" element={<ResultListpage />} />
          </Route>
          <Route
            element={
              <ProtectRoute
                allowedRoles={["admin", "teacher", "student", "guardian"]}
              />
            }
          >
            <Route path="/eventlist" element={<EventListpage />} />
          </Route>
          <Route
            element={
              <ProtectRoute
                allowedRoles={["admin", "teacher", "student", "guardian"]}
              />
            }
          >
            <Route
              path="/announcementlist"
              element={<AnnouncementListpage />}
            />
          </Route>
          {/* students Dashboard Routes */}
          <Route element={<ProtectRoute allowedRoles={["student"]} />}>
            <Route path="/student" element={<StudentPage />} />
          </Route>

          {/* parents Dashboard Routes */}
          <Route element={<ProtectRoute allowedRoles={["guardian"]} />}>
            <Route path="/guardian" element={<ParentPage />} />
          </Route>

          {/* teacher Dashboard Routes */}
          <Route element={<ProtectRoute allowedRoles={["teacher"]} />}>
            <Route path="/teacher" element={<TeacherPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
