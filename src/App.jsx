import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./Componets/LandingPage"; 
import AdminLayout from "./Componets/Admin/AdminLayout";
import Clients from "./Componets/Admin/Clients";
import Subscribers from "./Componets/Admin/Subscribers";
import Contacts from "./Componets/Admin/Contacts";
import Project from "./Componets/Project";
import Projects from "./Componets/Admin/Projects";
import AdminDashboard from "./Componets/Admin/AdminDashboard";
import AdminSettings from "./Componets/Admin/AdminSettings";



function App() {
  return (

    <>

      <Routes>


        <Route path="/" element={<LandingPage />} />

        <Route path="/admin" element={<AdminLayout/>}/>

        <Route path="/clients" element={<Clients/>}/>

        <Route path="/subscript" element={<Subscribers/>} />
        
        <Route path="/contact" element={<Contacts/>} />

        <Route path="/projects" element={<Projects/>}/>

        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/setting" element={<AdminSettings/>}/>

      

      </Routes>

    </>

  )
}

export default App;
