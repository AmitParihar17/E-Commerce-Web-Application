import React from 'react'
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever is dedicated to creating timeless products that blend
            innovation, quality, and customer satisfaction effortlessly.Forever
            is a company built on trust, quality, and innovation. We deliver
            timeless products designed to improve everyday life, ensuring
            customer satisfaction and long-lasting value in everything we offer.
          </p>
          <p>
            At Forever, our mission is to create meaningful experiences through
            dependable solutions. With passion and dedication, we strive to
            build a future where excellence, integrity, and customer happiness
            always come first.
          </p>
          <b className="text-gray-800">Our Missions</b>
          <p>
            {" "}
            Our mission is to inspire trust and loyalty through reliable
            solutions that last for generations to come.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border  border-gray-500 px-10  md:px-16 py-8  sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Forever ensures top-tier quality through rigorous testing, precise
            standards, and a commitment to excellence.
          </p>
        </div>
        <div className="border border-gray-500 px-10  md:px-16 py-8  sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Forever is committed to providing convenient solutions that simplify
            life and bring comfort to everyday routines.
          </p>
        </div>
        <div className="border  border-gray-500 px-10  md:px-16 py-8  sm:py-20 flex flex-col gap-5">
          <b>Exceptional Servive</b>
          <p className="text-gray-600">
            Forever is committed to providing convenient service
            className="text-gray-600" that simplify life and bring comfort to
            everyday routines.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}

export default About
