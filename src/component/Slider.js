import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
        <div>
            <Carousel
                className="text-white  AdobeGothicStd"
                itemClass="image-item"
                autoPlay="false"
                autoPlaySpeed="5000"
                infinite="false"
                items={3}
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop" ]}
                showDots={true}
            >
                <div className="col-12 p-0 h-slider d-flex align-items-end">
                    <div className="p-0 w-100 h-100 text-center">
                            <div className="col-12 h-100 img1_slider" > </div>
                    </div>
                </div>
                <div className="p-0 w-100 h-100 text-center">
                    <div className="p-0 w-100 h-100 text-center">
                        <div className="col-12 h-100 img2_slider" > </div>
                    </div>
                </div>
                <div className="p-0 w-100 h-100 text-center">
                    <div className="p-0 w-100 h-100 text-center">
                        <div className="col-12 h-100 img3_slider" > </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}