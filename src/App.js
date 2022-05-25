import Info from "./Infor.js";
import SearchBar from "./Component/SearchBar.js";
import AddItem from "./Component/AddItem.js";
import ItemsDisplay from  "./Component/ItemsDisplay.js";
import './App.css';
import { useState } from "react";

import styled from "styled-components"


const Title = styled.h1`
color: red;
`

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: []});

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    
    let items = data["items"]
    item.id = items.length // this will be the id of the items
    
    const requestOption = {
  
      methos: "POST",
      headers: {
        "Content-Type": "appplication/json",
      },
      body: JSON.stringify(item)
    }

    fetch("http://localhost:3000/items", requestOption)
      .then((res) => res.json())
      .then((data) => {
        items.push(data);
        setData({ items: items })
      });
  }



  const filterData = (data) => {
    
    const filteredData = []

    if (!filters.name) {
      return data
    }

    for (const item of data) {
        if (filters.name !== "" && item.name !== filters.name) {
            continue
        }
        if (filters.price !== 0  && item.price !== filters.price) {
            continue
        }

        if (filters.type !== "" && item.type !== filters.type) {
            continue
        }
        if (filters.brand !== "" && item.brand !== filters.brand) {
            continue
        }
      filteredData.push(item)
    }
    return filteredData
}
  return (
    <div className="container">

      <div className="row mt-3">
      <SearchBar updateSearchParams={updateFilters} />


      </div>
      <div className="row ">
      <ItemsDisplay items={data["items"]}/>
        
      </div>
      <div className="row ">
        <AddItem addItem={addItemToData} />
      </div>
      
      
      {/* <Title>test</Title> */}
     
      
      {/* <p>Name: {"name" in data ? data["name"] : "No Data"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No Data"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Data"}</p>
      <p>Name: {"brand" in data ? data["brand"] : "No Data"}</p> */}
      
      {/* <Info />
      <ButtonState /> */}
    </div>
  );
}

// function ButtonState() {

//   const [title, setTitle] = useState()
//   const [counter, setCounter] = useState(0)
  
//   const UpdateTitleClicked  = () => {
//     setTitle("our title")
//   }

//   const UpdateCounterClicked = () => {
//     setCounter(counter +1)
//   }

//   return (
//     <div>
//       <p>Title:{title} </p>
//       <p>Counter: {counter}</p>
//       <button onClick = {UpdateTitleClicked } > Update Title</button>
//       <button onClick = {UpdateCounterClicked }  >Update Counter</button>
//     </div>
//   );
// }

// function AddItem(props) {
//   return (
//     <div>
//      <form>
//        <label for="test-form"> Try Something</label>
//         <input type="text" value={props.text} id="text-form" />
//         <p>{props.number}</p>
//      </form>
//     </div>
//   );
// }

export default App;
