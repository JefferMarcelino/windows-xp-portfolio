export const Folder = ({ title, onClick }: { title: string, onClick: React.MouseEventHandler }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <img src="/icons/mydocs.dll_14_100-8.png" alt="Folder Icon" className="w-16 h-16" />
      <span className="text-white text-sm">{title}</span>
    </div>
  )
}