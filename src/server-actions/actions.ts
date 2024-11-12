"use server";

import { createClient } from "@/utils/supabase/server";

function handleError(error) {
  if (error) {
    console.error(error);
    throw error;
  }
}
export async function getAllMovies(search = "") {
  const supabase = await createClient();

  const { data, error } = await supabase.from("Movie").select("*").like("title", `%${search}%`);

  handleError(error);

  return data;
}
