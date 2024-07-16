import { ConfigService } from '@nestjs/config';
import { FirebaseApp } from 'firebase/app';
import { Config } from 'src/models/config.model';
import { Auth } from 'firebase/auth';
import { CollectionReference, Firestore } from 'firebase/firestore';
export declare class FirebaseService {
    private configService;
    app: FirebaseApp;
    auth: Auth;
    fireStore: Firestore;
    usersCollection: CollectionReference;
    constructor(configService: ConfigService<Config>);
    private _createCollections;
}
