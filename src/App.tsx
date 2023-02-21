import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/custom/Spinner";
import AuthProvider from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Login = React.lazy(() => import("./views/Login"));
const Register = React.lazy(() => import("./views/Register"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />     
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;