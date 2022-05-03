<script lang="ts">
  import { onMount } from "svelte";

  import "../app.css";

  const phrases = ["เฮือก", "กราบครับ", "ยอมแล้วครับ", "สั่งสอนผมด้วยครับ"];
  let phrase = phrases[0];

  onMount(() => {
    setInterval(() => {
      phrase = phrases[Math.floor(Math.random() * phrases.length)];
    }, 10000);
  });
</script>

<nav class="h-12 px-8 flex flex-row justify-between items-center select-none">
  <a href="/">{phrase}</a>
  <a href="/quotes">คาถาติดผู้แทน</a>
</nav>

<hr />

<slot />

<footer class="flex flex-row justify-center items-center mb-10">
  <div
    class="h-12 w-12 bg-cover cursor-pointer"
    style="background-image: url(github.svg)"
    on:click={() => {
      window.open("https://github.com/Leomotors/grab-krub", null, "noopener");
    }}
  />
</footer>

<style lang="postcss">
  nav a {
    @apply text-2xl font-bold;
  }
</style>
