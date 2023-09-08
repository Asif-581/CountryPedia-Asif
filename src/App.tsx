import "./App.css";
import Country from "./Page/Country";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";


function App() {
  return (
    <>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:cca3" element={<Country />} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
