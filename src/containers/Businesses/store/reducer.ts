import { BusinessActionTypes, BusinessState, SET_BUSINESS_ACTION } from './types'

const initialState: BusinessState = {
  businesses: [],
}

export function businesses(state = initialState, action: BusinessActionTypes): BusinessState {
  switch (action.type) {
    case SET_BUSINESS_ACTION:
      return {
        ...state,
        businesses: action.payload,
      }
    default:
      return state
  }
}
