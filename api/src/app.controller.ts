import { ManagementClient, User } from 'auth0';
import {Controller, Get, UseGuards, Request} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard())
  @Get('protected')
  getProtected(): string {
    return 'This route is protected.';
  }

  @Get('profile')
  @UseGuards(AuthGuard())
  async profile(@Request() req: any): Promise<any> {

    const authZero = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: 'read:users update:users'
    });

    return await authZero
        .getUser({ id: req.user.sub })
        .then((user: User) => {
          return user;
        })
        .catch(err => {
          return err;
        });
  }
}
