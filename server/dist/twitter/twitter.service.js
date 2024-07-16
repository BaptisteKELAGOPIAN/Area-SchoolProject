"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterService = void 0;
const common_1 = require("@nestjs/common");
let TwitterService = class TwitterService {
    create(createTwitterDto) {
        return 'This action adds a new twitter';
    }
    findAll() {
        return `This action returns all twitter`;
    }
    findOne(id) {
        return `This action returns a #${id} twitter`;
    }
    update(id, updateTwitterDto) {
        return `This action updates a #${id} twitter`;
    }
    remove(id) {
        return `This action removes a #${id} twitter`;
    }
};
TwitterService = __decorate([
    (0, common_1.Injectable)()
], TwitterService);
exports.TwitterService = TwitterService;
//# sourceMappingURL=twitter.service.js.map