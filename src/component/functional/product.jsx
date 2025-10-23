import { useState } from "react";

const Product = () => {

    const [count, setCount] = useState(0);

    return (
            <>
                <span className='m-2 text-info'>laptop</span>
                <span className='m-2 badge bg-primary'>{count === 0 ? 'Zero' : count}</span>
                <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger'>Delete</button>
            </>
        );

    function handleIncrement(){
        setCount(count + 1);
    }

    function handleDecrement(){
        setCount(count -1);
    }

    function handleDelete(){
        console.log("Delete")
    }
}
 
export default Product;