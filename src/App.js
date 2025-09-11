import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

export default function App() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [category, setCategory] = useState(" ");
  const [condition, setCondition] = useState();
  const [waterproof, setWaterproof] = useState(false);
  const [feature, setFeature] = useState([]);
  const [date, setDate] = useState();
  const [unit, setUnit] = useState();
  const [cost, setCost] = useState();
  const [vendor, setVendor] = useState(" ");

  const handleCondtion = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCondition(value);
    } else {
      ("");
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      setFeature([...feature, value]);
    } else {
      setFeature(feature.filter((fea) => fea != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && number && category && date && unit && cost && vendor) {
      setForm(true);
    }
  };

  return (
    <div className="bg-dark text-light">
      <Header />

      <main className="container ">
        <h1> Inventory Form </h1>
        <form action="" onSubmit={formHandler}>
          <label htmlFor="productName">Product Name:</label>
          <br />
          <input
            className="form-control"
            id="productName"
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="quantity">Quantity: </label>
          <br />
          <input
            className="form-control"
            type="number"
            id="quantity"
            onChange={(event) => setNumber(event.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="category">Category: </label>
          <br />
          <select
            name=""
            className="form-control"
            id="Category"
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="" checked>
              Select Category
            </option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Equipment">Equipment</option>
          </select>
          <br />
          <br />
          <label htmlFor="condition">Condition: </label>
          <br />
          <input
            className="form-check-inline"
            type="radio"
            name="cate"
            value="New"
            onChange={handleCondtion ? "Plese select the value" : ""}
          />
          New
          <input
            className="form-check-inline"
            type="radio"
            name="cate"
            value="old"
            onChange={handleCondtion}
          />
          old
          <br />
          <br />
          <input
            type="checkbox"
            id="check"
            onChange={(event) => setWaterproof(event.target.checked)}
          />
          WaterProof
          <br />
          <br />
          <label htmlFor="feat">Features: </label>
          <br />
          <input type="checkbox" value="Lightweight" onChange={handleChange} />
          Lightweight
          <input type="checkbox" value="Durable" onChange={handleChange} />
          Durable
          <br />
          <br />
          <label htmlFor="store">Date of Storage: </label>
          <br />
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            required
            className="form-control"
          />
          <br />
          <br />
          <label htmlFor="unit">Storage Unit Number: </label>
          <br />
          <input
            type="number"
            onChange={(event) => setUnit(event.target.value)}
            required
            className="form-control"
          />
          <br />
          <br />
          <label htmlFor="unitCost"> Unit Cost: </label>
          <br />
          <input
            type="number"
            className="form-control"
            onChange={(event) => setCost(event.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="vemdor"> Vendor Name: </label>
          <br />
          <input
            type="text"
            className="form-control"
            onChange={(event) => setVendor(event.target.value)}
            required
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        {form && (
          <div>
            <h1>Submitted Details: </h1>
            <p>Product Name : {name}</p>
            <p>Quantity: {number} </p>
            <p>Category: {category} </p>
            <p>Condition: {condition} </p>
            <p>Waterproof: {waterproof ? "Yes" : "No"} </p>
            <p>Features : {feature ? `${feature.join(" , ")}` : "None"} </p>
            <p>Date of storage: {date} </p>
            <p>Storage unit number : {unit} </p>
            <p>Unit cost: ${cost}</p>
            <p>Vendor Name: {vendor} </p>
            <p>Total cost : ${unit * cost}</p>
          </div>
        )}
      </main>
    </div>
  );
}
