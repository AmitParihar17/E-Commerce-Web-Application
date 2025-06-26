import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center item-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            172306 Amit Parihar <br /> Subathu 346 ,Solan,HP
          </p>
          <p className="text-gray-500">
            Tel : (415) 555-9685 <br /> Email : admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Carrers at Forever
          </p>
          <p className="text-gray-500">
           Learn more about our teams and job openings.
          </p>
         <button className='border border-black py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}

export default Contact
