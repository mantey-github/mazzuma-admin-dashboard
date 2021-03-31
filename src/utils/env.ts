const envVars = process.env

const env = (env: string) => {
  const key = `REACT_APP_${env}`
  if (!envVars[key]) throw new Error('no env config found for ' + key)

  return envVars[key]
}

export default env
