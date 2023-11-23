export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  pgDb: process.env.DATABASE_URL,
  port: +process.env.PORT || 3001,
  api_url: process.env.API_URL || 'http://localhost',
  jwt_secret: process.env.JWT_SECRET || 'R@NCODE',
  jwt_expires_in: process.env.JWT_EXPIRES_IN || '1h',
});
