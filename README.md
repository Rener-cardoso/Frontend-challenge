# Desafio Front End QuikServe

Uma aplicação web construída com **React**, **TypeScript** e **Redux Toolkit**, projetada para que empresas do ramo alimentício possam usar para facilitar a venda dos itens de seus cardápios, o projeto foi projetado para que qualquer empresa possa adaptar o layout com as suas próprias cores e imagens.

Para executar o projeto basta usar o comando:

```
npm run dev
```

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.0-purple)

---

## Sobre o Projeto

Estrutura e Estratégias de Desenvolvimento
Neste projeto, adotei boas práticas de desenvolvimento para manter o código organizado, reutilizável e de fácil manutenção. Abaixo estão algumas estratégias e decisões que foram implementadas:

Divisão em Componentes Reutilizáveis
A aplicação foi estruturada em diversos componentes reutilizáveis, visando evitar repetição de código e manter a base limpa e organizada. Isso facilita futuras manutenções e ampliações do projeto.

Gerenciamento Global de Estado com Redux
O gerenciamento de estado global foi implementado com Redux Toolkit, o que simplifica a comunicação de informações importantes entre diferentes partes da aplicação. O estado global foi dividido em duas slices principais:

Informações Gerais do Restaurante

Esta slice é responsável por armazenar dados gerais do restaurante, como cores, imagens e informações de identidade visual.
Para acessar essas informações de maneira eficiente, foi criado um hook customizado com o selector. Esse hook centraliza o acesso aos dados, reduzindo repetições e mantendo o código mais limpo.
Gerenciamento do Menu e Carrinho

Esta slice gerencia os dados relacionados ao menu do restaurante e às ações do carrinho, incluindo:
Adicionar itens ao carrinho.
Aumentar ou diminuir a quantidade de itens.
Remover itens.
Nos componentes onde essas informações são exibidas, cálculos como o valor total do carrinho são realizados de forma eficiente.
Otimização com Reselect
Para evitar re-renderizações desnecessárias e melhorar a performance, foi utilizada a biblioteca Reselect. Essa biblioteca permite criar selectors memoizados, garantindo que cálculos e transformações nos dados sejam reprocessados apenas quando os estados relacionados forem alterados. Isso resultou em uma aplicação mais rápida e eficiente.

Essa abordagem garantiu que o código fosse:

Fácil de entender e modificar.
Escalável, permitindo adicionar novos recursos sem comprometer a estrutura existente.
Otimizado, com foco na redução de renderizações desnecessárias.

Testes Unitários dos Reducers
Os testes unitários dos reducers da menuSlice foram implementados utilizando a biblioteca Vitest, que possui excelente integração com projetos baseados em Vite. Seu funcionamento é muito semelhante ao de outras bibliotecas como o Jest, garantindo uma curva de aprendizado tranquila para desenvolvedores já familiarizados com ferramentas similares.

Para rodar os testes unitários, basta executar o seguinte comando no terminal:

```
npm run test
```

Isso iniciará o Vitest, executando os testes e exibindo o relatório de resultados diretamente no terminal.

Sobre a Escolha do Vitest
O Vitest foi escolhido por sua rapidez e compatibilidade nativa com o Vite, além de oferecer recursos modernos para testes de aplicações React, Redux, e TypeScript. Essa escolha proporciona um ambiente de testes eficiente e ágil, ideal para o desenvolvimento em projetos modernos.

Consumo de API

Um ultimo detalhe é que criei uma simples api intermediária, por onde eu faço diretamente as requisições para a api fornecida no desafio, assim consigo contornar o erro de cors, configurando o backend para aceitar requisições do frontEnd.