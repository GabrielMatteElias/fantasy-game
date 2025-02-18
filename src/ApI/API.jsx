import { data } from "react-router-dom";

export default async function name(params) {
    const response =  fetch('http://192.168.80.173:9015/times', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },  
    })
    const data = (await response).json();
    return data;
}


