module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cda0b1b45a650e182e552f6667ecc4a0'),
  },
});
