// Javascript 1 Course Assignment

const mainInfo = document.querySelector(".mainInfo");

const url = "https://genius.p.rapidapi.com/artists/16775/songs/";

const headers_content = {
  headers: {
    "x-rapidapi-host": "genius.p.rapidapi.com",
    "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
  },
};

async function fetchArtistNames() {
  try {
    const response = await fetch(url, headers_content);
    const results = await response.json();
    console.log(results);
    mainInfo.innerHTML = "";
    createArtistNameHtml(results);
  } catch (error) {
    console.log(error);
  }
}

function createArtistNameHtml(results) {
  mainInfo.innerHTML = `<h1>${results.response.songs[0].artist_names}</h1>
                        <h2>${results.response.songs[0].annotation_count}</h2>
                        <h3>${results.response.songs[0].url}</h3>`;
}

fetchArtistNames();
