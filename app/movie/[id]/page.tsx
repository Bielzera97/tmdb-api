import { fetchMovies } from "@/services/apiTmdb";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: PageProps) {
  const {id} = params
  const data = await fetchMovies(`/movie/${id}?language=pt-BR`);

  console.log(data)
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
