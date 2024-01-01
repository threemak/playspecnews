import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"
import { LiveMatch, QuoteResponseJSON } from "./data"
import { CricketRoot } from "@/types/cricket-type"
import { StockTable } from "@/components/stock-table"

const getMatch = (match: CricketRoot) => {
  const matches = []
  for (const matchType of Object.values(match.typeMatches)) {
    if (matchType.seriesMatches) {
      matches.push(...matchType.seriesMatches.flatMap((matchSeries) => (matchSeries.seriesAdWrapper ? matchSeries.seriesAdWrapper.matches : [])))
    }
  }
  return matches
}
const StockTicker = dynamic(() => import("../components/stock-ticker"), { ssr: false })
const CricketMatch = dynamic(() => import("@/components/cricket-match"), { ssr: false })
const CricketNews = dynamic(() => import("@/components/cricket-news"), { ssr: false })

export default function Home() {
  const tickerData = QuoteResponseJSON.quoteDate.quoteResponse.result.map((result) => result)
  const matchData = getMatch(LiveMatch)
  return (
    <section className='container max-sm:px-4'>
      <section className='grid grid-row-3 grid-cols-6 gap-2 md:gap-4 mt-2'>
        <div className='col-span-6'>
          <Tabs defaultValue='india'>
            <ScrollArea>
              <div className='flex flex-row items-center gap-3'>
                <h3 className='font-semibold whitespace-nowrap'>Market Indices</h3>
                <TabsList>
                  <TabsTrigger value='india'>India</TabsTrigger>
                  <TabsTrigger value='us'>US</TabsTrigger>
                  <TabsTrigger value='europe'>Europe</TabsTrigger>
                  <TabsTrigger value='currency'>Currencies</TabsTrigger>
                  <TabsTrigger value='crypto'>Crypto</TabsTrigger>
                </TabsList>
              </div>
              <ScrollBar orientation='horizontal' className='invisible' />
            </ScrollArea>

            <TabsContent value='india'>
              <StockTicker data={tickerData} />
            </TabsContent>
            <TabsContent value='us'></TabsContent>
            <TabsContent value='europe'></TabsContent>
            <TabsContent value='currency'></TabsContent>
            <TabsContent value='crypto'></TabsContent>
          </Tabs>
        </div>

        <div className='col-span-6 md:col-span-3 xl:col-span-4'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-3 py-2'>
              <h3 className='font-semibold whitespace-nowrap'>Cricket Match</h3>
            </div>
            <CricketMatch match={matchData} />
          </div>
        </div>

        <div className='row-span-3 col-span-6 md:col-span-3 xl:col-span-2'>
          <div className='py-4'>
            <h3 className='prose font-semibold whitespace-nowrap mb-2'>Cricket News</h3>
            <CricketNews />
          </div>
        </div>

        <div className='col-span-6 md:col-span-3 xl:col-span-2 w-full border'>
          <div className='py-4'>
            <h3 className='font-semibold whitespace-nowrap'>Recommened Stocks</h3>
            <StockTable />
          </div>
        </div>
      </section>
    </section>
  )
}
