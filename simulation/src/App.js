import Header from './components/Header'
import Button from './components/Button'
function App() {

  return (
    <div className='some-page-wrapper'>
      <header>
        <div className= 'spacer'>  </div>
        <Button className= 'btn' color= '#B3A369' text= 'Logout'> Logout </Button> 
      </header>
      <div className='row'>
        <div className='column'> 
        <div className= 'spacer'>  </div>
            <Header />
            <div className= 'spacer'>  </div>
        </div>
        <div className='column'>
        <div className= 'spacer'>  </div>
          <Button />
          <div className= 'spacer'>  </div>
        </div>
      </div>

    </div> 
  );
}
export default App;
