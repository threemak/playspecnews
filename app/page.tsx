import { Card, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
import { news } from "./data";

const StockBar = dynamic(() => import("@/components/ticker"));
const CricketMatch = dynamic(() => import("@/components/cricket"));

function CricketNews() {
  return (
    <div className="py-4">
      <h3 className="prose font-semibold whitespace-nowrap">Cricket News</h3>
      <Card className="top-3">
        <ScrollArea className="h-44 m-2">
          {news.map((newsItem, i) => (
            <div key={i} className="my-2 py-1 border-b border-input">
              <CardDescription>{newsItem.title}</CardDescription>
            </div>
          ))}
        </ScrollArea>
      </Card>
    </div>
  );
}

export default function Home() {
  return (
    <section className="container max-sm:px-2">
      <section className="flex-1 grid grid-cols-6 gap-2 md:gap-4 mt-2">
        <div className="col-span-6">
          <StockBar />
        </div>
        <div className="col-span-6 md:col-span-3 xl:col-span-4">
          <CricketMatch />
        </div>
        <div className="col-span-6 md:col-span-3 xl:col-span-2">
          <CricketNews />
        </div>
      </section>
    </section>
  );
}
