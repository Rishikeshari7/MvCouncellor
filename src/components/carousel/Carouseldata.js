"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import img1 from "../../../public/Cimg1.png"
import img2 from "../../../public/Cimg2.png"
import img3 from "../../../public/Cimg3.png"
import img4 from "../../../public/Cimg4.png"
 function Carouseldata() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 const images=[img1,img2,img3,img4]
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[400px] bg-customLightgreen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent >
        {images.map((e, index) => (
          <CarouselItem key={index} >
            <div className="bg-customLightgreen">
              <Card>
                <CardContent className="flex aspect-square items-center bg-customLightgreen 
                 justify-center p-6 w-full h-[400px] border-0">
             <div className="relative w-full h-full rounded-lg">
      <div className="absolute inset-0 bg-customLightgreen blur-xl opacity-10 rounded-lg z-10"></div>
      <Image
        src={e}
        alt="Something went wrong"
        className="w-full h-full  rounded-lg"
      />
    </div>
                
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default Carouseldata