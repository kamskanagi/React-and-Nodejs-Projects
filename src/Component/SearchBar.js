import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
      props.updateSearchParams({ name:name, price: price, type:type, brand: brand })
  }

    return (

        <div className="container">
            <div className="row">
                <h2> Search for an Item</h2>
            </div>
           
            <div className="row">
                <div className="col">
                <label htmlFor="name-filed">Name:</label>
                <input type="text" id="name-filed" value={name} className="form-control" onChange={(e)=> setName(e.target.value)} />
                </div>
                

                <div className="col">
                <label htmlFor="price-filed">Max Price:</label>
                <input type="text" id="price-filed" value={price} className="form-control" onChange={(e)=> setPrice(e.target.value)} />
                </div>
                

                <div className="col">
                <label htmlFor="type-filed">Type: </label>
                <input type="text" id="type-filed" value={type} className="form-control" onChange={(e)=> setType(e.target.value)} />
                </div>
               

                <div className="col">
                <label htmlFor="brand-filed">Brand: </label>
                <input type="text" id="brand-filed" value={brand}  className="form-control" onChange={(e) => setBrand(e.target.value)} />
                </div>
               
            </div>
            <div className="row">
                <div className="col-4 mt-3">
                    <button type="button" className=" col-4 btn btn-primary" onClick={searchButtonPressed}> Search</button>
                </div>
            </div>

            
        </div>
    );
}

export default SearchBar;