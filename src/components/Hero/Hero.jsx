import React from "react";
import Slider from "react-slick";
import image from "../../assets/mario.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "AUTUMN SALE STYLISH",
      subtitle: "WOMENS",
      preTitle: "New Trend",
      buttonText: "تسوق الآن",
      image: image,
    },
    {
      title: "WINTER COLLECTION",
      subtitle: "EXCLUSIVE",
      preTitle: "Limited Edition",
      buttonText: "اكتشف المزيد",
      image: image,
    },
    {
      title: "SPECIAL OFFERS",
      subtitle: "DISCOUNT",
      preTitle: "This Week Only",
      buttonText: "احصل عليها الآن",
      image: image,
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen w-full bg-no-repeat bg-cover bg-center py-6 relative overflow-hidden">
      <div className="w-full h-full relative z-10">
        <Slider {...settings} className="w-full">
          {slides.map((slide, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full w-full container mx-auto px-4 lg:px-10 py-10 gap-10">
                {/* Text Section */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
                  <div className="font-semibold flex items-center justify-center lg:justify-start uppercase text-gray-600 tracking-wider mb-2">
                    <div className="w-10 h-[2px] bg-gray-400 mr-3 hidden lg:block"></div>
                    {slide.preTitle}
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight font-light mb-6 text-gray-800">
                    {slide.title} <br />
                    <span className="font-semibold text-gray-900">{slide.subtitle}</span>
                  </h1>
                  <button className="bg-gray-800 text-white py-3 px-8 rounded-md mx-auto lg:mx-0  hover:bg-black transition duration-300 flex items-center justify-center group text-sm sm:text-base">
                    {slide.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={`${slide.subtitle} Fashion Model`}
                    className="max-h-[400px] sm:max-h-[500px] object-contain w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
