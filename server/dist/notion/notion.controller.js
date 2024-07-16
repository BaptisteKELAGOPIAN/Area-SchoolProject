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
exports.NotionController = void 0;
const common_1 = require("@nestjs/common");
const notion_service_1 = require("./notion.service");
const update_notion_dto_1 = require("./dto/update-notion.dto");
let NotionController = class NotionController {
    constructor(notionService) {
        this.notionService = notionService;
    }
    notionParam(key, blockid) {
        return this.notionService.notionParam(key, blockid);
    }
    create(body) {
        console.log(body.name, body.id);
        return this.notionService.notionParam(body.name, body.id);
    }
    findAll() {
        return this.notionService.findAll();
    }
    findOne(id) {
        return this.notionService.findOne(+id);
    }
    update(id, updateNotionDto) {
        return this.notionService.update(+id, updateNotionDto);
    }
    remove(id) {
        return this.notionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('/:key/:blockid'),
    __param(0, (0, common_1.Param)('key')),
    __param(1, (0, common_1.Param)('blockid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], NotionController.prototype, "notionParam", null);
__decorate([
    (0, common_1.Post)("comment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotionController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_notion_dto_1.UpdateNotionDto]),
    __metadata("design:returntype", void 0)
], NotionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotionController.prototype, "remove", null);
NotionController = __decorate([
    (0, common_1.Controller)('notion'),
    __metadata("design:paramtypes", [notion_service_1.NotionService])
], NotionController);
exports.NotionController = NotionController;
//# sourceMappingURL=notion.controller.js.map