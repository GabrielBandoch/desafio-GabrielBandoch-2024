class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'macaco', quantidade: 3, tamanho: 1 }] },
            { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
            { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'gazela', quantidade: 1, tamanho: 2 }] },
            { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
            { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'leao', quantidade: 1, tamanho: 3 }] }
        ];

        this.animaisPermitidos = {
            leao: { tamanho: 3, biomas: ['savana'], carnivoro: true },
            leopardo: { tamanho: 2, biomas: ['savana'], carnivoro: true },
            crocodilo: { tamanho: 3, biomas: ['rio'], carnivoro: true },
            macaco: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
            gazela: { tamanho: 2, biomas: ['savana'], carnivoro: false },
            hipopotamo: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false, toleraOutros: true }
        };
    }

    analisaRecintos(animal, quantidade) {

        const infoAnimal = this.animaisPermitidos[animal.toLowerCase()];
        if (!infoAnimal) {
            return { erro: 'Animal inválido' };
        }

        if (quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }

        const recintosViaveis = [];


        this.recintos.forEach(recinto => {
            if (!infoAnimal.biomas.includes(recinto.bioma.split(' e ')[0]) && !infoAnimal.biomas.includes(recinto.bioma.split(' e ')[1])) {
                return;
            }

            let espacoOcupado = recinto.animais.reduce((total, animal) => total + animal.quantidade * animal.tamanho, 0);

            const temOutraEspecie = recinto.animais.some(a => a.especie !== animal.toLowerCase());
            if (temOutraEspecie) {
                espacoOcupado += 1;
            }

            const espacoRestante = recinto.tamanho - espacoOcupado;
            const espacoNecessario = infoAnimal.tamanho * quantidade;

            const carnívoroExistente = recinto.animais.some(a => this.animaisPermitidos[a.especie].carnivoro);
            if (infoAnimal.carnivoro && recinto.animais.length > 0) {
                return;
            }
            if (carnívoroExistente) {
                return;
            }

            if (espacoRestante >= espacoNecessario) {
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoRestante - espacoNecessario} total: ${recinto.tamanho})`);
            }
        });

        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto viável' };
        }

        return { recintosViaveis: recintosViaveis.sort() };
    }
}

export { RecintosZoo as RecintosZoo };