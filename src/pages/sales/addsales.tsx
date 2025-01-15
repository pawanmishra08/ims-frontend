import { useState } from "react";
import CustomInput from "../../components/customInput";
import axios from "axios";

export default function AddSales() {
    const [Id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [customerid, setCustomerId] = useState("");
    const [orderdate, setOrderDate] = useState("");
    const [subtotal, setSubTotal] = useState("");
    const [discount, setDiscount] = useState("");
    const [beforetax, setBeforeTax] = useState("");
    const [taxamount, setTaxAmount] = useState("");
    const [error , setError] = useState("");

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        addItem();
    };

    const addItem = async () => {
        try{
            const response = await axios({
                method: "POST",
                url: "http://localhost:3000/items",
                data:{
                    id:parseInt(Id),
                    description,
                    customerid:parseInt(customerid),
                    orderdate:parseInt(orderdate),
                    subtotal:parseInt(subtotal),
                    discount:parseInt(discount),
                    beforetax:parseInt(beforetax),
                    taxamount:parseInt(taxamount),
                },
            });
            console.log({ response});
            if (response.status ===201){
                console.log({ response});
            }
        }catch (error){
            console.error({ error });
        }
    };
    return (
       <div className="form-container">
          <h1>Add Sales</h1>
          <form style={{ gap:16}} onSubmit={handleSubmit}>
            <CustomInput label="Id" setValue={setId}/>
            <CustomInput required={false} label="description" setValue={setDescription}/>
            <CustomInput type="number" label="customerid" setValue={setCustomerId}/>
            <CustomInput type="number" label="orderDate" setValue={setOrderDate}/>
            <CustomInput type="number" label="subtotal" setValue={setSubTotal}/>
            <CustomInput type="number" label="discount" setValue={setDiscount}/>
            <CustomInput type="number" label="beforetax" setValue={setBeforeTax}/>
            <CustomInput type="number" label="taxamount" setValue={setTaxAmount}/>
            {error && <p style={{ color: "red"}}>{error}</p>}
            <button type="submit">Submit</button>
           </form>
        </div>
    );
}