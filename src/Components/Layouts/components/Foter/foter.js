import React from 'react';
import classNames from 'classnames/bind';
import styles from './foter.module.scss';
import Logo from '../../../../Public/Logo/logoF2m.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Foter() {
  return (
    <footer className={cx('wrapper', 'fixed-footer')}>
      <div className={cx('warpper-foter')}>
        <div className={cx('footer-logo')}>
          <img src={Logo} alt="f2m" />
        </div>
        <div className={cx('footer-links')}>
          <ul className={cx('footer-ul')}>
            <li className={cx('footer-li')}>
              <a className={cx('footer-a')} href='#'>About Us</a>
            </li>
            <li className={cx('footer-li')}>
              <a className={cx('footer-a')} href='#'>Contact</a>
            </li>
            <li className={cx('footer-li')}>
              <a className={cx('footer-a')} href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={cx('footer-cart')}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
        </div>
      </div>
    </footer>
  );
}

export default Foter