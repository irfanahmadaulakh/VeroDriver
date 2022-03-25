import * as ActionTypes from './ActionTypes'

export const userAuth = user => ({
  type: ActionTypes.USER,
  user: user,
})
export const userLogout = logout => ({
  type: ActionTypes.LOGOUT,
})
export const setPurchaseID = id => ({
  type: ActionTypes.PURCHASE_ID,
  purchase_id: id,

})
export const setRideDetails = ride => ({
  type: ActionTypes.RIDE_DETAILS,
  rideDetails: ride,

})
export const setItemDetails = item => ({
  type: ActionTypes.ITEM_DETAILS,
  itemDetails: item,

})
export const setActiveStatus = item => ({
  type: ActionTypes.ACTIVE_STATUS,
  activeStatus: item,

})


