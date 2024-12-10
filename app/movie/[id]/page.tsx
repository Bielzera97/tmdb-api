import { fetchMovies } from "@/services/apiTmdb";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const data = await fetchMovies(`/movie/popular?language=pt-BR`);

  return data.results.map((movie: { id: number }) => ({
    id: movie.id.toString(),
  }));
}

export const revalidate = 60; // Regenera a página a cada 60 segundos

export default async function MoviePage({ params }: PageProps) {
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
