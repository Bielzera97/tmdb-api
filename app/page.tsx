import ActorCarouselSizes from "@/components/ActorCarousel";
import CarouselSizes from "@/components/Carousel";
import { Card, CardContent } from "@/components/ui/card";
import { fetchMovies } from "@/services/apiTmdb";
import { Star } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  const data = await fetchMovies('/movie/popular?language=pt-BR&page=1')
  console.log(data)
  return (
    <main className="" >
      <section className="grid grid-cols-3 gap-2 px-8 ">
      <Card className="h-[316px] col-span-2 bg-center bg-cover bg-no-repeat flex flex-col justify-end" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`}}>
        <CardContent>
          <h1>{data.results[0].title}</h1>
          <h1 className="flex items-center"><Star/> {}{data.results[0].vote_average} | {data.results[0].vote_count}</h1>
          <h2>{data.results[0].overview}</h2>
          <button><Link href={`/movie/${data.results[0].id}`}>Assista o trailer</Link></button>
        </CardContent>
      </Card>
      <section className="col-span-1 flex flex-col gap-2">
        <Card className="h-[100px] flex flex-col justify-between bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[1].backdrop_path})`}}>
           <h1 className="flex items-center"><Star/>{data.results[1].vote_average}</h1>
           <section>
            <h1>{data.results[1].title}</h1> 
            <button><Link href={`/movie/${data.results[1].id}`}>Assista o trailer</Link></button>
           </section>
        </Card>
        <Card className="h-[100px] flex flex-col justify-between bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[2].backdrop_path})`}}>
           <h1 className="flex items-center"><Star/>{data.results[2].vote_average}</h1>
           <section>
            <h1>{data.results[2].title}</h1> 
            <button><Link href={`/movie/${data.results[2].id}`}>Assista o trailer</Link></button>
           </section>
        </Card>
        <Card className="h-[100px] flex flex-col justify-between bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data.results[3].backdrop_path})`}}>
           <h1 className="flex items-center"><Star/>{data.results[3].vote_average}</h1>
           <section>
            <h1>{data.results[3].title}</h1> 
            <button><Link href={`/movie/${data.results[3].id}`}>Assista o trailer</Link></button>
           </section> 
        </Card>
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
