import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const games = [
    {
      title: "Mario Kart 9",
      description: "An open-world adventure game set in the kingdom of Mario.",
      price: 79.99,
      rating: 4.9,
      releaseDate: new Date("2017-03-03"),
      imageUrl:
        "https://res.cloudinary.com/dsaau6u7e/image/upload/v1746700327/mario-kart-9_tfablo.webp",
    },
    {
      title: "Diablo 4",
      description:
        "An action RPG set in a fantasy world full of monsters and magic.",
      price: 39.99,
      rating: 4.8,
      releaseDate: new Date("2015-05-19"),
      imageUrl:
        "https://res.cloudinary.com/dsaau6u7e/image/upload/v1746700908/diablo-4_bkfqct.webp",
    },
    {
      title: "Red Dead Redemption 2",
      description: "An open-world western adventure game.",
      price: 59.99,
      rating: 4.7,
      releaseDate: new Date("2018-10-26"),
      imageUrl:
        "https://res.cloudinary.com/dsaau6u7e/image/upload/v1746700181/cld-sample-5.jpg",
    },
    {
      title: "God of War",
      description: "An action-adventure game based on Norse mythology.",
      price: 49.99,
      rating: 4.9,
      releaseDate: new Date("2018-04-20"),
      imageUrl:
        "https://res.cloudinary.com/dsaau6u7e/image/upload/v1746700181/cld-sample-4.jpg",
    },
    {
      title: "Minecraft",
      description:
        "A sandbox game where players can build and explore their own worlds.",
      price: 26.95,
      rating: 4.8,
      releaseDate: new Date("2011-11-18"),
      imageUrl:
        "https://res.cloudinary.com/dsaau6u7e/image/upload/v1746700181/cld-sample-2.jpg",
    },
    {
      title: "Fortnite",
      description:
        "A battle royale game where players fight to be the last one standing.",
      price: 0.0,
      rating: 4.5,
      releaseDate: new Date("2017-07-25"),
      imageUrl:
        "https://res.cloudinary.com/dsaau6u7e/image/upload/v1746700181/cld-sample-3.jpg",
    },
    {
      title: "Cyberpunk 2077",
      description: "An open-world RPG set in a dystopian future.",
      price: 59.99,
      rating: 4.0,
      releaseDate: new Date("2020-12-10"),
    },
    {
      title: "Among Us",
      description:
        "A multiplayer game where players work together to complete tasks on a spaceship.",
      price: 4.99,
      rating: 4.4,
      releaseDate: new Date("2018-06-15"),
    },
    {
      title: "Animal Crossing: New Horizons",
      description:
        "A life simulation game where players can build and manage their own island.",
      price: 59.99,
      rating: 4.9,
      releaseDate: new Date("2020-03-20"),
    },
    {
      title: "Hades",
      description:
        "A rogue-like dungeon crawler where players fight their way out of the Underworld.",
      price: 24.99,
      rating: 4.9,
      releaseDate: new Date("2020-09-17"),
    },
  ];

  for (const game of games) {
    await prisma.game.create({ data: game });
  }

  console.log("👾 Games created successfully");

  const categories = [
    {
      title: "Action",
      description:
        "Games that require quick reflexes and hand-eye coordination.",
    },
    {
      title: "Adventure",
      description: "Games that involve exploration and puzzle-solving.",
    },
    {
      title: "RPG",
      description: "Games that focus on character development and story.",
    },
    {
      title: "Simulation",
      description: "Games that simulate real-world activities or systems.",
    },
    {
      title: "Strategy",
      description: "Games that require strategic thinking and planning.",
    },
    {
      title: "Puzzle",
      description:
        "Games that challenge players with logic and problem-solving.",
    },
    {
      title: "Sports",
      description: "Games that simulate sports or physical activities.",
    },
    {
      title: "Multiplayer",
      description: "Games that can be played with multiple players.",
    },
    {
      title: "Indie",
      description: "Games developed by independent studios or individuals.",
    },
    {
      title: "Horror",
      description: "Games that aim to scare or unsettle players.",
    },
  ];

  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  console.log("🎮 Categories created successfully");

  console.log("🔗 Linking each game to a category");

  // Fetch games from the database
  const dbGames = await prisma.game.findMany();

  // Fetch categories from the database
  const dbCategories = await prisma.category.findMany();

  // Link each game to a category
  for (const game of dbGames) {
    const category =
      dbCategories[Math.floor(Math.random() * dbCategories.length)];
    await prisma.game.update({
      where: { id: game.id },
      data: { categoryId: category.id },
    });
  }

  console.log("🔗 Games and categories linked successfully");

  console.log("Seed data created successfully");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
