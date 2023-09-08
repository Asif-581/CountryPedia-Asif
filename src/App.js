import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import Country from "./Page/Country";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(CountryList, {}) }), _jsx(Route, { path: "/country/:cca3", element: _jsx(Country, {}) })] }) })] }));
}
export default App;
