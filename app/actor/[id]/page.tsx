import { fetchMovies } from "@/services/apiTmdb";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: PageProps) {
  const {id} = params
  const data = await fetchMovies(`/person/${id}?language=pt-BR`);

  console.log(data)
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
