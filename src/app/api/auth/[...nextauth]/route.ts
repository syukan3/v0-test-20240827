import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import TwitterProvider from 'next-auth/providers/twitter'
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "メールアドレス", type: "text" },
        password: { label: "パスワード", type: "password" }
      },
      async authorize(credentials) {
        // ここで認証ロジックを実装
        // データベースやAPIを使用して認証を行う
        // 認証成功時はユーザーオブジェクトを返し、失敗時はnullを返す
        if (credentials.email === "user@example.com" && credentials.password === "password") {
          return { id: "1", name: "テストユーザー", email: "user@example.com" }
        }
        return null
      }
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/login', // ログアウト後のリダイレクト先を設定
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
  events: {
    signOut: async (message) => {
      // ログアウト時に追加の処理が必要な場合はここに記述
    },
  },
})

export { handler as GET, handler as POST }