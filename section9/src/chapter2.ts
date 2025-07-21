// infer 
// inference 추론

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R: never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>;

// ex
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;