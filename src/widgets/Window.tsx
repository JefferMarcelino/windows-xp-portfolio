import { useWindows } from "@/shared/hooks/windows/useWindows";

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon: string;
}

export const Window = ({ id, title, icon, children }: WindowProps) => {
    const { closeWindow, isWindowOpen } = useWindows();
    const isOpen = isWindowOpen(id);
  
  return (
    <div
      className={`${ isOpen ? 'block' : 'hidden' } absolute w-fit min-w-sm max-w-2xl right-10 bg-white border border-gray-600 shadow-lg`}
    >
      <div 
        className="flex items-center justify-between bg-blue-600 text-white px-2 py-1"
      >
        <div className="flex items-center gap-2">
          <img src={icon} alt="window icon" className="w-4 h-4" />
          <span className="text-sm font-bold">{title}</span>
        </div>

        <button
          onClick={() => closeWindow(id)}
          className="text-white bg-red-600 w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-700 cursor-pointer"
        >
          ✕
        </button>
      </div>

      <div className="p-3 text-black overflow-auto h-full max-h-[50vh]">
        { children }
      </div>
    </div>
  )
}