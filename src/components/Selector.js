import React from 'react';
import { Select } from 'antd';

const CustomizedSelector = (props) => {

    const { param, title } = (props);
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Select defaultValue={title} style={{ width: 120 }} onChange={handleChange}>
            {param.map((element, index) => (
                <Option value={element} key={index} >{element}</Option>
            ))}
        </Select>
    );
}

export default CustomizedSelector;