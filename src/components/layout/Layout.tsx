import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout(){

    return (
        <div className="min-h-full px-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}