import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import AppRouter from "./AppRouter";
import SignUp from "../../screens/SignUp";
import Footer from "../../includes/Footer";


const MainRouter = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/*" element={<AppRouter />} />
                    <Route path="/sign-in" element={<SignUp type="SignIn" />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </Container>
            <Footer />
        </>
    )
}

export default MainRouter


const Container = styled.section`
    min-height: 80vh;
`