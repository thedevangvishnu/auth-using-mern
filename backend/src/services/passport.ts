import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { User } from "../models/user.model";

export const setupSession = () => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done: any) => {
    const user = await User.findById(id);
    done(null, user);
  });
};

export const setupGoogleStrategy = () => {
  const GoogleStrategy = passportGoogle.Strategy;
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: "/api/auth/google/callback",
        scope: ["email", "profile"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            user = new User({
              googleId: profile.id,
              name: profile.displayName,
              email: profile._json.email,
            });

            await user.save();
            done(null, user);
          } else {
            done(null, user);
          }
        } catch (error) {
          done(error as Error, undefined);
        }
      }
    )
  );
};
