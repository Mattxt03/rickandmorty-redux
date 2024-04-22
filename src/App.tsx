import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CharList } from './components/CharacterList/CharacterList';
import { Home } from './components/HomePage/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Character } from './components/Character/Character';

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
        path: 'character/:id', // Dynamic route parameter for character ID
        element: <Character />
      },
      /* {
        path: 'episodes',
        element: <Episodes />
      } */
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
