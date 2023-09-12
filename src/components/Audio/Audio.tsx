import styles from './Audio.module.css'
import { Song } from '@/src/components/Audio/Song'
import React, { useContext, useRef, useEffect, SyntheticEvent } from 'react'
import { AudioContext } from '@/src/context/myContext'

const Audio = (props: {
  isPlaying: boolean
  timeSongInfos: { currentTime: number; duration: number }
  setTimeSongInfos: Function
}) => {
  const Song: Song = useContext(AudioContext)
  const AudioRef = useRef<HTMLAudioElement>(null)
  const handleTimeupdate = (e: SyntheticEvent<EventTarget>): void => {
    const current = (e.target as HTMLMediaElement).currentTime
    const duration = (e.target as HTMLMediaElement).duration
    props.setTimeSongInfos({
      currentTime: current,
      duration: duration,
    })
  }
  useEffect(() => {
    if (AudioRef.current) {
      if (props.isPlaying) {
        AudioRef.current.play()
      } else {
        AudioRef.current.pause()
      }
    }
  })
  return (
    <>
      <audio
        src={Song.src}
        controls
        ref={AudioRef}
        onTimeUpdate={handleTimeupdate}
        onLoadedMetadata={handleTimeupdate}
      />
    </>
  )
}

export default Audio
