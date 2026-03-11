const cache = JSON.parse(localStorage.getItem("cache"));
const tag = cache[0];
document.getElementById("tag").textContent = "tag = "+ tag;