import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import Blists from './Blists';
import background from "./book.jpg";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
render(){
  return(
    <div className="App" style={{ backgroundImage: `url(${background})`,
    width:'auto' ,
    height:'1100px'}}>
    <Header />
    <Blists />
    </div>
  );
}
}

export default App;

