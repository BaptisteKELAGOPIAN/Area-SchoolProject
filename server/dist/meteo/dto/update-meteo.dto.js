"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMeteoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_meteo_dto_1 = require("./create-meteo.dto");
class UpdateMeteoDto extends (0, mapped_types_1.PartialType)(create_meteo_dto_1.CreateMeteoDto) {
}
exports.UpdateMeteoDto = UpdateMeteoDto;
//# sourceMappingURL=update-meteo.dto.js.map