import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Data from "../../../data.json";

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiVGV0IiwiZW1haWwiOiJtaXNocmEyNzk5OTgxNkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCRlWVVxTHRvanlGVnNhYTRzVDA1ckh1TElWamNWd0RQTmJ3eFN6ckpibkw2WWZRVVUubkNuTyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTE3VDA5OjE3OjIwLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0xN1QwOToxNzoyMC44NTBaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTczMjY5NDg3MywiZXhwIjoxNzMzOTkwODczfQ.TE4CCzbDtk_r4htqJyhkCdcbXA5xStkbaHVhXWMH6Ss"

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(Data);

  const headerKeys = Object.keys(Data[0]);

  const filterByName = (name: string) => {
    // filter Data by name
    const filteredData = Data?.filter(({ item } : any) =>
      item.name.toLowerCase() == name.toLowerCase()
    );
    setFilteredData(filteredData);
    return filteredData;
  };

  const fetchItems = async () => {
    try {
      const response = await fetch (
        "http://localhost:8000/items" , {
          headers: {
            Authorization : 'Bearer ${AUTH_TOKEN}'
          },
        }
      );
      console.log({ response });
      if (response.status === 200){
        const data = await response.json();
        console.log({ data });
        setData( data );
      }
    }catch ( error ){
    console.error({ error});
    }
  };

  // filter data by name on search text change
  useEffect(() => {
    fetchItems();
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(Data);
    }
  }, [searchText]);

  const tableData = searchText ? filteredData : Data;

  // filterByName("marker");

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Products</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon-search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button style={{ marginLeft: 16, padding: "4px 16px", width: "30%"}} onClick={() => {}}>+ Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ item }: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This product is not available!!
        </p>
      )}
    </div>
  );
};

export default Products;