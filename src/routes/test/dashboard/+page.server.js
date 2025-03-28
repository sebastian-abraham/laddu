import { redirect } from "@sveltejs/kit";
import { getUser } from "$lib/script.js";

export async function load() {
  const user = await getUser();
  console.log(user);
  if (!user) {
    throw redirect(302, "/test/login"); // Redirect if not logged in
  }

  return {
    user,
  };
}
