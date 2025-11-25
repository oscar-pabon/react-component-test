import React from 'react';

interface InputProps {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, value, type = 'text' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="input"
        />
    );
};

export default Input;