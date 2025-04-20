import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SUPABASE_JWT_SECRET!,
    });
  }

  validate(payload: any): any {
    // You can add any additional validation logic here if needed
    // For example, you might want to check if the user exists in your database
    // or if the JWT is not expired.
    // For this example, we'll just return the payload as is.
    console.log('JWT payload:', payload);
    return payload;
  }
}
