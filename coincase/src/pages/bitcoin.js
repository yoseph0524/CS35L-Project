import axios from "axios";
import { useQuery } from "react-query";
const BASE_URL = "https://api.coinpaprika.com/v1";

const fetchCoins = async () => {
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export default function Bitcoin() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);
  return <div>hello</div>;
}
