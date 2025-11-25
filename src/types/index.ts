export type ButtonProps = {
    label: string;
    onClick: () => void;
};

export type InputProps = {
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardProps = {
    title: string;
    children: React.ReactNode;
};

export type ContainerProps = {
    children: React.ReactNode;
};