# Revisão para Prova — Teoria dos Grafos (Prof. Fernando Pizzo · Eixo MTF)

> Material de revisão derivado de `04-pizzo-grafos-mtf.md` (Levin §4, *Counting Rocks!* §10.3, videoaulas Univesp).
> Duas partes: **(1) Cola condensada / formulário** para consulta rápida e **(2) Flashcards** de pergunta-e-resposta.
> Notação: `v` = nº de vértices (`|V|`), `e` = nº de arestas (`|E|`), `f` = nº de faces, `d(v)` = grau.

---

# Parte 1 — Cola condensada (FORMULÁRIO)

## 1. Definições fundamentais

| Conceito | Definição |
|---|---|
| **Grafo** `G = (V,E)` | Par ordenado: `V` = conjunto não-vazio de vértices; `E` = conjunto de arestas (pares `{a,b}` de vértices distintos). |
| **Ordem** | Número de vértices, `|V| = v` (ou `n`). |
| **Tamanho** | Número de arestas, `|E| = e` (ou `m`). |
| **Grau** `d(v)` | Nº de arestas incidentes a `v`. Em multigrafo, cada laço conta **2**. |
| **Grau máx/mín** | `Δ(G) = max d(v)`; `δ(G) = min d(v)`. |
| **Vizinhança** `N(v)` | Conjunto de vértices adjacentes a `v`. Para `S⊆V`: `N(S) = ⋃_{v∈S} N(v)`. |
| **Adjacentes** | `a,b` adjacentes ⟺ `{a,b} ∈ E`. Aresta `{a,b}` é **incidente** a `a` e `b`. |
| **Vértice isolado / folha** | grau `0` (isolado); grau `1` (folha / pendente). |

**Famílias de grafos:**

| Família | Caracterização | Arestas / graus |
|---|---|---|
| **Simples** | sem arestas múltiplas e sem laços | — |
| **Multigrafo** | admite arestas paralelas e laços | (Königsberg é multigrafo) |
| **Completo `Kₙ`** | todas as arestas possíveis; cada vértice grau `n−1` | `|E| = C(n,2) = n(n−1)/2` |
| **Bipartido** | `V = A ⊍ B`; toda aresta vai de `A` a `B` | ⟺ **sem ciclos ímpares** ⟺ `χ ≤ 2` |
| **Bipartido completo `Kₘ,ₙ`** | cada vértice de `A` ligado a todos de `B` | `|E| = m·n`; graus `n` (em `A`), `m` (em `B`) |
| **`k`-regular** | todos os vértices têm grau `k` | existe só se `n·k` for **par** |

- **Subgrafo** `G'⊆G`: `V'⊆V` e `E'⊆E` (arestas de `E'` com extremos em `V'`).
- **Subgrafo induzido** por `V'`: contém **todas** as arestas de `G` cujos dois extremos estão em `V'`.
- **Complemento** `Ḡ`: mesmos vértices; `{a,b}` é aresta de `Ḡ` ⟺ **não** é aresta de `G`. (Ex.: `Kₙ` e o grafo vazio são complementos.)
- **Isomorfismo** `G₁≅G₂`: bijeção `f:V₁→V₂` com `{a,b}∈E₁ ⟺ {f(a),f(b)}∈E₂`. Invariantes (mesmo `|V|`, `|E|`, sequência de graus, ciclos) **refutam** isomorfismo; para **provar** é preciso exibir `f`.

## 2. ⭐ Lema do Aperto de Mãos (Handshake)

> $$\sum_{v\in V} d(v) = 2\,|E| = 2e$$

**Prova (dupla contagem):** cada aresta tem 2 extremos ⟹ contribui `+2` à soma dos graus.

> **Corolário:** o número de vértices de **grau ímpar é par**.

