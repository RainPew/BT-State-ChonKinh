import { CANCEL_SEAT, SELECT_SEAT } from "../types/CineTicketType";

const stateDefault = {
    selectedList: [
    ]
}

const CineTicketReducer = (state=stateDefault,action) => {
    switch(action.type){
        case SELECT_SEAT:{
            let seatListUpdate = [...state.selectedList];
            let index = seatListUpdate.findIndex(pendingSeat => pendingSeat.soGhe === action.seat.soGhe);
            if(index !== -1){
                //the selected seat already in array -> remove it
                seatListUpdate.splice(index,1);
            }else{
                //the selected seat isn't in array-> push it
                seatListUpdate.push(action.seat)
            }
            // update state
            state.selectedList = seatListUpdate;
            return {...state}
        }
        case CANCEL_SEAT:{
            let seatListUpdate = [...state.selectedList];
            let index = seatListUpdate.findIndex(pendingSeat => pendingSeat.seatNumber === action.seatNumber);
            if(index !== -1){
                //the selected seat already in array -> remove it
                seatListUpdate.splice(index,1);
            }
            // update state
            state.selectedList = seatListUpdate;
            return {...state}
        }
        default: return {...state}   
    }
    
}

export default CineTicketReducer