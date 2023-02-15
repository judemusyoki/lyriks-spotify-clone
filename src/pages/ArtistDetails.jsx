import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  DetailsHeader,
  Error,
  Loader,
  RelatedSongs as TopSongs,
} from '../components'
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore'

const ArtistDetails = () => {
  const { id: artistId } = useParams()

  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const {
    data: artistData,
    isFetching: isFetchingArtistData,
    error: artistError,
  } = useGetArtistDetailsQuery(artistId)

  if (isFetchingArtistData) return <Loader title="Loading artist details..." />

  if (artistError) return <Error />

  const topSongs = artistData.data[0].views['top-songs']
  // const artistBio = artistData.data[0].attributes.artistBio

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      {/* <p>{artistBio}</p> */}

      {/* TODO: ADD TOP SONGS OR RELATED ARTISTS */}

      <TopSongs
        title="Top Songs"
        data={topSongs.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails
