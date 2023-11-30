import EmblaCarousel from "../embla-carousel";
import CricketCard from "./cricket-card";
import { LiveMatch } from "@/app/data";
import { CricketRoot } from "@/types/cricket-type";

const getMatch = (match: CricketRoot) => {
  const matches = [];
  for (const matchType of Object.values(match.typeMatches)) {
    if (matchType.seriesMatches) {
      matches.push(
        ...matchType.seriesMatches.flatMap((matchSeries) =>
          matchSeries.seriesAdWrapper ? matchSeries.seriesAdWrapper.matches : []
        )
      );
    }
  }
  return matches;
};

export default async function CricketMatch() {
  // const root = await getMatches("upcoming");
  const root = getMatch(LiveMatch);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-3 py-2">
        <h3 className="font-semibold whitespace-nowrap">Cricket Match</h3>
      </div>
      <EmblaCarousel
        slides={root.map((item, i) => (
          <CricketCard key={i} match={item} />
        ))}
        options={{
          dragFree: true,
          dragThreshold: 60,
        }}
      />
    </div>
  );
}
