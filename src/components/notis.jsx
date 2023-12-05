import axios from "axios";
import { useEffect, useState } from "react";

export default function Nosts({ id }) {
  const [notis, setNotis] = useState();
  const fetchData = async () => {
    const res = await axios.get(`/api/apiCliente/extras`, id);
    
  };
  useEffect();
}
