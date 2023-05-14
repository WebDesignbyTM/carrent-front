import CustomTable from "../components/CustomTable";
import axios from 'axios';

export default function CustomersView(props) {
    const headers = {
        'Content-Type': 'application/json'
    };
    // fetch("http://127.0.0.1:8080/customers", headers)
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    const token = sessionStorage.getItem("accessToken");
    axios.get("http://127.0.0.1:8080/hello", {
        headers: {
            Authorization: "Bearer " + token
        }
    })
        .then(res => console.log(res.data))
    return (
      <div>
        <CustomTable></CustomTable>
      </div>
    );
}