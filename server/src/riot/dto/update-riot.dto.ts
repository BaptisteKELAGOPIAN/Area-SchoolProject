import { PartialType } from '@nestjs/mapped-types';
import { CreateRiotDto } from './create-riot.dto';

export class UpdateRiotDto extends PartialType(CreateRiotDto) {}
