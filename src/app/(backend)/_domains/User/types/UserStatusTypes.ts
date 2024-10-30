export enum UserStatusTypes {
    ONLINE = 1,
    OFFLINE = 2,
    DO_NOT_DISTURB = 3,
    WRITING = 4,
}

export type UserStatusTypesReadable = keyof typeof UserStatusTypes;
