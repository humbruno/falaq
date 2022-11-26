import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from 'constants/';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img src="images/logo.png" alt="Falaq logo" />
      </Link>
      <ul className={styles.nav__list}>
        {NAV_ITEMS.map((item) => (
          <li className={styles.nav__item} key={item.name}>
            <Link
              className={currentRoute === item.href ? styles.active : ''}
              href={item.href}
            >
              {t(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
