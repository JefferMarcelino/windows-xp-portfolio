export const StartButton = () => {
  return (
    <div className="h-full flex items-center">
      <button className="cursor-pointer pl-2 pr-4 bg-xp-start-button-bg flex items-center gap-2 text-white rounded-br-xl rounded-tr-xl">
        <img src="/logos/logo.png" alt="Start Button" className="w-10" />
        <span className="text-xl">Start</span>
      </button>
    </div>
  )
}