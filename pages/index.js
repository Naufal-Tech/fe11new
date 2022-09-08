import React, { Fragment, useEffect, useState } from 'react';
import Video from '../components/Video';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout/Layout.js';
import Image from 'next/image';
import analogPict from '../public/img/analog.png';
import style from '../styles/LandingPage.module.css';
import styles from './Banner.module.css'
import { Carousel } from 'react-bootstrap'
import ImageOne from "../public/assets/banner1.jpg"
import ImageTwo from "../public/assets/banner2.jpg"
import ImageThree from "../public/assets/banner3.jpg"
import Link from 'next/link.js';

 
function LandingPage() {
  const [game, setGame] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((result) => {
        setGame(result.data);
      });
  }, [apiUrl]); 

  return (
    <Fragment>
      <Layout>
        <div id={style['content-container']}>
          <section id={style['judul']}>
            <div
              className="container-fluid d-flex flex-column justify-content-center"
              style={{ height: '100vh', backgroundColor: '#f6f8ffe3' }}
            >
              <div className="row d-flex flex-row justify-content-center align-items-center">
              
                <div className="col-11 col-sm-5 col-lg-4 d-flex flex-column justify-content-center">
                  <Image
                    className={style['img-btn-console']}
                    src={analogPict}
                    alt=""
                  ></Image>
                </div>
                <div
                  className={`col-11 col-sm-7 col-lg-6 mt-5 mt-lg-0 judul-container d-flex flex-column justify-content-start ${style['judul-container']}`}
                >
                  <Video />
                  <p
                    className="text-uppercase"
                    style={{ color: 'rgb(0, 0, 0)' }}
                  >
                    Cannot wait to play?
                  </p>
                  <p className=""
                    style={{
                    fontSize: '1.5rem',
                    display: 'wrap'}}>
                    Find Your Favorite Games Here!
                  </p>
                  <Link
                    href="/game"
                    className={`btn mt-2 ${style['btn']}`}
                    style={{
                      color: 'white',
                      backgroundColor: '#0a1f30',
                      width: '200px',
                    }}
                  >
                    PLAY NOW
                  </Link>
                </div>
              </div>
            </div>
          </section>

        <section className={styles.banner_trip}>
        <Carousel fade>     
            <Carousel.Item>
                <div className={styles.image_container}>
                    <Image
                    src={ImageOne}
                    alt="First slide"
                    layout='fill'
                    />
                </div>               
                <Carousel.Caption>
                    <h3>PLAY TO RELEASE THE STRESS</h3>
                    <p>Get Ready to Play</p>
                </Carousel.Caption>
            </Carousel.Item>
  
            <Carousel.Item>
            <div className={styles.image_container}>
                    <Image
                    src={ImageTwo}
                    alt="First slide"
                    layout='fill'
                    />
                </div>
                <Carousel.Caption>
                    <h3>MORE THAN JUST A GAME</h3>
                    <p>Choose Your Favourite Game</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
            <div className={styles.image_container}>
                    <Image
                    src={ImageThree}
                    alt="First slide"
                    layout='fill'
                    />
                </div>
                <Carousel.Caption>
                    <h3>PLAY TO GAIN NEW EXPERIENCE</h3>
                    <p>Enjoy The Game</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>

        </div>
      </Layout>
    </Fragment>
  );
}

export default LandingPage;
