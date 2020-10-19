import React, {useState} from 'react';
import Slider from "../Slider";
import {Link} from "react-router-dom";

export default function Home() {
    // const [state, setstate] = useState(2);
    // console.log(state)
    return (
        // <button onClick={() => setstate(state + 1)}>
        //     Click me
        // </button>
        <div className="bg-transparent">
            <Slider/>
            <div className="h-service">
                <span className="fs-t-items-home justify-home p-text-home text-white w-100 d-flex align-items-center ">خدمات پس از فروش</span>
                <div className="w-100 d-flex justify-content-between h-item-home  " >
                    <div className="items_home h-100 float-left bg-items " style={{overflow:"hidden"}}>
                        <div className="w-100 h-100 fs-service-text text-white">
                            <div className="w-100 h-25 d-flex align-items-center justify-content-center  ">
                                <span>شش ماهه</span>
                            </div>
                            <div className="w-100 d-flex align-items-center flex-column-reverse justify-content-center h-50 bg1-service-text ">
                                <span>تومان</span>
                                <span style={{margin:"1vw"}}>۱۰۰۰۰۰</span>
                                <span>قیمت</span>
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-center h-25   ">
                                <Link to="/Buy" className="link" ><span className="underline text-white fs-service-text float-left IRANSansWeb p-0">سفارش</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="items_home h-100 float-left bg-items " style={{overflow:"hidden"}}>
                        <div className="w-100 h-100 fs-service-text text-white">
                            <div className="w-100 h-25 d-flex align-items-center justify-content-center  ">
                                <span>سه ماهه</span>
                            </div>
                            <div className="w-100 d-flex align-items-center flex-column-reverse justify-content-center h-50 bg1-service-text ">
                                <span>تومان</span>
                                <span style={{margin:"1vw"}}>۵۰۰۰۰</span>
                                <span>قیمت</span>
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-center h-25   ">
                                <Link to="/Buy" className="link" ><span className="underline text-white fs-service-text float-left IRANSansWeb p-0">سفارش</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="items_home h-100 float-left bg-items " style={{overflow:"hidden"}}>
                        <div className="w-100 h-100 fs-service-text text-white">
                            <div className="w-100 h-25 d-flex align-items-center justify-content-center  ">
                                <span>یک ماهه</span>
                            </div>
                            <div className="w-100 d-flex align-items-center flex-column-reverse justify-content-center h-50 bg1-service-text ">
                                <span>تومان</span>
                                <span style={{margin:"1vw"}}>۲۰۰۰۰</span>
                                <span>قیمت</span>
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-center h-25   ">
                                <Link to="/Buy" className="link" ><span className="underline text-white fs-service-text float-left IRANSansWeb p-0">سفارش</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






