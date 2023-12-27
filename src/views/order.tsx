import React from "react";
import { Link } from "react-router-dom";
import Input from "./../components/input/input";

function Order(): JSX.Element {
    return(
        <section className={'flex justify-center items-center p-5'}>
            <div className={'w-fit p-10 border shadow-xl rounded-xl'}>

                {/*<img src="/src/assets/login img.png" title="logo" alt="logo" className={'w-24 m-auto'}/>*/}

                <div className={'text-2xl font-bold text-amber-950 text-center mt-5'}>
                    Order Now
                </div>

                <div className={'mt-5 min-w-[400px]'}>

                    <div className={'flex' }>

                        <Input
                            type={'text'}
                            name={'name'}
                            label={'Name'}
                            placeholder={'Enter your name'}
                            optional={false}/>

                    </div>

                    <Input
                        type={'text'}
                        name={'phone number'}
                        label={'phone number'}
                        placeholder={'Phone Number'}
                        optional={false}/>

                    <Input
                        type={'email'}
                        name={'email'}
                        label={'Email'}
                        placeholder={'Enter your email'}
                        optional={false}/>

                    <Input
                        type={'password'}
                        name={'password'}
                        label={'Password'}
                        placeholder={'Enter your password'}
                        optional={false}/>
                </div>

                <div className={'text-center mt-5 bg-amber-950'}>
                    <button className={'main-btn'}>Sign Up</button>
                </div>

                <div className={'text-center mt-5'}>
                    Do have an account? <Link to={'/signin'}><span className={'text-amber-700 underline'}>Sign in now</span></Link>
                </div>

            </div>
        </section>
    );
}

export default Order;