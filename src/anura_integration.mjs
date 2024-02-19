instanceWindow.element.querySelector(".title").style.backgroundColor = "black";
window.baseurl = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

let browser = await anura.import("anura.libbrowser");
let persist = await anura.import("anura.persistence");
let loader = persist.buildLoader(anura);
await loader.locate();

window.settings = await loader.build(instance);

load_achievements(index_load);

anura.net
  .fetch("https://img.itch.zone/aW1nLzE0ODcxMzAwLmpwZw==/original/TNb8k6.jpg")
  .then((res) => res.blob())
  .then((blob) => {
    document.getElementById("banner").src = URL.createObjectURL(blob);
  });

document.getElementById("banner_anchor").onclick = () => {
  browser.openTab("https://mrsuicidesheep.itch.io/sheepy");
};

window.launchGame = () => {
  let win = anura.wm.create(instance, {
    title: "Sheepy: A Short Adventure",
    width: "1280px",
    height: "720px",
  });

  win.element.querySelector(".title").style.backgroundColor = "black";

  let frame = document.createElement("iframe");
  frame.style =
    "top:0; left:0; bottom:0; right:0; width:100%; height:100%; border: none; margin: 0; padding: 0; background-color: rgb(32, 33, 36)";

  frame.src = window.baseurl + "/play.html";
  frame.onload = () => {
    frame.contentWindow.settings = settings;
    let oldClose = frame.contentWindow.close;
    frame.contentWindow.close = () => {
      win.close();
      oldClose();
    };
  };
  win.content.appendChild(frame);
};
