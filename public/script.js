let result = document.getElementById("result");
let btn = document.getElementById("button");
let tone = document.getElementById("sound");

const getMeaning = () => {
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  let inputWord = document.getElementById("imp").value;

  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = ` <div class="word">
      <h3>Word : ${inputWord}</h3>
  </div>
  <div class="details">
      <p>Parts_Of_Speech:-- ${data[0].meanings[0].partOfSpeech}</p>
      <p>phonetic:-- ${data[0].phonetic}</p>
  </div>
  <p class="word-meaning">Definition:--
     ${data[0].meanings[0].definitions[0].definition}
  </p>
  <p class="word-meaning">Definition:--
     ${data[0].meanings[0].definitions[1].definition}
  </p>
  <p class="word-example">Examples:--
      ${data[0].meanings[0].definitions[0].example || ""}
  </p>`;
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">oh oh... Couldn't Find The Word</h3>`;
    });
};

btn.addEventListener("click", () => {
  getMeaning();
});
