import React from 'react';

const CustomBreadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {!isLast ? (
                <a href={item.href} style={{ color: '#EC8A9A', textDecoration: 'none' }}>
                  {item.label}
                </a>
              ) : (
                <span style={{ color: '#A4A4A4' }}>{item.label}</span>
              )}
              {!isLast && <span style={{ margin: '0 8px' }}>{'>'}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CustomBreadcrumb;
