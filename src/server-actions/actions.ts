"use server";

import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";
// import { Database } from "../../types_db";

// export type TodoRow = Database["public"]["Tables"]["Movie"]["Row"];

function handleError(error) {
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllMovies(search = "") {
  const supabase = await createClient();

  const { data, error } = await supabase.from("Movie").select("*").ilike("title", `%${search}%`);

  if (error) {
    handleError(error);
  }

  return data;
}

export async function getMovie(id) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Movie").select("*").eq("id", id).maybeSingle();

  if (error) {
    handleError(error);
  }

  return data;
}

const prisma = new PrismaClient();

export async function prismaGetAllMovies(search = "") {
  try {
    const movies = await prisma.movie.findMany({
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
    });
    return movies;
  } catch (error) {
    handleError(error);
  }
}

export async function prismaGetMovie(id: string) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return movie;
  } catch (error) {
    handleError(error);
  }
}
