//rrd imports
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../helpers";

export default function logoutAction(){
    //delete user (sign out)
    deleteItem({
        key: "userName",
    })
    deleteItem({
        key: "budgets",
    })
    deleteItem({
        key: "expenses",
    })
    toast.success("Successfully signed out")

    //return redirect, back to home page  
    return redirect('/');
}