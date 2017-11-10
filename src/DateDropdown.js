import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

const dates = ['8/30/17', '8/31/17', '9/1/17']

class DateDropdown extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  renderDatesList = () => {
    var dateList = dates.map(function(date) {
      return <Option value={date} key={date}>{date}</Option>;
    })
    return (
      <Select defaultValue="All" style={{ width: 120 }} onChange={this.handleChange}>
        {dateList}
      </Select>
    )
  }

  render() {
    if (dates.length > 1) {
      return (
        <div>
          {this.renderDatesList()}
        </div>
     );
   } else {
     return ('')
   }
  }
}

export default DateDropdown;
