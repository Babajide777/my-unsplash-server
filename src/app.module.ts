import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import keys from './config/keys';

@Module({
  imports: [AuthModule, MongooseModule.forRoot(keys.MONGODB_URI)],
})
export class AppModule {}
