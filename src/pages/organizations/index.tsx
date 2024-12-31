import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "../../api";
import "../../components/table.css";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiVGV0IiwiZW1haWwiOiJtaXNocmEyNzk5OTgxNkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCRlWVVxTHRvanlGVnNhYTRzVDA1ckh1TElWamNWd0RQTmJ3eFN6ckpibkw2WWZRVVUubkNuTyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTE3VDA5OjE3OjIwLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0xN1QwOToxNzoyMC44NTBaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTczNTM5NzIyMywiZXhwIjoxNzM2MDAyMDIzfQ.6cjdmhOKoRrinMHiFz8e5Xr7ljVTpeFNpTrleY1d2u0";

const Organizations = () => {
const [ searchNumber , setSearchNumber] = useState("");
const [ data , setData] = useState<any>([]);
const [ filteredData , setFilteredData] = useState<any>([]);


const filterById = ( id: number) => {
    //filter data by id
    const filteredData = data?.filter(({item}:any) =>item.id ==id);
    setFilteredData(filteredData);
    return filteredData;
};
const fetchOrganization = async () => {
 try{
    const response = await fetch("http://localhost:3000/organizations", {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      console.log({response});
      if(response.status ===200){
        const data  = await response.json();
        console.log({ data });
        setData(data);
      }
    } catch (error) {
        console.error(error);
    }
};
  useEffect(() => {
    fetchOrganization();
  }, []);

//filter data by name on search text change
 useEffect(() => {
    if ( searchNumber ! ==""){
        filterById(parseInt(searchNumber));
    }else {
        setFilteredData(data);
    }
 },[searchNumber]);

 const tableData = searchNumber ? filteredData : data;

 return(
     <div style={{ width: "50%" , margin: "auto"}}>
        <h1>Organizations</h1>
        <div className= "search-container">
            <Search width= {16} height= {16} className=" icon search"/>
            <input
            placeholder="type name here!!!"
            onChange={(e) => {
                setSearchNumber(e.target.value);
            }}
            />
            <button style={{ marginLeft: 16 , padding:"4px 16px", width: "30%"}}
            onClick={() => {}}
            >
                +Add New
            </button>
        </div>
      <table>
         <thead>
            <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Adress</th>
                <th>Contact number</th>
            </tr>
        </thead>
        <tbody>
        {tableData?.map(({organizations }: any) => (
            <tr key={organizations.id}>
                <td>{organizations.name}</td>
                <td>{organizations.Adress}</td>
                <td>{organizations.contactnumber}</td>
            </tr>
        ))}
        </tbody>
     </table>
     {tableData.length === 0 && (
        <p style={{ width: "100%" , textAlign: "center"}}>
            This organizations is not available!!!
        </p>
     )}
        </div>
    )

};
export default Organizations ;