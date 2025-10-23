import { Component } from 'react';
import './product.css'

class Products extends Component {
    state = {
        count: 0,
        productName: 'laptop'
    }
    render() {
        
        return (
            <div>
                <span className='m-2 text-info'>{this.props.productName}</span>
                <span className='m-2 badge bg-primary'>{this.state.count === 0 ? 'Zero' : this.state.count}</span>
                <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>Delete</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
        console.log(this.state);
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1});
    }

    handleDelete = () => {
        console.log("Delete")
    }
}
 
export default Products;
