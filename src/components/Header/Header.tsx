import Link from 'next/link';
import Icon from '../Icon/Icon';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.nav}>
          <div className={s.navLeft}>
            <Link href="/" className={s.navLink}>
              Home
            </Link>
            <Link href="/menu" className={s.navLink}>
              Menu
            </Link>
          </div>
          <div className={s.navCenter}>
            <Link href="/" className={s.logo}>
              Selve Restaurant
            </Link>
          </div>
          <div className={s.navRight}>
            <Link href="/contacts" className={s.navLink}>
              Contacts
            </Link>
            <div className={s.socialIcons}>
              <Icon name="icon-twitter" size={28} />
              <Icon name="icon-facebook" size={28} />
              <Icon name="icon-instagram" size={28} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
