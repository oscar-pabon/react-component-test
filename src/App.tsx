import React from 'react';
import './styles/global.css';
import Tooltip from './components/tooltip/Tooltip';

const App: React.FC = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Buttons Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '34px 44px',
        borderRadius: '8px',
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start',
        maxWidth: 'fit-content',
        marginBottom: '40px'
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

      {/* Tooltips Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '34px 44px',
        borderRadius: '8px',
        maxWidth: '1200px'
      }}>
        <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#334155' }}>
          Tooltip Component - All 8 Positions
        </h2>
        <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '14px' }}>
          Hover over each button to see the tooltip in different positions.
          Matches Phoenix Component Library design (node-id: 5399-78716)
        </p>

        {/* Top Positions */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '16px', color: '#475569', marginBottom: '20px', fontWeight: 600 }}>
            Top Positions
          </h3>
          <div style={{
            display: 'flex',
            gap: '40px',
            padding: '60px 40px 40px',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            borderRadius: '4px'
          }}>
            <Tooltip content="This is a Tooltip" position="Top-Left">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Top-Left
              </button>
            </Tooltip>

            <Tooltip content="This is a Tooltip" position="Top Center">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Top Center
              </button>
            </Tooltip>

            <Tooltip content="This is a Tooltip" position="Top-Right">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Top-Right
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Bottom Positions */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '16px', color: '#475569', marginBottom: '20px', fontWeight: 600 }}>
            Bottom Positions
          </h3>
          <div style={{
            display: 'flex',
            gap: '40px',
            padding: '40px 40px 60px',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            borderRadius: '4px'
          }}>
            <Tooltip content="This is a Tooltip" position="Bottom-Left">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Bottom-Left
              </button>
            </Tooltip>

            <Tooltip content="This is a Tooltip" position="Bottom-Center">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Bottom-Center
              </button>
            </Tooltip>

            <Tooltip content="This is a Tooltip" position="Bottom-Right">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Bottom-Right
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Side Positions */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '16px', color: '#475569', marginBottom: '20px', fontWeight: 600 }}>
            Side Positions
          </h3>
          <div style={{
            display: 'flex',
            gap: '120px',
            padding: '60px 80px',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            borderRadius: '4px',
            alignItems: 'center'
          }}>
            <Tooltip content="This is a Tooltip" position="Left">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Left
              </button>
            </Tooltip>

            <Tooltip content="This is a Tooltip" position="Right">
              <button style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500
              }}>
                Right
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Always Visible - For Code Inspection */}
        <div>
          <h3 style={{ fontSize: '16px', color: '#475569', marginBottom: '12px', fontWeight: 600 }}>
            Always Visible (For Code Inspection)
          </h3>
          <p style={{ color: '#64748b', marginBottom: '20px', fontSize: '13px' }}>
            These tooltips are always visible so you can inspect the DOM structure, styling, and arrow positioning.
          </p>

          {/* Grid layout for inspection */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '80px',
            padding: '100px 60px',
            backgroundColor: '#f8fafc',
            borderRadius: '4px'
          }}>
            {/* Top positions row 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Top-Left" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Top-Left</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Top Center" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Top Center</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Top-Right" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Top-Right</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Left" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Left</span>
            </div>

            {/* Bottom positions row 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Bottom-Left" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Bottom-Left</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Bottom-Center" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Bottom-Center</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Bottom-Right" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Bottom-Right</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Tooltip content="This is a Tooltip" position="Right" visible={true}>
                <div style={{
                  padding: '8px 12px',
                  backgroundColor: '#e2e8f0',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#475569',
                  border: '1px dashed #cbd5e1'
                }}>
                  Trigger
                </div>
              </Tooltip>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '40px' }}>Right</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;