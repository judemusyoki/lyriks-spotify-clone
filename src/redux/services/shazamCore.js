import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '97d7b56856msh985062827d39b7bp1e3c20jsnc710e94f1866',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
//   },
// }

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '97d7b56856msh985062827d39b7bp1e3c20jsnc710e94f1866',
      )

      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
})

export const { useGetTopChartsQuery } = shazamCoreApi
