import './App.css';
import TopMoviesContainer from './containers/TopMoviesContainer';
<style>@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');</style>

function App() {
  return (
    <div className="App">
      <h1 className='font-heading'> IMDB Top 250 Movies</h1>
      <TopMoviesContainer/>
    </div>
  );
}

export default App;