- Calcular arestas a partir dos graus: `e = (∑ d(v)) / 2`.
- Versão dirigida: `∑ d⁺(v) = ∑ d⁻(v) = |E|`.
- Aplicação clássica: 9 pessoas apertando a mão de exatamente 7 cada é **impossível** (`9×7 = 63` ímpar; ou 9 vértices de grau ímpar viola o corolário).

## 3. Representação de grafos (custos)

| Operação / custo | Matriz de adjacência | Lista de adjacência | Matriz de incidência |
|---|---|---|---|
| **Espaço** | `Θ(n²)` | `Θ(n+m)` | `Θ(n·m)` |
| Testar se `{u,v}` é aresta | `O(1)` | `O(deg(u))` | `O(m)` |
| Listar vizinhos de `v` | `O(n)` | `O(deg(v))` ✔ | `O(m)` |
| Iterar todas as arestas | `O(n²)` | `O(n+m)` | `O(n·m)` |
| Bom para grafos… | **densos** (`m≈n²`) | **esparsos** (`m≪n²`) | teoria/álgebra |

- Matriz de adjacência (não-dirigido) é **simétrica**; soma da linha `i` = `d(i)`.
- Coluna da matriz de incidência (não-dirigido) tem exatamente **dois** `1`s.
- **Regra:** denso → matriz; esparso → lista (padrão; BFS/DFS em `O(n+m)`).

## 4. Árvores

> **Árvore** = grafo **conexo** e **acíclico**. **Floresta** = grafo acíclico (cada componente é uma árvore).

**Propriedades (todas equivalentes a "ser árvore" com `n` vértices):**

| Caracterização |
|---|
| Conexo **e** acíclico (definição). |
| Conexo **e** tem exatamente `n−1` arestas. |
| Acíclico **e** tem exatamente `n−1` arestas. |
| **Caminho único** entre todo par de vértices distintos. |
| Minimamente conexo (remover qualquer aresta desconecta). |
| Maximamente acíclico (adicionar qualquer aresta cria ciclo). |

> ⭐ **`e = v − 1`** (árvore com `v` vértices). Prova clássica: **indução removendo uma folha**.

- ⚠️ Só ter `n−1` arestas **não basta** — precisa de "conexo OU acíclico" junto.
- **Folha** = vértice de grau 1. Toda árvore com `≥ 2` vértices tem **≥ 2 folhas**.
- **Árvore geradora (spanning tree):** subgrafo-árvore que cobre todos os vértices; **todo grafo conexo tem uma**; tem `n−1` arestas. Ponderado → **MST** via Kruskal/Prim.
- Mínimo de arestas para um grafo conexo com `n` vértices = `n−1` (atingido por árvore).

**Árvore enraizada / binária:** profundidade da raiz = 0; **altura** = maior profundidade. Binária: ≤ 2 filhos/nó. Máx. de nós em altura `h` = `2^{h+1}−1`; folhas numa perfeita = `2ʰ`; altura mínima com `n` nós ≈ `⌊log₂ n⌋`.

## 5. Caminhos / Circuitos de Euler e Hamilton

**Vocabulário (passeio → ciclo):**

| Termo | Repete vértice? | Repete aresta? |
|---|---|---|
| Passeio (walk) | sim | sim |
| Trilha (trail) | sim | **não** |
| Caminho (path) | **não** | não |
| Circuito (trilha fechada) | sim | não |
| Ciclo | só inicial=final | não |

### ⭐ Euler (sobre ARESTAS — usar cada aresta uma vez)

> **Circuito euleriano** existe (grafo conexo) ⟺ **TODOS os vértices têm grau par**.
> **Caminho euleriano** existe (grafo conexo) ⟺ **exatamente 0 ou 2 vértices de grau ímpar**.
> - 0 ímpares ⟹ circuito.
> - 2 ímpares ⟹ caminho que **começa em um ímpar e termina no outro**.

