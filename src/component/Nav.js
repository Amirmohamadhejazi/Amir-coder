import React from "react";
import {Link} from 'react-router-dom';


export default function Nav() {

        return(
            <div className="w-100 d-flex align-items-center justify-content-end h-navbar bg-navbar pr-nav  "  >
                <div className="w-nav d-flex align-items-center justify-content-between">
                    <Link to="/Home" className="link" ><span className="underline rainbow_text_animated items_nav float-left IRANSansWeb p-0">خانه</span></Link>
                    <Link to="/About" className="link" ><span className="underline rainbow_text_animated items_nav float-left IRANSansWeb p-0">درباره ما</span></Link>
                    <Link to="/Work_samples" className="link" ><span className="underline rainbow_text_animated items_nav float-left IRANSansWeb p-0">نمونه کار</span></Link>
                    <Link to="/Buy" className="link" ><span className="underline rainbow_text_animated items_nav float-left IRANSansWeb p-0">سفارش</span></Link>
                </div>
            </div>
        )
}