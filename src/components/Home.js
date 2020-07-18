import React, { Component } from 'react';
import "./style.css";
import Room from './Room';

 class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            rooms:localStorage.getItem('rooms')?JSON.parse(localStorage.getItem('rooms')):[]
        }
    }
    render() {
        return (
            <div class="container-fluid">
                <div className="row home">
                    {this.state.rooms.map((item,index)=><Room data={item} key={index} />)}
                </div>
                
            </div>
          
            
        );
    }
}
export default Home;

