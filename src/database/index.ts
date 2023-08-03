import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function initFeedrumClient() {
  const feedrumClient = await db.client.findFirst({
    where: {
      name: "feedrum.com"
    }
  });

  if (feedrumClient) return console.log(feedrumClient);

  const newClient = await db.client.create({
    data: {
      name: "feedrum.com",
      url: "https://feedrum.com"
    }
  });

  console.log(newClient);
}
// PLEASE COMMENT THIS LINE AFTER FIRST APP RUN
// initFeedrumClient();

export default db;
