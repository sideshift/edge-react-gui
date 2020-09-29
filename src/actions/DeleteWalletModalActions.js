// @flow

import * as React from 'react'
import { Text } from 'react-native'

import { ButtonsModal } from '../components/modals/ButtonsModal.js'
import { Airship, showError } from '../components/services/AirshipInstance.js'
import s from '../locales/strings.js'
import { B } from '../styles/common/textStyles.js'
import type { Dispatch, GetState } from '../types/reduxTypes.js'
import { getWalletName } from '../util/CurrencyWalletHelpers.js'

export const showDeleteWalletModal = (walletId: string, additionalMsg: string = '') => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const { account } = state.core
  const { currencyWallets = {} } = account

  const result = await Airship.show(bridge => (
    <ButtonsModal
      bridge={bridge}
      title={s.strings.fragment_wallets_delete_wallet}
      message={
        <Text>
          {s.strings.fragmet_wallets_delete_wallet_first_confirm_message_mobile}
          <B>{getWalletName(currencyWallets[walletId])}</B>
          {additionalMsg == null ? '?' : `?\n\n${additionalMsg}`}
        </Text>
      }
      buttons={{
        ok: { label: s.strings.string_delete },
        cancel: { label: s.strings.string_cancel_cap, type: 'secondary' }
      }}
    />
  ))

  if (result === 'ok') {
    account.changeWalletStates({ [walletId]: { deleted: true } }).catch(showError)
  }
}
