export interface IEventIdentifier {
    id: string
}

export interface IEventFields {
    info: IEventInfo
}

export interface IEventInfo {
    info: string
    name: string
    location: string
    organizer?: string
    shortInfo: string
    date: string
    endDate?: string
    cost?: number   
    tz?: string;
    id: string;
}

export interface IEventAttributes {
    attributes: Partial<IEventFields> & Pick<IEventFields, 'info'>
}

export interface IEvent extends IEventIdentifier, IEventAttributes { }


export interface ISongIdentifier {
    id: string
}

export interface ISongFields {
    SongInfo: ISongInfo
}

export interface ISongInfo {
    name: string
    melody?: string
    melodyLink?: string
    text: string
    note?: string
    writer?: string
}

export interface ISongAttributes {
    attributes: Partial<ISongFields> & Pick<ISongFields, 'SongInfo'>
}

export interface ISong extends ISongIdentifier, ISongAttributes { }


export interface IBoardIdentifier {
    id: string
}

export interface IBoardFields {
    forename: string
    surname: string
    role: string
    nickname: string
}

export interface IBoardAttributes {
    attributes: Partial<IBoardFields> & Pick<IBoardFields, 'forename' | 'surname' | 'role' | 'nickname'>
}

export interface IBoard extends IBoardIdentifier, IBoardAttributes { }



    

export interface StyrelseMember {
    forename: string;
    surname: string;
    nickname?: string;
    role: string;
    image?: string;
}
