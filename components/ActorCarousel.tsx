import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { fetchMovies } from "@/services/apiTmdb";

type apiProps ={
    type : string,
    categorie : string
}


const ActorCarouselSizes = async ({categorie, type} : apiProps) => {
const dataPop = await fetchMovies(`/${type}/${categorie}?language=en-US&page=1`)

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
            <div className="p-1">
              <Card className="bg-center bg-cover bg-no-repeat h-[200px] " style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${dataPop.results[index + 1].profile_path})`}}>
                <CardContent className="flex items-center justify-center p-2">
                  <span className="text-xl font-semibold">{index + 1}</span>
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

export default ActorCarouselSizes