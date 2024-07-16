import { User } from 'src/models/user.model';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: Pick<User, 'email' | 'password'>): Promise<Omit<User, "password">>;
    register(body: Omit<User, 'id'>): Promise<void>;
    signOut(): void;
}
