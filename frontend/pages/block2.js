const cache = JSON.parse(localStorage.getItem("cache"));
const tag = cache[1];
document.getElementById("tag").textContent = "tag = "+ tag;