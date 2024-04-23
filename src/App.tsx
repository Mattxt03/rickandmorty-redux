import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CharList } from './components/CharacterList/CharacterList';
import { Home } from './components/HomePage/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Character } from './components/Character/Character';
import { EpisodeList } from './components/EpisodeList/EpisodeList';
import { LocationList } from './components/LocationList/LocationList';
import { FavoriteCharacters } from './components/FavCharacters/FavoriteCharacters';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Navbar />
          <Outlet />
        </>,
      children: [{
        path: '/',
        element: <Home />
      }, 
       {
        path: 'characters',
        element: <CharList />
      },
      {
        path: 'character/:id',
        element: <Character />
      },
      {
        path: 'episodes',
        element: <EpisodeList />
      },
      {
        path: 'locations',
        element: <LocationList />
      },
      {
        path: 'favorites',
        element: <FavoriteCharacters />
      },
    ]
    },
  ])
  return (
    <>
     <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
