import { ReactNode } from "react"
import { useWindows } from "@/shared/hooks/windows/useWindows"
import { Window } from "./Window";

const folderIcon = "/icons/mydocs.dll_14_100-8.png";

export const Folder = ({ id, title, children }: { id: string, title: string, children: ReactNode }) => {
  const { openWindow } = useWindows();

  return (
    <div>
      <button
        className="flex flex-col items-center cursor-pointer group"
        onDoubleClick={() => {
          openWindow({
            id,
            title,
            icon: folderIcon,
          })
        }}
      >
        <img src={folderIcon} alt="Folder Icon" className="w-16 h-16" />
        <span className="text-white text-sm border border-transparent border-dashed p-[2px] group-focus:border-white group-focus:bg-blue-600">{title}</span>
      </button>

      <Window 
        id={id}
        title={title}
        icon={folderIcon}
      >
        <div className="flex gap-2">{ children }</div>
      </Window>
    </div>
  )
}