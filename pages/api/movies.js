import { PrismaClient } from "@prisma/client";

const { movie: Movie } = new PrismaClient();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      const data = JSON.parse(req.body);

      const newMovie = await Movie.create({ data });

      return res.json(newMovie);

    case "DELETE":
      const { id } = req.query;

      await Movie.delete({ where: { id } });

      return res.json({ success: true });

    default:
      break;
  }
};
