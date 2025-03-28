import { redirect } from "@sveltejs/kit";
import { getUser } from "$lib/script.js";

export async function load() {
  const user = await getUser();
  if (user) {
    throw redirect(302, "/dashboard"); // Redirect if already logged in
  }
}
