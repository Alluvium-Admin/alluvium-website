const dev = process.env.NODE_ENV !== 'production';

// export const server = dev ? 'http://localhost:3000' : 'https://../pages';

export const server = dev ? 'http://localhost:3000' : "https://alluvium.net";

export const baseURL = 'http://localhost:3000';

export const databaseURI = process.env.DB_URI;
// export const databaseURI = 'mongodb+srv://timilxr:timilxr@cluster0.zsu06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


