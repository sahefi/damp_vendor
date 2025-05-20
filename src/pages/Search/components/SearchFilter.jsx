import { Card, Dropdown, Form } from 'react-bootstrap';
import React, { useState } from 'react';

const SearchFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category });
  };

  const categories = [
    'Semua Kategori',
    'Fotografer',
    'Venue',
    'Makeup Artist',
    'Dekorasi',
    'Catering',
    'Pakaian',
    'Undangan'
  ];

  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Header className="bg-white border-bottom">
        <h5 className="mb-0 fw-bold">Filter</h5>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-0">
          <Form.Label className="fw-medium">Kategori Vendor</Form.Label>
          <Dropdown>
            <Dropdown.Toggle 
              variant="light" 
              id="dropdown-kategori"
              className="w-100 text-start d-flex justify-content-between align-items-center"
              style={{ 
                border: '1px solid #ced4da', 
                backgroundColor: 'white',
                color: '#212529'
              }}
            >
              {selectedCategory}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              {categories.map((category, idx) => (
                <Dropdown.Item 
                  key={idx} 
                  onClick={() => handleCategoryChange(category)}
                  active={selectedCategory === category}
                >
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default SearchFilter;
