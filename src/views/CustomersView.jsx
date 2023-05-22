import CustomTable from "../components/CustomTable";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function CustomersView(props) {
    const token = sessionStorage.getItem("accessToken");
    const headers = {
        Authorization: "Bearer " + token
    };
    const [customers, setCustomers] = useState([]);
    const [customerFields, setCustomerFields] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8080/customers", {
            headers: headers
        })
            .then(res => {
                setCustomers(res.data);
                setCustomerFields(Object.keys(res.data[0]).filter(elem => elem !== "passHash"));
            })
    }, []);

    const handleDelete = (email) => {
        axios.delete("http://localhost:8080/customers", {
            headers: headers,
            data: {
                email: email
            }
        })
    }

    return (
        <div>
            <CustomTable tableData={customers} fields={customerFields} deleteAction={handleDelete}></CustomTable>
        </div>
    );
}
