import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";


const MainRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<AppRouter />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default MainRouter

