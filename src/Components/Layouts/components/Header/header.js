import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../../../Public/Logo/logoF2m.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('warpper-header')}>
        <div className={cx('container-nav', 'header-right')}>
          <a href='/'>
            <img className={cx('header-logo')} src={Logo} alt="f2m" />
            </a>
        </div>

        <div className={cx('container-nav', 'header-between')}>
          <nav>
            <ul className={cx('header-ul')}>
              <li className={cx('header-li')}>
                <a className={cx('header-a')} href='/'>Hoa Sinh Nhật</a>
              </li>
              <li className={cx('header-li')}>
                <a className={cx('header-a')} href='/'>Hoa Khai Trương</a>
              </li>
              <li className={cx('header-li')}>
                <a className={cx('header-a')} href='#'>Lan Hồ Điệp</a>
              </li>
              <li className={cx('header-li')}>
                <a className={cx('header-a')} href='#'>Chủ Đề  </a>
              </li>
              <li className={cx('header-li')}>
                <a className={cx('header-a')} href='#'>Thiết Kế</a>
              </li>
              <li className={cx('header-li')}>
                <a className={cx('header-a')} href='#'>Hoa Tươi </a>
              </li>
          
            </ul>
          </nav>
        </div>

        <div className={cx('container-nav', 'header-left')}>
          <div className={cx('header-search')}>
            <input className={cx('search-input')} type='search' placeholder='Search' />
            <button className={cx('search-button')} type='button' onClick={() => alert('clicked!')}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
