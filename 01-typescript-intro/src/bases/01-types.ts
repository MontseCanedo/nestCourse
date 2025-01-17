export let name: string = "Montse";
export const age = 29;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos: ${isValid}`;

console.log(templateString);
