import { DesktopBottomBar } from "@/widgets/DesktopBottomBar"
import { Folder } from "@/widgets/Folder"

export const DesktopPage = () => {
  return (
    <div className="h-screen w-screen bg-[url('/images/xp-landscape.jpeg')] bg-no-repeat bg-cover">
      <div className="p-4 w-full h-full flex flex-col items-start">
        <Folder title="My Articles" onClick={() => alert('My Documents clicked')} />
      </div>

      <DesktopBottomBar />
    </div>
  )
}