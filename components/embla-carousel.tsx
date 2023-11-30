"use client";
import React, { useState, useEffect, useCallback, ReactNode } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { Button } from "./ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

type PropType = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <>
      <div className="embla overflow-hidden">
        <div className="embla__viewport relative" ref={emblaRef}>
          <div className="embla__container grid grid-flow-col auto-cols-max gap-3 overscroll-x-contain">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="embla__buttons">
          <Button
            className={`embla__prev absolute left-0 z-10 top-1/2`}
            size="icon"
            variant="secondary"
            onClick={scrollPrev}
            disabled={prevBtnEnabled}
          >
            <MoveLeft />
          </Button>
          <Button
            className={`embla__next absolute right-0 z-10 top-1/2`}
            size="icon"
            variant="secondary"
            onClick={scrollNext}
            disabled={nextBtnEnabled}
          >
            <MoveRight />
          </Button>
        </div> */}
      </div>
      {/* 
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default EmblaCarousel;
