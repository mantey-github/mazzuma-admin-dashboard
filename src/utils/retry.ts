import React from 'react'

const retriesValue = parseInt(
  process.env.REACT_APP_RETRY_TIMES ? process.env.REACT_APP_RETRY_TIMES : '5'
)
const intervalValue = parseInt(
  process.env.REACT_APP_RETRY_INTERVAL ? process.env.REACT_APP_RETRY_INTERVAL : '1000'
)

const retry = (
  fn: () => Promise<{ default: React.ComponentType<any> }>,
  retriesLeft: number = retriesValue,
  interval: number = intervalValue
) => {
  return new Promise<{ default: React.ComponentType<any> }>((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error)
            return
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}

export default retry
