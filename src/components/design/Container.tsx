import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ padding: '20px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            {children}
        </div>
    );
};

export default Container;