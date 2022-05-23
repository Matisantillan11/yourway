export const config: {
  database: string
  url: string
} = {
  database: process.env.DB || 'yourway',
  url: process.env.API_URL || 'http://localhost:3040',
}
