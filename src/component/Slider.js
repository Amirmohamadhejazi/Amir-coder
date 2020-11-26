import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from 'react-reveal/Fade';
import React from "react";

export default function Slider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            paritialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 40
        }
    };
    return(
        <div className="img_slider h-slider">
            <Carousel
                className="text-white  AdobeGothicStd"
                itemClass="image-item"
                autoPlay="false"
                autoPlaySpeed="3000"
                infinite="false"
                items={3}
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop" ]}
                showDots={true}
            >
                <div className="col-12 p-0 h-slider ">
                        <div className="col-12 h-100 p-0" >
                            <Fade left>
                                <div className="w-l-slider h-img-slider  float-left  img1_slider p-0 "> </div>
                             </Fade>
                            <div className="w-r-slider   h-text_slider text-white IRANSansWeb d-flex justify-content-center align-items-center text-justify   float-left p-0 ">
                                <Fade left>
                                    <div className="w-100  text-align-slider  ">
                                        <div className="align-sm-center">
                                            <div className="w-text_slider">
                                                <span className="fs-t-slider c-t-slider">با سفارش دادن سایت خود دیده شوید</span>
                                            </div>
                                        </div>
                                        <div className="align-sm-center">
                                            <div className="w-text_slider ">
                                                <span className="fs-slider line-h-slider">در جامعه امروز داشتن یک وبسایت برای شرکت سازمان ارگان دولتی دانشگاه و حتی اشخاص با تخصص های مختلف امری ضروری است</span>
                                            </div>
                                        </div>

                                    </div>
                                </Fade>
                            </div>
                        </div>
                </div>
                <div className="p-0 w-100 h-100 text-center">
                    <div className="p-0 w-100 h-100 text-center">
                        <div className="col-12 h-100 p-0" >
                            <div className="w-l-slider h-img-slider  float-left  img2_slider p-0 "> </div>
                            <div className="w-r-slider   h-text_slider text-white IRANSansWeb d-flex justify-content-center align-items-center text-justify   float-left p-0 ">
                                    <div className="w-100  text-align-slider  ">
                                        <div className="align-sm-center">
                                            <div className="w-text_slider">
                                                <span className="fs-t-slider c-t-slider">بی معطلی زودتر سایت خود را بزنید</span>
                                            </div>
                                        </div>
                                        <div className="align-sm-center">
                                            <div className="w-text_slider ">
                                                <span className="fs-slider line-h-slider">شما با هر کسب و کاری که دارید چه کوچک چه بزرگ می توانید ازهم اکنون برای سفارش سایت خود اقدام کنید</span>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-0 w-100 h-100 text-center">
                    <div className="p-0 w-100 h-100 text-center">
                        <div className="col-12 h-100 p-0" >
                            <div className="w-l-slider h-img-slider  float-left  img3_slider p-0 "> </div>
                            <div className="w-r-slider   h-text_slider text-white IRANSansWeb d-flex justify-content-center align-items-center text-justify   float-left p-0 ">
                                <div className="w-100  text-align-slider  ">
                                    <div className="align-sm-center">
                                        <div className="w-text_slider">
                                            <span className="fs-t-slider c-t-slider">? هزینه کمی دارد سایت زدن</span>
                                        </div>
                                    </div>
                                    <div className="align-sm-center">
                                        <div className="w-text_slider ">
                                            <span className="fs-slider line-h-slider">مردم اولین جایی که دنبال شما میگردند برروی اینترنت است اگر آنها شمارا پیدا نکنند بدون شک رقبای شما را خواهند یافت</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}