import { FirebaseService } from 'src/firebase/firebase.service';
import { User } from 'src/models/user.model';
export declare class AuthService {
    private firebaseService;
    constructor(firebaseService: FirebaseService);
    login(email: string, password: string): Promise<Omit<User, 'password'>>;
    register(body: Omit<User, 'id'>): Promise<void>;
}
