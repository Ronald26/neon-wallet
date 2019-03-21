// @flow
import { combineReducers } from 'redux'
import { reducer as spunky } from 'spunky'

import generateWallet from './generateWallet'
import claim from './claim'
import notifications from './notifications'
import modal from './modal'

import refactored from '../reducers'

export default combineReducers({
  spunky,
  refactored,
  generateWallet,
  claim,
  notifications,
  modal,
})
