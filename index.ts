import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   //Create a new user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe",
  //       email: "john@gmail.com",
  //     },
  //   });
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  const article = await prisma.article.create({
    data: {
      title: "Johns First Article",
      body: "This is Johns first article",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
