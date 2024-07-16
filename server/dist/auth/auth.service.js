"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("../firebase/firebase.service");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
let AuthService = class AuthService {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async login(email, password) {
        try {
            const userCredential = await (0, auth_1.signInWithEmailAndPassword)(this.firebaseService.auth, email, password);
            if (userCredential) {
                const id = userCredential.user.uid;
                const docRef = (0, firestore_1.doc)(this.firebaseService.usersCollection, id);
                const snapshot = await (0, firestore_1.getDoc)(docRef);
                const loggedUser = Object.assign(Object.assign({}, snapshot.data()), { id: snapshot.id });
                delete loggedUser.password;
                return loggedUser;
            }
        }
        catch (error) {
            const firebaseAuthError = error;
            console.log(`[FIREBASE AUTH ERROR CODE]: ${firebaseAuthError.code}`);
            if (firebaseAuthError.code === 'auth/wrong-password') {
                throw new common_1.HttpException('Email or password incorrect.', common_1.HttpStatus.FORBIDDEN);
            }
            if (firebaseAuthError.code === 'auth/user-not-found') {
                throw new common_1.HttpException('Email not found.', common_1.HttpStatus.NOT_FOUND);
            }
        }
    }
    async register(body) {
        try {
            const userCredential = await (0, auth_1.createUserWithEmailAndPassword)(this.firebaseService.auth, body.email, body.password);
            if (userCredential) {
                const id = userCredential.user.uid;
                const docRef = (0, firestore_1.doc)(this.firebaseService.usersCollection, id);
                await (0, firestore_1.setDoc)(docRef, body);
            }
        }
        catch (error) {
            const firebaseAuthError = error;
            console.log(`[FIREBASE AUTH ERROR CODE]: ${firebaseAuthError.code}`);
            if (firebaseAuthError.code === 'auth/email-already-in-use') {
                throw new common_1.HttpException('Email already exists.', common_1.HttpStatus.CONFLICT);
            }
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map