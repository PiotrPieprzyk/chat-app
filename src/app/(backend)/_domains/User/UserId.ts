
import { Guid } from '@/app/(backend)/_common/valueObjects/GUID';


// Value Object that will create Unique User Id
export class UserId {
    public readonly value: string;
    
    private constructor(guid: string) {
        this.value = guid;
    }
    
    public static create(): UserId {
        return new UserId(Guid.createNewGuid());
    }
    
    public static createFromValue(value: string): UserId {
        return new UserId(Guid.createFromValue(value));
    }
}
