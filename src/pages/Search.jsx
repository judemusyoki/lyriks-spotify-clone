import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Error, Loader, SongCard } from '../components'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore'

const SearchPage = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const {
    data: searchData,
    isFetching: isFetchingSearch,
    error: songsError,
  } = useGetSongsBySearchQuery(searchTerm)

  const searchedSongs = searchData?.tracks?.hits?.map((song) => song.track)

  if (isFetchingSearch) return <Loader title="Loading songs around you..." />

  if (songsError) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {searchedSongs?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={searchData}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchPage
