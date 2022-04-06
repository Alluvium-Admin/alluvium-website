const dev = process.env.NODE_ENV !== 'production';

// export const server = dev ? 'http://localhost:3000' : 'https://../pages';

export const server = dev ? 'http://localhost:3000' : "https://alluvium.net";

export const baseURL = 'http://localhost:3000';

export const databaseURI = dev ? process.env.DB_URI_ORIGIN : process.env.ALLUVIUM_DB_URI;


