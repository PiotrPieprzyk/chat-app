import {UserPersistence} from '@/app/(backend)/(infrastructure)/_persistance/types/UserPersistence';
import {User} from "@/app/(backend)/_domains/User/User";
import {UserId} from "@/app/(backend)/_domains/User/UserId";
import {UserDTO} from "@/app/(backend)/_application/dto/User/UserDTO";
import {UserStatusWebsocketMessageDTO} from "@/app/(backend)/_application/dto/User/UserStatusWebsocketMessageDTO";
import {UserStatusTypes} from "@/app/(backend)/_domains/User/types/UserStatusTypes";

export class UserMap {
    static toPersistence(user: User): UserPersistence {
        return {
            id: user.id.value,
            name: user.name,
            email: user.email,
            password: user.password
        }
    }

    static toDomain(user: UserPersistence): User {
        return User.create(
            UserId.createFromValue(user.id),
            user.name,
            user.email,
            user.password
        )
    }

    static toUserDTO(user: User): UserDTO {
        return {
            id: user.id.value,
            name: user.name
        }
    }

    static toUserStatusWebsocketMessageDTO(userId: UserId, userStatus: UserStatusTypes): UserStatusWebsocketMessageDTO {
        return UserStatusWebsocketMessageDTO.create(userId, userStatus);
    }
}
