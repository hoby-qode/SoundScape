const useFormatedTime = (time: number): string => {
  return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
}
export default useFormatedTime
