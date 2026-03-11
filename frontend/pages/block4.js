const cache = JSON.parse(localStorage.getItem("cache"));
const tag = cache[3];
document.getElementById("tag").textContent = "tag = "+ tag;