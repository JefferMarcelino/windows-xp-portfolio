import { useEffect, useState } from "react"
import { StartButton } from "./StartButton"
import { getFormattedTime } from "@/shared/utils/time"

export const DesktopBottomBar = () => {
  const [time, setTime] = useState(getFormattedTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-xp-bottom-bar-bg w-full absolute bottom-0 right-0 left-0 flex">
      <div className="w-full flex-1">
        <StartButton />
      </div>

      <div className="bg-xp-bottom-bar-bg-light py-2 px-4 text-white">
        {time}
      </div>
    </div>
  )
}