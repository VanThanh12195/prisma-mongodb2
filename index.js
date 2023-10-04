const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

//   const newMessage = await prisma.message.create({
//     data: {
//       body: "This is a message seen by many users!", // Replace with the message content
//       seenIds: ["651ceaaef5339e3f63ff961e","651cede59052283ed8830a62"],
//       senderId:"651cede59052283ed8830a61"
//     },
//   });


const userWithSeenMessages = await prisma.user.findUnique({
    where: { id: "651cede59052283ed8830a62" },
    include: {
      seenMessages: true,
    },
  });




  console.dir(userWithSeenMessages, { depth: null })

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
