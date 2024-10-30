import {WebsocketMessage} from "@/app/(backend)/(infrastructure)/_services/Websocket/types/WebsocketMessage";
import {UserStatusTypes, UserStatusTypesReadable} from "@/app/(backend)/_domains/User/types/UserStatusTypes";
import {UserId} from "@/app/(backend)/_domains/User/UserId";

export const UserStatusDTOMessageType = 'UserStatusChanged';

export class UserStatusWebsocketMessageDTO implements WebsocketMessage {
    public messageType = UserStatusDTOMessageType;
    private constructor(
        public userId: string,
        public userStatus: UserStatusTypesReadable,
    ) {
    }
    
    public static create(userId: UserId, userStatus: UserStatusTypes): UserStatusWebsocketMessageDTO {
        return new UserStatusWebsocketMessageDTO(userId.value, UserStatusTypes[userStatus] as UserStatusTypesReadable);
    }
}

