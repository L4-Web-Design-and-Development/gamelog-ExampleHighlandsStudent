import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import GameCard from "~/components/GameCard";
import gamelogLogo from "~/assets/svg/gamelog-logo.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      releaseDate: true,
      image: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  });

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  console.log({ games });

  return (
    <div className="container mx-auto px-8 grid grid-cols-3 gap-8">
      {games.map((game) => (
        <div key={game.id}>
          <GameCard
            key={game.id}
            title={game.title}
            releaseDate={game.releaseDate}
            image={game.image || gamelogLogo}
            genre={game.category?.title || "Unknown"}
          />
        </div>
      ))}
    </div>
  );
}
