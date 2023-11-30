import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import { Match } from "@/types/cricket-type";

export default function CricketCard({ match }: { match: Match }) {
  return (
    <Card className="flex flex-col w-60 h-full">
      <CardHeader className="flex flex-row items-center justify-between gap-4 p-2">
        <CardTitle className="text-sm font-medium truncate">
          {match.matchInfo.seriesName}
        </CardTitle>
        <Button size="sm" disabled className="h-6">
          {match.matchInfo.matchFormat}
        </Button>
      </CardHeader>
      <CardContent className="flex flex-row justify-between h-16 p-2">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <Image
              priority
              //src={`http://localhost:3000/api/image?id=${match.matchInfo.team1.imageId}`}
              src={"/vercel.svg"}
              alt="Team 1 flage image"
              width={20}
              height={20}
            />
            <p className="text-xs md:text-sm ">
              {match.matchInfo.team1.teamSName}
            </p>
          </div>
          <p className="text-xs md:text-sm">
            {match.matchScore &&
              match.matchScore.team1Score &&
              match.matchScore.team1Score.inngs1 && (
                <>
                  {match.matchScore.team1Score.inngs1.runs}-
                  {match.matchScore.team1Score.inngs1.wickets}(
                  {match.matchScore.team1Score.inngs1.overs})
                </>
              )}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <Image
              priority
              //src={`http://localhost:3000/api/image?id=${match.matchInfo.team2.imageId}`}
              src={"/next.svg"}
              alt="Team2"
              width={20}
              height={20}
            />
            <p className="text-xs md:text-sm">
              {match.matchInfo.team2.teamSName}
            </p>
          </div>
          <p className="text-xs md:text-sm">
            {match.matchScore &&
              match.matchScore.team2Score &&
              match.matchScore.team2Score.inngs1 && (
                <>
                  {match.matchScore.team2Score.inngs1.runs}-
                  {match.matchScore.team2Score.inngs1.wickets}(
                  {match.matchScore.team2Score.inngs1.overs})
                </>
              )}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <p className="text-xs">{match.matchInfo.status}</p>
      </CardFooter>
    </Card>
  );
}