- **Ideia da prova:** ao "passar por" um vértice intermediário, gastam-se arestas em **pares** ⟹ grau par; só início/fim podem ser ímpares.
- **Königsberg:** 4 vértices de grau ímpar (`d=3,3,5,3`) ⟹ **não existe** caminho euleriano (impossível). Vale para multigrafos.
- Euler é **polinomial** (`O(n+m)`: checar graus + conexidade).

### Hamilton (sobre VÉRTICES — visitar cada vértice uma vez)

- **Caminho hamiltoniano** visita cada vértice 1×; **ciclo hamiltoniano** fecha de volta.
- **NÃO há caracterização simples** — decisão é **NP-completo**.
- Condições **suficientes (não necessárias)** para ciclo hamiltoniano (`G` simples, `n ≥ 3`):
  - **Dirac (1952):** `δ(G) ≥ n/2`.
  - **Ore (1960):** `d(u)+d(v) ≥ n` para todo par **não-adjacente** `u,v`. (Dirac é caso particular de Ore.)

> ⚠️ **Pegadinha nº 1:** Euler = arestas; Hamilton = vértices.
> Aplicações: **Carteiro Chinês (CPP)** = arestas = Euler = **polinomial**; **Caixeiro Viajante (TSP)** = vértices = Hamilton = **NP-difícil**.

## 6. Coloração

| Símbolo | Significado |
|---|---|
| **`χ(G)`** | número cromático = menor nº de cores p/ coloração própria de **vértices** (adjacentes ≠ cor). |
| **`ω(G)`** | número de clique = maior `Kₙ` contido em `G`. |
| **`α(G)`** | maior conjunto independente (vértices 2 a 2 não-adjacentes; = classe de cor). |
| **`χ'(G)`** | índice cromático = menor nº de cores p/ **arestas** adjacentes ≠ cor. |

**Fórmulas e limites:**

> $$\omega(G) \le \chi(G) \le \Delta(G)+1$$

- ⭐ **`χ(G) ≥ ω(G)`** — clique de tamanho `ω` exige `ω` cores (limite **inferior**).
- **Guloso (greedy):** `χ(G) ≤ Δ(G)+1` (sempre há cor livre entre as `Δ+1` primeiras); depende da ordem, **não é ótimo**.
- **Brooks:** `χ(G) ≤ Δ(G)`, **exceto** se `G = Kₙ` ou ciclo ímpar, onde `χ = Δ+1`.
- **Vizing:** `χ'(G) ∈ {Δ, Δ+1}`.
- Casos: `χ(Kₙ)=n`; `χ=1 ⟺` sem arestas; `χ ≤ 2 ⟺ bipartido ⟺ sem ciclo ímpar`; ciclo `Cₙ`: `χ=2` se `n` par, `χ=3` se `n` ímpar.

> ⭐ **Teorema das 4 Cores:** se `G` é **planar**, então `χ(G) ≤ 4`. (Appel & Haken, 1976 — 1ª grande prova assistida por computador.)

- **Grafos perfeitos:** `χ = ω` em `G` **e em todo subgrafo induzido**. Ex.: bipartidos, cordais, de intervalos.

## 7. ⭐ Grafos planares

> **Planar** = pode ser desenhado no plano **sem cruzamento de arestas**. As regiões do desenho são **faces** (inclui a face externa, ilimitada). Planaridade é propriedade do grafo (existe *algum* desenho sem cruzamentos).

> ### Fórmula de Euler (conexo planar):
> $$v - e + f = 2 \qquad\Longrightarrow\qquad f = 2 - v + e$$

(Poliedros convexos: `V − A + F = 2`; ex. cubo `8 − 12 + 6 = 2`.)

**Limites de arestas (necessários, NÃO suficientes):**

| Caso | Contagem aresta-face | Limite |
|---|---|---|
| Planar simples, `v ≥ 3` | cada face ≥ 3 arestas ⟹ `3f ≤ 2e` | **`e ≤ 3v − 6`** |
| Planar simples **bipartido / sem triângulos** | cada face ≥ 4 arestas ⟹ `4f ≤ 2e` | **`e ≤ 2v − 4`** |
| Cintura `g` | `g·f ≤ 2e` | `e ≤ g(v−2)/(g−2)` |

