export default {
  // NOTE: change `=` in password with `%3D`
  mongoURI:
    process.env['MONGO_PROD_URL'] ||
    'mongodb://prod-db:9UuX0WPAmBweFR7zfDuRWJAXntoPRj65ozwh1HPnVaQmCuzwWtXbAYHKjKfBkLjDUwsKNzhU8aRyzvKw8hnPeQ%3D%3D@prod-db.mongo.cosmos.azure.com:10255/sample?ssl=true&replicaSet=globaldb&ssl_cert_reqs=CERT_NONE&retryWrites=false',
};
