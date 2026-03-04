import React from 'react';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '34px 44px',
        borderRadius: '8px',
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start',
        maxWidth: 'fit-content'
      }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <liva-button type="primary">Test Primary</liva-button>
          <liva-button type="secondary">Test Secondary</liva-button>
          <liva-button type="tertiary">Test Ghost</liva-button>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <liva-button type="secondary">Test Secondary</liva-button>
          <liva-button type="tertiary">Test Ghost</liva-button>
          <liva-button type="primary">Test Primary</liva-button>
        </div>
      </div>
    </div>
  );
};

export default App;