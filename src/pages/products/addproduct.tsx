import { useState } from "react";
import CustomInput from "../../components/customInput";
import axios from "axios";
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiVGV0IiwiZW1haWwiOiJtaXNocmEyNzk5OTgxNkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCRlWVVxTHRvanlGVnNhYTRzVDA1ckh1TElWamNWd0RQTmJ3eFN6ckpibkw2WWZRVVUubkNuTyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTE3VDA5OjE3OjIwLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0xN1QwOToxNzoyMC44NTBaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTczMzA0MTgyNSwiZXhwIjoxNzM0MzM3ODI1fQ.CSQ2one4KrA53MEts2lcpUjrJdK66IYa5dN4WRdAZFo";

enum DISCOUNT_TYPE {
  RATE = "rate",
  AMOUNT = "amount",
}

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState<DISCOUNT_TYPE>(DISCOUNT_TYPE.AMOUNT);
  const [error, setError] = useState<null | string>(null);



  const handleSubmit = (e:any) => {
    e.preventDefault();
    addItem();
  };

  const addItem = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/items",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`
        },
        data:{
          name,
          description,
          quantity : parseInt(quantity),
          price: parseInt(price),
          discount: parseInt(discount),
        },
      });
      console.log({ response });
      if (response.status === 201) {
        console.log({ response });
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className="form container">
      <h1>Add Products</h1>
      <form style={{ gap: 16 }} onSubmit={handleSubmit}>
        <CustomInput label="Name" setValue={setName} />
        <CustomInput label="Description" setValue={setDescription} />
        <CustomInput type="number" label="Quantity" setValue={setQuantity} />
        <CustomInput type="number" label="Price" setValue={setPrice} />
        <CustomInput type="number" label="Discount" setValue={setDiscount} />
        <div>
          <p>Discount</p>
          <div style={{ display: "flex", gap: "16px" }}>
            <div className="radio-input">
              <CustomInput
                type="radio"
                label="Rate"
                setValue={() => setDiscountType(DISCOUNT_TYPE.RATE)}
                checked={DISCOUNT_TYPE.RATE === discountType}
              />
              <CustomInput
                type="radio"
                label="Amount"
                setValue={() => setDiscountType(DISCOUNT_TYPE.AMOUNT)}
                checked={DISCOUNT_TYPE.AMOUNT === discountType}
              />
            </div>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}