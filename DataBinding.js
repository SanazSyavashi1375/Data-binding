import React, { useState } from "react";
const DataBinding = () => {
    const [data, setData] = useState('');
    return ( <
        >
        <
        h1 > Data Binding Exercise < /h1> <
        input type = 'text'
        value = { data }
        onChange = { ev => setData(ev.target.value) }
        /> <
        h3 > { data } < /h3> <
        />
    )
}
export default DataBinding;