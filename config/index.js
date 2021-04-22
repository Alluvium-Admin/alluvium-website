const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://github.com/Alluvium-Admin/alluvium-website/tree/main/pages';