> ⚠️ Se um grafo **viola** o limite, **não é planar**. Satisfazer **não garante** planaridade.

**Obstáculos clássicos:**

| Grafo | `v` | `e` | Teste | Conclusão |
|---|---|---|---|---|
| **`K₅`** | 5 | 10 | `3v−6 = 9 < 10` | **não planar** |
| **`K₃,₃`** | 6 | 9 | bipartido: `2v−4 = 8 < 9` | **não planar** |

> **Kuratowski (1930):** `G` é planar ⟺ **não contém subdivisão** de `K₅` nem de `K₃,₃`.
> (Wagner, equivalente: ⟺ sem `K₅` nem `K₃,₃` como **menor / minor**.)

## 8. Emparelhamento (Matching)

> **Matching `M`** = conjunto de arestas **duas a duas disjuntas** (nenhum vértice em mais de uma aresta). Vértice em alguma aresta de `M` = **saturado/casado**; senão **livre/insaturado**.

| Tipo | Definição |
|---|---|
| **Maximal** | não pode ser **estendido** (ótimo local, por inclusão). |
| **Máximo** | tem o **maior nº de arestas** possível (ótimo global); `|M| = ν(G)`. |
| **Perfeito** | satura **todos** os vértices; exige `|V|` **par**, `|M| = |V|/2`. |
| **Quase-perfeito** | satura todos menos um (`|V|` ímpar). |

> ⚠️ **Maximal ≠ Máximo.** Todo máximo é maximal, mas não o contrário. (`P₄ = a–b–c–d`: `{b–c}` é maximal mas não máximo; `{a–b, c–d}` é máximo e perfeito.)

> ### ⭐ Teorema de Hall (1935) — condição do casamento
> Em `G` bipartido com partes `A`, `B`: existe matching que **satura `A`** ⟺
> $$|N(S)| \ge |S| \quad\text{para TODO } S \subseteq A.$$

- Interpretação: todo grupo de `k` pessoas conhece, no total, ≥ `k` parceiros possíveis.
- **Refutar:** exibir um `S` "gargalo" com `|N(S)| < |S|`.
- **Corolário:** todo bipartido `k`-regular (`k ≥ 1`) tem **matching perfeito**.

**Outros resultados de matching:**
- **Caminho `M`-aumentante:** alternante (fora/dentro de `M`) com **ambos os extremos livres**. Operação `M' = M △ P` ⟹ `|M'| = |M|+1`.
- **Berge (1957):** `M` é **máximo** ⟺ **não existe** caminho `M`-aumentante.
- **König (1931, bipartido):** matching máximo = cobertura de vértices mínima: `ν(G) = τ(G)`. (Geral: só `ν ≤ τ`.)

---

# Parte 2 — Flashcards (P&R)

**P:** Enuncie o Lema do Aperto de Mãos.
**R:** Em qualquer grafo, `∑_{v∈V} d(v) = 2·|E| = 2e`. (Cada aresta tem 2 extremos ⟹ contribui 2 à soma dos graus.)

**P:** Qual o corolário do Lema do Aperto de Mãos?
**R:** O número de vértices de **grau ímpar é par**.

**P:** Um grafo tem sequência de graus `(4,4,3,3,3,2,1)`. Quantas arestas?
**R:** `∑ d(v) = 20`, e `2e = 20` ⟹ **`e = 10`** arestas.

**P:** É possível 9 pessoas apertarem a mão de exatamente 7 outras cada?
**R:** **Não.** Soma dos graus = `9×7 = 63` (ímpar), impossível; ou: 9 vértices de grau ímpar viola "nº de ímpares é par".

**P:** Quantas arestas tem `Kₙ`? E quanto vale o grau de cada vértice?
**R:** `|E(Kₙ)| = C(n,2) = n(n−1)/2`; cada vértice tem grau `n−1`.

