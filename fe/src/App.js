
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/join" element={<Contact/>} />
          <Route path="/team-members" element={<Team/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
