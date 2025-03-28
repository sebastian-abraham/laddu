<script>
    import { logout } from "$lib/script.js";

    const doLogout = async () => {
    await logout();
  };
</script>

<h1>Hi</h1>
<button onclick={doLogout}>logout</button>
