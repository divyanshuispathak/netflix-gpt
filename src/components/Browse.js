import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse