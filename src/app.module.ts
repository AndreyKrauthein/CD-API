import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user/user.controller';
import { User } from './user/user.model';
import { UserService } from './user/user.service';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Krauthein2005',
      database: 'cd-api',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
