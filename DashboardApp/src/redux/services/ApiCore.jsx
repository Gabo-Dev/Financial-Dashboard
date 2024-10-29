import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// RTK Query
export const apiCore = createApi({
    reducerPath: 'apiCore',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yahoo-finance15.p.rapidapi.com/api/',
        
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
            query: () => 'v1/markets/stock/history?symbol=EURUSD%3DX&interval=3mo',
            // keep data for a maximum of 3 minutes 
            keepUnusedDataFor: 180,
        }),
        getNews: builder.query({
            query: () => 'v2/markets/news',
            keepUnusedDataFor: 180,
        })
    }),

});

export const {useGetCurrenciesQuery, useGetNewsQuery} = apiCore;