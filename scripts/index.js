"use strict";

function renderRank() {
  let nameData = JSON.parse(localStorage.getItem("nameData")) || [];
  if (nameData.length === 0) {
    // placeholder "No Rank Data"
  } else {
    let topTen = nameData.sort((a, z) => z.score - a.score).slice(0, 10);

    let rank = document.querySelector("#rank");

    for (let data of topTen) {
      let bar = document.createElement("div");
      bar.innerText = data.name;
      bar.classList.add("rank__bar");
      console.log(data.score / 10);
      bar.style.height = `${(data.score / 10) * 100}%`;
      rank.append(bar);
    }
  }
}

renderRank();
