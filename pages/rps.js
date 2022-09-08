import Image from 'next/image';
import Script from 'next/script';
import styles from '../styles/RPS.module.css';
import Link from 'next/link';
import React from 'react';


export default function RPS() {
  return (
    <div>
      <div className={styles.background}>
        <div className="container-fluid mt-3">
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>
          <div className="row align-items-center">
            <div className="col-1 fs-1 fw-bolder text-end custom-back-button">
              <Link style={{ color: '#724C21' }} href="/game">
                &lt;
              </Link>
            </div>
            <div className="col-1 text-center">
              <img
                src="/logo.png"
                width={60}
                height={60}
                className="custom-logo"
              />
            </div>

            <div
              className="col fs-2 fw-bold custom-game-title"
              style={{ color: '#F9B23D' }}
            >
              ROCK PAPER SCISSOR
            </div>
          </div>
          <div className="container text-center custom-game-section">
            <div className="col-25 fs-4 fw-bold custom-round">
              Round <span id="round">1</span>
            </div>
          </div>
        </div>
        <div className="container text-center custom-game-section">
          <div className="row my-3 justify-content-center align-items-center">
            <div className="col-2 fs-4 fw-bold custom-game-player-name">
              PLAYER1
              <p>
                Score: <span id="user-score">0</span>
              </p>
            </div>
            <div className="col-2"></div>
            <div className="col-2 fs-4 fw-bold custom-game-player-name">
              COM
              <p>
                Score: <span id="computer-score">0</span>
              </p>
            </div>
          </div>
          <div className="row my-5 justify-content-center align-items-center">
            <div
              className="col-2 custom-choice-background align-items-center"
              id="player-rock"
            >
              <Image
                className="custom-choice"
                src="/batu.png"
                width={120}
                height={85}
              />
            </div>
            <div className="col-2"></div>
            <div className="col-2 custom-choice-background" id="com-rock">
              <Image
                className="custom-choice"
                src="/batu.png"
                width={120}
                height={85}
              />
            </div>
          </div>
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-2 custom-choice-background" id="player-paper">
              <Image
                className="custom-choice"
                src="/kertas.png"
                width={95}
                height={100}
              />
            </div>
            <div
              className="col-2 mx-2 fw-bold custom-vs-background custom-vs-text"
              id="vs"
              style={{ color: '#BD0000', fontSize: '4rem' }}
            >
              VS
            </div>
            <div className="col-2 custom-choice-background" id="com-paper">
              <Image
                className="custom-choice"
                src="/kertas.png"
                width={95}
                height={100}
              />
            </div>
          </div>
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-2 custom-choice-background" id="player-scissor">
              <Image
                className="custom-choice"
                src="/gunting.png"
                width={100}
                height={105}
              />
            </div>
            <div className="col-2"></div>
            <div className="col-2 custom-choice-background" id="com-scissor">
              <Image
                className="custom-choice"
                src="/gunting.png"
                width={100}
                height={105}
              />
            </div>
          </div>
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-2"></div>
            <div className="col-2" id="reset">
              <Image
                className="custom-choice"
                src="/refresh.png"
                width={100}
                height={90}
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>

      <Script type="text/javascript" src="/script.js" />
    </div>
  );
}
