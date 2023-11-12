"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "@/pages/_app";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
