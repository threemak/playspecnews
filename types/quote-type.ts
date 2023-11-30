export interface StockQuoteRoot {
  quoteResponse: QuoteResponse;
}

export interface QuoteResponse {
  result: Result[];
  error: any;
}

export interface Result {
  language: string;
  region: string;
  quoteType: string;
  typeDisp: string;
  quoteSourceName: string;
  triggerable: boolean;
  customPriceAlertConfidence: string;
  components?: string[];
  currency: string;
  firstTradeDateMilliseconds: number;
  priceHint: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: number;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayRange: string;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  bid: number;
  ask: number;
  bidSize: number;
  askSize: number;
  exchange: string;
  market: string;
  messageBoardId: string;
  fullExchangeName: string;
  shortName: string;
  longName: string;
  regularMarketOpen: number;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  marketState: string;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  sourceInterval: number;
  exchangeDataDelayedBy: number;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  gmtOffSetMilliseconds: number;
  esgPopulated: boolean;
  tradeable: boolean;
  cryptoTradeable: boolean;
  symbol: string;
}
