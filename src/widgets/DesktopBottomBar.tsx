import { useEffect, useState } from "react"
import { StartButton } from "./StartButton"
import { getFormattedTime } from "@/shared/utils/time"
import { useWindows } from "@/shared/hooks/windows/useWindows";

export const DesktopBottomBar = () => {
  const { openedWindows } = useWindows();

  const [time, setTime] = useState(getFormattedTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-xp-bottom-bar-bg w-full absolute bottom-0 right-0 left-0 flex">
      <div className="w-full flex-1 flex gap-5">
        <StartButton />

        <div className="flex-1 flex items-center gap-1">
          {
            openedWindows.map((window) => (
              <div key={window.id} className="flex items-center bg-xp-folder-open-button-bg h-full pl-2 pr-4 rounded-lg cursor-pointer">
                <img src={window.icon} alt={window.title} className="w-6 h-6 mr-2" />
                <span className="text-white text-sm tracking-wider">{window.title}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="bg-xp-bottom-bar-bg-light py-2 px-4 text-white">
        {time}
      </div>
    </div>
  )
}