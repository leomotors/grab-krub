<script lang="ts">
  import "../quotes.css";

  import คาถาผู้แทน from "../คาถาผู้แทน.html.g.json";
</script>

<main class="page quotes-page">
  <h1 class="text-center text-4xl font-bold">
    คาถาผู้แทน ท่องแล้วเก่งเหมือนคนในคาถา
  </h1>
  <p class="text-center text-xl text-slate-500">55555</p>

  <div class="h-12" />

  {#each คาถาผู้แทน as คาถา}
    <div
      class="w-full md:w-2/3 lg:w-1/2 mx-auto lg:text-2xl p-8 m-4 bg-pink-200 rounded-xl"
    >
      {@html คาถา}
    </div>
  {/each}
</main>
