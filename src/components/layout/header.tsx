import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../card/button";

class Header extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <header>
        <nav className={'flex justify-between items-center bg-white-100 p-5'}>
          <h2 className={'w-[50px] text-2xl font-bold text-amber-950 italic'}>Coffee</h2>
          {/*<img src="" title="logo" alt="logo" className={'w-[50px]'}/>*/}
          <ul className={'flex gap-[4vw] font-bold text-amber-950'}>
            <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/AboutPage'}>ABOUT US</Link></li>
            <li><Link to={'/menu'}>MENU</Link></li>
            <li><Link to={'/review'}>REVIEW</Link></li>
            <div>
              <li><Link to={'/signin'}>LOGIN</Link></li>
            </div>

          </ul>
        </nav>
      </header>
    );
  }

}

export default Header;