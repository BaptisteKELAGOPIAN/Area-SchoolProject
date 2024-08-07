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
exports.TwitterController = void 0;
const common_1 = require("@nestjs/common");
const twitter_service_1 = require("./twitter.service");
const create_twitter_dto_1 = require("./dto/create-twitter.dto");
const update_twitter_dto_1 = require("./dto/update-twitter.dto");
let TwitterController = class TwitterController {
    constructor(twitterService) {
        this.twitterService = twitterService;
    }
    create(createTwitterDto) {
        return this.twitterService.create(createTwitterDto);
    }
    findAll() {
        return this.twitterService.findAll();
    }
    findOne(id) {
        return this.twitterService.findOne(+id);
    }
    update(id, updateTwitterDto) {
        return this.twitterService.update(+id, updateTwitterDto);
    }
    remove(id) {
        return this.twitterService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_twitter_dto_1.CreateTwitterDto]),
    __metadata("design:returntype", void 0)
], TwitterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TwitterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TwitterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_twitter_dto_1.UpdateTwitterDto]),
    __metadata("design:returntype", void 0)
], TwitterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TwitterController.prototype, "remove", null);
TwitterController = __decorate([
    (0, common_1.Controller)('twitter'),
    __metadata("design:paramtypes", [twitter_service_1.TwitterService])
], TwitterController);
exports.TwitterController = TwitterController;
//# sourceMappingURL=twitter.controller.js.map