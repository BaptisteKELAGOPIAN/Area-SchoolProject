"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_notion_dto_1 = require("./create-notion.dto");
class UpdateNotionDto extends (0, mapped_types_1.PartialType)(create_notion_dto_1.CreateNotionDto) {
}
exports.UpdateNotionDto = UpdateNotionDto;
//# sourceMappingURL=update-notion.dto.js.map