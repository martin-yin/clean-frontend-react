export type CasedProperties<T> = {
  [K in keyof T as UnderScoreCaseToCamelCase<K>]: T[K]
}

// 用于转换数组
// export type CasedPropertiesArray<T extends any[]> = T extends [] ? CasedPropertiesArray<T[number]> : CasedProperties<T>

type UnderScoreCaseToCamelCase<S> = S extends `${infer StartChar}_${infer EndChar}`
  ? `${StartChar}${Capitalize<EndChar>}`
  : S
