<script>
  import { supabase } from "$lib/supabase";
  let user = null;

  async function getUser() {
    const { data, error } = await supabase.auth.getUser();
    if (!error) user = data.user;
  }

  getUser();
</script>

{#if user}
  <h1>Welcome, {user.email}!</h1>
  <button on:click={() => supabase.auth.signOut()}>Logout</button>
{:else}
  <p>Redirecting...</p>
{/if}
