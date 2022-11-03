import React, { Children, createContext, useState } from "react";
import Navbar from "../home/Navbar";

export const DataProvider = createContext()

export default function Context(props) {
    
    const [fakeData, setFakeData] = useState({
        user_name : "fake_name",
        address : "fake_adress",
    })
    
    return (
        <DataProvider.Provider value={fakeData}>
            {props.children}
        </DataProvider.Provider>
    )
}