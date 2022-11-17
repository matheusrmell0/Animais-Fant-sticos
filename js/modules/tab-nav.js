// Navegação por Tabs
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      const dataAnime = tabContent[index].dataset.anime
      tabContent[index].classList.add("ativo", dataAnime);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
