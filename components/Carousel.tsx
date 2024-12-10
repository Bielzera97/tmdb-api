import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { fetchMovies } from "@/services/apiTmdb";
import { Star } from "lucide-react";
import Link from "next/link";

type apiProps ={
    type : string,
    categorie : string
}


const CarouselSizes = async ({categorie, type} : apiProps) => {
const dataPop = await fetchMovies(`/${type}/${categorie}?language=pt-BR&page=1`)

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="px-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 ">
            <div className="">
              <Card className="bg-center bg-cover bg-no-repeat h-[150px]  " style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${dataPop.results[index + 1].backdrop_path})`}}>
                <CardContent className="flex flex-col justify-between gap-14 py-2">
                  <h1 className="flex items-center gap-1"><Star/>{dataPop.results[index + 1].vote_average}</h1>
                  <section>
                    <h1>{dataPop.results[index + 1].title}</h1> 
                    <button><Link href={`/movie/${dataPop.results[index + 1].id}`}>Assista o Trailer</Link></button>
                  </section> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10   p-2 rounded-full shadow-lg " />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10   p-2 rounded-full shadow-lg "/>
    </Carousel>
  )
}

export default CarouselSizes