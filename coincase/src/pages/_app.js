import axios from "axios";
import { useQuery } from "react-query";
const BASE_URL = "https://api.coinpaprika.com/v1";

const fetchCoins = async () => {
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export default function App() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);
  console.log(data);
  return (
    <div>
      {data?.slice(0, 10).map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            {item.rank}
          </div>
        );
      })}
    </div>
  );
}
