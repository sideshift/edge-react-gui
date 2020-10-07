/* eslint-disable flowtype/require-valid-file-annotation */

import dateformat from 'dateformat'

/* globals jest */
jest.mock('dateformat', () => (number, format) => dateformat(number, format, true)) // force timezone to UTC

jest.mock('react-native-device-info', () => ({
  getBrand() {
    return 'Apple'
  },
  getBuildNumber() {
    return '2019010101'
  },
  getBundleId() {
    return 'co.edgesecure.app'
  },
  getDeviceId() {
    return 'iPhone7,2'
  },
  getUniqueId() {
    return 'abcd1234'
  },
  getUserAgent() {
    return Promise.resolve(
      'Mozilla/5.0 (iPhone9,3; U; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1'
    )
  },
  getVersion() {
    return '1.2.3'
  }
}))

jest.mock('edge-login-ui-rn', () => ({
  getSupportedBiometryType() {
    return 'FaceID'
  }
}))
jest.mock('react-native-share', () => 'RNShare')
jest.mock(
  'react-native-sound',
  () =>
    class Sound {
      static setCategory() {}
      play() {}
    }
)
jest.mock('react-native-camera', () => ({
  RNCamera: {
    Constants: {
      FlashMode: { torch: 'torch', off: 'off' },
      Type: { back: 'back' }
    }
  }
}))
jest.mock('react-native-safari-view', () => ({
  show: () => jest.fn()
}))
jest.mock('react-native-fs', () => {
  // https://github.com/itinance/react-native-fs/issues/404
  return {
    mkdir: jest.fn(),
    moveFile: jest.fn(),
    copyFile: jest.fn(),
    pathForBundle: jest.fn(),
    pathForGroup: jest.fn(),
    getFSInfo: jest.fn(),
    getAllExternalFilesDirs: jest.fn(),
    unlink: jest.fn(),
    exists: jest.fn(),
    stopDownload: jest.fn(),
    resumeDownload: jest.fn(),
    isResumable: jest.fn(),
    stopUpload: jest.fn(),
    completeHandlerIOS: jest.fn(),
    readDir: jest.fn(),
    readDirAssets: jest.fn(),
    existsAssets: jest.fn(),
    readdir: jest.fn(),
    setReadable: jest.fn(),
    stat: jest.fn(),
    readFile: jest.fn(),
    read: jest.fn(),
    readFileAssets: jest.fn(),
    hash: jest.fn(),
    copyFileAssets: jest.fn(),
    copyFileAssetsIOS: jest.fn(),
    copyAssetsVideoIOS: jest.fn(),
    writeFile: jest.fn(),
    appendFile: jest.fn(),
    write: jest.fn(),
    downloadFile: jest.fn(),
    uploadFiles: jest.fn(),
    touch: jest.fn(),
    MainBundlePath: jest.fn(),
    CachesDirectoryPath: jest.fn(),
    DocumentDirectoryPath: jest.fn(),
    ExternalDirectoryPath: jest.fn(),
    ExternalStorageDirectoryPath: jest.fn(),
    TemporaryDirectoryPath: jest.fn(),
    LibraryDirectoryPath: jest.fn(),
    PicturesDirectoryPath: jest.fn()
  }
})
jest.mock('react-native-localize', () => {
  return {
    getCountry() {
      return 'US'
    },
    getCurrencies() {
      return ['USD', 'EUR'] // List can sometimes be empty!
    },
    getLocales() {
      return [
        { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
        { countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false }
      ]
    },
    getNumberFormatSettings() {
      return {
        decimalSeparator: '.',
        groupingSeparator: ','
      }
    }
  }
})
