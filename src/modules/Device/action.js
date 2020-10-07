// @flow

// import { Platform } from 'react-native'
// import { getBuildNumber, getUniqueId, getUserAgent, getVersion } from 'react-native-device-info'
import { getUniqueId } from 'react-native-device-info'

// import firebase from 'react-native-firebase'
// import ENV from '../../../env.json'
import type { Dispatch, GetState } from '../../types/reduxTypes'
import { notif1 } from '../notifServer'

export const registerDevice = () => async (dispatch: Dispatch, getState: GetState) => {
  // const state = getState()
  // const { context } = state.core
  // const { appId } = context
  // try {
  //   if (!ENV.USE_FIREBASE) return
  //   const deviceId = getUniqueId()
  //   const deviceIdEncoded = encodeURIComponent(deviceId)
  //   const tokenId = await firebase
  //     .iid()
  //     .getToken()
  //     .catch(() => console.log('Failed to fetch firebase device token.'))
  //   const deviceDescription = await getUserAgent()
  //   const osType = Platform.OS
  //   const edgeVersion = getVersion()
  //   const edgeBuildNumber = parseInt(getBuildNumber())
  //   await notif1.post(`device?deviceId=${deviceIdEncoded}`, {
  //     appId,
  //     tokenId,
  //     deviceDescription,
  //     osType,
  //     edgeVersion,
  //     edgeBuildNumber
  //   })
  // } catch (err) {
  //   console.log('Failed to register device for notifications.')
  // }
}

export const attachToUser = () => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const { account } = state.core

  const encodedUserId = encodeURIComponent(account.rootLoginId)
  const deviceId = getUniqueId()
  const deviceIdEncoded = encodeURIComponent(deviceId)
  try {
    await notif1.post(`user/device/attach?userId=${encodedUserId}&deviceId=${deviceIdEncoded}`)
  } catch (err) {
    console.log('Failed to attach user to device.')
  }
}
