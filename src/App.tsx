import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPencil, faTrash, faCog, faCircleInfo, faArrowRight, faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from './components';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>Phoenix System - Button Component Showcase</h1>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '40px' }}>
        Component system using Figma Phoenix System design tokens with all variants and states
      </p>

      {/* PRIMARY VARIANT */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Primary Variant</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Main action buttons - vivid purple (#3d0fdc)</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button label="Small" size="small" variant="primary" onClick={() => {}} />
          <Button label="Default" size="default" variant="primary" onClick={() => {}} />
          <Button label="Large" size="large" variant="primary" onClick={() => {}} />
          <Button label="Disabled" variant="primary" disabled onClick={() => {}} />
          <Button label="Loading" variant="primary" loading onClick={() => {}} />
        </div>
      </section>

      {/* SECONDARY VARIANT */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Secondary Variant</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Secondary actions - purple text on white background</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button label="Small" size="small" variant="secondary" onClick={() => {}} />
          <Button label="Default" size="default" variant="secondary" onClick={() => {}} />
          <Button label="Large" size="large" variant="secondary" onClick={() => {}} />
          <Button label="Disabled" variant="secondary" disabled onClick={() => {}} />
          <Button label="Loading" variant="secondary" loading onClick={() => {}} />
        </div>
      </section>

      {/* TERTIARY VARIANT */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Tertiary Variant</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Subtle actions - gray text with light border</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button label="Small" size="small" variant="tertiary" onClick={() => {}} />
          <Button label="Default" size="default" variant="tertiary" onClick={() => {}} />
          <Button label="Large" size="large" variant="tertiary" onClick={() => {}} />
          <Button label="Disabled" variant="tertiary" disabled onClick={() => {}} />
          <Button label="Loading" variant="tertiary" loading onClick={() => {}} />
        </div>
      </section>

      {/* GHOST VARIANT */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Ghost Variant</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Minimal appearance - transparent background, gray text</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button label="Small" size="small" variant="ghost" onClick={() => {}} />
          <Button label="Default" size="default" variant="ghost" onClick={() => {}} />
          <Button label="Large" size="large" variant="ghost" onClick={() => {}} />
          <Button label="Disabled" variant="ghost" disabled onClick={() => {}} />
          <Button label="Loading" variant="ghost" loading onClick={() => {}} />
        </div>
      </section>

      {/* DESTRUCTIVE VARIANT */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Destructive Variant</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Dangerous actions - red background (#ef4444)</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button label="Small" size="small" variant="destructive" onClick={() => {}} />
          <Button label="Default" size="default" variant="destructive" onClick={() => {}} />
          <Button label="Large" size="large" variant="destructive" onClick={() => {}} />
          <Button label="Disabled" variant="destructive" disabled onClick={() => {}} />
          <Button label="Loading" variant="destructive" loading onClick={() => {}} />
        </div>
      </section>

      {/* BUTTONS WITH ICONS */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Buttons with Icons</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>FontAwesome icons on left and right sides of the label</p>
        
        <h3 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px', color: '#333' }}>Left Icon</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <Button label="Save" variant="primary" iconLeft={<FontAwesomeIcon icon={faSave} />} onClick={() => {}} />
          <Button label="Edit" variant="secondary" iconLeft={<FontAwesomeIcon icon={faPencil} />} onClick={() => {}} />
          <Button label="Delete" variant="destructive" iconLeft={<FontAwesomeIcon icon={faTrash} />} onClick={() => {}} />
          <Button label="Search" variant="tertiary" iconLeft={<FontAwesomeIcon icon={faSearch} />} onClick={() => {}} />
          <Button label="Info" variant="ghost" iconLeft={<FontAwesomeIcon icon={faCircleInfo} />} onClick={() => {}} />
        </div>

        <h3 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px', color: '#333' }}>Right Icon</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <Button label="Next" variant="primary" iconRight={<FontAwesomeIcon icon={faArrowRight} />} onClick={() => {}} />
          <Button label="Back" variant="secondary" iconRight={<FontAwesomeIcon icon={faArrowLeft} />} onClick={() => {}} />
          <Button label="Settings" variant="tertiary" iconRight={<FontAwesomeIcon icon={faCog} />} onClick={() => {}} />
          <Button label="More" variant="ghost" iconRight={<FontAwesomeIcon icon={faCircleInfo} />} onClick={() => {}} />
        </div>

        <h3 style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px', color: '#333' }}>Both Left and Right Icons</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button 
            label="Export" 
            variant="primary" 
            iconLeft={<FontAwesomeIcon icon={faSave} />}
            iconRight={<FontAwesomeIcon icon={faArrowRight} />}
            onClick={() => {}} 
          />
          <Button 
            label="Action" 
            variant="secondary" 
            iconLeft={<FontAwesomeIcon icon={faSearch} />}
            iconRight={<FontAwesomeIcon icon={faArrowRight} />}
            onClick={() => {}} 
          />
          <Button 
            label="Delete" 
            variant="destructive" 
            iconLeft={<FontAwesomeIcon icon={faTrash} />}
            iconRight={<FontAwesomeIcon icon={faArrowRight} />}
            onClick={() => {}} 
          />
        </div>
      </section>

      {/* ROUNDED VARIANTS */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>All Variants</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Complete set of button variants</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button label="Primary" variant="primary" onClick={() => {}} />
          <Button label="Secondary" variant="secondary" onClick={() => {}} />
          <Button label="Tertiary" variant="tertiary" onClick={() => {}} />
          <Button label="Ghost" variant="ghost" onClick={() => {}} />
          <Button label="Destructive" variant="destructive" onClick={() => {}} />
        </div>
      </section>

      {/* INTERACTIVE EXAMPLE */}
      <section style={{ marginBottom: '50px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' }}>
        <h2>Interactive Examples</h2>
        <p style={{ color: '#666', marginBottom: '15px' }}>Buttons with onClick handlers</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button 
            label="Click Me"
            variant="primary"
            onClick={() => alert('Primary button clicked!')}
          />
          <Button 
            label="Cancel"
            variant="tertiary"
            onClick={() => alert('Action cancelled')}
          />
          <Button 
            label="Delete Item"
            variant="destructive"
            onClick={() => alert('Item deleted')}
          />
        </div>
      </section>
    </div>
  );
};

export default App;