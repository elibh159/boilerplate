import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Spinner from "./components/custom/Spinner";
import AuthProvider from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const AuthLayout = React.lazy(() => import("./layout/AuthLayout"));
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter >
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="*" element={<DefaultLayout />} />
              <Route path="/login" element={<AuthLayout />} />
              <Route path="/register" element={<AuthLayout />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;