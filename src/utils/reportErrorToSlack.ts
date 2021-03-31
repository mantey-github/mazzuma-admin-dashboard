import env from './env'
import { getCookie } from './getCookie'
import { isEmpty } from 'ramda'
const SLACK_WEBHOOK_URL = env('CREDITLOCUS_SLACK_WEBHOOK_URL')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slack = require('slack-notify')(SLACK_WEBHOOK_URL)

const cookie = getCookie('_creditlocus_tokid')

const auth = cookie && JSON.parse(cookie)

export const reportErrorToSlack = (
  message: string,
  status: string,
  action: string,
  path: string,
  phoneNumber: string
) => {
  if (env('CREDITLOCUS_ENV') === 'development') {
    return
  }

  slack.bug({
    text: `${message}`,
    fields: {
      PhoneNumber: !isEmpty(phoneNumber) ? phoneNumber : auth?.phoneNumber,
      Status: status,
      Action: action,
      Path: path,
    },
  })
}
