import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

class Dropdown extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <div>
        <Select defaultValue="All" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="All">All</Option>
          <Option value="Concerts">Concerts</Option>
          <Option value="Sports">Sports</Option>
        </Select>
      </div>
   );
  }
}

export default Dropdown;
