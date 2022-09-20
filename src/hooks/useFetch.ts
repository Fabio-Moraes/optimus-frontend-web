import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

import api from '../services/axios';

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | []>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | []>([]);

    useEffect(() => {
        api.get(url, options)
            .then((response) => {
                setData(response.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, [])

    return { data, error, isFetching };
}
