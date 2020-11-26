import React from "react";
import {Link} from 'react-router-dom';


export default function footer() {

    return(
        <div className="w-100 h-footer d-flex align-items-center justify-content-center  ">
                <div className="w-item-footer text-center text-white fs-footer"><p>خانه</p></div>
                <div className="w-item-footer  text-center text-white fs-footer"><p>درباره ما</p></div>
                <div className="w-item-footer  text-center text-white fs-footer"><p>سفارش</p></div>
                <div className="w-item-footer  text-center text-white fs-footer"><p>نمونه کار</p></div>
        </div>
    )
}