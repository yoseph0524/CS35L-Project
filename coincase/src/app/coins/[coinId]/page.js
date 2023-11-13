"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";

const BASE_URL = "https://api.coinpaprika.com/v1";

export default function Home({ params }) {
  const queryClient = new QueryClient();
  console.log(params);
  return (
    <QueryClientProvider client={queryClient}>
      <Coin params={params} />
    </QueryClientProvider>
  );
}

export function Coin({ params }) {
  const fetchCoinTickers = async () => {
    return await axios
      .get(`${BASE_URL}/tickers/${params}`)
      .then((res) => res.data);
  };
  const { isLoading: tickersLoading, data: tickersData } = useQuery(
    ["tickers", { params }],
    () => fetchCoinTickers(params.coinId),
    { refetchInterval: 5000 }
  );
  console.log(params);
  return (
    <>
      <div>{tickersData?.quotes.USD.price}</div>
      <br />
    </>
  );
}

export function CoinPrice({ params, type }) {
  const fetchCoinTickers = async () => {
    return await axios
      .get(`${BASE_URL}/tickers/${params}`)
      .then((res) => res.data);
  };
  const { isLoading: tickersLoading, data: tickersData } = useQuery(
    ["tickers", { params }],
    () => fetchCoinTickers(params),
    { refetchInterval: 5000 }
  );

  let value;

  switch (type) {
    case "price":
      value = "$" + Math.round(tickersData?.quotes.USD.price);
      break;
    case "change":
      value = tickersData?.quotes.USD.percent_change_1h + "%";
      break;
    case "cap":
      value = tickersData?.quotes.USD.market_cap;
      if (value > 1000000000) {
        value = "$" + value / 1000000000 + "B";
      } else if (value > 1000000) {
        value = "$" + value / 1000000 + "M";
      } else if (value > 1000) {
        value = "$" + value / 1000 + "K";
      } else {
        value = "$" + value;
      }
      break;
    default:
      value = "price";
      break;
  }

  return (
    <>
      <div style={{ color: type === "change" && value < 0 ? "red" : "blue" }}>
        {value}
      </div>
      <br />
    </>
  );
}
