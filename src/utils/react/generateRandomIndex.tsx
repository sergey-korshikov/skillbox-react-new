import { assoc } from '../js/assoc';

// may be use library "nanoid" instead of this string
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());
// вызывается только один раз, соответственно у элементов будут одинаковые id

// export const generateId = <O extends object>(obj: O) => assignId(obj);
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
// будет вызываться каждый раз когда мы вызываем функцию
