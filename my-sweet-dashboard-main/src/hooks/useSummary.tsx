import { useEffect, useState } from "react";

export function useSummary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/summary`
        );
        const json = await res.json();
        setSummary(json);
      } catch (e) {
        console.error(e);
      }
    };

    fetchSummary();
    const id = setInterval(fetchSummary, 3000);
    return () => clearInterval(id);
  }, []);

  return summary;
}
