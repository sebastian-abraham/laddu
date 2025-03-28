import { goto } from "$app/navigation";
import { supabase } from "$lib/supabase";

async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error.message);
    return null;
  }
  console.log("User signed up:", data);
  goto("/test/dashboard");
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    return null;
  }
  console.log("User signed in:", data);
  goto("/test/dashboard");
}

async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error.message);
    return null;
  }
  return data.user;
}

async function logout() {
  await supabase.auth.si  gnOut();
}

export { signUp, signIn, getUser, logout };
