export interface User {
    id: string;
    name: string;
    email: string;
    role: 'Buyer' | 'Seller';
    joinedDate: string;
    image?: string;
}

export interface ChartData {
    day: string;
    value: number;
}