import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";


const MainRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<AppRouter />} />
        </Routes>
    )
}

export default MainRouter

