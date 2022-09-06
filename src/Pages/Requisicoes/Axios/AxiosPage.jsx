import axios from 'axios';
import { useEffect, useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const AxiosPage = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/744276?api_key=c390b288e9beb4c611edc921516ea70f&language=en-US`,
      )
      .then((data) => {
        console.log(data.data);
        setMovie(data.data);
      });
  }, []);
  return (
    <div>
      <Descricao
        desc={
          'Axios é uma biblioteca muito utlizada para realização requisições para as APIs. Tem a mesma funcionalidade da função Fetch porém é uma solução mais completa'
        }
      />
      <p>
        Criar exemplo realizando uma requição a uma API e exibindo algum valor
        retornado por ela
      </p>

      <p style={{ fontWeight: 'bold' }}>{movie?.original_title}</p>
      <Codigo texto={code} />
    </div>
  );
};

export default AxiosPage;
