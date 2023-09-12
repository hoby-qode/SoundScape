import { useRef, useContext } from 'react'
import { AudioContext } from '@/src/context/myContext'
import useFormatedTime from '@/src/hooks/useFormatedTime'
const Range = (props: {
  timeSongInfos: { currentTime: number; duration: number }
  setTimeSongInfos: Function
}) => {
  const range = useRef<HTMLInputElement>(null)
  const getSongInfos = (args: string): string => {
    return args === 'currentTime'
      ? useFormatedTime(props.timeSongInfos.currentTime)
      : useFormatedTime(props.timeSongInfos.duration)
  }
  return (
    <div>
      <p>{getSongInfos('currentTime')}</p>
      <input type="range" ref={range} min={0} max={1000} />
      <p>{getSongInfos('duration')}</p>
    </div>
  )
}
export default Range
