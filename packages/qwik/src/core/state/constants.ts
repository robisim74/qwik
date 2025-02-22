export const QObjectRecursive = 1 << 0;
export const QObjectImmutable = 1 << 1;

export const QOjectTargetSymbol = Symbol('proxy target');
export const QObjectFlagsSymbol = Symbol('proxy flags');
export const QObjectManagerSymbol = Symbol('proxy manager');

/** @internal */
export const _IMMUTABLE = Symbol('IMMUTABLE');

export const _IMMUTABLE_PREFIX = '$$';
