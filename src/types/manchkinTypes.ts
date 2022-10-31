type Manchkin = {
    id: number,
    level: number,
    race: RaceType[],
    sex: string,
    class: ClassType[],
    equipement: Equip[]
}

type Equip = {
    id:1,
    name: string,
    power: number,
    big: boolean,
    arm: number,
    body: number,
    head: number,
    foot: number,
    price: number,
}

type RaceType = {
    id: number,
    name: string,
    bonus: string,
    definition: string,
}

type ClassType = {
    id: number,
    name: string,
    ability1: string,
    ability2: string,
}

export interface ManchkinState {
    manchkins: Manchkin[],
    loading: boolean,
    error: null | string,
}
export interface ManchkinAction {
    type: string;
    payload?: any;
}