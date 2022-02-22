// Javascript 1 Course Assignment

const url = "https://genius.p.rapidapi.com/artists/16775/songs/";

const headers_content = {
  headers: {
    "x-rapidapi-host": "genius.p.rapidapi.com",
    "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
  },
};

const mainInfo = document.querySelector(".mainInfo");

async function fetchArtistNames() {
  try {
    const response = await fetch(url, headers_content);
    const results = await response.json();
    console.log(results);
    createArtistNameHtml(results);
  } catch (error) {
    console.log(error);
  }
}

function createArtistNameHtml(results) {
  mainInfo.innerHTML = `<h1>${results.response.songs[11].artist_names}</h1>`;
}

fetchArtistNames();
