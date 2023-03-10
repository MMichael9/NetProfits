import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { IconContext } from "react-icons";
import {FaTwitter, FaDiscord, FaGmail} from 'react-icons/fa';
import {SiGmail} from "react-icons/si";
import Link from "next/link";

export default function Home() {
  const { currentUser, logOut, logIn } = useAuth();

  return (
    <>
      <Head>
        <title>Fantasy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Net Profits On Flow</h1>
        <button className={styles.button} onClick={currentUser.addr ? logOut : logIn}>
          {currentUser.addr ? 'Log Out' : 'Login'}
        </button>
        <p className={styles.subtitle}>{currentUser.addr ? `Logged in as ${currentUser.addr}` : 'Not logged in'}</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Rules</h2>
            <p> - Players compete in a weekly pool against each other with the highest total points winning.</p>
            <p> - Create a team of 7 (5 starters, 2 bench) based on their current top shot collection. </p>
            <p> -	Join a league and accept fee payment of $25 USD.</p>
            <p> - Users will be able allowed to make the two substitutions as the week goes on to maximize team performance.</p>
            <p> - The prize pool and a commemorative NFT will be awarded to the winner by end of the NBA week.</p>
            <p>	-	Minimum required NBA Top Shot Moment NFT's Required to play are 7.</p>
          </div>
          <div className={styles.card}>
            <h2><a href="/viewleague">Leaderboards</a></h2>
          </div>
        </div>
        <footer className={styles.footer}>
          <p>Resources</p>
          <IconContext.Provider value={{ color: "#5865F2", size: "2em"}}>
            <Link href="https://discord.gg/VGNunYvwQR">
              <FaDiscord />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#00acee", size: "2em"}}>
            <Link href="https://twitter.com/Netprofitsonflo">
              <FaTwitter />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#c71610", size: "2em"}}>
            <Link href="mailto:netprofitsonflow@gmail.com">
              <SiGmail />
            </Link>
          </IconContext.Provider>
        </footer>
      </div>
    </>
  );
}
