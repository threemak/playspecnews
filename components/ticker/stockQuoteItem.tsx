import { Card, CardContent, CardHeader } from "../ui/card";
import Icon from "../icon";
import { Result } from "@/types/quote-type";

type StockQuoteItemProps = {
  item: Result;
};

export const StockQuoteItem = ({ item }: StockQuoteItemProps) => {
  const changePercent = item.regularMarketChangePercent
    .toString()
    .includes("-");

  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row justify-around items-center space-x-6 px-2 py-1">
        <div
          className={`border-0 rounded-sm ${
            changePercent
              ? "bg-red-100 border-red-400"
              : "bg-green-100 border-green-400"
          }`}
        >
          <Icon
            name={changePercent ? "chevron-down" : "chevron-up"}
            className={changePercent ? "text-red-400" : "text-green-400"}
          />
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">{item.shortName}</div>
          <div className="text-xs">{item.regularMarketPrice}</div>
        </div>
        <div className="space-y-2">
          <div
            className={`text-xs font-bold ${
              changePercent ? "text-red-400" : "text-green-400"
            }`}
          >{`${
            changePercent
              ? `${item.regularMarketChangePercent.toFixed(2)}%`
              : `+${item.regularMarketChangePercent.toFixed(2)}%`
          }`}</div>
          <p className="text-xs">
            {`${
              changePercent
                ? `${item.regularMarketChange.toFixed(2)}`
                : `+${item.regularMarketChange.toFixed(2)}`
            }`}
          </p>
        </div>
      </CardHeader>
      {/* <CardContent className="flex flex-row space-x-3 items-center">
        <div className="text-sm font-bold">
          {item.regularMarketOpen.toFixed(2)}
        </div>
        <p className="text-sm text-">
          {`${
            changePercent
              ? `${item.regularMarketChange.toFixed(2)}`
              : `+${item.regularMarketChange.toFixed(2)}`
          }`}
        </p>
      </CardContent> */}
    </Card>
  );
};
