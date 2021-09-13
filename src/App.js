// import React, {useState} from 'react';
// import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation';
import { Switch, Route } from 'react-router';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from 'components/MovieDetailsPage';
import NotFoundPage from './views/NotFoundPage';
import './App.css';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import Modal from './components/Modal';

const App = () => {
  // const [query, setQuery] = useState('');
  // const [showModal, setShowModal] = useState(false);
  // const [modalImage, setModalImage] = useState('');

  // const openModal = (modalImage) => {
  //   setShowModal(true);
  //   setModalImage(modalImage);
  // };
  
  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // const getQuery = query => {
  //   setQuery(query);
  // }

  return (
    <div>
      <Navigation />

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
      {/* {showModal && <Modal modalImage={modalImage} onClose={closeModal} />}
        <Searchbar onSubmit={getQuery} />
        <ImageGallery query={query} onClick={openModal} /> */}
      {/* <ToastContainer />  */}
    </div>
  );
}

export default App;