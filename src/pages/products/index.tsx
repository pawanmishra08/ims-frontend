import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
//import axios from "axios";
import { api } from "../../api";

//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiVGV0IiwiZW1haWwiOiJtaXNocmEyNzk5OTgxNkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCRlWVVxTHRvanlGVnNhYTRzVDA1ckh1TElWamNWd0RQTmJ3eFN6ckpibkw2WWZRVVUubkNuTyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTE3VDA5OjE3OjIwLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0xN1QwOToxNzoyMC44NTBaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTczMzA0MDc0MywiZXhwIjoxNzM0MzM2NzQzfQ.rMs6G06hzgPYdcZzY-O67_6v2dIQCHUjqzDx62ldBEY"

interface Item {
  id:number;
  name: string;
  description : string | null;
  quantity : number;
  price : number;
  discount : number;
  discountType : string;
}
interface ItemResponse {
  items: Item;
}

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const filterByName = (name: string) => {
    // filter Data by name
    const filteredData = productData.filter(
      ({ items }: ItemResponse) => items.name.toLowerCase().includes(name.toLocaleLowerCase())
    );
    setFilteredData(filteredData);
    return filteredData;
  };

  const fetchMockData = async () => {
    try {

      const response = await api({
        method: 'get',
        url: '/items'
      })

      console.log({ response });
      if (response.status === 200) {
        // const data = await response.json();
        // console.log({ data });
        setProductData(response.data);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  // filter data by name on search text change
  useEffect(() => {
    fetchMockData();
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(productData);
    }
  }, [searchText]);

  const tableData = searchText ? filteredData : productData;

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Products</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: 16, padding: "4px 16px", width: "30%" }}
          onClick={() => navigate("/products/add")}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map(({items}: ItemResponse) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.description}</td>
              <td>{items.quantity}</td>
              <td>{items.price}</td>
              <td>{items.discount}</td>
              <td>
                <p>Edit</p>
                <p>Delete</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This product is not available!!
        </p>
      )}
    </div>
  );
};

export default Products;