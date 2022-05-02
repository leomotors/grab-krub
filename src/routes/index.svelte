<script lang="ts">
  import html2canvas from "html2canvas";

  import _quotes from "../คาถาผู้แทน.g.json";
  const quotes = [
    "เฮือก กราบครับ ยอมแล้วครับ สั่งสอนผมด้วยครับ",
    "ยอมแล้วครับ สั่งสอนผมด้วยครับ",
  ].concat(
    _quotes.map((q) =>
      q.replace(/<a[^>]+>[^<]+<\/a>/g, "").replace(/<[^>]+>/g, "")
    )
  );

  let username = "Leomotors";
  let message = quotes[0];
  let img = "cocoa_valentine.webp";
  let usernameColor = "#ffffff";

  let files: FileList;
  let canvasElement: HTMLElement;

  function onImageChange() {
    const file = files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      img = reader.result as string;
    });
    reader.readAsDataURL(file);
  }

  async function imageDownload() {
    const canvas = await html2canvas(canvasElement);
    const dummy = document.createElement("a");
    dummy.download = "image";
    dummy.href = canvas.toDataURL();
    dummy.click();
  }
</script>

<main class="page text-center">
  <h1 class="text-4xl font-bold">
    กราบครับ Generator
    <a
      class="text-blue-800 text-2xl"
      href="https://github.com/SaltyAom/sung-son-phom-duay-kub-generator"
      target="_blank"
      rel="noopener"
    >
      ต้นฉบับ
    </a>
  </h1>

  <article
    class="not-canvas flex flex-row items-center rounded-xl p-4 md:p-8 my-8 native-font w-full md:mx-auto md:w-4/5 lg:w-2/3 2xl:w-1/2"
    bind:this={canvasElement}
  >
    <div
      class="pfp h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 aspect-square rounded-full bg-cover bg-center"
      style="background-image: url({img})"
    />
    <div
      class="content px-4 md:px-8 flex flex-col justify-evenly gap-2 text-left"
    >
      <div
        class="name text-xl sm:text-2xl md:text-4xl font-bold"
        style="color: {usernameColor}"
      >
        {username}
      </div>

      <div class="message text-base sm:text-lg md:text-2xl text-white">
        {message}
      </div>
    </div>
  </article>

  <section class="inputs flex flex-col items-center">
    <section class="username-input flex flex-row">
      <input
        class="grow"
        type="text"
        bind:value={username}
        placeholder="username"
      />
      <input
        class="h-12"
        style="padding: 0.25em !important"
        type="color"
        bind:value={usernameColor}
      />
    </section>

    <section class="message-input flex flex-row">
      <input
        class="grow"
        type="text"
        bind:value={message}
        placeholder="message"
      />
      <button
        class="border-2 border-slate-900 hover:border-slate-500 rounded-lg p-2 transition-all"
        on:click={() => {
          const otherQuotes = quotes.filter((q) => q != message);
          message = otherQuotes[Math.floor(Math.random() * otherQuotes.length)];
        }}
      >
        <img src="arrow-clockwise.svg" alt="Reload" />
      </button>
    </section>

    <input type="file" accept="image/*" bind:files on:change={onImageChange} />

    <button
      class="rounded font-semibold text-xl bg-sky-400 py-2 px-4 hover:scale-105 transition-all"
      on:click={imageDownload}
    >
      Download Image
    </button>
  </section>
</main>

<style lang="postcss">
  article.not-canvas {
    background-color: #36393f;
  }

  section.inputs > * {
    @apply m-4 w-full md:w-2/3 lg:w-1/3;
  }

  section.inputs input {
    @apply border-slate-800 border-2 rounded-lg py-2 px-3 text-lg;
  }

  button {
    @apply select-none;
  }
</style>
