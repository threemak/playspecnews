import { Result } from "@/types/quote-type"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Icon from "./icon"

export default function StockTicker({ data }: { data: Result[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item, i) => {
          const changePercent = item.regularMarketChangePercent.toString().includes("-")
          return (
            <CarouselItem key={i}>
              <Card className='shadow-none border-2'>
                <CardHeader className='flex flex-row justify-around items-center space-x-6 px-2 py-1'>
                  <div className='flex flex-col'>
                    <Icon name={changePercent ? "chevron-down" : "chevron-up"} className={changePercent ? "text-red-400" : "text-green-400"} />
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <CardTitle className='text-sm font-medium'>{item.shortName}</CardTitle>
                    <CardDescription className='text-xs'>{item.regularMarketPrice}</CardDescription>
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <CardDescription className={`text-xs font-bold ${changePercent ? "text-red-400" : "text-green-400"}`}>{`${
                      changePercent ? `${item.regularMarketChangePercent.toFixed(2)}%` : `+${item.regularMarketChangePercent.toFixed(2)}%`
                    }`}</CardDescription>
                    <CardDescription className='text-xs'>{`${
                      changePercent ? `${item.regularMarketChange.toFixed(2)}` : `+${item.regularMarketChange.toFixed(2)}`
                    }`}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
