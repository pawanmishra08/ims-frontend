import { useEffect, useState } from "react";
import { api } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, findone } from "../../redux/Slices/productslice";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";


interface Item {
  id: number;
  name: string;
  description: string | null;
  quantity: number;
  price: number;
  discount: number;
  discountType: string;
}

interface ItemResponse {
  items: Item;
}

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<ItemResponse[]>([]);
  // const [productData, setProductData] = useState<ItemResponse[]>([]);

  const dispatch = useDispatch();
  const {data: products, item} = useSelector((state: any) => state.products);
  console.log({ products });

  const navigate = useNavigate()


  const filterByName = (name: string) => {
    // filter Data by name
    const filteredData = products.filter(
      ({ items }: ItemResponse) => items.name.toLowerCase() == name.toLowerCase()
    );
    setFilteredData(filteredData);
    return filteredData;
  };

  const fetchMockData = async () => {
    try {
      const response = await api({
        method: 'get',
        url: '/items',
      })
      if (response.status === 200) {
        dispatch(addProducts(response.data));
      }
    } catch (error) {
      console.error({ error });
    }
  };

  const handleDelete = (itemID: number) => {
    // API cal to delete item
  }

  // filter data by name on search text change
  useEffect(() => {
    fetchMockData();
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(products);
    }
  }, [searchText]);

  useEffect(() => {
    if (products?.length > 0) {
      dispatch(findone({ id: 2 }));
      console.log({ item });
    }
  }, [products]);

  const tableData = products ?? [];
  console.log({tableData})

  return (
    <div>
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
              <td style={{ display: "flex", flexDirection: "row", gap: 4 }}>
                <p>Edit</p>
                <p onClick={() => handleDelete(items.id)}>Delete</p>
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