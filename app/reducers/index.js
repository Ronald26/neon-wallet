// @flow

import { combineReducers } from 'redux'

import auth from './auth'
import type { AuthState } from './auth'

export type State = {
  auth: AuthState,
}

export default combineReducers({
  auth,
})
