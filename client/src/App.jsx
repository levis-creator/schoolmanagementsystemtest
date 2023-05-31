import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Article = lazy(() => import("./pages/Article"));
import StudentLogin from "./pages/StudentLogin";
import StaffLogin from "./pages/StaffLogin";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
          exact
        />
        <Route path="login" element={<Login />}>
          <Route index element={<StudentLogin />} />
          <Route path="student-login" element={<StudentLogin />} />
          <Route path="staff-login" element={<StaffLogin />} />
        </Route>
        <Route
          path="contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="admissions"
          element={
            <Suspense fallback={<Loading />}>
              <Admissions />
            </Suspense>
          }
        />
        <Route
          path="news/:slug"
          element={
            <Suspense fallback={<Loading />}>
              <Article />
            </Suspense>
          }
        />
        <Route
          path="news"
          element={
            <Suspense fallback={<Loading />}>
              <News />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
