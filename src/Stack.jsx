import React from "react";
import HTML from "./assets/html.png"
import CSS from "./assets/css.png"
import JS from "./assets/js.png"
import TAILWIND from "./assets/tailwind.png"
import REACT from "./assets/react-BzCHfcRJ.png"
import JAVA from "./assets/java.png"
import SPRING from "./assets/spring.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';

function Stack(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return(
        <div className="flex flex-col justify-center items-center gap-5  z-40 " id="Stack">
            <h2 className="text-white text-4xl font-bold">
                Tech Stack
            </h2>

            
                <Swiper
                    spaceBetween={44}
                    slidesPerView={3}
                    modules={[Autoplay, Pagination, Navigation]}  
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={true}
                    loop={true}
                    className="mySwiper w-full max-w-6xl mt-10"
                >
                    <SwiperSlide>
                        <div className=" flex flex-col bg-white w-[150px] h-[150px]  md:w-[250px] md:h-[250px] items-center justify-center rounded-xl p-2">
                        <img src={HTML} className="w-[80px] flex justify-center items-center" />
                        <p className="font-bold">HTML</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col bg-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] items-center justify-center rounded-xl gap-1 p-2">
                        <img src={CSS} className="w-[80px]" />
                        <p className="font-bold">CSS</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col bg-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] items-center justify-center rounded-xl gap-1 p-2">
                        <img src={JS} className="w-[80px]" />
                        <p className="font-bold">Javascript</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col bg-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] items-center justify-center rounded-xl gap-3 ">
                        <img src={TAILWIND} className="w-[80px]" />
                        <p className="font-bold">Tailwind CSS</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col bg-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] items-center justify-center rounded-xl gap-1 p-2">
                        <img src={REACT} className="w-[80px]" />
                        <p className="font-bold">React</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col bg-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] items-center justify-center rounded-xl gap-1 p-2">
                        <img src={JAVA} className="w-[80px]" />
                        <p className="font-bold">Java</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col bg-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] items-center justify-center rounded-xl gap-1 mr-4 p-2">
                        <img src={SPRING} className="flex  w-[80px] md:w-[150px] justify-center" />
                        <p className="font-bold">SpringBoot</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

        
        </div>
    );
 }

 export default Stack;