<script>
  import { getUser, signIn, signUp, logout } from "$lib/script.js";
  let email = $state("");
  let password = $state("");
  let user = $state(null);

  const doSignIn = async () => {
    await signIn(email, password);
  };

  const doSignUp = async () => {
    await signUp(email, password);
  };

  const doCheckUser = async () => {
    user = await getUser();
    user? console.log(user.email): console.log("No user");
  };

  const doLogout = async () => {
    await logout();
    user = null;
  };

  doCheckUser();
</script>

{#if user}
  <h1>Welcome {user.email}</h1>
  <button onclick={doLogout}>Log Out</button>
{:else}
  <h1>Sign In</h1>
  <input type="email" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button onclick={doSignUp}>Sign Up</button>
  <button onclick={doSignIn}>Sign In</button>
{/if}
