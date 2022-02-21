// Javascript 1 Course Assignment

const resultsContainer = document.querySelector(".results");

async function callingApi() {
  const response = await fetch(
    "https://genius.p.rapidapi.com/artists/16775/songs",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
      },
    }
  );

  const json = await response.json();

  console.log(json);

  const results = json.response.songs;

  results.forEach(function (results) {
    console.log(results.artist_names);
    console.log(results.lyrics_state);
    console.log(results.id);
    resultsContainer.innerHTML += `<div>${results.artist_names}</div>
                                  <div>${results.lyrics_state}</div>
                                  <div>${results.id}</div>`;
  });
}

callingApi();
