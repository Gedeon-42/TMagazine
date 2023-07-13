"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./mostcomm.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "@/app/utils/common";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Mostcomments = () => {
  return (
    <section className="r-wrapper">
      <div className="r-container">
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="" />
                <div className="r-content">
                  <h3>{card.name}</h3>
                  <p>{card.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Mostcomments;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>
        <FaAngleLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaAngleRight />
      </button>
    </div>
  );
};
