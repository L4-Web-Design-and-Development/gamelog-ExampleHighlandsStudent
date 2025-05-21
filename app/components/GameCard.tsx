import { Form, Link } from "@remix-run/react";

interface GameCardProps {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
  imageUrl: string;
}
export default function GameCard({
  id,
  title,
  releaseDate,
  genre,
  imageUrl,
}: GameCardProps) {
  const formattedDate = releaseDate.substring(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <Link
        to={`/edit-game/${id}`}
        className="relative h-72 overflow-hidden group rounded-xl"
      >
        <img
          src={imageUrl}
          alt={`${title} cover`}
          className="absolute inset-0 w-full h-full object-cover rounded-xl transition duration-300 group-hover:brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <span className="border-2 border-cyan-300 text-cyan-300 px-8 py-3 text-2xl rounded-md bg-gray-900/50 hover:bg-cyan-50/30 transition">
            Edit
          </span>
        </div>
      </Link>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between w-2/3 pr-4">
          <h3 className="font-bold text-2xl text-slate-300">{title}</h3>
          <div>
            <p className="text-cyan-300 uppercase text-sm font-semibold mb-1">
              {genre}
            </p>
            <p className="text-slate-200/60 text-sm font-semibold">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 w-1/3">
          <button className="border-2 border-cyan-300 text-cyan-300 p-2 rounded-md transition hover:bg-cyan-50/10">
            View
          </button>
          <Form action={`/delete-game/${id}`} method="post">
            <button
              type="submit"
              className="border-2 border-red-300 text-red-300 p-2 rounded-md transition hover:bg-red-50/10 w-full"
            >
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
