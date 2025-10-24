import React, { useState } from 'react'
import Image from '../common/Image'
import Container from '../common/Container'
import Slider from 'react-slick'
import { Link } from 'react-router'
import Button from '../common/Buttton'

import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.png'

const Banner = () => {

  let [active, setActive] = useState(0)

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (prev, next) => {
      setActive(next);
    },

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "-1%",
          left: "0",
          transform: "translateY(100%)",
        }}
      >
        <ul style={{
          margin: "0px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",


        }}> {dots} </ul>
      </div>
    ),
    // customPaging: i => (
    //   <div
    //     style={
    //       i === active
    //         ? {
    //           color: "#fff",
    //           padding: "9px 10px 9px 0",
    //           fontSize: "20px",
    //         }
    //         : {
    //           color: "#aaa",
    //           padding: "9px 10px 9px 0",
    //           fontSize: "20px",
    //         }
    //     }
    //   >
    //     0{i + 1}
    //   </div>
    // ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {}
      },
      {
        breakpoint: 600,
        settings: {}
      },
      {
        breakpoint: 480,
        settings: {
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                  gap: "20px"
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: i => (
            <div
              className={`text-xs ${i === active
                ? "text-[#262626] border-b-2 border-[#262626] pb-1"
                : "text-transparent border-b-2 border-[#fff] pb-1"
                }`}
              style={{

                padding: "0px 5px 4px 5px",
                marginRight: "10px"
              }}
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ],
  };



  return (
    <div>
      <Container className="relative pt-12 pb-[92px] rounded-b-3xl">
        <p className='-rotate-90 text-white text-lg leading-8 inline-block my-auto absolute top-1/2'>
          <Link>#Gericht</Link>
        </p>



        <Slider {...settings}>
          <div>
            <div className='h-[581px] flex items-center justify-center'>
              <div className='w-full h-full relative'>
                <Image src={banner1} className="w-full h-full object-cover" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                  <p className='text-white text-[45px] font-bold font-league'>Helping Others</p>
                  <h1 className='text-white text-[80px] font-bold font-league tracking-wide uppercase'>Live & Travel</h1>
                  <p className='text-white text-[20px] font-semibold font-montserrat'>Special offers to suit your plan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='h-[581px] flex items-center justify-center'>
              <div className='w-full h-full relative'>
                <Image src={banner2} className="w-full h-full object-cover" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                  <p className='text-white text-[45px] font-bold font-league'>Helping Others</p>
                  <h1 className='text-white text-[80px] font-bold font-league tracking-wide uppercase'>Live & Travel</h1>
                  <p className='text-white text-[20px] font-semibold font-montserrat'>Special offers to suit your plan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='h-[581px] flex items-center justify-center'>
              <div className='w-full h-full relative'>
                <Image src={banner3} className="w-full h-full object-cover" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                  <p className='text-white text-[45px] font-bold font-league'>Helping Others</p>
                  <h1 className='text-white text-[80px] font-bold font-league tracking-wide uppercase'>Live & Travel</h1>
                  <p className='text-white text-[20px] font-semibold font-montserrat'>Special offers to suit your plan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='h-[581px] flex items-center justify-center'>
              <div className='w-full h-full relative'>
                <Image src={banner4} className="w-full h-full object-cover" />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                  <p className='text-white text-[45px] font-bold font-league'>Helping Others</p>
                  <h1 className='text-white text-[80px] font-bold font-league tracking-wide uppercase'>Live & Travel</h1>
                  <p className='text-white text-[20px] font-semibold font-montserrat'>Special offers to suit your plan</p>
                </div>
              </div>
            </div>
          </div>

          
        </Slider>



      </Container>
    </div>
  )
}

export default Banner