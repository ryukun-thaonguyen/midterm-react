import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Room extends Component {
   constructor(){
       super();
       this.order=this.order.bind(this);
   }
    render() {
        var data=this.props.data;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 item">
            <div className="card">
              <img className="card-img-top img" src={data.image} alt=""/>
              <div className="card-body">
                <h5 className="card-title">{data.name}
                </h5>
                <p class="card-text text">PHONG 
               <span className="span-text">{data.name}</span>
                </p>
                <p class="card-text text">CHO NGHI 
               <span className="span-text">{data.number}Nguoi lon</span> 
                </p>
                <p class="card-text text">KICH THUOC 
               <span className="span-text">{data.area}m<sup>2</sup></span>
                </p>
                <p class="card-text text">GIA PHONG 
               <span className="span-text">{this.formatNumber(data.price)} vnd</span>
                </p>
                {data.oldprice>=data.price &&<p class="card-text text">GIA CU 
               <span className="span-text-old">{this.formatNumber(data.oldprice)} vnd</span>
                </p>}
                <p class="card-text">XEM 
               <span className="span-text-book"><Link className="btn span-text-book" onClick={this.order} to="/" role="button">Dat Phong</Link></span>
                </p>
              </div>
            </div>
              </div>   
        )
    }
    order(){
        alert('Thank you your order')
    }
    
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
}
