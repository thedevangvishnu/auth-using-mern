import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    const user: any = req.user as any;
    const isLoggedIn = req.isAuthenticated() && req.user;

    if (!isLoggedIn) {
      return res.status(401).json({ message: "Unautorized" });
    }

    const userId = user.id;
    req.userId = userId;
    next();
  } else {
    const token = req.cookies["auth_token"];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized!" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
      req.userId = (decoded as JwtPayload).userId;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
  }
};

export default verifyToken;
