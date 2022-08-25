export const code = `const [newMovies, setNewMovies] = useState();

fetch(
  'https://api.themoviedb.org/3/movie/upcoming?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US&page=1',
)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data.results);
    setNewMovies(data.results);
  });

// Um segundo parametro pode ser passado na requisição adicionando outrar informações como tipo da requisição, headers, etc
//fetch("url-da-api", {method: 'POST'})
`;
