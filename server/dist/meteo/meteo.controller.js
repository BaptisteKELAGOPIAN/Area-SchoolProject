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
exports.MeteoController = void 0;
const common_1 = require("@nestjs/common");
const meteo_service_1 = require("./meteo.service");
const update_meteo_dto_1 = require("./dto/update-meteo.dto");
let MeteoController = class MeteoController {
    constructor(meteoService) {
        this.meteoService = meteoService;
    }
    create(body) {
        console.log(body.name);
        return this.meteoService.meteoglo(body.name);
    }
    meteoglo(city) {
        console.log(city);
        return this.meteoService.meteoglo(city);
    }
    findOne(id) {
        return this.meteoService.findOne(+id);
    }
    update(id, updateMeteoDto) {
        return this.meteoService.update(+id, updateMeteoDto);
    }
    remove(id) {
        return this.meteoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)("city"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MeteoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:city'),
    __param(0, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], MeteoController.prototype, "meteoglo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeteoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_meteo_dto_1.UpdateMeteoDto]),
    __metadata("design:returntype", void 0)
], MeteoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeteoController.prototype, "remove", null);
MeteoController = __decorate([
    (0, common_1.Controller)('meteo'),
    __metadata("design:paramtypes", [meteo_service_1.MeteoService])
], MeteoController);
exports.MeteoController = MeteoController;
//# sourceMappingURL=meteo.controller.js.map