import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
           isDeleted:false
        }
        this.onDelete=this.onDelete.bind(this);
    }
    onDelete(){
       var products=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[]
        var index=-1;
        for(let i=0;i<products.length;i++){
            if(products[i].id==this.props.data.id){
                index= i;
                break;
            }
        }
        products.splice(index,1);
        localStorage.setItem('products',JSON.stringify(products));
        this.setState({
            isDeleted:true
        })
      }
    render() {
        if(this.state.isDeleted){
            return(
                <Redirect to="/"/>
            )
        }
        var data=this.props.data;
        return (
            <tr style={{fontSize:"15px", fontWeight:"bold",}}>
                <td >
                    {data.id}
                </td>
                <td >
                    {data.name}
                </td>
                <td>
                    {data.price+"  vnd"}
                </td>
                <td>
                    <img style={{height: "150px", width:"150px"}} src={data.image}/>
                </td>
                <td >
                    <Link to={'/'+data.id}><a  className="btn" role="button"><i  className="fas fa-edit"></i></a></Link>
                    <a className="btn" onClick={this.onDelete} role="button"><i className="fa fa-trash text-danger" aria-hidden="true"></i></a>
                </td>
               
            </tr>
          
        );
    
}
}

export default Product;