import { useState, useEffect } from "react";

export const usePromise = (promise: Promise<any>) => {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const doEffect = async () => {
      try {
        setResult(await promise);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    doEffect();
  }, []);

  return { result, error, loading };
};

export const useLazyPromise = (lamdba: (...args: any) => Promise<any>) => {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (...args: any) => {
    setLoading(true);
    try {
      setResult(await lamdba(...args));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { result, error, loading, execute };
};
