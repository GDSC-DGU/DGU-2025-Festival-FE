export function getEnumKeyByValue<T extends Record<string, string>>(
  enumObj: T,
  value: string
): keyof T | undefined {
  return (Object.keys(enumObj) as (keyof T)[]).find(
    (key) => enumObj[key] === value
  );
}

export function getEnumValueByKey<T extends Record<string, string>>(
  enumObj: T,
  key: string
): string | undefined {
  return enumObj[key as keyof T];
}
