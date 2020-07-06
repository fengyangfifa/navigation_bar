import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import {padLeft, range} from '../utility'


class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedYear: this.props.year
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (event) => {
    console.log(this.node.contains(event.target));    
    if (this.node.contains(event.target) && this.buttonNode === event.target) {
      return ;
    }
    if (this.yearNode && this.yearNode.contains(event.target)) {
      return ;
    }
    this.setState({
      isOpen: false
    });
  }
  
  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
      selectedYear: this.props.year
    });
  }
  
  selectYear(event, yearNumber){
    event.preventDefault();
    this.setState({
      selectedYear: yearNumber
    });
  }

  selectMonth(event, monthNumber) {
    event.preventDefault();
    this.setState({
      isOpen: false
    });
    this.props.onChange(this.state.selectedYear, monthNumber);
  }

  render() {
    const {year, month} = this.props;
    const {isOpen, selectedYear} = this.state;
    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map(number => number + year);
    return (
      <div className="dropdown month-picker-component" ref={(ref) => {this.node = ref;}}>
        <h4>选择月份</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
          ref={(ref) => {this.buttonNode = ref;}}
        >
          {`${year}年 ${padLeft(month)}月`}
        </button>
        {isOpen && 
          <div 
            className="dropdown-menu" 
            style={{display: "block"}}
          >
            <div className="row">
              <div className="col border-right years-range" ref={(ref) => {this.yearNode = ref;}}>
                { 
                  yearRange.map((yearNumber, index) => (
                    <a 
                      key={index} 
                      href="#"
                      onClick={(event) => {this.selectYear(event, yearNumber);}}
                      className={yearNumber === selectedYear ? "dropdown-item active" : 'dropdown-item'}
                    >
                      {yearNumber} 年
                    </a>
                  ))
                }
              </div>
              <div className="col months-range">
                { 
                  monthRange.map((monthNumber, index) => (
                    <a 
                      key={index} 
                      href="#"
                      onClick={(event) => {this.selectMonth(event, monthNumber);}}
                      className={monthNumber === month ? "dropdown-item active" : "dropdown-item"}
                    >
                      {padLeft(monthNumber)} 月
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MonthPicker;
