import {Outlet} from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <div>
            {/* Header 영역 */}
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;