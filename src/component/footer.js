import React from "react";
import {Link} from 'react-router-dom';


export default function footer() {

    return (
        <div className="w-100 h-footer d-flex align-items-center justify-content-center ">
             <Link to="/Home" className="link w-item-footer text-center text-white fs-footer" ><span className="underline text-white p-0">خانه</span></Link>
             <Link to="/About" className="link w-item-footer text-center text-white fs-footer" ><span className="underline text-white p-0">درباره ما</span></Link>
             <Link to="/Work_samples" className="link w-item-footer text-center text-white fs-footer" ><span className="underline text-white p-0">نمونه کار</span></Link>
             <Link to="/Buy" className="link w-item-footer text-center text-white fs-footer" ><span className="underline text-white p-0">سفارش</span></Link>
         </div>
    )
}