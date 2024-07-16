import { MeteoService } from './meteo.service';
import { UpdateMeteoDto } from './dto/update-meteo.dto';
import { User } from 'src/models/user.model';
export declare class MeteoController {
    private readonly meteoService;
    constructor(meteoService: MeteoService);
    create(body: Pick<User, 'name'>): string;
    meteoglo(city: string): string;
    findOne(id: string): string;
    update(id: string, updateMeteoDto: UpdateMeteoDto): string;
    remove(id: string): string;
}
