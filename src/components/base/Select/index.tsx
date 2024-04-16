import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { styleSelect } from './style';
import DropdownIndicator from './DropdownIndicator ';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectProps<Option> {
  options?: Option[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ options = [], placeholder = '', ...props }) => {
  return (
    <ReactSelect<Option>
      components={{ DropdownIndicator }}
      styles={styleSelect}
      options={options}
      placeholder={placeholder}
      {...props}
    />
  );
};

Select.defaultProps = {
  options: [],
  placeholder: '',
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
};

export default Select;
