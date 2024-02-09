let pattern = new RegExp(
  /^((0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)\.){3}(0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)$/
)

const isIp = (value?: any) => {
  if (!value) return false

  return pattern.test(value)
}

export default isIp
