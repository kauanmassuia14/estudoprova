# Material de Estudo Aprofundado — Teoria dos Grafos / Matemática Discreta

**Inteli — Turma 2026-1B-T13 · Eixo MTF**
**Professor:** Fernando Pizzo Ribeiro
**Livro-texto principal:** Oscar Levin, *Discrete Mathematics: An Open Introduction*, 3ª ed. (acesso aberto) — Capítulo 4, *Graph Theory*.
**Material complementar (Emparelhamento):** Henry Adams et al., *Counting Rocks! An Introduction to Combinatorics* (2023), cap. 10.3.
**Videoaulas:** Univesp (YouTube).

> Convenção deste documento: "Levin §4.x" remete ao capítulo de Teoria dos Grafos de Levin. As demonstrações são apresentadas com a "ideia da prova" quando ilustram um argumento de prova típico; enunciados de teorema são dados de forma precisa.

---

## Índice

- [Glossário de notação](#glossário-de-notação)

**Semana 03 — Grafos: conceitos básicos e representação**
1. [Conceitos básicos: definição, grau, isomorfismo, famílias de grafos, Lema do Aperto de Mãos](#1-conceitos-básicos-de-grafos)
2. [Representação de grafos: matriz de adjacência, lista de adjacência, matriz de incidência](#2-representação-de-grafos)
3. [Terminologia: dirigidos/não-dirigidos, ponderados, caminhos, ciclos, conexidade](#3-terminologia-caminhos-ciclos-e-conexidade)

**Semana 04 — Árvores e caminhos/ciclos de Euler e Hamilton**
4. [Árvores: definição, n−1 arestas, folhas, árvores geradoras, caracterizações](#4-árvores)
5. [Caminhos e Ciclos de Euler e Hamilton; Königsberg; Euler vs. Hamilton](#5-caminhos-e-ciclos-de-euler-e-hamilton)
6. [Árvores enraizadas: raiz, nó, folha, altura, profundidade, árvore binária](#6-árvores-enraizadas-terminologia)
7. [Aplicações: Carteiro Chinês vs. Caixeiro Viajante](#7-aplicações-carteiro-chinês-vs-caixeiro-viajante)

**Semana 08 — Coloração e grafos planares**
8. [Coloração de grafos: χ(G), clique ω(G), grafos perfeitos, 4 cores, guloso, coloração de arestas](#8-coloração-de-grafos)
9. [Grafos planares: faces, Fórmula de Euler, e ≤ 3v−6, não-planaridade de K₅ e K₃,₃, Kuratowski](#9-grafos-planares)

**Semana 09 — Emparelhamento**
10. [Emparelhamento: matching máximo/maximal, perfeito, Teorema de Hall, caminhos aumentantes](#10-emparelhamento-matching)

- [Lista de teoremas-chave](#lista-de-teoremas-chave)

---

## Glossário de notação

| Símbolo | Significado |
|---|---|
| `G = (V, E)` | Grafo com conjunto de vértices `V` e conjunto de arestas `E` |
| `v`, `n` | Número de vértices, `\|V\|` (Levin usa `v`; muita literatura usa `n`) |
| `e`, `m` | Número de arestas, `\|E\|` (Levin usa `e`; muita literatura usa `m`) |
| `{a, b}` | Aresta não-dirigida ligando os vértices `a` e `b` |
| `(a, b)` | Arco (aresta dirigida) de `a` para `b` |
| `d(v)`, `deg(v)` | Grau do vértice `v` (nº de arestas incidentes) |
| `d⁻(v)`, `d⁺(v)` | Grau de entrada e grau de saída (grafo dirigido) |
| `Δ(G)` | Grau máximo de `G`; `Δ = max_v d(v)` |
| `δ(G)` | Grau mínimo de `G`; `δ = min_v d(v)` |
| `N(v)` | Vizinhança de `v` (conjunto de vértices adjacentes a `v`) |
| `N(S)` | Vizinhança de um conjunto `S`: `⋃_{v∈S} N(v)` |
| `Kₙ` | Grafo completo em `n` vértices |
| `Kₘ,ₙ` | Grafo bipartido completo com partes de tamanho `m` e `n` |
| `Cₙ` | Ciclo com `n` vértices |
| `Pₙ` | Caminho (path) — Levin usa `Pₙ` para o caminho com `n` vértices |
| `G ≅ H` | `G` é isomorfo a `H` |
| `G' ⊆ G` | `G'` é subgrafo de `G` |
| `χ(G)` | Número cromático (vértices) |
| `χ'(G)` | Índice cromático (coloração de arestas) |
| `ω(G)` | Número de clique (maior clique) |
| `α(G)` | Número de independência (maior conjunto independente) |
| `f` | Número de faces de um grafo planar desenhado |
| `g` | Cintura (girth) — comprimento do menor ciclo |
| `⌈x⌉`, `⌊x⌋` | Teto e piso |
| `C(n,k)` = `(n choose k)` | Coeficiente binomial `n!/(k!(n−k)!)` |

---

# Semana 03 — Grafos: conceitos básicos e representação

## 1. Conceitos básicos de grafos

> Fonte: Levin §4.1 *Definitions* — https://discrete.openmathbooks.org/dmoi3/sec_gt-intro.html
> e introdução do cap. 4 — https://discrete.openmathbooks.org/dmoi3/ch_graphtheory.html

### 1.1 Definição formal de grafo

> **Definição (Grafo).** Um **grafo** é um par ordenado `G = (V, E)` formado por um conjunto não-vazio `V` (os **vértices**, ou nós) e um conjunto `E` (as **arestas**) de subconjuntos de dois elementos de `V`.

Pontos a observar nessa definição (padrão de Levin):
- Uma aresta é um conjunto `{a, b}` com `a, b ∈ V` e `a ≠ b`. Como é um *conjunto*, `{a,b} = {b,a}` — o grafo é **não-dirigido**.
- Como `E` é um *conjunto* de pares, **não há arestas repetidas** entre o mesmo par de vértices.
- Como cada aresta tem **dois elementos distintos**, **não há laços** (loops `{a,a}`).

> **Definição (Grafo simples).** Um grafo que satisfaz exatamente a definição acima — sem arestas múltiplas (paralelas) e sem laços — é um **grafo simples**.

> **Definição (Multigrafo).** Um **multigrafo** relaxa essas restrições: admite **múltiplas arestas** entre o mesmo par de vértices e **laços** (`{a,a}`, contando 2 para o grau de `a`). O grafo das pontes de Königsberg (§5) é um multigrafo.

**Vocabulário:** Dois vértices `a, b` são **adjacentes** (ou vizinhos) se `{a,b} ∈ E`. Uma aresta `{a,b}` é **incidente** aos vértices `a` e `b`. Duas arestas são **adjacentes** se compartilham um vértice.

### 1.2 Grau de um vértice

> **Definição (Grau).** O **grau** de um vértice `v`, denotado `d(v)`, é o número de arestas incidentes a `v`. (Em um multigrafo, cada laço em `v` conta 2.)

- **Grau máximo:** `Δ(G) = max_{v∈V} d(v)`.
- **Grau mínimo:** `δ(G) = min_{v∈V} d(v)`.
- Um vértice de grau `0` é **isolado**; de grau `1` é uma **folha** (em árvores) ou vértice pendente.

**Sequência de graus:** a lista dos graus de todos os vértices, geralmente em ordem não-crescente. Ex.: `(4,4,3,3,3,2,1)`.

### 1.3 Lema do Aperto de Mãos (Handshake Lemma)

> **Lema 4.1.5 (Aperto de Mãos / Soma dos Graus).** Em qualquer grafo, a soma dos graus de todos os vértices é igual ao dobro do número de arestas:
>
> ```
>      ∑   d(v)  =  2·|E|  =  2e
>    v ∈ V
> ```

**Prova (contagem dupla).** Cada aresta `{a,b}` tem exatamente **dois** extremos, logo contribui `+1` para `d(a)` e `+1` para `d(b)`, ou seja, contribui `2` para a soma total dos graus. Somando sobre todas as arestas, a soma dos graus é `2e`. ∎

Esse é o argumento de **dupla contagem** (*double counting*): conta-se a mesma quantidade — "extremidades de arestas" — de duas maneiras (por vértice e por aresta).

> **Proposição 4.1.8 (Corolário do Aperto de Mãos).** Em qualquer grafo, o número de vértices de **grau ímpar é par**.

**Prova.** Separe `V` em vértices de grau par (`P`) e ímpar (`I`). Como `∑_v d(v) = 2e` é par, e `∑_{v∈P} d(v)` é par (soma de números pares), segue que `∑_{v∈I} d(v)` também é par. Mas é soma de números ímpares; uma soma de `k` números ímpares só é par se `k` for par. Logo `|I|` é par. ∎

**Exemplo resolvido 1 (Levin 4.1.6).** Um grafo tem sequência de graus `(4,4,3,3,3,2,1)`. Quantas arestas?
- Soma dos graus `= 4+4+3+3+3+2+1 = 20`.
- Pelo Lema, `2e = 20 ⟹ e = 10` arestas.

**Exemplo resolvido 2 (Levin 4.1.7 — aplicação clássica).** É possível que **9 matemáticos** apertem a mão de **exatamente 7 outros** cada?
- Modelo: vértices = matemáticos; aresta = aperto de mãos. Cada vértice teria grau `7`.
- Soma dos graus `= 9 × 7 = 63`, que é **ímpar**. Isso daria `e = 63/2 = 31{,}5` arestas — impossível.
- (Alternativamente: 9 vértices de grau ímpar 7 ⟹ número *ímpar* de vértices de grau ímpar, contradizendo a Proposição 4.1.8.)
- **Resposta: não é possível.**

### 1.4 Isomorfismo de grafos

> **Definição (Isomorfismo).** Um **isomorfismo** entre dois grafos `G₁=(V₁,E₁)` e `G₂=(V₂,E₂)` é uma **bijeção** `f : V₁ → V₂` tal que, para todos `a,b ∈ V₁`:
>
> ```
>   {a,b} ∈ E₁   ⟺   {f(a), f(b)} ∈ E₂.
> ```
>
> Se existe tal `f`, dizemos que `G₁` e `G₂` são **isomorfos**, e escrevemos `G₁ ≅ G₂`.

Intuitivamente, grafos isomorfos são "o mesmo grafo desenhado de forma diferente" / com rótulos trocados.

**Invariantes** (preservados por isomorfismo — úteis para *provar que dois grafos NÃO são isomorfos*):
- mesmo número de vértices `|V|`;
- mesmo número de arestas `|E|`;
- **mesma sequência de graus**;
- mesmo número de componentes conexas, mesmos comprimentos de ciclos, etc.

> ⚠️ **Cuidado de prova:** ter os mesmos invariantes **não garante** isomorfismo. Para *provar* isomorfismo é preciso **exibir a bijeção `f`** e verificar a preservação das arestas. Para *refutar*, basta encontrar **um** invariante diferente.

**Exemplo resolvido 3.** Dois grafos com 5 vértices: `G` com sequência de graus `(3,3,2,2,2)` e `H` com `(4,2,2,2,2)`. São isomorfos? **Não** — sequências de graus diferentes.

### 1.5 Subgrafos

> **Definição (Subgrafo).** `G' = (V', E')` é **subgrafo** de `G = (V, E)`, escrito `G' ⊆ G`, se `V' ⊆ V` e `E' ⊆ E` (e as arestas de `E'` têm ambos os extremos em `V'`).

> **Definição (Subgrafo induzido).** `G' = (V', E')` é um **subgrafo induzido** por `V'` se `V' ⊆ V` e `E'` contém **todas** as arestas de `E` cujos dois extremos estão em `V'`. (Escolhem-se os vértices; as arestas vêm "de brinde".)

### 1.6 Famílias importantes de grafos

> **Grafo completo `Kₙ`.** Contém **todas** as arestas possíveis entre `n` vértices. Cada vértice tem grau `n−1`. Número de arestas:
> ```
>   |E(Kₙ)| = C(n,2) = n(n−1)/2.
> ```
> (Verificação pelo Aperto de Mãos: `n·(n−1) = 2e ⟹ e = n(n−1)/2`.)

> **Grafo bipartido.** `G` é **bipartido** se `V` pode ser particionado em dois conjuntos `A` e `B` tais que **nenhuma** aresta liga dois vértices de `A`, nem dois de `B` — toda aresta vai de `A` a `B`. Os conjuntos `A`, `B` são as **partes** (ou classes de cor).
>
> **Caracterização fundamental:** *um grafo é bipartido **se e somente se** não possui ciclos de comprimento ímpar.* (Equivalentemente, `χ(G) ≤ 2`; ver §8.)

> **Grafo bipartido completo `Kₘ,ₙ`.** Bipartido com partes `|A|=m`, `|B|=n`, em que **cada** vértice de `A` é adjacente a **todos** os de `B`. Tem `m·n` arestas; graus: vértices de `A` têm grau `n`, de `B` têm grau `m`.

> **Grafo regular.** `G` é **`k`-regular** se **todos** os vértices têm o mesmo grau `k`. (`Kₙ` é `(n−1)`-regular; `Cₙ` é `2`-regular; o grafo de Petersen é `3`-regular.)

**Exemplo resolvido 4.** Existe um grafo **3-regular** com **7 vértices**?
- Se 3-regular com `n=7`: soma dos graus `= 7×3 = 21`, ímpar ⟹ `e = 10{,}5`, impossível. **Não existe.**
- Regra geral: um grafo `k`-regular com `n` vértices só pode existir se `n·k` for par.

```
   Exemplos visuais (ASCII):

   K4 (completo, 4 vértices, 6 arestas):     C5 (ciclo, 5 vértices):     K_{2,3} (bipartido completo):
        a───b                                   a─b                          A: u   v
        |╲ ╱|                                   │ │                                | × |   (cada u,v ligado
        | ╳ |                                   e─┘ c                         B: x y z   a cada x,y,z)
        |╱ ╲|                                    ╲ ╱
        d───c                                     d
```

### 📌 Pontos de prova — Conceitos básicos

- **Saber enunciar** o Lema do Aperto de Mãos (`∑d(v)=2e`) e **provar por dupla contagem**.
- **Aplicar o corolário** "nº de vértices de grau ímpar é par" para mostrar impossibilidades (a pergunta clássica dos apertos de mão).
- Calcular arestas a partir da sequência de graus: `e = (∑d(v))/2`.
- `|E(Kₙ)| = n(n−1)/2`; `|E(Kₘ,ₙ)| = mn`.
- Para **refutar isomorfismo**: invariante diferente (graus, |E|, ciclos). Para **provar**: exibir a bijeção e checar arestas.
- Grafo `k`-regular com `n` vértices só existe se `nk` for par.
- Bipartido ⟺ sem ciclos ímpares.

---

## 2. Representação de grafos

> Fonte: videoaula Univesp — *Estrutura de Dados, Aula 24*.
>
> **🎬 Videoaula confirmada:** "Estrutura de Dados - Aula 24 - Grafos - Representação" — Univesp (Engenharia de Computação) — https://www.youtube.com/watch?v=9m8wDGYWlXA
>
> A aula complementa o texto abaixo com o enfoque **computacional** da Univesp (estrutura de dados, não teoria pura). Ênfases da videoaula:
> - **Matriz de adjacência** como matriz booleana `n × n` indexada pelos vértices: ocupa `Θ(n²)` independentemente do número de arestas, custo que a aula destaca como desperdício em grafos esparsos.
> - **Lista de adjacência** apresentada como vetor de `n` listas encadeadas, uma por vértice, guardando os vizinhos — a representação econômica para grafos com poucas arestas.
> - **Como percorrer/consultar** cada estrutura na prática (testar aresta vs. listar vizinhos) — o material liga a representação à eficiência dos algoritmos de busca, que é exatamente a tabela de trade-offs em §2.4.
> - Trata o grafo formalmente como par `(V, E)` de vértices e arcos, reforçando a definição já vista em §1.1.
>
> Fontes da busca: [Portal Univesp — Videoaula 23/24 Grafos](https://integra.univesp.br/courses/2639/pages/videoaula-23-grafos-conceitos-basicos) · [Grafos — Univesp por Estudantes](https://univesp-computacao.github.io/portal-disciplinas/estrutura_dados/grafos/)

Há três representações computacionais clássicas para um grafo `G` com `n` vértices e `m` arestas. Convenções: vértices rotulados `0..n−1` (ou `1..n`).

### 2.1 Matriz de adjacência

Matriz `A` de tamanho `n × n` com
```
   A[i][j] = 1   se  {i,j} ∈ E     (ou peso w(i,j) em grafo ponderado)
   A[i][j] = 0   caso contrário.
```
- **Não-dirigido:** `A` é **simétrica** (`A[i][j] = A[j][i]`).
- **Dirigido:** `A[i][j]=1` indica arco `i → j`; não necessariamente simétrica.
- **Soma de uma linha `i`** = grau de `i` (grau de saída, no caso dirigido).

```
   Grafo (não-dirigido):  0─1   2        Matriz de adjacência A:
                          │ │              0 1 2 3
                          3─┘                0 [0 1 0 1]
                                             1 [1 0 0 1]
   arestas: {0,1},{0,3},{1,3}               2 [0 0 0 0]
                                             3 [1 1 0 0]
```

### 2.2 Lista de adjacência

Para cada vértice `v`, guarda-se uma lista (vetor/lista encadeada) dos seus vizinhos.
```
   0: [1, 3]
   1: [0, 3]
   2: []
   3: [0, 1]
```
Em grafo ponderado, cada entrada guarda `(vizinho, peso)`.

### 2.3 Matriz de incidência

Matriz `B` de tamanho `n × m` (vértices × arestas):
```
   B[i][k] = 1   se o vértice i é extremo da aresta k
   B[i][k] = 0   caso contrário.
```
- Em grafo **não-dirigido**, cada coluna (aresta) tem exatamente **dois** `1`s.
- Em grafo **dirigido**, costuma-se usar `−1` na origem e `+1` no destino.
- A **soma de uma linha `i`** = grau de `i` (cada aresta incidente contribui 1).

```
   arestas: e0={0,1}, e1={0,3}, e2={1,3}      Matriz de incidência B:
                                                  e0 e1 e2
                                              0 [ 1  1  0]
                                              1 [ 1  0  1]
                                              2 [ 0  0  0]
                                              3 [ 0  1  1]
```

### 2.4 Trade-offs de espaço e tempo

| Operação / custo | Matriz de adjacência | Lista de adjacência | Matriz de incidência |
|---|---|---|---|
| Espaço | `Θ(n²)` | `Θ(n + m)` | `Θ(n·m)` |
| Testar se `{u,v}` é aresta | `O(1)` | `O(deg(u))` | `O(m)` |
| Listar vizinhos de `v` | `O(n)` | `O(deg(v))` (ótimo) | `O(m)` |
| Iterar sobre todas as arestas | `O(n²)` | `O(n + m)` | `O(n·m)` |
| Adicionar aresta | `O(1)` | `O(1)` | `O(n·m)` (realoca) |
| Bom para grafos… | **densos** (`m ≈ n²`) | **esparsos** (`m ≪ n²`) | raramente; útil em teoria/álgebra |

**Regra prática:** grafos reais costumam ser **esparsos** → **lista de adjacência** é a escolha padrão (BFS/DFS rodam em `O(n+m)`). Use **matriz de adjacência** quando precisa de teste de aresta em `O(1)` ou o grafo é denso/pequeno.

### 📌 Pontos de prova — Representação

- Saber **construir** as três representações a partir de um desenho do grafo (e vice-versa).
- Matriz de adjacência de grafo não-dirigido é **simétrica**; soma da linha = grau.
- Coluna da matriz de incidência (não-dirigido) tem exatamente **dois** 1s.
- Decorar a tabela de **espaço**: adjacência `Θ(n²)` vs. lista `Θ(n+m)`.
- Justificar a escolha: **denso → matriz**, **esparso → lista**.

---

## 3. Terminologia: caminhos, ciclos e conexidade

> Fonte: videoaula Univesp — *Estrutura de Dados, Aula 23*.
>
> **🎬 Videoaula confirmada:** "Estrutura de Dados - Aula 23 - Grafos - Conceitos básicos" — Univesp (Engenharia de Computação) — https://www.youtube.com/watch?v=MC0u4f334mI
>
> Esta é a aula introdutória de grafos do curso; cobre o vocabulário-base que também aparece em §1 e §3. Ênfases da videoaula:
> - Define grafo como uma **coleção de vértices `V` e de arcos `E`** (pares de vértices) — estrutura para modelar **relações entre objetos** de uma coleção, motivação aplicada que o texto de Levin trata de forma mais abstrata.
> - Apresenta **vértices, arestas e grau** e os tipos de grafo — **completos, regulares e ponderados** — antecipando as famílias de §1.6 e a noção de grafo ponderado de §3.1.
> - Já adianta as **formas de representar grafos no computador** (matriz e lista de adjacência), fazendo a ponte direta para a Aula 24 / §2.
>
> Fontes da busca: [Portal Univesp — Videoaula 23 Grafos: conceitos básicos](https://integra.univesp.br/courses/2639/pages/videoaula-23-grafos-conceitos-basicos) · [Grafos — Univesp por Estudantes](https://univesp-computacao.github.io/portal-disciplinas/estrutura_dados/grafos/)

### 3.1 Dirigido vs. não-dirigido; ponderado

- **Não-dirigido:** arestas são pares não-ordenados `{a,b}`. Relação de adjacência **simétrica**.
- **Dirigido (dígrafo):** arestas são pares ordenados `(a,b)` (arcos), com direção `a → b`. Distingue-se **grau de entrada** `d⁻(v)` e **grau de saída** `d⁺(v)`. Vale a versão dirigida do Aperto de Mãos: `∑_v d⁺(v) = ∑_v d⁻(v) = |E|`.
- **Ponderado:** cada aresta tem um **peso** `w(e)` (custo, distância, capacidade). Essencial para caminhos mínimos (Dijkstra), árvore geradora mínima, etc.

### 3.2 Passeios, trilhas, caminhos, ciclos

> Sequência de vértices e arestas consecutivas: `v₀, e₁, v₁, e₂, …, eₖ, vₖ`.

| Termo | Definição | Repete vértice? | Repete aresta? |
|---|---|---|---|
| **Passeio** (walk) | sequência qualquer de arestas consecutivas | sim | sim |
| **Trilha** (trail) | passeio que **não repete arestas** | sim | não |
| **Caminho** (path) | passeio que **não repete vértices** (logo nem arestas) | não | não |
| **Circuito / trilha fechada** | trilha que começa e termina no mesmo vértice | sim | não |
| **Ciclo** | caminho fechado (`v₀ = vₖ`, `k ≥ 3`, sem repetir outros vértices) | só o inicial=final | não |

- **Comprimento** de um passeio/caminho = número de arestas.
- **Distância** `dist(u,v)` = comprimento do **menor** caminho entre `u` e `v` (∞ se não há).

### 3.3 Conexidade

> **Definição.** Um grafo (não-dirigido) é **conexo** se existe um caminho entre **todo par** de vértices. Caso contrário, é **desconexo**, dividindo-se em **componentes conexas** (subgrafos conexos maximais).

- **Vértice de corte (cut vertex / ponto de articulação):** vértice cuja remoção aumenta o número de componentes.
- **Aresta de corte (ponte / bridge):** aresta cuja remoção desconecta o grafo. *Uma aresta é ponte ⟺ não pertence a nenhum ciclo.*

**Dígrafos:**
- **Fortemente conexo:** há caminho dirigido de `u` para `v` **e** de `v` para `u`, para todo par.
- **Fracamente conexo:** o grafo subjacente (ignorando direções) é conexo.

**Exemplo resolvido 5.** Quantas arestas tem, no mínimo, um grafo conexo com `n` vértices?
- Resposta: `n−1` (atingido por uma **árvore** — ver §4). Com menos de `n−1` arestas o grafo é necessariamente desconexo.

### 📌 Pontos de prova — Terminologia

- Distinguir **passeio / trilha / caminho / ciclo** (a confusão path × trail × walk cai em prova).
- Em dígrafo: `d⁻`, `d⁺`, e `∑d⁺ = ∑d⁻ = |E|`.
- **Conexo** = caminho entre todo par; **componentes** = subgrafos conexos maximais.
- **Ponte** ⟺ aresta que não está em ciclo nenhum.
- Mínimo de arestas para conexo com `n` vértices = `n−1`.

---

# Semana 04 — Árvores e caminhos/ciclos de Euler e Hamilton

## 4. Árvores

> Fonte: Levin §4.2 *Trees* — https://discrete.openmathbooks.org/dmoi3/sec_trees.html

### 4.1 Definições

> **Definição (Árvore).** Uma **árvore** é um grafo **conexo** que **não contém ciclos**.

> **Definição (Floresta).** Uma **floresta** é um grafo sem ciclos (acíclico). Cada componente conexa de uma floresta é uma árvore. (Uma floresta conexa é uma árvore.)

> **Definição (Folha).** Em uma árvore, um vértice de **grau 1** é uma **folha** (Levin, Prop. 4.2.3).

### 4.2 Caracterização por caminhos únicos

> **Proposição 4.2.1.** Um grafo `T` é uma **árvore** **se e somente se** entre **todo par** de vértices distintos de `T` existe um **único** caminho.

> **Corolário 4.2.2.** Um grafo `F` é uma **floresta** **se e somente se** entre qualquer par de vértices há **no máximo um** caminho.

*Intuição:* se houvesse dois caminhos distintos entre `u` e `v`, a união deles conteria um ciclo (contradição com a aciclicidade); se houvesse zero, o grafo seria desconexo (contradição com a conexidade).

### 4.3 Existência de folhas

> **Proposição 4.2.3.** Toda árvore com **pelo menos dois vértices** possui **pelo menos duas folhas** (dois vértices de grau 1).

*Ideia:* tome um caminho de comprimento máximo na árvore; seus dois extremos têm de ter grau 1 (senão o caminho poderia ser estendido ou existiria um ciclo).

### 4.4 Contagem de arestas: o teorema central

> **Proposição 4.2.4.** Seja `T` uma árvore com `v` vértices e `e` arestas. Então
> ```
>          e = v − 1.
> ```

**Prova (indução sobre o número de vértices).**
- *Base:* `v = 1` (vértice isolado): `e = 0 = 1 − 1`. ✔
- *Passo:* suponha que toda árvore com `v` vértices tem `v−1` arestas. Seja `T` uma árvore com `v+1` vértices. Pela Prop. 4.2.3, `T` tem uma folha `ℓ` (grau 1). Remova `ℓ` e sua única aresta: o grafo `T' = T − ℓ` continua conexo e acíclico (remover uma folha não cria desconexão nem ciclo), logo é uma árvore com `v` vértices. Por hipótese de indução, `T'` tem `v−1` arestas. Repondo `ℓ` e sua aresta, `T` tem `(v−1)+1 = v` arestas = `(v+1)−1`. ✔ ∎

Esse é o argumento de prova mais cobrado da seção: **indução + remoção de folha**.

### 4.5 Caracterizações equivalentes de árvore

Para um grafo `G` com `n` vértices, as afirmações abaixo são **equivalentes** (qualquer uma define árvore):

1. `G` é conexo e acíclico (definição).
2. `G` é conexo e tem exatamente `n−1` arestas.
3. `G` é acíclico e tem exatamente `n−1` arestas.
4. Entre todo par de vértices há um **único** caminho (Prop. 4.2.1).
5. `G` é **minimamente conexo**: conexo, mas remover qualquer aresta o desconecta.
6. `G` é **maximamente acíclico**: acíclico, mas adicionar qualquer aresta cria um ciclo.

> ⚠️ **Padrão de prova:** "conexo **e** `n−1` arestas ⟹ árvore" e "acíclico **e** `n−1` arestas ⟹ árvore". Note que **só** ter `n−1` arestas não basta (pode ser desconexo + com ciclo). É preciso *uma* das outras condições (conexo OU acíclico) junto.

### 4.6 Árvore geradora (spanning tree)

> **Definição.** Dado um grafo conexo `G`, uma **árvore geradora** (spanning tree) de `G` é um **subgrafo** de `G` que é uma árvore e **contém todos os vértices** de `G`.

> **Resultado-chave.** **Todo grafo conexo possui uma árvore geradora.**
> *Ideia:* enquanto houver ciclo, remova uma aresta dele (mantém conexidade, pois aresta de ciclo não é ponte); para quando não há mais ciclos → árvore geradora.

- Uma árvore geradora de `G` (com `n` vértices) tem sempre `n−1` arestas.
- Em grafo **ponderado**, busca-se a **árvore geradora mínima** (MST) — peso total mínimo — via algoritmos de **Kruskal** ou **Prim**.

**Exemplo resolvido 6.** Uma árvore tem 10 vértices, dos quais 4 são folhas. Os demais 6 têm grau ≥ 2. Qual a soma dos graus dos 6 vértices internos?
- Arestas: `e = v − 1 = 9`. Soma total dos graus `= 2e = 18`.
- Folhas contribuem `4 × 1 = 4`. Logo os 6 internos somam `18 − 4 = 14`.

### 📌 Pontos de prova — Árvores

- **Definição:** conexo + acíclico.
- **`e = v − 1`** — saber **provar por indução** removendo uma folha (clássico de prova).
- Toda árvore com ≥2 vértices tem **≥ 2 folhas**.
- Caminho **único** entre cada par ⟺ árvore.
- As **caracterizações equivalentes**: "conexo OU acíclico" + "`n−1` arestas".
- **Árvore geradora:** subgrafo-árvore que cobre todos os vértices; sempre existe se `G` conexo; tem `n−1` arestas; MST via Kruskal/Prim.

---

## 5. Caminhos e Ciclos de Euler e Hamilton

> Fonte: Levin §4.5 *Euler Paths and Circuits* — https://discrete.openmathbooks.org/dmoi3/sec_paths.html

### 5.1 Definições — Euler

> **Definição (Caminho/Trilha Euleriana).** Um **caminho euleriano** (Euler path) é um passeio pelo grafo que usa **cada aresta exatamente uma vez**.

> **Definição (Circuito Euleriano).** Um **circuito euleriano** (Euler circuit) é um caminho euleriano que **começa e termina no mesmo vértice**.

### 5.2 Teorema de Euler

> **Teorema de Euler (circuito).** Um grafo conexo possui um **circuito euleriano** **se e somente se** **todo vértice tem grau par**.

> **Teorema de Euler (caminho).** Um grafo conexo possui um **caminho euleriano** **se e somente se** tem **exatamente 0 ou 2 vértices de grau ímpar**.
> - **0** vértices ímpares ⟹ existe um **circuito** (caso anterior).
> - **2** vértices ímpares ⟹ existe um **caminho** que **começa em um** desses vértices ímpares e **termina no outro**.

**Ideia da prova (necessidade — "só se").** Considere um vértice `v` que **não** é início nem fim do passeio. Cada vez que o passeio "passa por" `v`, ele entra por uma aresta e sai por outra — gastando arestas **em pares**. Para usar todas as arestas incidentes a `v` e nunca ficar "preso", `d(v)` deve ser **par**. Já no vértice **inicial**, a primeira saída gasta 1 aresta avulsa; analogamente no **final** a última chegada. Logo, em um *caminho* euleriano, no máximo o início e o fim podem ter grau ímpar — ou seja, 0 ou 2 vértices ímpares. Em um *circuito* (início = fim), até essa folga some, e **todos** os graus devem ser pares.
A **suficiência** ("se") é construtiva: dado que os graus satisfazem a condição e o grafo é conexo, pode-se sempre montar o passeio (algoritmo de Hierholzer junta circuitos). ∎

> **Observação (multigrafos):** o teorema vale para multigrafos conexos; o que importa é a paridade dos graus, não a simplicidade. Por isso ele resolve diretamente o problema das pontes (um multigrafo).

### 5.3 As Sete Pontes de Königsberg

A cidade de Königsberg tinha duas ilhas e duas margens ligadas por **7 pontes**. Pergunta (séc. XVIII): é possível um passeio que cruze **cada ponte exatamente uma vez**?

Euler modelou:
- **Vértices** = as 4 regiões de terra (`A`, `B`, `C`, `D`).
- **Arestas** = as 7 pontes (multigrafo — há pares de pontes ligando as mesmas regiões).

```
                 A (margem norte)
               /  |  \
           ponte ponte ponte
            /     |      \
      C (ilha)===(2 pontes)=== ... === D (ilha)
            \     |      /
           ponte ponte ponte
               \  |  /
                 B (margem sul)

   Graus (clássico): d(A)=3, d(B)=3, d(C)=5, d(D)=3  →  os QUATRO vértices têm grau ímpar.
```

- Como há **4 vértices de grau ímpar** (mais que 2), **não existe caminho euleriano** — e portanto não há o passeio desejado.
- **Resposta histórica de Euler (1736): impossível.** Esse é considerado o nascimento da Teoria dos Grafos.

### 5.4 Definições — Hamilton

> **Definição (Caminho Hamiltoniano).** Um **caminho hamiltoniano** visita **cada vértice exatamente uma vez** (pode deixar arestas de fora).

> **Definição (Ciclo Hamiltoniano).** Um **ciclo hamiltoniano** é um caminho hamiltoniano que **retorna ao vértice inicial** (visita cada vértice uma vez e fecha o ciclo).

> ⚠️ **Não confundir:** Euler é sobre **arestas** (usar cada aresta uma vez); Hamilton é sobre **vértices** (visitar cada vértice uma vez).

### 5.5 Contraste de dificuldade: Euler (fácil) × Hamilton (difícil)

| | **Euleriano** | **Hamiltoniano** |
|---|---|---|
| Objeto visitado uma vez | **Arestas** | **Vértices** |
| Caracterização simples? | **Sim** — paridade dos graus (Teorema de Euler) | **Não** há caracterização simples conhecida |
| Decisão | **Polinomial** — basta checar graus + conexidade, `O(n+m)` | **NP-completo** |
| Condições suficientes | (a própria caracterização) | apenas *suficientes*, não necessárias: **Dirac** (`δ ≥ n/2`), **Ore** (`d(u)+d(v) ≥ n` p/ todo par não-adjacente) |

> **Fato (Levin §4.5).** Determinar se um grafo tem um caminho/ciclo hamiltoniano é "um exemplo de pergunta que, até onde se sabe, é difícil demais para computadores resolverem; é um problema **NP-completo**." Não se conhece teste eficiente, e descobrir um (ou provar que não existe) é o problema **P vs. NP**.

**Condições suficientes para Hamilton (úteis em prova):**
> **Teorema de Dirac (1952).** Se `G` é simples com `n ≥ 3` vértices e `δ(G) ≥ n/2` (todo vértice tem grau ≥ `n/2`), então `G` tem ciclo hamiltoniano.

> **Teorema de Ore (1960).** Se `G` é simples com `n ≥ 3` e, para **todo par** de vértices não-adjacentes `u,v`, vale `d(u)+d(v) ≥ n`, então `G` tem ciclo hamiltoniano.

(Dirac é caso particular de Ore.) São **suficientes, não necessárias**: um grafo pode ser hamiltoniano sem satisfazê-las (ex.: `Cₙ` é hamiltoniano mas tem `δ = 2 < n/2`).

**Exemplo resolvido 7.** O grafo abaixo (casa do carteiro) tem caminho euleriano?
```
        A───B
        |╲  |
        | ╲ |
        D───C
   arestas: {A,B},{A,C},{A,D},{B,C},{C,D}
   graus: d(A)=3, d(B)=2, d(C)=3, d(D)=2
```
- Vértices de grau ímpar: `A` e `C` → **exatamente 2**.
- Pelo Teorema de Euler, **existe caminho euleriano**, começando em `A` e terminando em `C` (ou vice-versa).
- Ex. de trilha: `A–B–C–A–D–C`. ✔ (Não existe *circuito* euleriano, pois há vértices ímpares.)

**Exemplo resolvido 8 (Königsberg modificado).** Quantas pontes precisariam ser **adicionadas/removidas** em Königsberg para tornar possível um *passeio* (caminho euleriano)?
- É preciso reduzir o nº de vértices ímpares de 4 para 2 (ou 0). Adicionar/remover **uma** ponte entre dois dos vértices ímpares muda a paridade de ambos: 4 ímpares → 2 ímpares. **Uma** ponte basta para haver um caminho euleriano. (Para um *circuito*, precisa zerar todos: 2 pontes bem escolhidas.)

### 📌 Pontos de prova — Euler e Hamilton

- **Euler = arestas; Hamilton = vértices.** Esta distinção é a pegadinha número 1.
- **Teorema de Euler:** circuito ⟺ **todos** os graus pares; caminho ⟺ **0 ou 2** vértices ímpares (e o caminho começa/termina nos ímpares). Saber a **ideia da prova** (arestas usadas em pares ⟹ paridade).
- **Königsberg:** 4 vértices ímpares ⟹ sem caminho euleriano ⟹ **impossível** (origem da área).
- **Euler é polinomial; Hamilton é NP-completo** — não existe caracterização simples conhecida.
- **Dirac (`δ ≥ n/2`)** e **Ore (`d(u)+d(v) ≥ n`)** são **suficientes, não necessárias** para hamiltoniano.

---

## 6. Árvores enraizadas: terminologia

> Fonte: videoaula Univesp — *Estrutura de Dados, Aula 15*.
>
> **🎬 Videoaula confirmada:** "Estrutura de Dados - Aula 15 - Árvores - Conceitos básicos" — Univesp (Engenharia de Computação) — https://www.youtube.com/watch?v=eiMMtyRBYCE
>
> Aula introdutória de árvores no curso de estrutura de dados; sustenta a terminologia de árvore enraizada abaixo e dialoga com §4. Ênfases da videoaula:
> - Posiciona a **árvore como caso especial de grafo** — um grafo **conexo e acíclico** em que cada par de nós é ligado por **um único caminho**, exatamente a caracterização da Prop. 4.2.1 (§4.2).
> - Introduz os **componentes da árvore** (raiz, nó, pai/filho, folha) e a noção de **subárvore**, base da tabela de terminologia desta seção.
> - Apresenta **tipos de árvore** e enfatiza a **aplicação prática** das árvores em computação (busca/organização de dados), motivando as árvores binárias de §6.1 e o ganho de eficiência `≈ log₂ n`.
>
> Fontes da busca: [YouTube — Aula 15 Árvores: conceitos básicos](https://www.youtube.com/watch?v=eiMMtyRBYCE) · [Cursou — Estrutura de Dados (curso completo)](https://www.cursou.com.br/informatica/estrutura-dados/)

Uma **árvore enraizada** (rooted tree) é uma árvore (no sentido de §4) em que um vértice é designado **raiz**, induzindo uma orientação raiz → folhas.

| Termo | Definição |
|---|---|
| **Raiz** (root) | o vértice de referência, no "topo" |
| **Nó** (node) | qualquer vértice da árvore |
| **Pai (parent)** de `v` | o vértice adjacente a `v` no caminho de `v` até a raiz |
| **Filho (child)** de `v` | vértice adjacente a `v` mais distante da raiz |
| **Irmãos** | nós com o mesmo pai |
| **Folha** | nó **sem filhos** (grau 1, exceto possivelmente a raiz) |
| **Nó interno** | nó com ≥ 1 filho |
| **Ancestral / descendente** | nós no caminho até a raiz / na subárvore abaixo |
| **Subárvore** | a árvore enraizada em um nó `v` (`v` e todos os seus descendentes) |

**Profundidade e altura:**
> **Profundidade (depth)** de um nó `v` = comprimento (nº de arestas) do caminho da **raiz** até `v`. A raiz tem profundidade `0`.

> **Altura (height) da árvore** = a **maior** profundidade entre todos os nós = comprimento do caminho mais longo da raiz a uma folha. (A altura de um *nó* é a distância dele à folha mais profunda na sua subárvore.)

> **Nível (level)** `k` = conjunto de todos os nós de profundidade `k`.

```
   Árvore enraizada:            profundidade
            (A)  ← raiz              0
           /   \
        (B)     (C)                  1
        / \       \
     (D) (E)     (F)                 2
                   \
                   (G)               3   ← altura da árvore = 3

   folhas: D, E, G          nós internos: A, B, C, F
   pai(F)=C ; filhos(B)={D,E} ; irmãos: D e E
```

### 6.1 Árvore binária

> **Definição.** Uma **árvore binária** é uma árvore enraizada em que **cada nó tem no máximo 2 filhos**, distinguidos como **filho esquerdo** e **filho direito**.

Variantes:
- **Árvore binária cheia (full):** todo nó tem 0 ou 2 filhos.
- **Árvore binária completa (complete):** todos os níveis cheios, exceto possivelmente o último (preenchido da esquerda p/ direita).
- **Árvore binária perfeita:** todos os níveis completamente cheios.

**Fórmulas úteis (árvore binária):**
- Número **máximo** de nós no nível `k`: `2ᵏ`.
- Número **máximo** de nós em árvore de altura `h`: `2^{h+1} − 1`.
- Uma árvore binária **perfeita** de altura `h` tem `2^{h+1} − 1` nós e `2ʰ` folhas.
- Altura **mínima** de uma árvore binária com `n` nós: `⌊log₂ n⌋` (≈ `log₂ n`).

**Exemplo resolvido 9.** Quantos nós, no máximo, tem uma árvore binária de altura `h = 4`?
- `2^{4+1} − 1 = 2⁵ − 1 = 31` nós.

### 📌 Pontos de prova — Árvores enraizadas

- **Profundidade** mede a partir da raiz (raiz = 0); **altura** = maior profundidade.
- Diferenciar **folha** (sem filhos) de **nó interno**.
- Árvore binária: ≤ 2 filhos por nó; **máx. de nós** em altura `h` = `2^{h+1}−1`; **folhas** numa perfeita = `2ʰ`.
- Altura mínima com `n` nós ≈ `log₂ n` (base de eficiência de buscas em BST/heaps).

---

## 7. Aplicações: Carteiro Chinês vs. Caixeiro Viajante

> Fonte: videoaula Univesp — *Pesquisa Operacional II, Aula 26*.
>
> **🎬 Videoaula confirmada:** "Pesquisa Operacional II - Aula 26 - Caminhos e ciclos Euleriano e Hamiltoniano" — Univesp (Engenharia de Produção) — https://www.youtube.com/watch?v=YWQQ-7U0PzU
>
> A aula é dada sob a ótica de **otimização / Pesquisa Operacional**, o enquadramento natural para os problemas CPP e TSP desta seção. Ênfases da videoaula:
> - Define **caminho/ciclo euleriano** (percorre cada **aresta** uma vez) e **caminho/ciclo hamiltoniano** (visita cada **vértice** uma vez) — a distinção aresta × vértice que é a base do contraste CPP × TSP.
> - Recupera o **critério de Euler** (grafo conexo é euleriano ⟺ todos os vértices têm grau par; caminho ⟺ 0 ou 2 vértices ímpares), conectando-se diretamente a §5.2 e à ideia do Carteiro Chinês.
> - Trata o **ciclo hamiltoniano** como caminho fechado que visita todos os vértices exatamente uma vez — o objeto do Caixeiro Viajante (§7.2) — sem critério simples análogo ao de Euler, reforçando o contraste fácil/difícil.
>
> Fontes da busca: [Plano de ensino EPR310 — Pesquisa Operacional II (Univesp)](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/EPR310.html) · [Pesquisa Operacional II — Univesp (Studocu)](https://www.studocu.com/pt-br/course/universidade-virtual-do-estado-de-sao-paulo/pesquisa-operacional-ii/4632139)

Dois problemas de otimização em grafos que materializam o contraste **Euler × Hamilton**.

### 7.1 Problema do Carteiro Chinês (Chinese Postman Problem — CPP)

> **Problema.** Em um grafo **ponderado conexo**, encontrar um **passeio fechado de custo mínimo** que percorra **cada aresta pelo menos uma vez**, retornando à origem.

- Modelo: o carteiro deve percorrer **todas as ruas (arestas)** e voltar ao ponto de partida com a menor distância total.
- Ligação com **Euler:** se o grafo já tem **circuito euleriano** (todos os graus pares), a solução é simplesmente esse circuito — custo = soma de todos os pesos, sem repetir nenhuma aresta.
- Se há `2k` vértices de grau ímpar, é preciso **duplicar (repetir)** o conjunto de arestas de **menor peso total** que torna todos os graus pares (emparelhar de forma ótima os vértices ímpares por caminhos mínimos — *T-join*).
- **Complexidade: polinomial** (resolúvel eficientemente, por se reduzir a *matching* de peso mínimo nos vértices ímpares). Herda a "facilidade" do problema euleriano.

### 7.2 Problema do Caixeiro Viajante (Traveling Salesman Problem — TSP)

> **Problema.** Em um grafo **ponderado completo**, encontrar um **ciclo de custo mínimo** que **visite cada vértice exatamente uma vez** e retorne à origem (i.e., o **ciclo hamiltoniano de peso mínimo**).

- Modelo: o vendedor deve visitar **todas as cidades (vértices)** uma vez, minimizando a distância total, e voltar para casa.
- Ligação com **Hamilton:** é exatamente buscar o **melhor ciclo hamiltoniano**.
- **Complexidade: NP-difícil** (a versão de decisão é NP-completa). Não se conhece algoritmo eficiente exato; usa-se programação dinâmica `O(2ⁿ·n²)` (Held–Karp), heurísticas (vizinho mais próximo, 2-opt) e aproximações (Christofides dá fator 3/2 para instâncias métricas). Herda a "dificuldade" do problema hamiltoniano.

### 7.3 Quadro comparativo

| | **Carteiro Chinês (CPP)** | **Caixeiro Viajante (TSP)** |
|---|---|---|
| Cobre cada… | **aresta** (rua) ≥ 1 vez | **vértice** (cidade) exatamente 1 vez |
| Conceito de grafos | **Euleriano** | **Hamiltoniano** |
| Objetivo | passeio fechado mínimo cobrindo arestas | ciclo hamiltoniano de peso mínimo |
| Complexidade | **Polinomial** (fácil) | **NP-difícil** (difícil) |
| Técnica típica | matching mínimo dos vértices ímpares | DP `O(2ⁿn²)`, heurísticas, aproximações |

### 📌 Pontos de prova — Aplicações

- **CPP = arestas = Euler = fácil (polinomial)**; **TSP = vértices = Hamilton = difícil (NP-difícil)**.
- Saber explicar a ideia do CPP: se grafo é euleriano, percorra o circuito; senão, duplique o menor conjunto de arestas que torna todos os graus pares.
- TSP = ciclo hamiltoniano de **peso mínimo**; não há algoritmo eficiente conhecido.

---

# Semana 08 — Coloração e grafos planares

## 8. Coloração de grafos

> Fonte: Levin §4.4 *Coloring* — https://discrete.openmathbooks.org/dmoi3/sec_coloring.html

### 8.1 Definições

> **Definição (Coloração própria de vértices).** Uma **coloração própria** é uma atribuição de cores aos vértices tal que **vértices adjacentes recebem cores diferentes**.

> **Definição (Número cromático `χ(G)`).** O **número cromático** de `G` é o **menor número de cores** necessário para obter uma coloração própria dos vértices.

> **Definição (Clique).** Uma **clique** é um conjunto de vértices **dois a dois adjacentes** — i.e., uma cópia de um grafo completo `Kₙ` dentro de `G`.

> **Definição (Número de clique `ω(G)`).** O maior `n` para o qual `G` contém uma clique de tamanho `n`.

> **Definição (Conjunto independente / número de independência `α(G)`).** Conjunto de vértices dois a dois **não-adjacentes**. Numa coloração própria, **cada classe de cor é um conjunto independente**.

### 8.2 Limites para o número cromático

> **Teorema 4.4.4.** O número cromático é **pelo menos** o número de clique:
> ```
>        χ(G) ≥ ω(G).
> ```
> *Razão:* os `ω(G)` vértices de uma clique são todos mutuamente adjacentes, logo exigem `ω(G)` cores distintas só entre si.

> **Teorema 4.4.5 (Teorema de Brooks).** Todo grafo `G` satisfaz
> ```
>        χ(G) ≤ Δ(G),
> ```
> **exceto** se `G` é um grafo **completo** `Kₙ` ou um **ciclo de comprimento ímpar**, casos em que `χ(G) = Δ(G) + 1`.

**Corolário (limite guloso simples):** para **todo** grafo, `χ(G) ≤ Δ(G) + 1` (ver algoritmo guloso abaixo). Brooks refina isso para `≤ Δ` salvo as duas exceções.

> **Casos básicos memorizados:**
> - `χ(Kₙ) = n`. `ω(Kₙ) = n`.
> - `χ(G) = 1` ⟺ `G` não tem arestas.
> - `χ(G) ≤ 2` ⟺ `G` é **bipartido** ⟺ `G` não tem **ciclos ímpares**. (Grafos bipartidos têm número cromático 2, pois as duas partes já são classes de cor.)
> - Ciclo `Cₙ`: `χ = 2` se `n` par; `χ = 3` se `n` ímpar.

### 8.3 Teorema das Quatro Cores

> **Teorema 4.4.2 (Teorema das Quatro Cores).** Se `G` é um grafo **planar**, então `χ(G) ≤ 4`.

- Equivale a: qualquer **mapa** plano pode ser colorido com 4 cores sem que regiões vizinhas compartilhem cor (regiões → vértices, fronteiras → arestas; o grafo dual é planar).
- Histórico: conjecturado em 1852; provado por **Appel & Haken (1976)** — primeira grande demonstração assistida por **computador** (verificação de centenas de configurações inevitáveis/redutíveis).
- O **Teorema das Cinco Cores** (`χ ≤ 5` para planares) tem prova simples "à mão"; o salto para 4 é o que exige computador.

### 8.4 Coloração de arestas

> **Definição (Índice cromático `χ'(G)`).** O **menor número de cores** para colorir as **arestas** de modo que arestas **adjacentes** (que compartilham um vértice) recebam cores diferentes.

> **Teorema 4.4.7 (Teorema de Vizing).** Para qualquer grafo `G`,
> ```
>      χ'(G) = Δ(G)   ou   χ'(G) = Δ(G) + 1.
> ```
> (Classe 1 se `χ' = Δ`; Classe 2 se `χ' = Δ+1`.)

### 8.5 Grafos perfeitos

> **Definição.** Um grafo é **perfeito** se, para ele **e para todo subgrafo induzido**, o número cromático é igual ao número de clique: `χ = ω`.

- Em geral só vale a desigualdade `χ ≥ ω`; em grafos perfeitos vale a igualdade (sempre). Exemplos: grafos **bipartidos**, grafos de **intervalos**, grafos **cordais**.
- O **Teorema dos Grafos Perfeitos Fortes** (Chudnovsky–Robertson–Seymour–Thomas, 2006) caracteriza os perfeitos pela ausência de "buracos ímpares" e seus complementos.

> Observação: a versão de Levin enfatiza que perfeitos são "aqueles em que `χ(G)` é igual ao número de clique". A definição rigorosa exige a igualdade `χ = ω` **em todos os subgrafos induzidos**.

### 8.6 Algoritmo guloso (greedy coloring)

```
   Algoritmo guloso de coloração de vértices:
   1. Ordene os vértices v1, v2, ..., vn (uma ordem qualquer).
   2. Para cada vi (nessa ordem):
        atribua a vi a MENOR cor (1,2,3,...) que NÃO apareça
        em nenhum vizinho já colorido de vi.
```
- **Garantia:** usa no máximo `Δ(G) + 1` cores (cada vértice tem ≤ `Δ` vizinhos, então sempre há uma cor livre entre as `Δ+1` primeiras). Logo `χ(G) ≤ Δ(G) + 1`.
- **Não é ótimo em geral:** o número de cores depende da **ordem**. Existe sempre uma ordem que atinge `χ(G)` exatamente, mas encontrá-la é difícil (colorir otimamente é NP-difícil).
- Heurística comum: **Welsh–Powell** (ordenar por grau decrescente) tende a usar poucas cores.

**Exemplo resolvido 10.** Qual `χ(C₅)` (ciclo de 5 vértices)?
- `C₅` é um ciclo **ímpar** ⟹ não bipartido ⟹ `χ > 2`. Com 3 cores é colorível (ex.: 1,2,1,2,3 ao redor). Logo `χ(C₅) = 3`.
- Confere com Brooks: `Δ(C₅) = 2`, e ciclo ímpar é exceção ⟹ `χ = Δ+1 = 3`. ✔

**Exemplo resolvido 11.** Mostre que `χ(G) ≥ 4` se `G` contém `K₄` como subgrafo.
- `K₄` é uma clique de tamanho 4 ⟹ `ω(G) ≥ 4`. Por `χ ≥ ω` (Teor. 4.4.4), `χ(G) ≥ 4`. ✔

### 📌 Pontos de prova — Coloração

- **`χ(G)`** = menor nº de cores p/ coloração própria de vértices.
- **`χ ≥ ω`** (clique força cores) — usar p/ **limite inferior**; **`χ ≤ Δ+1`** (guloso) — **limite superior**.
- **Brooks:** `χ ≤ Δ` salvo `Kₙ` e ciclo ímpar (`= Δ+1`).
- **`χ ≤ 2` ⟺ bipartido ⟺ sem ciclo ímpar**; `Cₙ`: 2 se par, 3 se ímpar.
- **4 Cores:** todo planar tem `χ ≤ 4` (Appel–Haken 1976, com computador).
- **Vizing:** `χ'(G) ∈ {Δ, Δ+1}`.
- **Guloso:** depende da ordem; garante `≤ Δ+1`, não é ótimo.

---

## 9. Grafos planares

> Fonte: Levin §4.3 *Planar Graphs* — https://discrete.openmathbooks.org/dmoi3/sec_planar.html

### 9.1 Definições

> **Definição (Grafo planar).** Um grafo é **planar** quando pode ser **desenhado no plano sem que nenhuma aresta cruze outra** (um *desenho planar* / *embedding*).

> **Definição (Face).** Quando um grafo planar é desenhado dessa forma, ele divide o plano em regiões chamadas **faces**. Inclui-se a **face externa** (região ilimitada).

> ⚠️ Planaridade é propriedade do **grafo** (existe *algum* desenho sem cruzamentos), não de um desenho específico. `K₄` desenhado com diagonais cruzando ainda é planar, pois admite um desenho sem cruzamentos.

### 9.2 Fórmula de Euler

> **Teorema (Fórmula de Euler).** Para **qualquer grafo planar conexo** com `v` vértices, `e` arestas e `f` faces (desenhado sem cruzamentos):
> ```
>          v − e + f = 2.
> ```

**Prova (indução / construção).** Comece com `P₂` (2 vértices, 1 aresta, 1 face): `2 − 1 + 1 = 2`. ✔ Todo grafo planar conexo pode ser construído a partir daí por dois movimentos:
- **(1) Adicionar um "espinho"** (novo vértice ligado por 1 aresta a um existente): `v ↑1`, `e ↑1`, `f` inalterado ⟹ `v−e+f` inalterado.
- **(2) Fechar um circuito** (nova aresta entre dois vértices já presentes): `e ↑1`, `f ↑1` (a nova aresta divide uma face em duas), `v` inalterado ⟹ `v−e+f` inalterado.
Como `v−e+f = 2` no início e os dois movimentos preservam o valor, vale sempre. ∎

> **Corolário (poliedros — Euler 1758).** Para um poliedro convexo com `V` vértices, `A` arestas e `F` faces: `V − A + F = 2`. (Ex.: cubo `8 − 12 + 6 = 2`.)

### 9.3 Limites para o número de arestas

> **Contagem aresta-face.** Cada **face** é limitada por **pelo menos 3 arestas** (em grafo simples, `v ≥ 3`), e cada **aresta** faz fronteira com **exatamente 2 faces**. Logo, contando incidências aresta-face:
> ```
>          3f ≤ 2e.
> ```
> Substituindo `f = 2 − v + e` (Euler) em `3f ≤ 2e`:
> ```
>   3(2 − v + e) ≤ 2e  ⟹  6 − 3v + 3e ≤ 2e  ⟹  e ≤ 3v − 6.
> ```

> **Teorema (limite de arestas — planar simples).** Para todo grafo simples **conexo planar** com `v ≥ 3`:
> ```
>          e ≤ 3v − 6.
> ```

> **Teorema (limite triângulo-livre / bipartido).** Se, além disso, `G` **não tem triângulos** (toda face limitada por ≥ 4 arestas — caso de grafos **bipartidos**), então `4f ≤ 2e`, donde:
> ```
>          e ≤ 2v − 4.
> ```

> **Generalização (cintura `g`).** Se a menor cintura é `g`, então `g·f ≤ 2e`, levando a `e ≤ g(v−2)/(g−2)`.

> ⚠️ Esses limites são **necessários**, não suficientes: `e ≤ 3v−6` é condição **necessária** para planaridade. Se um grafo **viola** `e ≤ 3v−6`, ele **não é planar**. Mas satisfazer não garante planaridade (ex.: `K₃,₃` satisfaz `e ≤ 3v−6` mas não é planar — precisa do limite bipartido).

### 9.4 Não-planaridade de `K₅` e `K₃,₃`

> **Teorema 4.3.1 — `K₅` não é planar.**
> `K₅` tem `v = 5`, `e = C(5,2) = 10`. O limite `e ≤ 3v − 6 = 3·5 − 6 = 9`. Mas `e = 10 > 9`. **Contradição** ⟹ `K₅` não é planar. ∎
> *(Argumento alternativo via Euler: se planar, `f = 2 − v + e = 7`; mas `3f ≤ 2e` daria `21 ≤ 20`, falso.)*

> **Teorema 4.3.2 — `K₃,₃` não é planar.**
> `K₃,₃` tem `v = 6`, `e = 3·3 = 9`. É **bipartido** (sem triângulos), então usa-se o limite `e ≤ 2v − 4 = 2·6 − 4 = 8`. Mas `e = 9 > 8`. **Contradição** ⟹ `K₃,₃` não é planar. ∎
> *(Via Euler: `f = 2 − 6 + 9 = 5`; como não há triângulos, `4f ≤ 2e` daria `20 ≤ 18`, falso.)*

```
   K5 (não planar):            K3,3 (não planar — "3 casas, 3 utilidades"):
        a                         A   B   C    (casas)
      / | \                       |\ /|\ /|
     e--+--b      todas as        | X | X |    cada casa ligada a
     |\ | /|      10 arestas      |/ \|/ \|    cada utilidade
     | \|/ |                      x   y   z    (água, luz, gás)
     d-----c
```

### 9.5 Teorema de Kuratowski

> **Teorema de Kuratowski (1930).** Um grafo é **planar se e somente se** **não contém** nenhuma **subdivisão** de `K₅` nem de `K₃,₃`.

- Uma **subdivisão** de `H` é obtida de `H` substituindo arestas por caminhos (inserindo vértices de grau 2 ao longo das arestas). Subdividir não muda planaridade.
- Em outras palavras: `K₅` e `K₃,₃` são os **dois únicos obstáculos mínimos** à planaridade.
- **Teorema de Wagner (forma equivalente):** `G` é planar ⟺ `G` não tem `K₅` nem `K₃,₃` como **menor** (minor) — obtido por remoção de vértices/arestas e contração de arestas.

> Observação: a seção 4.3 de Levin **não enuncia explicitamente** Kuratowski; ela é incluída aqui por estar listada no plano da disciplina e por ser o teorema clássico de caracterização de planaridade. _(Enunciado por conhecimento consolidado; o conteúdo de Levin §4.3 cobre Euler, os limites de arestas e a não-planaridade de K₅/K₃,₃.)_

**Exemplo resolvido 12 (Levin 4.3.3 — poliedro impossível).** Existe poliedro convexo com 3 faces triangulares, 6 pentagonais e 5 heptagonais?
- Total de faces `f = 3 + 6 + 5 = 14`.
- Arestas (cada face conta suas bordas, cada aresta em 2 faces): `e = (3·3 + 6·5 + 5·7)/2 = (9 + 30 + 35)/2 = 74/2 = 37`.
- Por Euler `v = 2 − f + e = 2 − 14 + 37 = 25`.
- Cada vértice tem grau ≥ 3 ⟹ soma dos graus ≥ `3·25 = 75` ⟹ `e ≥ 75/2 = 37{,}5`. Mas `e = 37 < 37{,}5`. **Contradição** ⟹ esse poliedro **não existe**. ∎

**Exemplo resolvido 13.** Um grafo simples conexo planar tem 10 vértices. Qual o número **máximo** de arestas?
- `e ≤ 3v − 6 = 3·10 − 6 = 24` arestas.

### 📌 Pontos de prova — Grafos planares

- **Fórmula de Euler `v − e + f = 2`** (conexo, planar) — saber a **ideia da prova** (espinho/circuito) e aplicar a poliedros (`V−A+F=2`).
- Contar **faces:** `f = 2 − v + e`. Cada aresta toca 2 faces; cada face ≥ 3 arestas ⟹ `3f ≤ 2e`.
- **`e ≤ 3v − 6`** (simples planar, `v≥3`); **`e ≤ 2v − 4`** (bipartido/triângulo-livre). Violou ⟹ **não planar** (necessário, não suficiente).
- **`K₅` não planar:** `e=10 > 3v−6=9`. **`K₃,₃` não planar:** `e=9 > 2v−4=8` (usar o limite *bipartido*).
- **Kuratowski:** planar ⟺ sem subdivisão de `K₅` ou `K₃,₃`. (Wagner: sem menor `K₅`/`K₃,₃`.)
- **4 Cores** liga-se aqui: todo planar tem `χ ≤ 4`.

---

# Semana 09 — Emparelhamento

## 10. Emparelhamento (Matching)

> Fonte: Henry Adams et al., *Counting Rocks! An Introduction to Combinatorics* (2023), cap. 10.3 *Matchings* — https://www.mathematicalgemstones.com/maria/OER/CountingRocks-Oct2023.pdf
> _(O PDF excede o limite de download via fetch — 10 MB; o conteúdo abaixo é coberto por conhecimento consolidado de teoria de emparelhamento, matematicamente padrão.)_

### 10.1 Definições

> **Definição (Emparelhamento / Matching).** Um **emparelhamento** `M` em um grafo `G = (V,E)` é um conjunto de arestas `M ⊆ E` tal que **nenhum vértice é extremo de mais de uma aresta de `M`** — i.e., as arestas de `M` são **dois a dois disjuntas** (não compartilham vértices).

- Um vértice que é extremo de alguma aresta de `M` é **saturado** (coberto/casado) por `M`; caso contrário é **insaturado** (livre).

> **Definição (Matching maximal — *maximal*).** `M` é **maximal** se **não pode ser estendido** — não existe aresta de `E∖M` que possa ser adicionada mantendo `M` um emparelhamento. (Maximal por **inclusão**.)

> **Definição (Matching máximo — *maximum*).** `M` é **máximo** se tem o **maior número possível de arestas** dentre todos os emparelhamentos de `G`. O tamanho `|M|` de um matching máximo é o **número de emparelhamento** `ν(G)`.

> ⚠️ **Maximal ≠ Máximo.** Todo máximo é maximal, mas **nem todo maximal é máximo**. Um maximal apenas não admite extensão *local*; um máximo é o ótimo *global*.

```
   Exemplo: caminho P4 = a—b—c—d
   - M1 = {b—c}        é MAXIMAL (não dá pra adicionar a—b nem c—d sem conflito)
                       mas NÃO é máximo (só 1 aresta, deixa a e d livres).
   - M2 = {a—b, c—d}   é MÁXIMO (2 arestas, satura todos os 4 vértices) — é perfeito.
```

> **Definição (Matching perfeito).** `M` é **perfeito** se **satura todos os vértices** de `G` (todo vértice é casado). Requer `|V|` par e `|M| = |V|/2`. Um matching perfeito é sempre máximo (mas o contrário não vale — pode não existir perfeito).

> **Definição (Matching quase-perfeito).** Satura todos os vértices exceto um (só possível com `|V|` ímpar).

### 10.2 Emparelhamento em grafos bipartidos

Seja `G` bipartido com partes `A` e `B`. Pergunta central: **existe um matching que satura toda a parte `A`** (cada vértice de `A` casado com um de `B`)? — o "problema do casamento": casar todos de `A`.

> **Definição (Vizinhança de um conjunto).** Para `S ⊆ A`, `N(S) = ⋃_{v∈S} N(v)` é o conjunto de todos os vértices de `B` adjacentes a algum vértice de `S`.

### 10.3 Teorema de Hall (condição do casamento)

> **Teorema de Hall (Hall's Marriage Theorem, 1935).** Seja `G` bipartido com partes `A` e `B`. Existe um emparelhamento que **satura `A`** (casa todo vértice de `A`) **se e somente se** vale a **condição de Hall**:
> ```
>      |N(S)| ≥ |S|     para TODO subconjunto  S ⊆ A.
> ```

**Interpretação ("casamento"):** `A` = pessoas, `B` = parceiros possíveis; aresta = compatibilidade. Todos de `A` conseguem casar ⟺ **todo grupo de `k` pessoas conhece, no total, ≥ `k` parceiros possíveis**.

**Ideia da prova.**
- **(⟹ necessidade) fácil:** se existe matching que satura `A`, então qualquer `S ⊆ A` está casado com `|S|` vértices **distintos** de `B`, todos em `N(S)`; logo `|N(S)| ≥ |S|`. A contrapositiva dá o **certificado de impossibilidade**: se existe `S` com `|N(S)| < |S|` (um "gargalo"), nenhum matching satura `A`.
- **(⟸ suficiência) mais difícil:** prova clássica por **indução** em `|A|` (dois casos: ou todo `S` próprio tem folga `|N(S)| ≥ |S|+1`, ou existe `S` "apertado" com `|N(S)|=|S|`, e particiona-se o problema) — ou, equivalentemente, via **caminhos aumentantes** / fluxo máximo. ∎

> **Corolário (grafo bipartido `k`-regular, `k ≥ 1`).** Todo grafo bipartido `k`-regular possui um **matching perfeito** (e suas arestas decompõem-se em `k` matchings perfeitos). *Razão:* num bipartido `k`-regular, `|A| = |B|` e a condição de Hall vale automaticamente por contagem de arestas.

**Exemplo resolvido 14.** `A = {1,2,3}`, `B = {x,y,z}`, com `N(1)={x,y}`, `N(2)={x}`, `N(3)={x}`. Existe matching que satura `A`?
- Tome `S = {2,3}`: `N(S) = {x}`, logo `|N(S)| = 1 < 2 = |S|`. **Falha a condição de Hall** (os vértices 2 e 3 disputam o único vizinho `x`). **Não existe** matching saturando `A`.

### 10.4 Caminhos aumentantes (augmenting paths)

> **Definição (Caminho `M`-alternante).** Dado um matching `M`, um caminho é **alternante** se suas arestas alternam entre **fora de `M`** e **dentro de `M`**.

> **Definição (Caminho `M`-aumentante).** Um caminho alternante cujos **dois extremos são vértices insaturados** (livres). Ele tem comprimento ímpar, com uma aresta "fora de M" a mais do que "dentro de M".

> **Operação de aumento:** dado um caminho aumentante `P`, troque dentro/fora ao longo de `P` (`M' = M △ P`, diferença simétrica). Resultado: `|M'| = |M| + 1`. **Aumenta o emparelhamento em 1.**

```
   Aumento: matching atual M = {b—c}, caminho aumentante  a—b—c—d
            (a livre)  a —— b ══ c —— d  (d livre)      ══ = aresta de M, —— = fora
   Diferença simétrica troca: a—b entra, b—c sai, c—d entra
            ⟹ M' = {a—b, c—d}   (2 arestas, maior!)
```

> **Teorema de Berge (1957) — Teorema do Caminho Aumentante.** Um emparelhamento `M` é **máximo** **se e somente se** **não existe** caminho `M`-aumentante em `G`.

- É a base algorítmica: começa-se com `M` qualquer e, enquanto houver caminho aumentante (achável por BFS/DFS), aumenta-se. Quando não há mais, `M` é máximo.
- Em **bipartidos**: algoritmo de **Hopcroft–Karp** acha matching máximo em `O(E·√V)`. (Em grafos gerais, o algoritmo de Edmonds — *blossom* — lida com ciclos ímpares.)

### 10.5 Teorema de König (bipartido)

> **Teorema de König (1931).** Em um grafo **bipartido**, o tamanho de um **matching máximo** é igual ao tamanho de uma **cobertura de vértices mínima** (menor conjunto de vértices que toca toda aresta):
> ```
>      ν(G) = τ(G)        (matching máximo = cobertura de vértices mínima),  em bipartidos.
> ```

- É o "dual" min-max do emparelhamento bipartido e equivale a Hall e ao teorema de fluxo máximo–corte mínimo. Em grafos gerais vale apenas `ν(G) ≤ τ(G)`.

**Exemplo resolvido 15.** `K₃,₃` tem matching perfeito? Qual `ν(K₃,₃)`?
- `|A| = |B| = 3`; para todo `S ⊆ A`, `N(S) = B` se `S ≠ ∅`, logo `|N(S)| = 3 ≥ |S|`. Condição de Hall vale ⟹ **existe matching saturando `A`** = perfeito. `ν(K₃,₃) = 3`.

**Exemplo resolvido 16.** Em `K₅` (5 vértices, ímpar), existe matching perfeito?
- Perfeito exige `|V|` par. `|V| = 5` é ímpar ⟹ **não há matching perfeito**. O máximo é `ν(K₅) = 2` (satura 4 vértices, deixa 1 livre — quase-perfeito).

### 📌 Pontos de prova — Emparelhamento

- **Matching** = arestas sem vértice em comum. **Saturado/casado** vs. **livre**.
- **Maximal ≠ Máximo:** maximal = não estende localmente; máximo = maior global. Saber dar exemplo (`P₄`: `{b–c}` é maximal não-máximo).
- **Perfeito:** satura todos; exige `|V|` par; `|M| = |V|/2`.
- **Teorema de Hall:** satura `A` ⟺ `|N(S)| ≥ |S|` ∀`S⊆A`. Para **refutar**, exibir um `S` com `|N(S)| < |S|` (o gargalo). Saber a **necessidade** (prova fácil).
- **Caminho aumentante** + **Teorema de Berge:** `M` máximo ⟺ sem caminho aumentante. Operação `M △ P` aumenta em 1.
- **König (bipartido):** matching máximo = cobertura de vértices mínima.
- Bipartido `k`-regular ⟹ tem matching **perfeito**.

---

# Lista de teoremas-chave

| # | Teorema / Resultado | Enunciado essencial | Onde |
|---|---|---|---|
| T1 | **Lema do Aperto de Mãos** | `∑_{v} d(v) = 2·|E|` | §1.3 (Levin 4.1.5) |
| T2 | **Paridade dos graus ímpares** | nº de vértices de grau ímpar é par | §1.3 (Levin 4.1.8) |
| T3 | `|E(Kₙ)| = n(n−1)/2` | arestas do grafo completo | §1.6 |
| T4 | **Bipartido ⟺ sem ciclo ímpar** | caracterização de bipartição | §1.6, §8.2 |
| T5 | **Caminho único ⟺ árvore** | `T` árvore ⟺ caminho único entre todo par | §4.2 (Levin 4.2.1) |
| T6 | **Árvore ⟹ ≥ 2 folhas** | toda árvore com ≥2 vértices tem ≥2 folhas | §4.3 (Levin 4.2.3) |
| T7 | **`e = v − 1` (árvore)** | árvore com `v` vértices tem `v−1` arestas | §4.4 (Levin 4.2.4) |
| T8 | **Existência de árvore geradora** | todo grafo conexo tem spanning tree | §4.6 |
| T9 | **Teorema de Euler (circuito)** | circuito euleriano ⟺ todos os graus pares (conexo) | §5.2 |
| T10 | **Teorema de Euler (caminho)** | caminho euleriano ⟺ 0 ou 2 vértices de grau ímpar | §5.2 |
| T11 | **Königsberg** | 4 vértices ímpares ⟹ sem caminho euleriano (impossível) | §5.3 |
| T12 | **Euler P × Hamilton NP-completo** | Euler decidível em `O(n+m)`; Hamilton NP-completo | §5.5 |
| T13 | **Dirac** | `δ(G) ≥ n/2` (n≥3) ⟹ ciclo hamiltoniano | §5.5 |
| T14 | **Ore** | `d(u)+d(v) ≥ n` p/ não-adjacentes ⟹ hamiltoniano | §5.5 |
| T15 | **Teorema das Quatro Cores** | `G` planar ⟹ `χ(G) ≤ 4` | §8.3 (Levin 4.4.2) |
| T16 | **`χ ≥ ω`** | número cromático ≥ número de clique | §8.2 (Levin 4.4.4) |
| T17 | **Teorema de Brooks** | `χ ≤ Δ`, salvo `Kₙ` e ciclo ímpar (`= Δ+1`) | §8.2 (Levin 4.4.5) |
| T18 | **Limite guloso** | `χ(G) ≤ Δ(G) + 1` | §8.6 |
| T19 | **Teorema de Vizing** | `χ'(G) ∈ {Δ, Δ+1}` | §8.4 (Levin 4.4.7) |
| T20 | **Fórmula de Euler (planar)** | `v − e + f = 2` (conexo planar) | §9.2 |
| T21 | **`e ≤ 3v − 6`** | planar simples, `v ≥ 3` | §9.3 |
| T22 | **`e ≤ 2v − 4`** | planar simples bipartido / triângulo-livre | §9.3 |
| T23 | **`K₅` e `K₃,₃` não planares** | por violação de T21 / T22 | §9.4 (Levin 4.3.1–4.3.2) |
| T24 | **Teorema de Kuratowski** | planar ⟺ sem subdivisão de `K₅` ou `K₃,₃` | §9.5 |
| T25 | **Teorema de Hall** | satura `A` ⟺ `|N(S)| ≥ |S|` ∀ `S⊆A` | §10.3 |
| T26 | **Teorema de Berge** | `M` máximo ⟺ sem caminho `M`-aumentante | §10.4 |
| T27 | **Teorema de König** | bipartido: matching máximo = cobertura mínima de vértices | §10.5 |

---

## Fontes consultadas (URLs)

- Levin, *Discrete Mathematics: An Open Introduction*, 3ª ed.:
  - Cap. 4 (intro / Königsberg): https://discrete.openmathbooks.org/dmoi3/ch_graphtheory.html
  - §4.1 Definitions: https://discrete.openmathbooks.org/dmoi3/sec_gt-intro.html
  - §4.2 Trees: https://discrete.openmathbooks.org/dmoi3/sec_trees.html
  - §4.3 Planar Graphs: https://discrete.openmathbooks.org/dmoi3/sec_planar.html
  - §4.4 Coloring: https://discrete.openmathbooks.org/dmoi3/sec_coloring.html
  - §4.5 Euler Paths and Circuits: https://discrete.openmathbooks.org/dmoi3/sec_paths.html
- Adams et al., *Counting Rocks!* (2023), cap. 10.3 Matchings: https://www.mathematicalgemstones.com/maria/OER/CountingRocks-Oct2023.pdf *(PDF > 10 MB — inacessível via fetch; tópico coberto por conhecimento consolidado)*
- Videoaulas Univesp (títulos confirmados):
  - Estrutura de Dados - Aula 23 - Grafos - Conceitos básicos: https://www.youtube.com/watch?v=MC0u4f334mI
  - Estrutura de Dados - Aula 24 - Grafos - Representação: https://www.youtube.com/watch?v=9m8wDGYWlXA
  - Estrutura de Dados - Aula 15 - Árvores - Conceitos básicos: https://www.youtube.com/watch?v=eiMMtyRBYCE
  - Pesquisa Operacional II - Aula 26 - Caminhos e ciclos Euleriano e Hamiltoniano: https://www.youtube.com/watch?v=YWQQ-7U0PzU

> Nota de rigor: os enunciados de Dirac, Ore, König, Berge e Kuratowski, além da terminologia de árvores enraizadas, representação de grafos e dos problemas CPP/TSP, são complementos de conhecimento consolidado (matematicamente padrão), pois Levin §4.x e as videoaulas não os enunciam todos explicitamente. Estão sinalizados no corpo do texto.
