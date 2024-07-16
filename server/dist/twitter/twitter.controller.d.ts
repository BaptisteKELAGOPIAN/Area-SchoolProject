import { TwitterService } from './twitter.service';
import { CreateTwitterDto } from './dto/create-twitter.dto';
import { UpdateTwitterDto } from './dto/update-twitter.dto';
export declare class TwitterController {
    private readonly twitterService;
    constructor(twitterService: TwitterService);
    create(createTwitterDto: CreateTwitterDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTwitterDto: UpdateTwitterDto): string;
    remove(id: string): string;
}
