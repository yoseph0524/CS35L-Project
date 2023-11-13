"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import CoinList from "./coins/page";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CoinList />
    </QueryClientProvider>
  );
}
