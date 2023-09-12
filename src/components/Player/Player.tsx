import Controls from '@/src/components/Controls/Controls'
import Volume from '@/src/components/Volume/Volume'
import styles from './Player.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import { AudioContext } from '@/src/context/myContext'
import { Song } from '@/src/components/Audio/Song'

const Player = (props: {
  isPlaying: boolean
  setIsPlaying: Function
  setIdSongPlaying: Function
  totalSong: number
}) => {
  const Song: Song = useContext(AudioContext)

  return (
    <>
      <section className={styles.player}>
        <div className={styles.player_infos}>
          <div className={styles.player_infos_picture}>
            <Image
              src={Song.cover}
              alt={Song.title}
              width={150}
              height={150}
              priority
            />
          </div>
          <div className={styles.player_infos_title}>
            <h1>
              {Song.title} - {Song.id}
            </h1>
            <div className={styles.player_infos_artiste}>
              <strong>{Song.artist}</strong>
            </div>
          </div>
        </div>
        <Controls
          isPlaying={props.isPlaying}
          setIsPlaying={props.setIsPlaying}
          setIdSongPlaying={props.setIdSongPlaying}
          totalSong={props.totalSong}
        />
        <Volume />
      </section>
    </>
  )
}
export default Player
