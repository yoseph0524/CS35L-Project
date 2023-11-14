"use client";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import ApexChart from "react-apexcharts";
import { styled } from "styled-components";
import axios from "axios";

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Chart({ params }) {
  const fetchCoinHistory = async () => {
    return await axios
      .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${params.coinId}`)
      .then((res) => res.data);
  };
  const { isLoading, data } = useQuery(
    ["ohlcv", { params }],
    () => fetchCoinHistory(param.coinId),
    { refetchInterval: 10000 }
  );
  console.log(data);
  const series = data
    ? data.map((item) => ({
        x: new Date(item.time_open * 1000),
        y: [
          parseFloat(item.open),
          parseFloat(item.high),
          parseFloat(item.low),
          parseFloat(item.close),
        ],
      }))
    : [];

  const options = {
    chart: {
      type: "candlestick",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <ChartContainer>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          style={{ width: "85%" }}
          options={options}
          series={[
            {
              data: series,
            },
          ]}
          type="candlestick"
        />
      )}
    </ChartContainer>
  );
}
