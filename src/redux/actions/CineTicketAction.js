import {SELECT_SEAT,CANCEL_SEAT} from '../types/CineTicketType'

export const selectSeatAction = (seat) => {
    return {
        type: SELECT_SEAT,
        seat
    }
}

export const cancelSeatAction = (seatNumber) => {
    return {
        type: CANCEL_SEAT,
        seatNumber
    }
}
