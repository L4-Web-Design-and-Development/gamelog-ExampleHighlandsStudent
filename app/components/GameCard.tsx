export default function GameCard() {
  return (
    <div className="py-16 flex flex-col gap-4">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://picsum.photos/400/300"
          alt="Game Cover"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between w-2/3">
          <h3 className="font-bold text-2xl text-slate-300">Game Title</h3>
          <p className="text-cyan-300 uppercase text-sm font-semibold">Genre</p>
          <p className="text-slate-200/60 text-sm font-semibold">Start date</p>
        </div>
        <div className="flex flex-col gap-7 w-1/3">
          <button className="border-2 border-cyan-300 text-cyan-300 p-2 rounded-md">
            Edit
          </button>
          <button className="border-2 border-red-300 text-red-300 p-2 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
