import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentPage from "./components/pages/StudentPage";
import TeacherPage from "./components/pages/TeacherPage";
import Navbar from "./components/ui/navBar";
import CreateLection from "./components/pages/TeacherPage/createLection";
import ErrorPage from "./components/pages/ErrorPage";
import LectionList from "./components/pages/TeacherPage/lectionList";
import StudentList from "./components/pages/TeacherPage/studentList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element="<div>About</div>" />
        <Route path="/teacherPage" element={<TeacherPage />}>
          <Route
            path="/teacherPage/createLection"
            element={<CreateLection />}
          />
          <Route path="/teacherPage/lections" element={<LectionList />} />
          <Route path="/teacherPage/students" element={<StudentList />} />
        </Route>
        <Route path="/studentPage" element={<StudentPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
