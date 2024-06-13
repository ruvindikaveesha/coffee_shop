import React from 'react';
import Button from "../components/card/button";
import {FaFacebook  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import Card from "./../components/card/card";


class Home extends React.Component<any, any>{


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
        <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-orange-100 font-bold text-amber-950 italic ">
          <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
            <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight font-bold text-amber-950 italic">
              Start your day with a steaming cup of coffee
            </h1>
            <p>
              Boost your productivity and build your mood with a glass of coffee in
              the morning
            </p>

            <div className=" flex flex-row gap-6">
              <Button title="MORE MENU" />
            </div>

            <div>
            <span className=" flex items-center  px-1 py-3 rounded-full space-x-4  ">
            <FaFacebook  size={30} /> <RiInstagramFill size={30} /> <FaTwitter  size={30}/> <FaTiktok size={30} />  </span>

          </div>

        </div>

          <div className="relative">
            <img src="/src/assets/home.png" alt="img" />



          </div>
        </div>
    );
  }

}

export default Home;
