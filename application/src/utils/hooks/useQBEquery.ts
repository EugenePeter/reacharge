"use client";
import { fetchRegistrationQuestions } from "../api";
import { useEffect, useMemo, useState } from "react";

type QueryType = "retrieveRegistrationQuestions";
type RegistrationQuestion = {
  id: number;
  key: string;
  label: string;
  placeholder: string;
  helperText: string;
};

/**
 * Custom hook for performing QBE queries.
 * @param queries - The type of query to perform.
 * @returns A tuple containing the query result and loading state.
 */
export const useQBEquery = (queries: QueryType) => {
  const [result, setResult] = useState<RegistrationQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  // Memoize the queriesToPerform object
  const queriesToPerform = useMemo(
    () => ({
      retrieveRegistrationQuestions: async () => {
        try {
          const result: RegistrationQuestion[] =
            await fetchRegistrationQuestions();
          return result;
        } catch (error) {
          // Handle error by returning an empty array
          return [];
        }
      },
    }),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the query type exists in queriesToPerform object
        if (!queriesToPerform[queries]) {
          return [];
        }
        // Perform the query and update the result
        const result = await queriesToPerform[queries]();
        setResult(result);
        setLoading(false);
      } catch (error) {
        setResult([]);
        setLoading(false);
      }
    };
    fetchData();
  }, [queries, queriesToPerform]);

  return [result, loading] as const;
};
