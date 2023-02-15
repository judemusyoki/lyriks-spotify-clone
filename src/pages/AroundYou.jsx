import axios from 'axios'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const {
    data: songsData,
    isFetching: isFetchingSongs,
    error: songsError,
  } = useGetSongsByCountryQuery(country)

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_6qWr9yp7P153a6vKmXElyVZVdhOi2`,
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [country])

  if (isFetchingSongs && loading)
    return <Loader title="Loading songs around you..." />

  if (songsError && country) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">{country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songsData?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songsData}
          />
        ))}
      </div>
    </div>
  )
}

export default AroundYou
