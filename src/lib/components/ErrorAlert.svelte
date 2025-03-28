<script>
    export let message = "Something went wrong!";
    export let duration = 1000;  // Default duration: 1 second
    let visible = true;

    // Hide the message after the specified duration
    setTimeout(() => {
        visible = false;
    }, duration);
</script>

{#if visible}
    <div class="error-message">
        {message}
    </div>
{/if}

<style>
    .error-message {
        color: #ff4d4d;
        background-color: #ffe6e6;
        padding: 0.75rem 1rem;
        border: 1px solid #ff4d4d;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
        font-weight: bold;
        text-align: center;
        transition: opacity 0.2s ease-in-out;
    }
</style>
