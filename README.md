# Desafio de Organização de Recintos de Zoológico

Este repositório contém a solução para o desafio de organização de recintos em um zoológico. A proposta do desafio é construir a lógica necessária para indicar os recintos onde novos animais se sintam confortáveis, respeitando as regras de compatibilidade de biomas e espécies.

## Estrutura do Projeto

- O código principal está localizado no arquivo `src/recintos-zoo.js`.
- Os testes estão no arquivo `src/recintos-zoo.test.js`.

## Regras do Desafio

- Um animal deve ser colocado em um bioma adequado, com espaço suficiente.
- Animais carnívoros devem habitar apenas com a própria espécie.
- Animais já presentes no recinto devem continuar confortáveis com a inclusão de novos.
- Hipopótamos toleram outras espécies apenas em recintos com biomas de savana e rio.
- Macacos precisam de companhia (da mesma ou de outras espécies).
- Quando há mais de uma espécie no mesmo recinto, é necessário considerar 1 espaço extra.
- Não é permitido dividir lotes de animais nem mover animais já presentes.

## Como Executar o Projeto

### 1. Instale as Dependências

Certifique-se de ter o [Node.js](https://nodejs.org) instalado. Então, na raiz do projeto, execute:

```bash
npm install
```

### 2. Rode os Testes

Utilize o Jest para rodar os testes existentes e os novos casos de teste que você adicionar:

```bash
npm test
```
