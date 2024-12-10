import { fetchMovies } from "@/services/apiTmdb";
import { InferGetStaticPropsType } from "next";

export async function generateStaticParams() {
  const data = await fetchMovies(`/movie/popular?language=pt-BR`);

  return data.results.map((movie: { id: number }) => ({
    id: movie.id.toString(),
  }));
}

type MoviePageProps = InferGetStaticPropsType<typeof generateStaticParams>;

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = params;

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
