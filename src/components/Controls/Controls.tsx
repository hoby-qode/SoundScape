import Audio from '@/src/components/Audio/Audio'
import { useContext, useState } from 'react'
import { AudioContext } from '@/src/context/myContext'
import { Song } from '@/src/components/Audio/Song'
import useRandomIntFromInterval from '@/src/hooks/useRadomIntFromInterval'
import Range from '@/src/components/Range/Range'
const Controls = (props: {
  isPlaying: boolean
  totalSong: number
  setIsPlaying: Function
  setIdSongPlaying: Function
}) => {
  const Song: Song = useContext(AudioContext)
  const [timeSongInfos, setTimeSongInfos] = useState<{
    currentTime: number
    duration: number
  }>({
    currentTime: 0,
    duration: 0,
  })
  const TogglePause = () => {
    if (props.isPlaying) {
      props.setIsPlaying(false)
    } else {
      props.setIsPlaying(true)
    }
  }
  const HandlePrevOrNext = (args: string) => {
    let totalSong = props.totalSong - 1
    if (args === 'prev') {
      if (Song.id == 0) {
        props.setIdSongPlaying(totalSong)
      } else {
        props.setIdSongPlaying(Song.id + 1)
      }
    }
    if (args === 'next') {
      if (Song.id == totalSong) {
        props.setIdSongPlaying(0)
      } else {
        props.setIdSongPlaying(Song.id + 1)
      }
    }
  }
  const HandleRandom = () => {
    props.setIdSongPlaying(useRandomIntFromInterval(0, props.totalSong - 1))
  }
  return (
    <div>
      <div>
        <button onClick={() => HandleRandom()}>Lecteur aléatoire</button>
        <button onClick={() => HandlePrevOrNext('prev')}>Prev</button>
        <button onClick={() => TogglePause()}>Pause</button>
        <button onClick={() => HandlePrevOrNext('next')}>Next</button>
        <Audio
          isPlaying={props.isPlaying}
          timeSongInfos={timeSongInfos}
          setTimeSongInfos={setTimeSongInfos}
        />
      </div>
      <Range
        timeSongInfos={timeSongInfos}
        setTimeSongInfos={setTimeSongInfos}
      />
    </div>
  )
}
export default Controls