**P:** Quantas arestas tem `Kₘ,ₙ`?
**R:** `m·n`. Vértices de `A` têm grau `n`; de `B`, grau `m`.

**P:** Quando existe um grafo `k`-regular com `n` vértices?
**R:** Somente se `n·k` for **par** (pela soma dos graus = `nk = 2e`). Ex.: 3-regular com 7 vértices não existe.

**P:** Caracterização de grafo bipartido em termos de ciclos.
**R:** `G` é bipartido ⟺ **não tem ciclos de comprimento ímpar** ⟺ `χ(G) ≤ 2`.

**P:** Diferença entre matriz de adjacência e lista de adjacência (espaço)?
**R:** Matriz: `Θ(n²)`, teste de aresta `O(1)`, boa p/ grafos densos. Lista: `Θ(n+m)`, lista vizinhos em `O(deg(v))`, boa p/ esparsos.

**P:** Defina árvore.
**R:** Grafo **conexo** e **acíclico** (sem ciclos).

**P:** Quantas arestas tem uma árvore com `v` vértices?
**R:** **`e = v − 1`** (prova por indução removendo uma folha).

**P:** Ter `n−1` arestas basta para um grafo ser árvore?
**R:** **Não.** Precisa também ser conexo **ou** acíclico (uma das duas). Só a contagem permite desconexo + com ciclo.

**P:** Quantas folhas (no mínimo) tem uma árvore com ≥ 2 vértices?
**R:** **Pelo menos 2 folhas** (vértices de grau 1).

**P:** Que caracterização por caminhos define uma árvore?
**R:** Existe um **único caminho** entre todo par de vértices distintos.

**P:** O que é uma árvore geradora e quando existe?
**R:** Subgrafo que é árvore e contém **todos** os vértices. **Todo grafo conexo possui uma**; tem `n−1` arestas.

**P:** Uma árvore tem 10 vértices, 4 deles folhas. Soma dos graus dos 6 vértices internos?
**R:** `e = 9`, `∑ d = 2e = 18`; folhas somam `4×1 = 4`; internos somam `18 − 4 = **14**`.

**P:** Condição para um grafo conexo ter **circuito** euleriano?
**R:** **Todos** os vértices têm grau **par**.

**P:** Condição para um grafo conexo ter **caminho** euleriano?
**R:** Exatamente **0 ou 2** vértices de grau ímpar (com 2 ímpares, o caminho começa em um e termina no outro).

**P:** Por que as 7 pontes de Königsberg não admitem passeio euleriano?
**R:** Os 4 vértices (regiões) têm **grau ímpar** (`3,3,5,3`); mais de 2 ímpares ⟹ não há caminho euleriano. **Impossível.**

**P:** Diferença essencial entre Euler e Hamilton?
**R:** **Euler** = percorrer cada **aresta** uma vez; **Hamilton** = visitar cada **vértice** uma vez.

**P:** Existe caracterização simples para grafos hamiltonianos? Qual a complexidade?
**R:** **Não** há caracterização simples conhecida; decidir é **NP-completo**.

**P:** Enuncie os teoremas de Dirac e Ore.
**R:** (`G` simples, `n≥3`) **Dirac:** `δ(G) ≥ n/2` ⟹ ciclo hamiltoniano. **Ore:** `d(u)+d(v) ≥ n` p/ todo par não-adjacente ⟹ ciclo hamiltoniano. São **suficientes, não necessárias**.

**P:** O que é o número cromático `χ(G)`?
**R:** Menor nº de cores p/ uma coloração própria dos **vértices** (adjacentes recebem cores diferentes).

**P:** Relação entre `χ(G)` e o número de clique `ω(G)`?
**R:** **`χ(G) ≥ ω(G)`** (os `ω` vértices da clique são mutuamente adjacentes ⟹ exigem `ω` cores).

