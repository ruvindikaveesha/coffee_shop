import React from 'react';
import Card from "./../components/card/card";
import img1 from "../assets/menu1.jpg";
import img2 from "../assets/menu2.jpg";
import img3 from "../assets/menu3.jpg";
import img4 from "../assets/menu4.jpg";
import img5 from "../assets/menu5.jpg";
import img6 from "../assets/menu6.jpg";


    const Menu = () => {
        return (

            <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5  bg-orange-200">
                <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
                    Our Products
                </h1>

                <div className=" flex flex-wrap pb-8 gap-8 justify-center">
                    <Card img={img1} title="Espresso" />
                    <Card img={img2} title="Cappuccino" />
                    <Card img={img3} title="Latte" />
                    <Card img={img4} title="Americano" />
                    <Card img={img5} title="Mocchito" />
                    <Card img={img6} title="Doppio" />
                </div>
            </div>

        );

}

export default Menu;