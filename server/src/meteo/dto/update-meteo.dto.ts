import { PartialType } from '@nestjs/mapped-types';
import { CreateMeteoDto } from './create-meteo.dto';

export class UpdateMeteoDto extends PartialType(CreateMeteoDto) {}
