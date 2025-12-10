import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./Componets/LandingPage"; 



function App() {
  return (

    <>

      <Routes>


        <Route path="/" element={<LandingPage />} />
        

      </Routes>

    </>

  )
}

export default App;
