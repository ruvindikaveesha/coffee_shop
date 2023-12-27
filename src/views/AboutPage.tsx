import React from 'react';
import Button from "../components/card/button";


class MenuPage extends React.Component<any, any>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
        <div className="min-h-screen flex flex-col  lg:px-32 px-5  bg-orange-100">
            <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 font-bold text-amber-950 italic">About Us</h1>

            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="w-full lg:w-2/4">
                    <img className="rounded-lg" src="/src/assets/coffe.jpg" alt="img"/>
                </div>
                <div className="w-full lg:w-2/4 p-4 space-y-3  items-center justify-center">
                    <h2 className="font-semibold text-3xl items-center justify-center font-bold text-amber-950 italic">
                        What Makes Our Coffee Special?
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
                        quaerat quia quasi beatae et iste, tempora voluptatum corporis sit
                        pariatur eaque exercitationem, doloribus eum optio nobis cum?
                        Quidem, dolor atque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
                        minima perspiciatis doloribus quod repellendus molestiae rerum!
                        Enim, vero natus.
                    </p>

                    <div className=" flex flex-row gap-6">
                        <Button title="Learn more" />
                    </div>

                </div>
            </div>
        </div>

        );
    }

}

export default MenuPage;
