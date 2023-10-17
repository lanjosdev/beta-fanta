import api from './config.json';
import axios from "axios";

// Base URL: https://cloudmanager.bizsys.com.br/api/apprequest/
// const api = require('./config.json');
export const API_URL = api.api_url;


// End point Website POST
export async function CALL_SERVER(sessionKey) {
    const response = await axios.post(API_URL, {
        "fk_id_project": 8,
        "session_key": sessionKey,
    },
    {
        headers: {"Content-type": "application/json; charset=UTF-8", "Authorization": "Bearer $2y$10$L5q1Zr45A2VZQbtE4zZQuN3kMH69h4ZDlaCHC3XYdLRQq6onTL17"}
    }
    )

    console.log(response);
}

