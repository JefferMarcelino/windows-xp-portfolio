import { ReactNode } from "react"
import { Link } from "react-router"

const Bar = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="p-4 flex gap-3 flex-col md:flex-row justify-between items-center h-full">
      { children }
    </div>
  )
}

export const WelcomePage = () => {
  return (
    <div className="w-full h-screen font-tahoma text-white bg-xp-blue-bg">
      <div className="h-full grid grid-cols-1 [grid-template-rows:0.7fr_4fr_0.7fr]">
        <Bar />
        
        <div 
          className="bg-[var(--color-xp-blue-light)] grid grid-cols-1 md:[grid-template-columns:3fr_0.2fr_3fr] justify-center items-center md:gap-2 p-4"
        >
          <div className="flex flex-col items-center md:items-end">
            <img src="/logos/welcome-xp-logo.png" alt="Windows XP" className="mb-4 w-60 md:w-72" />
            <p className="text-white text-xl md:text-2xl tracking-widest">To begin, click on my user name</p>
          </div>

          <div className="hidden md:block h-full w-[1px] mx-auto bg-gradient-to-b from-transparent via-white to-transparent"></div>

          <div>
            <Link 
              className="md:mt-6 flex flex-col md:flex-row items-center md:items-start gap-4 bg-transparent"
              to='/desktop'
            >
              <div className="rounded-md border-3 border-gray-300 overflow-hidden">
                <img src="/icons/chess-avatar.png" alt="User" className="w-32 md:w-20 h-32 md:h-20" />
              </div>

              <span className="text-white text-xl">Jeffer Marcelino</span>
            </Link>
          </div>
        </div>

        <Bar>
          <button className="flex items-center gap-2 text-white cursor-pointer">
            <img src="/icons/shell32.dll_14_329-0.png" alt="Shutdown" className="w-14 h-14" />
            <span>Turn off computer</span>
          </button>

          <p className="text-xs text-white text-right tracking-widest font-light">
            After you log on, you can add or change accounts.<br />
            Just go to Control Panel and click User Accounts.
          </p>
        </Bar>
      </div>
    </div>
  )
}