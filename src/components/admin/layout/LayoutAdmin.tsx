import { Outlet, useNavigate } from "react-router-dom";
import { HeaderAdmin } from "./HeaderAdmin";
import { useUserContext } from "@/components/UserContextProvider";
import { useEffect } from "react";

export function LayoutAdmin(){
    const {isAuth,isLoading} = useUserContext();
    const navigateTo = useNavigate();

    useEffect(() => {
        if (!isLoading){
            if (!isAuth){
                navigateTo("/login");
            }
        }
    },[isLoading])

    if (isLoading) return 

    return (
        <div className="min-h-full">
            <div className="container">
                <HeaderAdmin />
                <Outlet />
            </div>
        </div>
    )
}