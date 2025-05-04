import { useWindows } from "@/shared/hooks/windows/useWindows"
import { Window } from "./Window"
import { marked } from 'marked'

const notepadIcon = "/icons/wordpad.exe_14_128-0.png"

interface ArticleProps {
  id: string
  title: string
  content: string
}

export const Article = ({ id, title, content }: ArticleProps) => {
  const { openWindow } = useWindows();
  
  return (
    <div>
      <button
        className="flex flex-col items-center cursor-pointer group w-20 text-center"
        onDoubleClick={() => {
          openWindow({
            id,
            title,
            icon: notepadIcon,
          })
        }}
      >
        <img src={notepadIcon} alt="Notepad Icon" className="w-16 h-16" />
        <span className="text-black text-sm border border-transparent border-dashed p-[2px] group-focus:border-white group-focus:bg-blue-600 group-focus:text-white">{title}</span>
      </button>

      <Window
        id={id}
        title={title}
        icon={notepadIcon}
      >
        <h2 className="text-lg font-bold mb-1">{ title }</h2>
        <div className="article" dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Window>
    </div>
  )
}