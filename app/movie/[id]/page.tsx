import { fetchMovies } from "@/services/apiTmdb";

interface PageProps {
  params: {
    id: string;
  };
}

// Função para gerar os parâmetros estáticos
export async function generateStaticParams() {
  // Busca uma lista de filmes populares da API TMDB
  const data = await fetchMovies(`/movie/popular?language=pt-BR`);

  // Retorna os IDs no formato esperado
  return data.results.map((movie: { id: number }) => ({
    id: movie.id.toString(), // Converta o ID para string
  }));
}

// Página dinâmica para exibir informações de um filme
export default async function MoviePage({ params }: PageProps) {
  const { id } = params;

  // Busca os dados detalhados do filme
  const data = await fetchMovies(`/movie/${id}?language=pt-BR`);

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={data.title}
      />
    </main>
  );
}
