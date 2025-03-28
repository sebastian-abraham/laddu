<script>
  import ErrorAlert from "$lib/components/ErrorAlert.svelte";
  let errorMessage = "";

  function handleError(error) {
  errorMessage = error.message;
  setTimeout(() => {
    errorMessage = ""; // Clear the error after the duration
  }, 1000);
}

handleError({ message: "Something went wrong!" });
</script>


{#if errorMessage}
    <ErrorAlert message={errorMessage} duration={1000} />
{/if}

<form method="POST" action="?/login">
    <label>
      Email
      <input name="email" type="email" />
    </label>
    <label>
      Password
      <input name="password" type="password" />
    </label>
    <button>Login</button>
    <button formaction="?/signup">Sign up</button>
  </form>