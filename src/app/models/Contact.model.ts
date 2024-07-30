export interface Contact {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;  // assuming you have a createdAt field in your database
}
