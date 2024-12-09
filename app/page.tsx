import ActorCarouselSizes from "@/components/ActorCarousel";
import CarouselSizes from "@/components/Carousel";
import { Card } from "@/components/ui/card";
import { fetchMovies } from "@/services/apiTmdb";


export default async function Home() {
  const data = await fetchMovies('/movie/popular?language=pt-BR&page=1')
  
  return (
    <main className="" >
      <section className="grid grid-cols-3 gap-2 px-8 ">
      <Card className="h-[316px] col-span-2 bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`}}>
      </Card>
      <section className="col-span-1 flex flex-col gap-2">
        <Card className="h-[100px] bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[1].backdrop_path})`}}>card secundario</Card>
        <Card className="h-[100px] bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[2].backdrop_path})`}}>card secundario</Card>
        <Card className="h-[100px] bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[3].backdrop_path})`}}>card secundario</Card>
      </section>
      </section>
      <section className="w-full max-h-screen flex flex-col gap-4 pt-4 ">
        <CarouselSizes type="movie" categorie="top_rated" />
        <CarouselSizes type="movie" categorie="upcoming" />
        <ActorCarouselSizes type="person" categorie="popular" />
      </section>

    </main>
  );
}
