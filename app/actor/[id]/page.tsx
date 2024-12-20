import { fetchMovies } from "@/services/apiTmdb";
import { InferGetStaticPropsType } from "next";

// Função para gerar os parâmetros estáticos
export async function generateStaticParams() {
  // Busca pessoas populares da API TMDB
  const data = await fetchMovies(`/person/popular?language=pt-BR`);

  // Retorna os IDs no formato esperado
  return data.results.map((person: { id: number }) => ({
    id: person.id.toString(), // Converta o ID para string
  }));
}

// Tempo de revalidação em segundos (ex.: 3600 segundos = 1 hora)
export const revalidate = 3600; // Regenera a página a cada 1 hora

// Tipagem das props do componente utilizando InferGetStaticPropsType
type MoviePageProps = InferGetStaticPropsType<typeof generateStaticParams>;

// Página dinâmica para exibir informações de uma pessoa
export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = params;

  // Busca os dados detalhados da pessoa
  const data = await fetchMovies(`/person/${id}?language=pt-BR`);

  return (
    <main>
      <h1>{data.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
        alt={data.name}
      />
    </main>
  );
}
