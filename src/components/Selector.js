import React from 'react';
import { Select } from 'antd';

const CustomizedSelector = (props) => {

    const { param, title } = (props);
    const { Option } = Select;

    return (
        <Select defaultValue={title} style={{ width: 120 }} >
            {param.map((element, index) => (
                <Option value={element} key={index} >{element}</Option>
            ))}
        </Select>
    );
};

export default CustomizedSelector;