export interface cart {
    count: number;
    title: string;
    subtitle?: string;
    price:string,
    isbn13?:string;
    image?:string;
    quantity:number;
    url?:string;
    isLoading?: boolean;
    error?: string;
    _id?:string | null;
}