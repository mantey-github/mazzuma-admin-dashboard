import * as Cookies from 'js-cookie'
import * as CryptoJS from 'crypto-js'
import env from './env'

const passPhrase = env('CREDITLOCUS_PASSPHRASE') || ''

/**
 * Cookie keys are; _creditlocus_admin_tokid(token id) | _creditlocus_admin_usrid(user id)
 * @param key
 * @param value
 * @param expires
 */
export const setCookie = (key: string, value: string, expires = 7) => {
  const cipheredValue = CryptoJS.AES.encrypt(value, passPhrase).toString()

  if (env('CREDITLOCUS_ENV') === 'development') {
    Cookies.set(key, cipheredValue)
    return
  }

  if (env('CREDITLOCUS_ENV') === 'staging') {
    Cookies.set(key, cipheredValue)
    return
  }

  const options: Cookies.CookieAttributes = {
    expires: expires,
    sameSite: 'Lax',
    secure: true,
  }

  Cookies.set(key, cipheredValue, options)
}
