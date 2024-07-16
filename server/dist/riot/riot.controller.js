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
exports.RiotController = void 0;
const common_1 = require("@nestjs/common");
const riot_service_1 = require("./riot.service");
const create_riot_dto_1 = require("./dto/create-riot.dto");
const update_riot_dto_1 = require("./dto/update-riot.dto");
let RiotController = class RiotController {
    constructor(riotService) {
        this.riotService = riotService;
    }
    create(createRiotDto) {
        return this.riotService.create(createRiotDto);
    }
    riotParam(body) {
        return this.riotService.riotParam(body.name, body.email);
    }
    notionParam(pseudo, mail) {
        return this.riotService.riotParam(pseudo, mail);
    }
    findOne(id) {
        return this.riotService.findOne(+id);
    }
    update(id, updateRiotDto) {
        return this.riotService.update(+id, updateRiotDto);
    }
    remove(id) {
        return this.riotService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_riot_dto_1.CreateRiotDto]),
    __metadata("design:returntype", void 0)
], RiotController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("pseudo"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RiotController.prototype, "riotParam", null);
__decorate([
    (0, common_1.Get)('/:pseudo/:mail'),
    __param(0, (0, common_1.Param)('pseudo')),
    __param(1, (0, common_1.Param)('mail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RiotController.prototype, "notionParam", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RiotController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_riot_dto_1.UpdateRiotDto]),
    __metadata("design:returntype", void 0)
], RiotController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RiotController.prototype, "remove", null);
RiotController = __decorate([
    (0, common_1.Controller)('riot'),
    __metadata("design:paramtypes", [riot_service_1.RiotService])
], RiotController);
exports.RiotController = RiotController;
//# sourceMappingURL=riot.controller.js.map