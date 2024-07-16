import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FirebaseService } from './firebase/firebase.service';
import { TwitterModule } from './twitter/twitter.module';
import { GmailModule } from './gmail/gmail.module';
import { GithubModule } from './github/github.module';
import { NotionModule } from './notion/notion.module';
import { MeteoModule } from './meteo/meteo.module';
import { RiotModule } from './riot/riot.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), TwitterModule, GmailModule, GithubModule, NotionModule, MeteoModule, RiotModule],
  providers: [FirebaseService],
})
export class AppModule {}
