import { PrismaClient } from "@prisma/client";

const { movie: Movie } = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const newMovie = await Movie.create({ data });

  res.json(newMovie);
};
