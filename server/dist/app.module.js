"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const firebase_service_1 = require("./firebase/firebase.service");
const twitter_module_1 = require("./twitter/twitter.module");
const gmail_module_1 = require("./gmail/gmail.module");
const github_module_1 = require("./github/github.module");
const notion_module_1 = require("./notion/notion.module");
const meteo_module_1 = require("./meteo/meteo.module");
const riot_module_1 = require("./riot/riot.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, config_1.ConfigModule.forRoot(), twitter_module_1.TwitterModule, gmail_module_1.GmailModule, github_module_1.GithubModule, notion_module_1.NotionModule, meteo_module_1.MeteoModule, riot_module_1.RiotModule],
        providers: [firebase_service_1.FirebaseService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map