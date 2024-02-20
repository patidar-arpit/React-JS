import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className='App'>

      <div class="input-group mb-3" style={{ width: "30%" }}>
        <input type="text" readOnly class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary"
            type="button" style={{ backgroundColor: "black" }}>Copy</button>
        </div>
      </div>


    </div>


  )

}

export default App;
