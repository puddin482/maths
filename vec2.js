export const vec2 = (x, y) => y === undefined ? [x, x] : [x, y];
export const add = ([ax, ay], [bx, by]) => [ax + bx, ay + by];
export const subtract = ([ax, ay], [bx, by]) => [ax - bx, ay - by];
export const multiply = ([ax, ay], [bx, by]) => [ax * bx, ay * by];
export const scale = ([x, y], s) => [x * s, y * s];
export const getLength = ([x, y]) => Math.sqrt(x ** 2 + y ** 2);
export const normalize = (v) => scale(v, 1 / getLength(v));
export const safeNormalize = (v) => getLength(v) === 0 ? vec2(0) : normalize(v);
export const floor = (v) => v.map(Math.floor);
export const ceil = (v) => v.map(Math.ceil);
export const round = (v) => v.map(Math.round);
export const distance = (a, b) => getLength(subtract(a, b));
export const dot = ([ax, ay], [bx, by]) => (ax * bx) + (ay * by);
export const min = ([ax, ay], [bx, by]) => vec2(Math.min(ax, bx), Math.min(ay, by));
export const max = ([ax, ay], [bx, by]) => vec2(Math.max(ax, bx), Math.max(ay, by));
