export function convertEnum<T extends object>(
  target: T,
  value: any
): T[keyof T] {
  return (target as any)[value]
}
