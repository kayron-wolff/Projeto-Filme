import { Link } from 'expo-router';
import ItemBox from './filmebox'; // ou o caminho correto
import { View } from 'react-native';

export default function ListaFilmes() {
  const filme = {
    filmeImg: 'https://via.placeholder.com/120x220',
    filmeName: 'Filme Exemplo',
    filmeDesc: 'Descrição do filme exemplo',
  };

  return (
    <View>
      <Link
        href={{
          pathname: '/detalhes',
          params: {
            filmeImg: filme.filmeImg,
            filmeName: filme.filmeName,
            filmeDesc: filme.filmeDesc,
          },
        }}
        asChild
      >
        <ItemBox {...filme} />
      </Link>
    </View>
  );
}
