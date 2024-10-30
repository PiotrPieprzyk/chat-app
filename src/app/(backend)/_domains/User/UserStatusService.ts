import {UserId} from "@/app/(backend)/_domains/User/UserId";
import {UserStatusTypes} from "@/app/(backend)/_domains/User/types/UserStatusTypes";
import {UserRequestForStatusUpdates} from "@/app/(backend)/_domains/User/types/UserRequestForStatusUpdates";

export class UserStatusService {
    private activeActorsStatuses: Map<UserId, UserStatusTypes> = new Map();
    private activeUserRequestsForStatusUpdates: UserRequestForStatusUpdates[] = [];
    
    public setActorStatus(actorId: UserId, status: UserStatusTypes): void {
        this.activeActorsStatuses.set(actorId, status);
        this.notifyRequestersAboutActorStatusChange(actorId, status);
    }
    
    public removeActorStatus(userId: UserId): void {
        this.activeActorsStatuses.delete(userId);
        this.notifyRequestersAboutActorStatusChange(userId, UserStatusTypes.OFFLINE);
    }
    
    public addUserRequestForStatusUpdates(requesterId: UserId, actorsIds: UserId[]): void {
        this.activeUserRequestsForStatusUpdates.push({requesterId, actorsIds});
    }
    
    public removeUserRequestForStatusUpdates(requesterId: UserId): void {
        this.activeUserRequestsForStatusUpdates = 
            this.activeUserRequestsForStatusUpdates.filter(
                request => request.requesterId !== requesterId
            );
    }
    
    public getStatusForActor(actorId: UserId): UserStatusTypes {
        return this.activeActorsStatuses.get(actorId) || UserStatusTypes.OFFLINE;
    }
    
    private notifyRequestersAboutActorStatusChange(actorId: UserId, currentActorStatus: UserStatusTypes): void {
        this.activeUserRequestsForStatusUpdates.forEach(listener => {
            if(listener.actorsIds.includes(actorId)) {
                // TODO: notify listener requester
                console.log('Notify listener', listener.requesterId);
                console.log('Current actor status', currentActorStatus);
            }
        });
    }
}
