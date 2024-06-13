import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

const { Option } = Select;

const LanguageDropdown = () => {
  const [language, setLanguage] = useState('en');

  const handleChange = (value) => {
    setLanguage(value);
    console.log('Selected language:', value);
  };

  return (
    <Select
      value={language}
      onChange={handleChange}
      style={{ width: 120 }}
      dropdownStyle={{ minWidth: 100 }}
    >
      <Option value="en">English</Option>
      <Option value="es">Spanish</Option>
      <Option value="fr">French</Option>
      <Option value="de">German</Option>
      <Option value="zh">Chinese</Option>
    </Select>
  );
};

export default LanguageDropdown;
