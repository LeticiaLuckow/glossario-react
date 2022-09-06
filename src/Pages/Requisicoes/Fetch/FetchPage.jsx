import { useEffect, useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const FetchPage = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/744276?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US`,
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);

        setMovie(data);
      });
  }, []);

  // ? depois do movie serve para verificar se o movie(variavel) tem algum valor e não esta undefined.

  return (
    <div>
      <Descricao
        desc={
          'Fetch é a forma padrão do js de se realizar chamadas para APIs. As requisições podem ser do tipo GET, POST, PUT e DELETE'
        }
      />
      <p style={{ fontWeight: 'bold' }}>{movie?.original_title}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default FetchPage;
