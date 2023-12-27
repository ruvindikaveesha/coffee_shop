import React from 'react';
import {Link} from 'react-router-dom';
import Input from "./../components/input/input";

class Login extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <section className={'flex justify-center items-center p-5'}>
        <div className={'w-fit p-24 border shadow-xl rounded-xl'}>

          <img src="/src/assets/login img.png" title="logo" alt="logo" className={'w-24 m-auto'}/>

          <div className={'text-2xl font-bold text-amber-950 text-center mt-5'}>
            Sign In
          </div>

          <div className={'mt-5 min-w-[300px] font-bold text-amber-950'}>

            <Input
              type={'user name'}
              name={'user name'}
              label={'User Name'}
              placeholder={'Enter your User Name'}
              optional={false}/>

              <Input
                type={'password'}
                name={'password'}
                label={'Password'}
                placeholder={'Enter your password'}
                optional={false}/>

          </div>

          <div className={'text-center mt-5'}>
            <button className={'main-btn '}>Sign In</button>
          </div>

          <div className={'text-center mt-5'}>
            Do not have an account? <Link to={'/signup'}><span className={'text-amber-700 underline'}>Sign up now</span></Link>
          </div>

        </div>
      </section>
    );

  }

}

export default Login;