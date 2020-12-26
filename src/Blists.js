import React, { Component } from 'react';
import request from 'superagent';
import Button from 'react-bootstrap/Button';
import CardLists from './CardLists';

 
class Blists extends Component {
    
    constructor(props) {
        super(props);
            this.listBooks = this.listBooks.bind(this)
         this.state={
             books:[]
         }   
        }
      
        listBooks=(e)=>{
        e.preventDefault();
        request.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=zuZ83zeBYmKOsC6h1MVfYIhN18dyjXKs")
        .then((data)=>{
            console.log(data);
            this.setState({books:[...data.body.results.books]})
        })
    }
    
    render(){
        return (
          
            <div className="bod">
                <br/>
                <Button variant="success" onClick={this.listBooks}>Click here to Get New York Best Selling Books List</Button>
                <CardLists books={this.state.books}/>
                <div className="quote"><h1>“A room without books is like a body without a soul.”<br/>
― Marcus Tullius Cicero</h1></div>
                        
            </div>
           
        );
    }
}
export default Blists;
