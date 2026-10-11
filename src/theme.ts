const themes = ["yellow", "green", "blue", "red", "orange"];

const fromUrl = new URLSearchParams(location.search).get("theme");
const theme = themes.includes(fromUrl ?? "")
  ? fromUrl!
  : themes[Math.floor(Math.random() * themes.length)];

document.documentElement.dataset.theme = theme;
