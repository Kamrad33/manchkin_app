import { ManchkinAction, ManchkinState } from "../../types/manchkinTypes"


const initialState: ManchkinState = {
    manchkins: [{
        id: 1,
        level: 1,
        race: [{id:1, name:'Human', bonus:'Nothing', definition:'Simple man'},],
        sex: 'male',
        class: [{id:1, name: 'Default', ability1:'Nothing', ability2: 'nothing'}],
        equipement: [
            {
                id:1,
                name: 'Ничего',
                power: 0,
                big: false,
                arm: 0,
                body: 0,
                head: 0,
                foot: 0,
                price: 0,
            },
        ]
    },
    ],
    loading: false,
    error: null,
}
const FETCH_MANCHKINS = 'FETCH_MANCHKINS';
const FETCH_MANCHKINS_SUCCESS = 'FETCH_MANCHKINS_SUCCESS ';
const FETCH_MANCHKINS_ERROR = 'FETCH_MANCHKINS_ERROR';

export const manchkinReducer = (state = initialState, action: ManchkinAction): ManchkinState => {
    switch (action.type){
        case FETCH_MANCHKINS:
            return {manchkins:[], loading: true, error: null}
        case FETCH_MANCHKINS_SUCCESS:
            return {manchkins:[], loading: true, error: null}
        case FETCH_MANCHKINS_ERROR:
            return {manchkins:[], loading: true, error: null}
        
        default: 
            return state
    }
}