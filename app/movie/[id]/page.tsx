import { fetchMovies } from "@/services/apiTmdb";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const data = await fetchMovies(`/movie/${params.id}?language=pt-BR`);

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
