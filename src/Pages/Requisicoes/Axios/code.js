export const code = `const [newMovies, setNewMovies] = useState();

axios.get(
  'https://api.themoviedb.org/3/movie/upcoming?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US&page=1',
)
  .then((data) => {
    console.log(data.results);
    setNewMovies(data.results);
  });


//POST
axios.post('url-da-api')
  .then((resonse) => {
    console.log(response);
  });


// As requisições axios também podem enviar uma requisição com inforamções adicionais
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
}).then((response) => {
  console.log(response)
});
`;
