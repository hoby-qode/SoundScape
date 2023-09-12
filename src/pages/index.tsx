import React from 'react'
import Head from 'next/head'
import Player from '@/src/components/Player/Player'
import type { NextPage } from 'next'
import Songs from '@/src/songs'
import { useState } from 'react'
import { AudioContext } from '@/src/context/myContext'
type Song = {
  id: number
  title: string
  artist: string
  genre: string
  src: string
  cover: string
}
export const getStaticProps = async () => {
  const allSongs: Song[] = Songs
  return {
    props: {
      Songs: allSongs,
    },
    revalidate: 3600,
  }
}
const Home: NextPage<{ Songs: Song[] }> = ({ Songs }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [idSongPlaying, setIdSongPlaying] = useState<number>(1)
  return (
    <>
      <Head>
        <title>Clone spotify</title>
        <meta name="description" content="Clone Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AudioContext.Provider value={Songs[idSongPlaying]}>
          <Player
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setIdSongPlaying={setIdSongPlaying}
            totalSong={Songs.length}
          />
        </AudioContext.Provider>
      </main>
    </>
  )
}

export default Home
