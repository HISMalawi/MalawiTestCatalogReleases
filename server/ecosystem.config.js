module.exports = {
    apps: [
        {
            name: 'MalawiTestCatalog',
            script: 'node ./server/index.mjs',
            env: {
                PORT: 8007,
                NODE_ENV: 'production'
            }
        }
    ]
}