import { RecursivePartial } from "./recursive-partial.type";

export type PartialExcept<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;