module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['./server/entities/*.ts'],
  migrations: ['./server/migrations/*.ts'],
  cli: {
    migrationDir: './server/migrations',
  },
}
