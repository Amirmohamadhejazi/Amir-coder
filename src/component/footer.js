import React from "react";
import {Link} from 'react-router-dom';


export default function footer() {

    return (
        <div className="w-100 h-footer d-flex align-items-center justify-content-center  ">
            <Link to="/Home" className="w-item-footer text-center text-white fs-footer"><span>خانه</span></Link>
            <Link to="/About" className="w-item-footer text-center text-white fs-footer"><span>درباره ما</span></Link>
            <Link to="/Work_samples" className="w-item-footer text-center text-white fs-footer"><span>نمونه کار</span></Link>
            <Link to="/Buy" className="w-item-footer text-center text-white fs-footer"><span>سفارش</span></Link>
        </div>
    )
}