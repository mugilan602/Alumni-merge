import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Profile from "./Profile/Profile";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ChaptersPage from "./Chapters/Chapters";
import CeoMessagePage from "./CeoMessage/CeoMessage";
import PrincipalMessage from "./Principle Message/PrincipleMessage";
import Jobs from "./Jobs/Jobs";
import EventsPage from "./EventsPage/EventsPage";
import AboutUsPage from "./AboutUs/AboutUs";
import ContactUsPage from "./ContactUs/ContactUs";
import CreateJob from "./CreateJob/CreateJob";
import JobApply from "./JobApply/JobApply";
import AdminPage from "./AdminPage/AdminPage";
import AppliedStudentsPage from "./AppliedStudents/AppliedStudents";
import AlumniDirectory from "./Alumni Directory/AlumniDirectory";
import AdminLogin from "./Admin Login/AdminLogin";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
function App() {
    const {admin} =useAdminAuthContext();
    const {user} =useAuthContext();
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           {user &&  <Route path="/profile" element={<Profile />} />}
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/ceomessage" element={<CeoMessagePage />} />
            <Route path="/principalmessage" element={<PrincipalMessage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/eventspage" element={<EventsPage />} />
            <Route path="/alumniDirectory" element={<AlumniDirectory />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/apply/:jobId" element={<JobApply />} />

            
            {!admin && <Route path="/adminlogin" element={<AdminLogin />} />}
            {admin && <Route path="/adminpage" element={<AdminPage />} />}
            {admin && <Route path="/applied-students/:jobId" element={<AppliedStudentsPage />} />}


        </Routes>
    );
}

export default App;
