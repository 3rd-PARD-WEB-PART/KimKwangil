import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import MyPage from "./Pages/MyPage";

function Layout() {
    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
                Header
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;