import React, { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../api";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import "./auth.css";

export default function Login(){
 const [ username , setUsername] = useState("");
 const [ password, setPassword] = useState("");
 const [ error , setError] = useState("");
const navigate = useNavigate();

const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(username , password)
      try{
          const response = await api.post("/auth/login", { username , password });
          console.log(response);
          navigate("/");
          localStorage.setItem("token", response.data.token);
          setError("")
        }  catch (error: any){
            console.error(error);
            setError(error.response.data.message);
        }
    }
    return(
        <div className="form-container">
            <h1 className="header">Login</h1>
            <form className="login-form" onSubmit={ handlesubmit }>
                <CustomInput label="Username" setValue={setUsername}/>
                <CustomInput label="password" setValue={ setPassword}/>
                {error && <p className="error">{error}</p>}
                <CustomButton type="submit" label="Login"/>
            </form>
        </div>
    )
}