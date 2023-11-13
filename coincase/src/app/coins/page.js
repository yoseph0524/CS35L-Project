import { useQuery } from "react-query";
import Link from "next/link";
import { fetchCoins } from "../api";
import QueryProvider from "../queryProvider.js";
import { CoinPrice } from "./[coinId]/page";
import { styled } from "styled-components";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 60px;
  justify-content: center;

  align-items: center;
`;

const Div = styled.div`
  text-align: center;
  overflow: overlay;
  padding: 0;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoinImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 8px;
  transition: 300ms all;
`;

const Button = styled.button`
  background-color: blue;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export default function CoinList() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);
  return (
    <div>
      <Row>
        <Div>Name</Div>
        <Div>Price</Div> <Div>Change</Div> <Div>Market Cap</Div>
        <Link href="/" style={{ display: "flex", justifyContent: "center" }}>
          <Button>Buy</Button>
        </Link>
      </Row>
      {data?.slice(0, 10).map((item) => (
        <Row>
          <Div>
            <CoinImg
              src={`https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase()}`}
            />
            <NameDiv>
              <Div>{item.name}</Div>
              <Div>{item.symbol}</Div>
            </NameDiv>
          </Div>
          <Div>
            <CoinPrice params={item.id} type="price" />
          </Div>
          <Div>
            <CoinPrice params={item.id} type="change" />
          </Div>
          <Div>
            <CoinPrice params={item.id} type="cap" />
          </Div>
          <button>Buy</button>
        </Row>
      ))}
    </div>
  );
}
