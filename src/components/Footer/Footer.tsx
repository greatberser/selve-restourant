import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerWrapper}>
          <ul className={s.list}>
            <li>
              <p>Location</p>
            </li>
            <li>
              <p>130 Fulton St, New York </p>
            </li>
            <li>
              <p>NY 10038, USA</p>
            </li>
          </ul>
          <ul className={s.list}>
            <li>
              <p>Opening hours</p>
            </li>
            <li>
              <p>Mon - Sat: 11:00 - 23:00</p>
            </li>
            <li>
              <p>Sun: 11:00 - 19:00</p>
            </li>
            <li>
              <p>Food in the restaurant and takeaway!</p>
            </li>
          </ul>
          <ul className={s.list}>
            <li>
              <p>Sociale</p>
            </li>
            <li>
              <p>Instagram</p>
            </li>
            <li>
              <p>Facebook</p>
            </li>
            <li>
              <p>Twitter</p>
            </li>
          </ul>
        </div>
        <p>Copyright copy& 2021 by Bonbons Chocolate</p>
      </div>
    </footer>
  );
};

export default Footer;
