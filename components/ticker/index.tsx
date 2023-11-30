import { Result } from "@/types/quote-type";
import EmblaCarousel from "../embla-carousel";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { StockQuoteItem } from "./stockQuoteItem";
import { QuoteResponseJSON } from "@/app/data";

function StockQuotesCarousel({ data }: { data: Result[] }) {
  return (
    <EmblaCarousel
      slides={data.map((item, i) => (
        <StockQuoteItem key={i} item={item} />
      ))}
      options={{
        dragFree: true,
        dragThreshold: 60,
      }}
    />
  );
}
export default function StockBar() {
  // const quoteData = await getStockQuote("IN", [
  //   "^NSEI",
  //   "^BSESN",
  //   "^NSEBANK",
  //   "^CNXIT",
  //   "BSE-SMLCAP.BO",
  // ]);
  // const data = quoteData.quoteResponse.result.map((result) => result);
  const data = QuoteResponseJSON.quoteDate.quoteResponse.result.map(
    (result) => result
  );
  return (
    <Tabs defaultValue="india">
      <ScrollArea>
        <div className="flex flex-row items-center gap-3">
          <h3 className="font-semibold whitespace-nowrap">Market Indices</h3>
          <TabsList>
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="us">US</TabsTrigger>
            <TabsTrigger value="europe">Europe</TabsTrigger>
            <TabsTrigger value="currency">Currencies</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>

      {["india", "us", "europe", "currency", "crypto"].map((category) => (
        <TabsContent key={category} value={category}>
          <StockQuotesCarousel data={data} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
