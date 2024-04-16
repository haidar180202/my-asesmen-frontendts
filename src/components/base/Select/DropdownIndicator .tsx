import React from 'react';
import { components } from 'react-select';
import iconSortUp from '../../../assets/icon/icon-sort-up.svg';

const DropdownIndicator: React.FC<any> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={iconSortUp} alt="icon-dropdown-indicator" className="w-[8px] h-[8px] rotate-180" />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
