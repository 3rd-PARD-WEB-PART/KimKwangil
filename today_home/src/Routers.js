import {Route, Router, Routes, useNavigate} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import MyPage from "./Pages/MyPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function Routers() {
    return (
        <Routes>
            <Route index="index" path="/" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<Layout/>}>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/mypage" element={<MyPage/>}/>
            </Route>
        </Routes>
    );
}

export default Routers;