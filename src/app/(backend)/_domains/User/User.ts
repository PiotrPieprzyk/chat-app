import {UserId} from "@/app/(backend)/_domains/User/UserId";

export class User {
    private constructor(
        public readonly id: UserId,
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
    ) {}
    
    public static create(id: UserId, name: string, email: string, password: string): User {
        return new User(id, name, email, password);
    }
}
