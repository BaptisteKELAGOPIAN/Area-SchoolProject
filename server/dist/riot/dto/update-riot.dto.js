"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRiotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_riot_dto_1 = require("./create-riot.dto");
class UpdateRiotDto extends (0, mapped_types_1.PartialType)(create_riot_dto_1.CreateRiotDto) {
}
exports.UpdateRiotDto = UpdateRiotDto;
//# sourceMappingURL=update-riot.dto.js.map