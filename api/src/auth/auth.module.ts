import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import authConfig from 'src/config/auth.config';
import {JwtStrategy} from "./jwt.strategy";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        ConfigModule.forFeature(authConfig),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    providers: [JwtStrategy],
    exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
