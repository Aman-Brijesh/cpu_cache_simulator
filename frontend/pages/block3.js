const cache = JSON.parse(localStorage.getItem("cache"));
const tag = cache[2];
document.getElementById("tag").textContent = "tag = "+ tag;