import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.category.createMany({
    data: [
      { name: "Fantasy" },
      { name: "Science Fiction" },
      { name: "Utopia" },
      { name: "Action" },
      { name: "Adventure" },
      { name: "Mystery" },
      { name: "Horror" },
      { name: "Thriller" },
      { name: "Historical Fiction" },
      { name: "Romance" },
      { name: "Young Adult" },
      { name: "Autobiography" },
      { name: "Biography" },
      { name: "History" },
      { name: "True Crime" },
      { name: "Humor" },
      { name: "Dystopia" },
      { name: "Post Apocalyptic" },
      { name: "Fiction" },
      { name: "Apocalyptic" },
      { name: "Mystery Thriller" },
    ],
  });
}

seed().then(() => prisma.$disconnect());
