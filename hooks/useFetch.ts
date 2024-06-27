import { ChallengeData } from "@/app/models/ChallengeData";
import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState<ChallengeData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data: ChallengeData) => {
        // console.log("Fetched data -> ", JSON.stringify(data, null, 2));
        setData(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
