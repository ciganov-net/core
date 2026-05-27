export interface ProtoTimestamp {
  seconds: number
  nanos: number
}

export const dateToProto = (date: Date): ProtoTimestamp => {
  const ms = date.getTime()
  return {
    seconds: Math.floor(ms / 1000),
    nanos: (ms % 1000) * 1e6
  }
}

export const protoToDate = (
  timestamp: ProtoTimestamp | null | undefined
): Date => {
  if (!timestamp || (timestamp.seconds === 0 && timestamp.nanos === 0)) {
    return new Date()
  }

  const ms =
    Number(timestamp.seconds) * 1000 + Math.floor(timestamp.nanos / 1e6)
  return new Date(ms)
}
