"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import Coins from "@/pages/_app";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Coins />
    </QueryClientProvider>
  );
}
