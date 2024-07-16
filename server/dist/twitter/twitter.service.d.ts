import { CreateTwitterDto } from './dto/create-twitter.dto';
import { UpdateTwitterDto } from './dto/update-twitter.dto';
export declare class TwitterService {
    create(createTwitterDto: CreateTwitterDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTwitterDto: UpdateTwitterDto): string;
    remove(id: number): string;
}
