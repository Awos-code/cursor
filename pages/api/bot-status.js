import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  let client;
  try {
    client = await MongoClient.connect(uri);
    const db = client.db();
    const stats = await db.collection("stats").findOne({ type: "bot" });

    if (!stats) {
      return res.status(404).json({ error: "Статистика не найдена" });
    }

    res.status(200).json({
      status: stats.status,
      guilds: stats.guilds,
      users: stats.users,
      updatedAt: stats.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error: "Ошибка подключения к базе данных" });
  } finally {
    if (client) client.close();
  }
} 