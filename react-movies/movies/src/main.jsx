import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import StartPage from "./pages/startPage";
import ProfilePage from "./pages/profilePage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import HomePage from "./pages/homePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <div className="container">
            <h1>Movies</h1>
            <Routes>
              <Route path="/" element={< StartPage />} />
              <Route path="/login" element={< LoginPage />} />
              <Route path="/signup" element={< SignUpPage />} />
              <Route path="/profile" element={< ProfilePage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path ="/home" element={<HomePage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          </AuthContextProvider>
      </BrowserRouter>
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);