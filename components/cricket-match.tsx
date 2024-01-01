import Image from "next/image"
import { LiveMatch } from "@/app/data"
import { CricketRoot, Match } from "@/types/cricket-type"
import { Carousel, CarouselContent } from "./ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export default async function CricketMatch({ match }: { match: Match[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {match.map((match, i) => (
          <Card key={i} className='flex flex-col w-60 shadow-none border-2'>
            <CardHeader className='flex flex-row items-center justify-between gap-4 p-2'>
              <CardTitle className='text-sm font-medium truncate'>{match.matchInfo.seriesName}</CardTitle>
              <Badge>{match.matchInfo.matchFormat}</Badge>
            </CardHeader>
            <CardContent className='flex flex-row justify-between h-16 p-3'>
              <div className='flex flex-col space-y-2'>
                <div className='flex space-x-2'>
                  <Image
                    priority
                    //src={`http://localhost:3000/api/image?id=${match.matchInfo.team1.imageId}`}
                    src={"/vercel.svg"}
                    alt='Team 1 flage image'
                    width={20}
                    height={20}
                  />
                  <p className='text-xs md:text-sm '>{match.matchInfo.team1.teamSName}</p>
                </div>
                <p className='text-xs md:text-sm'>
                  {match.matchScore && match.matchScore.team1Score && match.matchScore.team1Score.inngs1 && (
                    <>
                      {match.matchScore.team1Score.inngs1.runs}-{match.matchScore.team1Score.inngs1.wickets}({match.matchScore.team1Score.inngs1.overs})
                    </>
                  )}
                </p>
              </div>
              <div className='flex flex-col space-y-2'>
                <div className='flex space-x-2'>
                  <Image
                    priority
                    //src={`http://localhost:3000/api/image?id=${match.matchInfo.team2.imageId}`}
                    src={"/next.svg"}
                    alt='Team2'
                    width={20}
                    height={20}
                  />
                  <p className='text-xs md:text-sm'>{match.matchInfo.team2.teamSName}</p>
                </div>
                <p className='text-xs md:text-sm'>
                  {match.matchScore && match.matchScore.team2Score && match.matchScore.team2Score.inngs1 && (
                    <>
                      {match.matchScore.team2Score.inngs1.runs}-{match.matchScore.team2Score.inngs1.wickets}({match.matchScore.team2Score.inngs1.overs})
                    </>
                  )}
                </p>
              </div>
            </CardContent>
            <CardFooter className='p-2'>
              <p className='text-xs'>{match.matchInfo.status}</p>
            </CardFooter>
          </Card>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
