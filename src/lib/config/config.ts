export const config: {
  database: string
  url: string
} = {
  database: process.env.DB || 'goodforlife',
  url: process.env.API_URL || 'http://localhost:3001',
}
