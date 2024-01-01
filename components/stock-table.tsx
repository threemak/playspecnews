import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "./ui/badge"

const stocks = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    high: 150.25,
    low: 148.5,
  },
  {
    name: "Microsoft Corporation",
    symbol: "MSFT",
    high: 305.5,
    low: 303.25,
  },
  {
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    high: 3250.75,
    low: 3215.1,
  },
  {
    name: "Alphabet Inc. (Google)",
    symbol: "GOOGL",
    high: 2800.0,
    low: 2780.5,
  },
  {
    name: "Facebook, Inc.",
    symbol: "FB",
    high: 340.2,
    low: 337.15,
  },
  {
    name: "Johnson & Johnson",
    symbol: "JNJ",
    high: 175.4,
    low: 174.8,
  },
  {
    name: "Exxon Mobil Corporation",
    symbol: "XOM",
    high: 110.5,
    low: 109.35,
  },
]

export function StockTable() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Symbol</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>High</TableHead>
          <TableHead className='text-right'>Low</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell>
              <Badge>{stock.symbol}</Badge>
            </TableCell>
            <TableCell>{stock.name}</TableCell>
            <TableCell>{stock.high}</TableCell>
            <TableCell className='text-right'>{stock.low}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
