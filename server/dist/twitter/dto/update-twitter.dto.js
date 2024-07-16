"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTwitterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_twitter_dto_1 = require("./create-twitter.dto");
class UpdateTwitterDto extends (0, mapped_types_1.PartialType)(create_twitter_dto_1.CreateTwitterDto) {
}
exports.UpdateTwitterDto = UpdateTwitterDto;
//# sourceMappingURL=update-twitter.dto.js.map