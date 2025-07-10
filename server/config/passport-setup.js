import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: email,
              name: profile.displayName,
              password: null
            },
          });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);