import * as Cookies from 'js-cookie'
import * as CryptoJS from 'crypto-js'
import env from './env'

const passPhrase = env('MAZZUMA_PASSPHRASE') || ''

export const getCookie = (key: string) => {
  const decipheredValue = CryptoJS.AES.decrypt(Cookies.get(key) || '', passPhrase)
  return decipheredValue.toString(CryptoJS.enc.Utf8)
}
