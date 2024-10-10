import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiCore = createApi({
    reducerPath: 'apiCore',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yahoo-finance15.p.rapidapi.com/api/v1',
        prepareHeaders: (headers) => {
            headers.set(
                'X-RapidAPI-Key',
                "0ac81260a9mshdd500b84955e5b0p18608bjsn2c40f82defbb",
            );

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrencies: builder.query({
            query: () => 'markets/stock/history?symbol=EURUSD%3DX&interval=3mo',
        }),
    }),
});

export const {useGetCurrenciesQuery} = apiCore;