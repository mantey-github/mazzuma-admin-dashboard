import env from './env'
import { getCookie } from './getCookie'
import { isEmpty } from 'ramda'
const SLACK_WEBHOOK_URL = env('MAZZUMA_SLACK_WEBHOOK_URL')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slack = require('slack-notify')(SLACK_WEBHOOK_URL)

const cookie = getCookie('_mazzuma_admin_tokid')

const auth = cookie && JSON.parse(cookie)

export const reportErrorToSlack = (
  message: string,
  status: string,
  action: string,
  path: string,
  phoneNumber: string
) => {
  if (env('MAZZUMA_ENV') === 'development') {
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
