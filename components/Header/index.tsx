import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

const NAV_ITEMS = [
  {
    href: '/services',
    name: 'Services',
  },
  {
    href: '/expertise',
    name: 'Expertise',
  },
  {
    href: '/portfolio',
    name: 'Portfolio',
  },
  {
    href: '/company',
    name: 'Company',
  },
  {
    href: '/blog',
    name: 'Blog',
  },
  {
    href: '/contact',
    name: "Let's talk",
  },
];

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img src="images/logo.png" alt="Falaq logo" />
      </Link>
      <ul className={styles.nav__list}>
        {NAV_ITEMS.map((item) => (
          <li className={styles.nav__item}>
            <Link
              className={currentRoute === item.href ? styles.active : ''}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
