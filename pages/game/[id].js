/*eslint-disable*/

import React, { Fragment, useState, useEffect, Component } from 'react';
import { useRouter, withRouter, NextRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import Video from '../../components/Video';

import prsPict from '../../public/img/RockPaperScissor.jpg';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

import style from '../../styles/DetailGame.module.css';

function renderTableData(leaderboard) {
  return leaderboard.map((e, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{e.detail_user.username}</td>
        <td>{e.detail_user.first_name}</td>
        <td>{e.score}</td>
      </tr>
    );
  });
}
function detail() {
  let [leaderboard, setLeaderboard] = useState([]);
  let [game, setGame] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const id = router.query.id;
    console.log(id);

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(apiUrl);

    fetch(`${apiUrl}/game/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setGame(result.data);
        console.log(game);
        fetch(`${apiUrl}/game/${id}/leaderboard`)
          .then((response) => response.json())
          .then((result) => {
            setLeaderboard(result.data);
            console.log(leaderboard);
          });
      });
  }, [router.isReady]);
  return (
    <Fragment>
      <Layout title={`Game | ${game.name}`}>
        <div id={style['content-container']}>
          <section id={style['judul']}>
            <div className="container">
              <div
                className="row d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
              >
                <div className="col-6">
                  <Image
                    src={prsPict}
                    className="img d-block w-100"
                    alt="..."
                    layout="responsive"
                  ></Image>
                </div>
                <div className="col-11 d-flex flex-column justify-content-center">
                  <h1
                    className="text-center text-uppercase mt-5"
                    style={{ color: 'black' }}
                  >
                    {' '}
                    Playing games is not a crime, lets play! <br></br>
                    <p style={{ fontSize: '70px' }}>{game.name}</p>{''}
                  </h1>

                  <a
                    href={game.game_url}
                    className="btn  mt-3"
                    style={{
                      color: 'white',
                      backgroundColor: '#0a1f30',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    MAIN SEKARANG
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Video */}
          <div className={style.white} >
              <h1 className="animate__animated animate__bounce">VIDEO</h1>
              <p>KELOMPOK 3</p>
              <div>
                <Video />
              </div>
            </div>
          {/* Video */}

          <section id={style['list-game']}>
            <div className="container">
              <div
                className="row d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
              >
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1
                    className="text-center text-uppercase"
                    style={{ color: 'black' }}
                  >
                    LEADERBOARD
                  </h1>
                </div>
                <div className="col-6 mt-5">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Rangking</th>
                        <th scope="col">Username</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Score</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableData(leaderboard)}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={`${style['sticky']} container-flluid`}>
          <div className={` row d-flex flex-column align-items-end`}>
            <FacebookShareButton
              style={{ width: '32px', marginRight: '20px' }}
              url={''}
              quote={
                'next-share is a social share buttons for your next React apps.'
              }
              hashtag={'#nextshare'}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              style={{ width: '32px', marginRight: '20px' }}
              url={''}
              title={
                'next-share is a social share buttons for your next React apps.'
              }
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              style={{ width: '32px', marginRight: '20px' }}
              url={''}
              title={
                'next-share is a social share buttons for your next React apps.'
              }
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default detail;
