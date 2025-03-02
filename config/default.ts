const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
  port:5000,
  dbUri:`mongodb+srv://${dbUser}:${dbPassword}@cluster0.a0aki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  env: "development"
}