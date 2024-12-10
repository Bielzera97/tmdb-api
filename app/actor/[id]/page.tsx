import { fetchMovies } from "@/services/apiTmdb";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: PageProps) {
  const data = await fetchMovies(`/person/${params.id}?language=pt-BR`);

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
