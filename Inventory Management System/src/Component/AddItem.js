import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = () => {
        props.addItem({ name: name, price: price, type: type, brand: brand, });
        setBrand("")
        setName(" ")
        setType(" ")
        setPrice(0)
  }


    return (

        <div className="row">
            <h2> Add an Item</h2>
            <div className= "row">
                <label htmlFor="name-filed">Name:</label>
                <input type="text" id="name-filed" className = "form-control" value={name} onChange={(e)=> setName(e.target.value)} />

                <label htmlFor="price-filed">Price:</label>
                <input type="text" id="price-filed" className = "form-control" value={price} onChange={(e)=> setPrice(e.target.value)} />

                <label htmlFor="type-filed">Type: </label>
                <input type="text" id="type-filed" className = "form-control" value={type} onChange={(e)=> setType(e.target.value)} />

                <label htmlFor="brand-filed">Brand: </label>
                <input type="text" id="brand-filed" className = "form-control" value={brand} onChange={(e) => setBrand(e.target.value)} />
                
            </div>
            
            <div className="row mt-3">
                <button type="button"  className = "btn btn-primary" onClick={addItemButtonPressed}> Add Item</button>
            </div>
           
            <p>Name:{name}</p>
            <p>Max Price:{price}</p>
            <p>Type:{type}</p>
            <p>Brand:{brand}</p>
        </div>
    );
}

export default AddItem;