import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { news } from "@/app/data"

export default function CricketNews() {
  return (
    <ScrollArea className='h-96'>
      <div className='grid grid-cols-1 gap-3'>
        {news.map((newsItem, i) => (
          <Card key={i}>
            <CardHeader>
              <div className='flex items-center justify-between'>
                {/* <CardTitle className='text-lg font-medium leading-none'>Title of the First News Article</CardTitle> */}
                <Badge>{newsItem.date}</Badge>
              </div>
            </CardHeader>
            <CardContent className='space-y-2'>
              <Image alt='Cricket News Image' className='w-full h-32 object-fill rounded-md' height='100' src='/next.svg' style={{}} width='100' />
              <h2 className='text-lg font-bold'>Title of the First News Article</h2>
              <p className='text-sm text-gray-500'>{newsItem.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}
