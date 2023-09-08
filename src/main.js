import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import App from './App.tsx';
import './index.css';
import { AppProvider } from './context/context';
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ChakraProvider, { children: _jsx(AppProvider, { children: _jsx(App, {}) }) }) }));
