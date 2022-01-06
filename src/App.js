import './App.css';
import MovieList from './Pages/MovieList/view/MovieList'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div style={{ backgroundColor: '#f2f1ef' }}>
        <MovieList/>
    </div>
    </Provider>
  );
}

export default App;
