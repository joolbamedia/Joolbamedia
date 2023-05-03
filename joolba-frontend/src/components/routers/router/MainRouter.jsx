import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";
import Footer from "../../includes/Footer";


const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<AppRouter />} />
                <Route path="/sign-in" element={<SignUp type="SignIn" />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MainRouter

