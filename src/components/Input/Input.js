import React, { useState } from "react";

    export default function Input({ value,onChange }) {
    return(
        <input 
        type="text" 
        placeholder="Vvedyte URL:"
        value={value}
        onChange={onChange}
        />
    )
}


