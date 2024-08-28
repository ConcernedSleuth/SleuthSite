function underConstruction(documentToEdit) {
  const mainElem = documentToEdit.querySelector('main');
  mainElem.innerHTML = `
    <div class="ta-center">
        <h1 class="ta-center">Hout Bay sleuth</h1>
        <img src="/assets/img/under_construction.svg" alt="under construction" style="height: 55vh; margin: 1em;" />
        <h3 class="ta-center">Under Construction</h3>
    </div>`;
}

document.addEventListener(
  'astro:page-load',
  () => {
    underConstruction(document);

    document.addEventListener('astro:before-swap', (ev) => {
      underConstruction(ev.newDocument);
    });
  },
  { once: true },
);
