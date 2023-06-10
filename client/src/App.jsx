import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/front-page/Home"));
const About = lazy(() => import("./pages/front-page/About"));
const Contact = lazy(() => import("./pages/front-page/Contact"));
const News = lazy(() => import("./pages/front-page/News"));
const Admissions = lazy(() => import("./pages/front-page/Admissions"));
const Article = lazy(() => import("./pages/front-page/Article"));
import Layout from "./components/Layout";
// portal imports
import StudentLogin from "./pages/portal/StudentLogin";
import StaffLogin from "./pages/portal/StaffLogin";
import Login from "./pages/portal/Login";
import { Provider } from "react-redux";
import StaffPortal from "./pages/portal/StaffPortal";
import { store } from "./app/store";
import StudentPortal from "./pages/portal/StudentPortal";
import Dashboard from "./pages/portal/Dashboard";
import AdminPortal from "./pages/portal/admin/AdminPortal";
import SingleStudent from "./pages/portal/admin/Students/SingleStudent";
import AllStudents from "./pages/portal/admin/Students/AllStudents";
import AdminLayout from "./pages/portal/admin/AdminLayout";
import AdminContextProvider from "./contexts/AdminContext";
import AllStaffs from "./pages/portal/admin/staff/AllStaffs";

function App() {
  return (
    <>
      {/* front web routes */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
            index
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
        </Route>
        {/* portal routes */}
        <Route
          path="dashboard"
          element={
            <Provider store={store}>
              <Dashboard />
            </Provider>
          }
        >
          <Route path="staff/:id" element={<StaffPortal />} />
          <Route path="student/:id" element={<StudentPortal />} />
          <Route element={<AdminContextProvider />}>
            <Route element={<AdminLayout />}>
              <Route path=":id/admin/" index element={<AdminPortal />} />
              <Route path=":id/admin/all-students" element={<AllStudents />} />
              <Route
                path=":id/admin/all-students/:id"
                element={<SingleStudent />}
              />
               <Route path=":id/admin/all-staff" element={<AllStaffs />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
