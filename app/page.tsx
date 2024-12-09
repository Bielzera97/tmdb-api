import CarouselSizes from "@/components/Carousel";
import { Card } from "@/components/ui/card";
import { fetchMovies } from "@/services/apiTmdb";


export default async function Home() {
  const data = await fetchMovies('/movie/popular?language=pt-BR&page=1')
  
  console.log(data)
  return (
    <main className="" >
      <section className="grid grid-cols-3">
      <Card className="col-span-2 bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`}}>
        
      </Card>
      <section className="col-span-1">
        <Card className="bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[1].backdrop_path})`}}>card secundario</Card>
        <Card className="bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[2].backdrop_path})`}}>card secundario</Card>
        <Card className="bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[3].backdrop_path})`}}>card secundario</Card>
      </section>
      </section>
      <section className="w-full max-h-screen">
        <CarouselSizes categorie="top_rated" />
        <CarouselSizes categorie="upcoming" />
      </section>

    </main>
  );
}
