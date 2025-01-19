import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "../../api";
import "../../components/table.css";
import { useNavigate } from "react-router";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiVGV0IiwiZW1haWwiOiJtaXNocmEyNzk5OTgxNkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCRlWVVxTHRvanlGVnNhYTRzVDA1ckh1TElWamNWd0RQTmJ3eFN6ckpibkw2WWZRVVUubkNuTyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTE3VDA5OjE3OjIwLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0xN1QwOToxNzoyMC44NTBaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTczNzAwODQyMSwiZXhwIjoxNzM3NjEzMjIxfQ.RJbggNc9N2U5lRXF29sI2MmqolGcB3dA3B88_hxqJ8U";


const Organizations = () => {
const [ searchNumber , setSearchNumber] = useState("");
const [ data , setData] = useState<any>([]);
const [ filteredData , setFilteredData] = useState<any>([]);

const navigate = useNavigate()


const filterById = ( id: number) => {
    //filter data by id
    const filteredData = data?.filter(({item}:any) =>item.id ==id);
    setFilteredData(filteredData);
    return filteredData;
};
const fetchOrganizations = async () => {
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
    fetchOrganizations();
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
            onClick={() => navigate("/organizations/add")}
            >
                +Add New
            </button>
        </div>
      <table>
         <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>type</th>
                <th>adress</th>
                <th>phone</th>
                <th>created_at</th>
                <th>updated_at</th>
            </tr>
        </thead>
        <tbody>
        {tableData.map((organization: any) => (
            <tr key={organization.id}>
                <td>{organization.id}</td>
                <td>{organization.name}</td>
                <td>{organization.type}</td>
                <td>{organization.adress}</td>
                <td>{organization.phone}</td>
                <td>{organization.created_at}</td>
                <td>{organization.updated_at}</td>
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