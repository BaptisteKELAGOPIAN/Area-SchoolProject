"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailController = void 0;
const common_1 = require("@nestjs/common");
const gmail_service_1 = require("./gmail.service");
const create_gmail_dto_1 = require("./dto/create-gmail.dto");
const update_gmail_dto_1 = require("./dto/update-gmail.dto");
let GmailController = class GmailController {
    constructor(gmailService) {
        this.gmailService = gmailService;
    }
    authorize() {
        const CLIENT_ID = '357463138962-kuh7djqihtkiulihcsb7o3qa3s2fpj05.apps.googleusercontent.com';
        const API_KEY = 'AIzaSyD3XSfAqlDtMzQv-yqjQVb9G_gDjup3zcM';
        const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
        const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
        console.log("authorize");
        let gmail = null;
        const { google } = require('googleapis');
        const auth = new google.auth.GoogleAuth({
            keyFile: 'AIzaSyD3XSfAqlDtMzQv-yqjQVb9G_gDjup3zcM',
            scopes: ['https://www.googleapis.com/auth/gmail'],
        });
        const getGmailApi = async () => {
            const auth = await google.auth.getClient({
                scopes: ["https://www.googleapis.com/auth/gmail"],
            });
            auth.subject = process.env.GOOGLE_ADMIN_EMAIL;
            return gmail = google.gmail({ version: 'v1', auth });
        };
    }
    create(createGmailDto) {
        return this.gmailService.create(createGmailDto);
    }
    findAll() {
        return this.gmailService.findAll();
    }
    findOne(id) {
        return this.gmailService.findOne(+id);
    }
    update(id, updateGmailDto) {
        return this.gmailService.update(+id, updateGmailDto);
    }
    remove(id) {
        return this.gmailService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('bite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GmailController.prototype, "authorize", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gmail_dto_1.CreateGmailDto]),
    __metadata("design:returntype", void 0)
], GmailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GmailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GmailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gmail_dto_1.UpdateGmailDto]),
    __metadata("design:returntype", void 0)
], GmailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GmailController.prototype, "remove", null);
GmailController = __decorate([
    (0, common_1.Controller)('gmail'),
    __metadata("design:paramtypes", [gmail_service_1.GmailService])
], GmailController);
exports.GmailController = GmailController;
//# sourceMappingURL=gmail.controller.js.map