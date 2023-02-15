import { ArtistCard, Error, Loader } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopArtists = () => {
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
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songsData?.map((track, i) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  )
}

export default TopArtists
