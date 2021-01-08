module.exports = {
    type: 'mariadb',
    host: '127.0.0.1',
    port: 3307,
    username: 'v-fleet-db-admin',
    password: '!5o3aSy2F!nd*',
    database: 'v-fleet-repo',
    entities: [
        './dist/entities/*.js'
    ],
    synchronize: false
}