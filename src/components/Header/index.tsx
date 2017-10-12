import * as React from 'react';
import * as style from './style.css';
import { Link } from 'react-router-dom';

export namespace Header {
  export interface Props {
     /* empty */
  }

  export interface State {
    /* empty */
  }
}

export class Header extends React.Component<Header.Props, Header.State> {

  render() {
    return (
      <header className={style.header}>
        <div className={style.wrap}>
          <div className={style.mainMenu}>
           <Link className={style.link} to='/'>Home</Link>
           <Link className={style.link} to='/Articles'>Articles</Link>
          </div>
          <div className={style.loginMenu}>
            <a href="" className={style.link}>Login</a>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
