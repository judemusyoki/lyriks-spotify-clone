import { useSelector } from 'react-redux'

import { Error, Loader, SongCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const {
    data: songsData,
    isFetching: isFetchingSongs,
    error: songsError,
  } = useGetTopChartsQuery()

  if (isFetchingSongs) return <Loader title="Loading songs around you..." />

  if (songsError) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts You
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

export default TopCharts
