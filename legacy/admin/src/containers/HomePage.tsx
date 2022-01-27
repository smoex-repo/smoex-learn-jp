import * as React from 'react'
import styles from './styles/HomePage.module.scss'
import { transformStyles } from 'react-dom-basic-kit'
const cx = transformStyles(styles)

type IHomePageProps = {
  className?: string
}

export const HomePage: React.FC = (props: any) => {
  return (
    <section className={cx('home-page')}>
      HomePage web
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
      <div className={cx('home-item')}>1</div>
    </section>
  )
}

export default HomePage
