// @flow

// import { createSelector } from 'reselect'
import { handleActions } from 'redux-actions'

export type AuthState = {
  publicKey: string,
  address: string,
  wif: string,
  // TODO: define type better
  signingFunction: () => any,
  isHardwareLogin: boolean,
}

const state = {}

const handlers: Object = {
  WIF_LOGIN: (
    state,
    {
      payload,
    }: {
      payload: {
        wif: string,
        address: string,
        isHardwareLogin: boolean,
      },
    },
  ): AuthState => ({ ...state, ...payload }),
  NEP_2_LOGIN: (state, { payload }): AuthState => ({ ...state, ...payload }),
}

// Selectors
// export const accountsSelector = (state: {}): [] => state.accounts

export default handleActions(handlers, state)
