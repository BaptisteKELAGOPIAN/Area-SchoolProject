"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGmailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_gmail_dto_1 = require("./create-gmail.dto");
class UpdateGmailDto extends (0, mapped_types_1.PartialType)(create_gmail_dto_1.CreateGmailDto) {
}
exports.UpdateGmailDto = UpdateGmailDto;
//# sourceMappingURL=update-gmail.dto.js.map