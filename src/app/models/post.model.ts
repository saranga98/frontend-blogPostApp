export interface Post {
    author: any;
    id: number;
    title: string;
    imagePath?: string; // Optional if some posts might not have images
    description: string;
    createdDate: Date;
}