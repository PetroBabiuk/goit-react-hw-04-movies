import {lazy, Suspense} from 'react';
import Navigation from 'components/Navigation';
import { Switch, Route } from 'react-router';
import './App.css';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "HomePage" */ ));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */ ));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */ ));
const NotFoundPage = lazy(() => import('./views/NotFoundPage' /* webpackChunkName: "NotFoundPage" */ ));

const App = () => {

  return (
    <div>
      <Navigation />

      <Suspense
        fallback={<Loader
          type="ThreeDots"
          color="#3f51b5"
          height={280}
          width={280} />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;