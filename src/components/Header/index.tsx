import * as React from 'react';
import * as style from './style.css';
import { Link } from 'react-router-dom';

export class Header extends React.Component<{}, {}> {

  render() {
    return (
      <header className={style.header}>
        <div className={style.wrap}>
          <div className={style.mainMenu}>
           <Link className={style.link} to='/'>Home</Link>
           <Link className={style.link} to='/Articles'>Articles</Link>
           <Link className={style.link} to='/Todo'>TodoPage</Link>
          </div>
          <div className={style.loginMenu}>
            <Link className={style.link} to='Login'>Login</Link>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
