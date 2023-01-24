import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export default NextAuth({
        adapter: PrismaAdapter(prisma),
        providers: [
                TwitterProvider({
                        clientId: process.env.TWITTER_CLIENT_ID as string,
                        clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
                }),
        ],
})