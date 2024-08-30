<script lang="ts">
</script>

<div class="flex flex-col">
  <div class="text-xs">Suscríbete a nuestra newsletter</div>
  <div class="input-container">
    <span class="material-symbols-outlined text-white"> mail </span>
    <input
      class="border-0 py-2 bg-transparent placeholder:text-white flex-grow"
      type="text"
      id="email"
      placeholder="Email"
    /><button class="flex items-center justify-center">
      <span class="material-symbols-outlined"> send </span>
    </button>
  </div>
</div>

<style lang="postcss">
  input:focus {
    border-width: 0px;
    outline: 0; /* I have also tried outline:none */
    outline: none;
    -webkit-appearance: none;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }

  .input-container {
    @apply flex flex-row items-center flex-grow
    bg-primaryDark my-2 px-2
    border-text border-b
    focus-within:shadow-blue-400 focus-within:border-0 focus-within:shadow border-0;
  }
</style>
