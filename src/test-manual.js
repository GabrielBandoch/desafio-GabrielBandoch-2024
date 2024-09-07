// src/teste-manual.js

import { RecintosZoo } from './recintos-zoo.js';

const recintosZoo = new RecintosZoo();

console.log('Teste 1:', recintosZoo.analisaRecintos('MACACO', 2));

console.log('Teste 2:', recintosZoo.analisaRecintos('MACACO', 0));

console.log('Teste 3:', recintosZoo.analisaRecintos('UNICORNIO', 1));

console.log('Teste 4:', recintosZoo.analisaRecintos('LEAO', 'um'));

console.log('Teste 5:', recintosZoo.analisaRecintos('HIPOPOTAMO', 5));

console.log('Teste 6:', recintosZoo.analisaRecintos('LEAO', 2));

console.log('Teste 7:', recintosZoo.analisaRecintos('MACACO', 1));
