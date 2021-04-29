import Link from 'next/link';

import classes from './MainNavigation.module.css';


function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sell Products</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Product</Link>
          </li>
          <li>
            <Link href=''>Add New Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
