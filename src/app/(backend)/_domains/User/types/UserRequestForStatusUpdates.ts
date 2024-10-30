import {UserId} from "@/app/(backend)/_domains/User/UserId";

export type UserRequestForStatusUpdates = {
    requesterId: UserId,
    actorsIds: UserId[],
}