**P:** Quantas cores garante o algoritmo guloso?
**R:** No máximo `Δ(G)+1`, logo `χ(G) ≤ Δ(G)+1`. Não é ótimo (depende da ordem).

**P:** Enuncie o Teorema das Quatro Cores.
**R:** Se `G` é **planar**, então `χ(G) ≤ 4` (Appel & Haken, 1976).

**P:** Quanto vale `χ(C₅)`?
**R:** **3** — `C₅` é ciclo ímpar ⟹ não bipartido (`χ > 2`), e 3 cores bastam. (Brooks: ciclo ímpar é exceção, `χ = Δ+1 = 3`.)

**P:** Enuncie a Fórmula de Euler para grafos planares.
**R:** Para grafo planar **conexo**: **`v − e + f = 2`**.

**P:** Qual a desigualdade do nº de arestas de um grafo simples planar (`v ≥ 3`)?
**R:** **`e ≤ 3v − 6`**. Para bipartidos/sem triângulos: `e ≤ 2v − 4`. (São necessárias, não suficientes.)

**P:** Por que `K₅` não é planar?
**R:** `v=5`, `e=10`; mas `3v−6 = 9 < 10`. Viola `e ≤ 3v−6` ⟹ não planar.

**P:** Por que `K₃,₃` não é planar?
**R:** `v=6`, `e=9`; é bipartido, então `e ≤ 2v−4 = 8`, mas `e=9 > 8`. Não planar. (Satisfaz `3v−6=12`, daí precisar do limite bipartido.)

**P:** Enuncie o Teorema de Kuratowski.
**R:** `G` é planar ⟺ **não contém subdivisão** de `K₅` nem de `K₃,₃`.

**P:** Um grafo conexo planar simples tem 10 vértices. Nº **máximo** de arestas?
**R:** `e ≤ 3v − 6 = 3·10 − 6 = **24**` arestas.

**P:** [Resolução] Um grafo conexo planar tem 10 vértices e 15 arestas. Quantas faces na imersão planar?
**R:** `f = 2 − v + e = 2 − 10 + 15 = **7** faces`.

**P:** [Resolução] Um grafo planar conexo tem 6 vértices e 10 arestas. Quantas faces?
**R:** `f = 2 − v + e = 2 − 6 + 10 = **6** faces`.

**P:** O que é um emparelhamento (matching)?
**R:** Conjunto `M ⊆ E` de arestas **duas a duas disjuntas** (nenhum vértice em mais de uma aresta de `M`).

**P:** Diferença entre matching **maximal** e **máximo**?
**R:** **Maximal** = não pode ser estendido (ótimo local). **Máximo** = maior nº de arestas possível (ótimo global). Todo máximo é maximal, mas não o contrário.

**P:** O que é um matching **perfeito** e quando pode existir?
**R:** Satura **todos** os vértices; exige `|V|` **par** e `|M| = |V|/2`. É sempre máximo.

**P:** Enuncie o Teorema de Hall.
**R:** Em `G` bipartido (partes `A`,`B`), existe matching saturando `A` ⟺ **`|N(S)| ≥ |S|` para todo `S ⊆ A`**.

**P:** [Resolução] `A={1,2,3}`, `N(1)={x,y}`, `N(2)={x}`, `N(3)={x}`. Há matching saturando `A`?
**R:** **Não.** Tome `S={2,3}`: `N(S)={x}`, `|N(S)|=1 < 2=|S|`. Viola Hall (gargalo no `x`).

**P:** Enuncie o Teorema de Berge (caminho aumentante).
**R:** Um matching `M` é **máximo** ⟺ **não existe** caminho `M`-aumentante em `G`. (Aumento via `M △ P` cresce `|M|` em 1.)

**P:** Enuncie o Teorema de König (bipartido).
**R:** Em grafo bipartido, matching máximo = cobertura de vértices mínima: `ν(G) = τ(G)`. (Geral: só `ν ≤ τ`.)
