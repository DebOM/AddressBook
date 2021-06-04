/**
 * This is a reuseable fuctional component written to be used through out you application
 * Component is build with React hook tradition that return three value asyncronously
 * either it returns loading, error or data
 * you can handle these different types of data accooringly where ever you are planning to
 * use this hook
 **/

import {useState, useEffect} from 'react';

interface refType {
  current?: boolean;
}

export const useFetch = (url: any, options: object, ref: refType, initialValue = null) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(url.url, {...options});
          const resJson = await res.json();
          setData(resJson);
        } catch (err) {
          setError(err);
          // console.error(`Error: failed to fetch data from ${url}`);
        } finally {
          setLoading(false);
        }
      })(); //we are self invoking here, we can also define this fuction outside then invoke here
    }
    return () => {
      ref.current = false;
    };
  }, [url, options, ref]);

  return {loading, data, error};
};
