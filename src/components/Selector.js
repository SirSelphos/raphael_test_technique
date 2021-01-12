import { Select } from 'antd';

const CustomizedSelector = (props) => {

    const { products } = props

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Select defaultValue="M" style={{ width: 120 }} onChange={handleChange}>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
            <Option value="XXL">XXL</Option>
        </Select>
    );
}

export default CustomizedSelector;