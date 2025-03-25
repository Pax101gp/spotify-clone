import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    path="/sso-callback"
                    element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
                />
                <Route path="/auth-callback" element={<AuthCallbackPage />} />
            </Routes>
        </>
    );
}

export default App;
