import React from 'react';
import './styles/global.css';

const App: React.FC = () => {
  const variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
  const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ marginBottom: '32px', color: '#333' }}>Phoenix Button Component Library</h1>
      
      {/* Variants Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#555' }}>Button Variants</h2>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap',
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px'
        }}>
          {variants.map(variant => (
            <liva-button
              key={variant}
              type={variant}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </liva-button>
          ))}
        </div>
      </section>

      {/* Sizes Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#555' }}>Button Sizes</h2>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px'
        }}>
          {sizes.map(size => (
            <liva-button
              key={size}
              type="primary"
              size={size}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </liva-button>
          ))}
        </div>
      </section>

      {/* Disabled States Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#555' }}>Disabled States</h2>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap',
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px'
        }}>
          {variants.map(variant => (
            <liva-button
              key={`${variant}-disabled`}
              type={variant}
              disabled
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </liva-button>
          ))}
        </div>
      </section>

      {/* Rounded Variants Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#555' }}>Rounded Buttons</h2>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap',
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px'
        }}>
          {variants.map(variant => (
            <liva-button
              key={`${variant}-rounded`}
              type={variant}
              rounded
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </liva-button>
          ))}
        </div>
      </section>

      {/* Combinations Section */}
      <section>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#555' }}>Size & Variant Combinations</h2>
        {variants.map(variant => (
          <div key={`section-${variant}`} style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '8px', color: '#777', fontWeight: '600' }}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '16px',
              borderRadius: '8px'
            }}>
              {sizes.map(size => (
                <liva-button
                  key={`${variant}-${size}`}
                  type={variant}
                  size={size}
                >
                  {size}
                </liva-button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;