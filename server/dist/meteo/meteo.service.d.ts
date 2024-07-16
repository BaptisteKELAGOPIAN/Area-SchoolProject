import { CreateMeteoDto } from './dto/create-meteo.dto';
import { UpdateMeteoDto } from './dto/update-meteo.dto';
export declare class MeteoService {
    create(createMeteoDto: CreateMeteoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMeteoDto: UpdateMeteoDto): string;
    remove(id: number): string;
    meteoglo(city: string): string;
}
