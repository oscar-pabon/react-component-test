import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from './components';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        alignItems: 'flex-start',
        maxWidth: '320px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {/* Create Contact Button with icons */}
        <Button 
          label="Create Contact" 
          variant="primary" 
          size="default"
          iconLeft={<FontAwesomeIcon icon={faCheck} />}
          iconRight={<FontAwesomeIcon icon={faCheck} />}
          onClick={() => alert('Create Contact clicked')}
        />

        {/* Secondary Buttons Row */}
        <div style={{ 
          display: 'flex', 
          gap: '4px', 
          alignItems: 'center',
          width: '100%'
        }}>
          <Button 
            label="Button" 
            variant="secondary" 
            size="default"
            onClick={() => {}}
          />
          <Button 
            label="Button" 
            variant="secondary" 
            size="default"
            onClick={() => {}}
          />
        </div>

        {/* Tertiary Buttons Row */}
        <div style={{ 
          display: 'flex', 
          gap: '4px', 
          alignItems: 'center',
          width: '100%'
        }}>
          <Button 
            label="Actions" 
            variant="tertiary" 
            size="default"
            onClick={() => {}}
          />
          <Button 
            label="Actions" 
            variant="tertiary" 
            size="default"
            onClick={() => {}}
          />
          <Button 
            label="Actions" 
            variant="tertiary" 
            size="large"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default App;