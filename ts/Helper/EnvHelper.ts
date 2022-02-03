export abstract class EnvHelper {
  static readonly TWITTER_API_KEY = String(process.env.TWITTER_API_KEY)
  static readonly TWITTER_API_SECRET_KEY = String(
    process.env.TWITTER_API_SECRET_KEY
  )
  static readonly TWITTER_BEARER_TOKEN = String(
    process.env.TWITTER_BEARER_TOKEN
  )
}
