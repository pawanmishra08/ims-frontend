import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",

});
api.interceptors.request.use((  config  ) => {
  const token = localStorage.getItem('token')
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiVGV0IiwiZW1haWwiOiJtaXNocmEyNzk5OTgxNkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCRlWVVxTHRvanlGVnNhYTRzVDA1ckh1TElWamNWd0RQTmJ3eFN6ckpibkw2WWZRVVUubkNuTyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTE3VDA5OjE3OjIwLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0xN1QwOToxNzoyMC44NTBaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTczMzA0MTgyNSwiZXhwIjoxNzM0MzM3ODI1fQ.CSQ2one4KrA53MEts2lcpUjrJdK66IYa5dN4WRdAZFo";

   config.headers.Authorization = `Bearer ${token}`;
   config.headers['content-Type'] =  'application/json'
   return config;
})

export {api};