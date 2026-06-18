# Material de Estudo Aprofundado — DesignOps & Design Systems (UEX)

> **Disciplina:** DesignOps / Design Systems — Prof.ª Julia Stateri (eixo UEX)
> **Turma:** Inteli 2026-1B-T13
> **Escopo:** Semanas 02, 05, 08 e 10 — DesignOps, Design Systems, framework REACH e Design Playbooks
> **Como usar este material:** cada tópico traz *conceito central → pontos-chave → exemplos → por que importa → 📌 Pontos de prova*. Ao final, há uma **Síntese geral e conexões** amarrando os quatro grandes temas. Onde a fonte é um vídeo/livro pago não acessível, o tema foi coberto por conhecimento consolidado e isso está sinalizado.

---

## Índice

- [Semana 02 — Fundamentos de DesignOps](#semana-02--fundamentos-de-designops)
  - [1. DesignOps 101 (NN/g, Kate Kaplan)](#1-designops-101-nng-kate-kaplan)
  - [2. What is Design Operations and Why Should You Care? (Designer Hangout)](#2-what-is-design-operations-and-why-should-you-care-designer-hangout)
  - [3. Planejamento de DesignOps — "DesignOps é o DevOps do Design"](#3-planejamento-de-designops--designops-é-o-devops-do-design)
- [Semana 05 — Design Systems](#semana-05--design-systems)
  - [4. Design Systems are for user interfaces (Brad Frost)](#4-design-systems-are-for-user-interfaces-brad-frost)
  - [5. Design ops for design systems (Jeremy Keith / adactio)](#5-design-ops-for-design-systems-jeremy-keith--adactio)
  - [6. Princípios e Práticas de DesignOps + Design em escala (Thiago Hassu)](#6-princípios-e-práticas-de-designops--design-em-escala-thiago-hassu)
- [Semana 08 — Medição e maturidade: o framework REACH](#semana-08--medição-e-maturidade-o-framework-reach)
  - [7. Auditoria de Realidade DesignOps: Framework REACH (NN/g)](#7-auditoria-de-realidade-designops-framework-reach-nng)
  - [8. Measuring DesignOps with REACH (Kate Kaplan, vídeo)](#8-measuring-designops-with-reach-kate-kaplan-vídeo)
- [Semana 10 — Design Playbooks](#semana-10--design-playbooks)
  - [9. How (and why) to create a design playbook (UX Planet)](#9-how-and-why-to-create-a-design-playbook-ux-planet)
  - [10. Product Design Playbook — single source of truth (Dell)](#10-product-design-playbook--single-source-of-truth-dell)
  - [11. Revelo — Product & Design Playbook](#11-revelo--product--design-playbook)
  - [12. Victoria State Government — Human-Centred Design Playbook](#12-victoria-state-government--human-centred-design-playbook)
- [Síntese geral e conexões](#síntese-geral-e-conexões)
- [Glossário rápido para a prova](#glossário-rápido-para-a-prova)

---

# Semana 02 — Fundamentos de DesignOps

## 1. DesignOps 101 (NN/g, Kate Kaplan)

**Fonte:** https://www.nngroup.com/articles/design-operations-101/ (Nielsen Norman Group, Kate Kaplan)

### Conceito central

DesignOps é **"a orquestração e otimização de pessoas, processos e ofício (*craft*) para amplificar o valor e o impacto do design em escala"** ("the orchestration and optimization of people, processes, and craft in order to amplify design's value and impact at scale"). A palavra-chave é **escala**: DesignOps existe porque, à medida que o time de design cresce (mais designers, mais produtos, mais stakeholders), surgem atritos de coordenação, contratação, fluxo de trabalho e qualidade que **não se resolvem fazendo mais design** — resolvem-se **operacionalizando** o design.

A meta é estabelecer "processos e medidas que suportem soluções escaláveis", de modo que os designers possam **focar no trabalho de design em si**, e não em overhead administrativo.

### Pontos-chave detalhados — o "Menu de DesignOps" (3 pilares × 3 áreas cada)

A NN/g organiza DesignOps como um **menu** de atividades. Não é uma receita fixa: cada organização "pede" do menu o que precisa, conforme sua maturidade. São **3 pilares**, cada um com **3 áreas de atuação** (9 no total).

| Pilar | Pergunta que responde | Áreas (subitens) |
|---|---|---|
| **A. Como trabalhamos juntos** (*How we work together*) | Pessoas e relações | **Organize** (estruturar times, papéis, responsabilidades) · **Collaborate** (rituais, espaços e comunidades de prática) · **Humanize** (contratação, onboarding, trilhas de carreira para gestão *e* para IC) |
| **B. Como fazemos o trabalho** (*How we get our work done*) | Processo e eficiência | **Standardize** (toolsets consistentes, processos documentados do início à entrega) · **Harmonize** (compartilhar inteligência de design via **design systems**, repositórios de pesquisa, *digital asset managers*) · **Prioritize** (alocação de projetos com métodos objetivos e entendimento de capacidade) |
| **C. Como nosso trabalho gera impacto** (*How our work creates impact*) | Valor e demonstração | **Measure** (definir "bom" e "pronto", métricas de qualidade, princípios como medida objetiva) · **Socialize** (educar stakeholders sobre o papel e o valor do design) · **Enable** (cultivar entendimento de design *fora* do time, via treinamentos e **playbooks**) |

```
                      MENU DE DESIGNOPS (NN/g)
 ┌─────────────────────┬─────────────────────┬─────────────────────┐
 │ A. COMO TRABALHAMOS │ B. COMO FAZEMOS     │ C. COMO GERAMOS     │
 │    JUNTOS           │    O TRABALHO       │    IMPACTO          │
 ├─────────────────────┼─────────────────────┼─────────────────────┤
 │ • Organize          │ • Standardize       │ • Measure           │
 │ • Collaborate       │ • Harmonize         │ • Socialize         │
 │ • Humanize          │ • Prioritize        │ • Enable            │
 └─────────────────────┴─────────────────────┴─────────────────────┘
   (pessoas/relações)    (processo/eficiência)  (valor/demonstração)
```

### DesignOps como Papel × DesignOps como Mentalidade

A NN/g faz uma distinção importante:

- **DesignOps the Role** (o cargo): posições dedicadas — *design producers*, *program managers*, especialistas em **ResearchOps** — cuja função é cuidar da operação do time de design. Aparece em orgs grandes/maduras.
- **DesignOps the Mindset** (a mentalidade): qualquer time, mesmo sem um cargo formal, pode reconhecer a necessidade de padronizar processos e ganhar eficiência. **Não é preciso ter um "DesignOps Manager" para fazer DesignOps.**

### Exemplo concreto

Um time de 5 designers cresce para 40 em dois anos. Sem DesignOps: cada designer usa um toolset diferente, o onboarding leva semanas, ninguém sabe quem está sobrecarregado, e os stakeholders questionam "o que design entrega?". Aplicando o menu: **Standardize** define Figma + biblioteca compartilhada; **Humanize** cria um onboarding de 1 semana; **Prioritize** usa uma matriz de capacidade; **Socialize/Measure** cria um relatório trimestral de impacto de design.

### Relação com arquitetura de software e pipeline CI/CD

Esta é uma ponte que a disciplina (eixo UEX no Inteli, com forte componente de engenharia) explora:

- **Standardize ≈ linting / formatadores / convenções de código** — toolset e processo consistentes reduzem variabilidade.
- **Harmonize ≈ bibliotecas/pacotes compartilhados e monorepo** — um **design system** é, para o design, o que uma biblioteca de componentes versionada é para o software: fonte única reutilizável.
- **Measure ≈ métricas de pipeline (lead time, taxa de falha de deploy)** — define "pronto" (Definition of Done) e qualidade objetiva.
- **Prioritize ≈ backlog grooming / capacity planning** de um time ágil.
- O **menu** funciona como uma **arquitetura de referência**: você não implementa tudo de uma vez, escolhe os módulos conforme a necessidade — exatamente como se monta um pipeline de CI/CD incremental.

### Por que importa

DesignOps é a disciplina que **protege e amplifica** a capacidade de design de uma organização. Sem ela, o crescimento gera caos; com ela, o crescimento gera consistência e velocidade. É o que transforma "designers talentosos isolados" em uma **prática de design escalável**.

### 📌 Pontos de prova

- **Decore a definição da NN/g**: "orquestração e otimização de **pessoas, processos e craft** para amplificar o valor do design **em escala**". O trio *people, process, craft* costuma ser pedido.
- **Os 3 pilares na forma de perguntas**: (A) como trabalhamos juntos; (B) como fazemos o trabalho; (C) como nosso trabalho gera impacto. Saiba **associar cada subitem ao pilar certo** (ex.: *Harmonize* → pilar B; *Socialize* → pilar C).
- **Distinção Papel × Mentalidade** — pergunta clássica de "verdadeiro ou falso: preciso de um cargo de DesignOps para praticar DesignOps?" → **Falso**.
- **Palavra-chave: ESCALA.** DesignOps surge da dor de escalar o time/produto.
- O design system aparece dentro de **Harmonize** (pilar B), não como sinônimo de DesignOps.

---

## 2. What is Design Operations and Why Should You Care? (Designer Hangout)

**Fonte:** https://medium.com/designer-hangout/what-is-design-operations-and-why-should-you-care-b72f02b47761

### Conceito central

Este artigo enquadra **Design Operations (DesOps)** mapeando o design contra a **mentalidade e os objetivos do DevOps**. O argumento histórico: assim como o **DevOps** dissolveu a separação entre desenvolvimento, QA e SysAdmin — dando ao desenvolvedor a **propriedade da própria qualidade e do deploy** —, o DesOps aplica princípios análogos aos times de design. A ideia-mãe é **reduzir a fricção operacional** para **proteger o tempo de criação**.

### Pontos-chave detalhados

**Os 5 princípios de DesOps (adaptados do DevOps):**

1. **Accountability** — "responsabilize o designer" (*hold the designer accountable*).
2. **Speed** — "chegue ao 'aprender' o mais rápido possível" (*get to 'learn' as quickly as possible*).
3. **Agility** — "pivote rapidamente conforme os aprendizados" (*pivot on lessons quickly*).
4. **Tooling** — "use software para fazer mais para ajudar a criar e gerenciar software" (*use software to do more*).
5. **Risk Management** — "reduza risco por compartimentalização" (*reduce risk through compartmentalization*).

**Por que importa / o problema do "wagile":** o design ainda é **subintegrado** aos ambientes DevOps, gerando sistemas **"wagile"** (*waterfall* disfarçado de *agile*) — onde se diz "ágil", mas na prática o design é uma etapa em cascata, isolada e tardia. A recomendação central: *"Seja tão intencional no design e na execução das suas operações de design quanto você seria com qualquer outra parte da organização da qual espera extrair valor."*

**Pontos de fricção operacional identificados:**

- **Tool gaps** — ferramentas de design não têm a infraestrutura *enterprise-grade* das ferramentas de dev (versionamento, CI, rollback maduros).
- **Resistência cultural** — design é frequentemente "visto como um impedimento" em vez de parte do ciclo de aprendizado.
- **Maturidade de RH** — faltam trilhas de carreira codificadas e clareza de papéis para designers.
- **Integração de pesquisa** — gestão de dados e racionalização de insights de pesquisa permanecem subdesenvolvidas (conecta com **ResearchOps**).

### Débito técnico / Débito de UX

Conceito central da semana (mesmo não citado nominalmente em cada parágrafo do artigo, é a moldura do tema):

- **Débito técnico (technical debt):** atalhos de implementação que aceleram o curto prazo mas cobram "juros" depois (refatoração, bugs).
- **Débito de UX (UX/design debt):** inconsistências de interface, padrões divergentes, componentes duplicados, fluxos não validados que se acumulam quando não há padronização. Cada tela "snowflake" (única, sem reuso) é um lançamento nesse débito.
- **DesignOps amortiza esse débito** via padronização (design system), automação e processos — assim como CI/CD e testes automatizados amortizam o débito técnico.

### Cultura de automação

Princípio **Tooling**: usar software para automatizar o repetitivo (export de assets, geração de tokens, sincronização design↔código, handoff). A meta não é "designer programando", e sim **liberar tempo cognitivo de criação** ao eliminar trabalho manual de baixo valor — espelho direto da automação de build/test/deploy do DevOps.

### Exemplo concreto

Um time que exporta manualmente 200 ícones em 3 resoluções a cada release está pagando "juros" de débito operacional. Automatizar isso (script + token pipeline) é DesOps puro: aplica **Tooling** + **Speed**, reduz risco de erro humano (**Risk Management**) e devolve horas de criação.

### Por que importa

Mostra que DesignOps **não é um conceito isolado de design** — é a transposição deliberada de uma revolução cultural da engenharia (DevOps) para o design. Quem entende DevOps entende DesignOps "de graça".

### 📌 Pontos de prova

- **DesignOps : Design :: DevOps : Desenvolvimento** — a analogia é o coração desta aula. Saiba explicá-la.
- **Os 5 princípios** (Accountability, Speed, Agility, Tooling, Risk Management) — pelo menos saiba citar 3–4 e o que cada um significa.
- **"Wagile"** = *waterfall* disfarçado de *agile*; ocorre quando o design não está integrado ao ciclo. Termo que cai bem em múltipla escolha.
- **Reduzir fricção operacional** + **proteger o tempo de criação** = a "tese" do artigo.
- **Débito de UX/design** como análogo do débito técnico — saiba a definição e como DesignOps o reduz.

---

## 3. Planejamento de DesignOps — "DesignOps é o DevOps do Design"

**Fonte:** atividade prática `DESIGN_OPS.md` — https://git.inteli.edu.br/julia.stateri/design-es-10/-/blob/main/DESIGN_OPS.md
> *(repositório GitLab do Inteli — exige autenticação; conteúdo não acessível diretamente. Coberto a partir de conhecimento consolidado sobre o tema e do encadeamento com os tópicos 1 e 2.)*

### Conceito central

A frase-síntese da atividade — **"DesignOps é o DevOps do Design"** — condensa a ideia dos tópicos 1 e 2: aplicar ao design a **intencionalidade operacional** que a engenharia já aplica via DevOps. Um **plano operacional de DesignOps** é o artefato que **explicita** essa intenção: quem faz o quê, com quais ferramentas, em que ritmo, medido como.

### O que um plano operacional de DesignOps contém

Estrutura típica de um plano de DesignOps (mapeável diretamente ao menu da NN/g):

1. **Diagnóstico / estado atual** — onde está a fricção hoje? (onboarding lento, ferramentas dispersas, débito de UX, handoff falho). É a "auditoria de realidade" — conecta com o **REACH** da Semana 08.
2. **Pessoas e papéis** (pilar A — *Organize/Humanize*) — estrutura do time, responsabilidades, trilhas de carreira, rituais e comunidades de prática.
3. **Processos e ferramentas** (pilar B — *Standardize/Harmonize/Prioritize*) — toolset padrão, design system, repositório de pesquisa, fluxo de priorização, *Definition of Done*.
4. **Métricas e impacto** (pilar C — *Measure/Socialize/Enable*) — KPIs, cadência de medição, como o valor do design é comunicado, playbooks.
5. **Roadmap de implementação** — o que entra primeiro (quick wins) e em que ordem; abordagem **incremental**, não *big bang*.

### Como adaptá-lo a um projeto de CI/CD

A ponte que a atividade explora (eixo de engenharia):

| Elemento DevOps / CI/CD | Equivalente em DesignOps |
|---|---|
| Repositório versionado (Git) | Design system versionado + arquivos-fonte versionados (Figma branches/libraries) |
| Pipeline de build | Pipeline de tokens / export de assets automatizado |
| Testes automatizados (CI) | Revisões de acessibilidade, *visual regression testing*, *design lint* |
| *Definition of Done* / *gates* | Critérios de qualidade de design e *design review* |
| Deploy contínuo (CD) | Publicação contínua de componentes na biblioteca + changelog |
| Observabilidade / métricas | Métricas de adoção do design system + framework **REACH** |
| Retrospectiva ágil | Retro de DesignOps; refinamento do plano a cada ciclo |

A mensagem: um plano de DesignOps **não vive em um documento morto** — ele é tratado como um pipeline: instrumentado, medido, iterado. A cada sprint/release, mede-se a fricção e ajusta-se o processo (laço de feedback, igual ao CI/CD).

### Por que importa

É o tópico que **operacionaliza** a teoria das semanas 1 e 2 em um **artefato entregável**. Na prova, é o lugar onde se pede para você *aplicar* o menu da NN/g e a analogia com DevOps a um caso concreto (provavelmente o próprio projeto do módulo).

### 📌 Pontos de prova

- **A frase "DesignOps é o DevOps do Design"** é quase certa de aparecer — saiba justificá-la (intencionalidade operacional, automação, redução de fricção, propriedade do ciclo).
- Saber **estruturar um plano**: diagnóstico → pessoas → processos/ferramentas → métricas → roadmap. Mapeie para os 3 pilares da NN/g.
- **Abordagem incremental** (quick wins primeiro), nunca *big bang*.
- Conexão explícita com **CI/CD**: design system = repositório versionado; adoção/REACH = observabilidade; *Definition of Done* de design = *gates* do pipeline.

---

# Semana 05 — Design Systems

## 4. Design Systems are for user interfaces (Brad Frost)

**Fonte:** https://bradfrost.com/blog/post/design-systems-are-for-user-interfaces/

### Quem é Brad Frost

Brad Frost é o autor de **Atomic Design** (2016), a metodologia que decompõe interfaces em uma hierarquia química: **átomos → moléculas → organismos → templates → páginas**. Criou também o **Pattern Lab** (ferramenta para construir design systems com base em Atomic Design). É uma das vozes mais influentes na área de design systems — por isso, quando ele **revisa a própria definição**, isso vira marco da disciplina.

### Conceito central — a tese e a virada de entendimento

A tese do artigo: **design systems são para interfaces de usuário** — não para "tudo que a organização faz". Frost narra explicitamente uma **evolução do seu próprio entendimento**, mudando uma única palavra crucial da sua definição:

- **Definição antiga:** "A design system is the official story of how an organization designs and builds digital **products**." (…como uma org projeta e constrói **produtos** digitais.)
- **Definição nova:** "…how an organization designs and builds digital **interfaces**." (…**interfaces** digitais.)

A mudança veio do trabalho de consultoria: tratar o design system como um "guarda-tudo" organizacional o tornava inviável e confuso. **Restringir o escopo à interface o torna útil e gerenciável.**

### Pontos-chave detalhados

**O que um design system É:**
- Um **"sistema de sistemas"** (*system of systems*) que contém subsistemas: **componentes de UI, design tokens, tipografia, sistema de cores, sistema de ícones**.
- Foco em **"padrões de interface comuns que podem ser usados em toda a organização"**.
- Fornece um **arcabouço arquitetural**, não necessariamente uma solução completa para todo problema.

**O que um design system NÃO é (não é dono de):**
- Não define padrões de **marca**, diretrizes de **conteúdo**, *voice & tone*, nem **padrões técnicos** de forma geral.
- Não resolve **todo** problema de UI específico de um produto.
- Frase-chave: *"O design system **incorpora** padrões importantes de toda a organização, mas não necessariamente **define ou possui** esses padrões."* (embodies, but doesn't define or own).

**A abordagem "bolo em camadas" (*layer-cake*) — modelo de governança de componentes:**

```
   ┌──────────────────────────────────────────────┐
   │ 3. ONE-OFF "SNOWFLAKES"                        │  únicos, vivem só no produto
   ├──────────────────────────────────────────────┤
   │ 2. PRODUCT-SPECIFIC "RECIPES"                  │  receitas customizadas por produto
   ├──────────────────────────────────────────────┤
   │ 1. DESIGN SYSTEM COMPONENTS                    │  fundacionais, compartilhados
   └──────────────────────────────────────────────┘
```

1. **Componentes do design system** — fundacionais, compartilhados por todos.
2. **"Receitas" específicas de produto** — combinações/customizações para um produto.
3. **"Flocos de neve" (*snowflakes*)** — soluções únicas, que vivem só naquele produto.

Esse modelo **impede que o design system vire gargalo**: nem tudo precisa subir para a camada compartilhada. **Analogia da IKEA:** parafusos (componentes compartilhados) existem para todos os móveis, mas peças específicas de um móvel não precisam virar peças "do catálogo central".

**Relações condicionais ("…na medida em que dizem respeito à interface"):** o design system se importa com vários domínios **apenas enquanto pertinentes à UI**:
- **Conteúdo** "na medida em que diz respeito à UI".
- **Acessibilidade** "na medida em que diz respeito à UI".
- **Marca** "na medida em que diz respeito à UI".

Algumas relações são de **"irmãos" (*siblings*)** — ex.: conteúdo e UI andam lado a lado; outras são **"pai-filho" (*parent-child*)** — ex.: marca é "pai" da UI (a UI deriva da marca).

### Por que importa

Resolve a **inflação de escopo** que mata design systems na prática. Ao cravar "é para interfaces", Frost dá um critério objetivo para decidir o que entra e o que não entra no sistema — e o modelo *layer-cake* dá um mecanismo de governança que equilibra **consistência** (camada 1) e **autonomia/velocidade** (camadas 2 e 3).

### 📌 Pontos de prova

- **A mudança de palavra: "products" → "interfaces".** É o ponto central do texto. Quase certo de cair.
- **"System of systems"** + os subsistemas (componentes, tokens, tipografia, cor, ícones).
- O design system **incorpora** padrões (marca, conteúdo, acessibilidade) **mas não os define/possui** — distinção *embodies* vs *owns/defines*.
- **Modelo layer-cake**: (1) componentes do DS, (2) receitas de produto, (3) snowflakes. Saiba a ordem e a função de cada camada (evitar gargalo).
- **Analogia da IKEA** (parafusos compartilhados vs peças específicas).
- Relações **sibling vs parent-child** (conteúdo↔UI são irmãos; marca→UI é pai-filho).
- **Brad Frost = Atomic Design + Pattern Lab.**

---

## 5. Design ops for design systems (Jeremy Keith / adactio)

**Fonte:** https://adactio.com/journal/13353

### Quem é Jeremy Keith

Jeremy Keith (adactio) é um desenvolvedor/escritor britânico de longa data na comunidade web, cofundador da Clearleft, autor de livros sobre HTML/JS e progressive enhancement. Seu post ataca a **confusão de terminologia** em torno de design systems.

### Conceito central — desambiguação dos termos

Keith reconhece que **"design system", "pattern library" e "style guide"** são usados de forma intercambiável, gerando confusão. Ele adota uma **hierarquia**: o **design system** é o conceito guarda-chuva, que **"pode conter uma pattern library, e/ou um style guide, e/ou muito mais além disso."**

```
   DESIGN SYSTEM  (conceito guarda-chuva)
   ├── Pattern library   (coleção de padrões/componentes de UI)
   ├── Style guide       (regras visuais: cor, tipografia, espaçamento, voz)
   └── ... muito mais (princípios, tokens, governança, documentação)
```

### A distinção crucial — Coisa (*thing*) × Prática (*practice*)

O insight mais importante do post:

- **Style guides, pattern libraries e design systems são *coisas*** — artefatos tangíveis, entregáveis.
- **Design ops, por contraste, "não é uma coisa, é uma prática"** (*"isn't a thing, it's a practice"*).
- Definição de Keith: **design ops é "a prática de adotar e usar um design system"** (*"the practice of adopting and using a design system"*).

### Desafios técnicos × culturais

Argumento-chave sobre **onde os problemas realmente nascem**:

- **Design systems** apresentam desafios **predominantemente técnicos** (como construir tokens, componentes, ferramentas).
- **Design ops** enfrenta desafios **quase inteiramente culturais** (fazer as pessoas adotarem, mudar hábitos, alinhar times).
- Isso **reenquadra onde investir esforço** quando a adoção falha: se o design system existe mas ninguém usa, o problema **não é técnico, é cultural** — é um problema de design ops.

Keith incorpora a definição de Andy (Andy Bell): **"Design Ops é essencialmente a prática de reduzir ineficiências operacionais no fluxo de trabalho de design por meio de avanços de processo e tecnológicos."** Mas observa que, na prática, **"90% das vezes está relacionado a um design system."**

### Por que importa

Dá vocabulário preciso: separa o **artefato** (design system, que você *constrói*) da **prática** (design ops, que você *adota e sustenta*). E entrega o diagnóstico mais útil da disciplina: **a adoção falha por razões culturais, não técnicas.** Você pode ter o melhor design system do mundo e ele morrer por falta de design ops.

### 📌 Pontos de prova

- **A distinção "thing" vs "practice"**: design system / pattern library / style guide = **coisas**; design ops = **prática**. Cai com altíssima probabilidade.
- **Hierarquia**: design system ⊃ (pattern library + style guide + mais).
- **Design system = desafio técnico; design ops = desafio cultural.** Saiba o porquê (adoção é sobre pessoas).
- **Design ops (def. Keith) = "a prática de adotar e usar um design system".**
- **Style guide ≠ pattern library ≠ design system** — saiba diferenciar: *style guide* = regras visuais/de voz; *pattern library* = coleção de componentes/padrões; *design system* = guarda-chuva que engloba ambos + princípios + governança.

---

## 6. Princípios e Práticas de DesignOps + Design em escala (Thiago Hassu)

**Fonte:** vídeo — https://youtu.be/lZOuoloRbc4

**🎬 Vídeo confirmado:** "039: Design em escala com Thiago Hassu" — podcast/canal **Design em Escala** (YouTube) — https://youtu.be/lZOuoloRbc4

> Episódio **039** da série **Design em Escala**, com **Thiago Hassu** — fundador e CEO da **Meiuca** (consultoria brasileira especializada em Design Systems e DesignOps). O conteúdo abaixo está ancorado na fala do episódio e na obra autoral de Hassu sobre o tema (série de artigos da Meiuca no Medium, ver fontes).

### Conceito central

A palestra trata de **DesignOps na prática brasileira** e de **design em escala** — o salto de "fazer bom design" para "fazer bom design de forma sustentável quando o time e o produto crescem". Os eixos do episódio são: **fundamentos do design, estratégia para o campo, design em escala e adaptação a mudanças tecnológicas.** A tese de Hassu é que **escalar não é contratar mais gente — é ganhar eficiência na forma como se trabalha**.

### A definição de DesignOps segundo Hassu

Esta é a contribuição mais "citável" do episódio, e difere ligeiramente da NN/g por ser mais **operacional/de time**:

> **DesignOps é "o time responsável por otimizar e padronizar ferramentas, processos e habilidades (*skills*) capazes de escalar a entrega de produto — entrega que pode ser potencializada por um Design System."** — Thiago Hassu ([Meiuca](https://medium.com/@thiago_hassu/3-o-que-%C3%A9-design-ops-muita-coisa-5d23bafcc7bd))

Repare nos três objetos de padronização — **ferramentas, processos e skills** —, que ecoam o trio *people/process/craft* da NN/g (Tópico 1).

### A relação DesignOps ↔ Design System (o ponto que mais cai)

Hassu crava uma **dependência assimétrica** entre os dois conceitos:

- **DesignOps pode existir SEM Design System.** (Você pode padronizar processos e ferramentas sem ainda ter uma biblioteca de componentes.)
- **Design System NÃO pode existir sem DesignOps.** (Um DS sem operação que o governe, versione e mantenha vira artefato morto — eco direto do "design ops é a prática de adotar o design system" de Keith, Tópico 5, e do desafio **cultural** vs técnico.)

Ele descreve ambos como **cíclicos/evolutivos** — nunca "prontos", sempre iterados — e trata o **Design System como um produto** (com roadmap, versionamento, *time to market*), não como um entregável único.

### Onde o time de DesignOps deve ficar (posicionamento)

Recomendação prática de Hassu: **não isolar DesignOps dentro do departamento de design.** O time deve se posicionar **transversalmente entre as lideranças de Design, Tecnologia e Produto** — para "escalar todo o pipeline de produção", e não só a parte de design. É a versão organizacional da analogia DevOps: operação que atravessa silos.

### Estratégia e adaptação a mudanças tecnológicas

- **Estratégia.** DesignOps é estratégico quando conecta o trabalho de design aos **objetivos de negócio** e ao **time to market** — acelerar o lançamento de produtos e viabilizar **pivôs de negócio** em mercados incertos (conecta com **Measure/Socialize** da NN/g e **Results/Clarity** do REACH).
- **Adaptação tecnológica / "novo normal".** Hassu argumenta que, sob incerteza de mercado (e no contexto pós-pandemia), as empresas tendem a **times mais enxutos e generalistas** e a **modelos de organização exponencial** — o que torna a **eficiência operacional** (e não a expansão do time) o vetor de escala. Isso exige **repensar processos, ferramentas e métodos de pesquisa**, inclusive adaptados ao trabalho remoto. ([Meiuca #7](https://medium.com/meiuca/7-design-ops-e-o-novo-normal-1b02d6f40cd6))
- **Tensões em aberto que ele levanta** (boas para discussão de prova): como times remotos constroem **cultura e relações**? Como designers júnior aprendem sem a "osmose" do presencial? Quais skills importam num time mais enxuto e generalista?

### Fundamentos como base operacional

Antes de operacionalizar, é preciso clareza dos fundamentos: princípios de design, consistência, hierarquia visual, usabilidade. DesignOps **não substitui o ofício — ele o amplifica** (eco de *people, process, craft* da NN/g).

### Escala — o problema central

Os sintomas de escala que Hassu mapeia: a própria **explosão de complexidade do design** (especialização em papéis — UX, UI, Product Designer; proliferação de metodologias; excesso de ferramentas — "Sketch vs. Figma"; necessidade de governança do DS). As respostas: **design system** (escala a *consistência*), **processos padronizados** (escalam a *previsibilidade*), **DesignOps** como a função que orquestra tudo, e — sobretudo — **eficiência operacional** no lugar de mais headcount.

### Alocação de recursos e gestão de times

Como distribuir designers entre squads/produtos? Modelos comuns:
- **Centralizado** — um time de design central serve a organização (consistência alta, mas pode virar gargalo).
- **Embarcado/embedded** — designers dentro de cada squad (velocidade e contexto altos, risco de inconsistência).
- **Híbrido / *hub-and-spoke*** — designers embarcados nos squads (*spokes*) + um núcleo central (*hub*) cuidando do design system e da consistência. É o modelo mais comum em escala e equilibra os dois extremos.

**Gestão de times de design.** Trilhas de carreira (IC vs gestão — eco do *Humanize* da NN/g), rituais (critiques, design reviews), comunidades de prática, e a separação saudável entre **gestão de pessoas** e **liderança de craft**.

### Exemplo concreto

Uma fintech com 6 squads adota *hub-and-spoke*: cada squad tem 1–2 designers (spokes) focados em velocidade; um *hub* de DesignOps + design system garante que botões, formulários e fluxos de pagamento sejam consistentes entre squads. O hub publica componentes; os spokes consomem e propõem novos. Modelo direto de "design em escala".

### Por que importa

Aterrissa os conceitos abstratos (NN/g, DevOps) na **realidade de gestão brasileira**: como você realmente organiza pessoas e recursos para fazer design em escala. É a ponte entre teoria de DesignOps e operação de um time real — vinda de quem fundou uma consultoria (Meiuca) inteira em torno do tema.

### 📌 Pontos de prova

- **Definição de Hassu:** DesignOps = **time que otimiza e padroniza ferramentas, processos e skills para escalar a entrega de produto** (potencializada por um Design System). Note os 3 objetos: *ferramentas, processos, skills* (≈ *people/process/craft* da NN/g).
- **Dependência assimétrica (quase certo de cair):** **DesignOps pode existir sem Design System; Design System NÃO existe sem DesignOps.** Liga-se ao "design ops é a prática de adotar o DS" de Keith.
- **Posicionamento transversal:** o time de DesignOps NÃO deve ficar isolado em design — fica entre **Design + Tecnologia + Produto**, para escalar todo o pipeline.
- **Escalar = eficiência operacional, não mais headcount** (times enxutos/generalistas, "novo normal").
- **Design System tratado como produto** (roadmap, versão, *time to market*); DesignOps e DS são **cíclicos/evolutivos**, nunca "prontos".
- **Modelos de alocação de times de design**: centralizado × embedded × híbrido (*hub-and-spoke*). Saiba os trade-offs (consistência vs velocidade/gargalo).
- DesignOps **amplifica** o craft, não o substitui; trilhas **IC vs gestão** (também em NN/g — *Humanize*).

### Fontes consultadas

- Vídeo: ["039: Design em escala com Thiago Hassu" — Design em Escala (YouTube)](https://youtu.be/lZOuoloRbc4)
- [Thiago Hassu — "#3: O que é Design Ops? Muita coisa." (Meiuca / Medium)](https://medium.com/@thiago_hassu/3-o-que-%C3%A9-design-ops-muita-coisa-5d23bafcc7bd)
- [Thiago Hassu — "#7: Design Ops e o 'novo normal'" (Meiuca / Medium)](https://medium.com/meiuca/7-design-ops-e-o-novo-normal-1b02d6f40cd6)
- [Thiago Hassu — "#6: Design System e Time to Market" (Meiuca / Medium)](https://medium.com/meiuca/6-design-system-e-time-to-market-c477fb0e2796)
- [Meiuca — "Semaninha do Design em escala"](https://semaninha.meiuca.co/)

---

# Semana 08 — Medição e maturidade: o framework REACH

## 7. Auditoria de Realidade DesignOps: Framework REACH (NN/g)

**Fonte:** https://www.nngroup.com/articles/measuring-designops-reach/ (Nielsen Norman Group, Kate Kaplan)

### Conceito central

**REACH** é um framework da NN/g para **medir o impacto e a maturidade de DesignOps** — uma **"auditoria de realidade" (*reality audit*)**: em vez de achar que o DesignOps "está indo bem", você mede dimensões concretas para confrontar percepção com realidade. REACH é um **acrônimo de 5 dimensões**: **R**esults, **E**fficiency, **A**bility, **C**larity, **H**ealth.

### As 5 dimensões do REACH (cada letra)

| Letra | Dimensão | Pergunta-guia (definição NN/g) | Como se mede (exemplos de métricas) |
|---|---|---|---|
| **R** | **Results** (Resultados) | "O design do produto ou de sua experiência melhorou?" | Satisfação do usuário, taxas de sucesso/erro, *design-quality scores* |
| **E** | **Efficiency** (Eficiência) | "Os designers estão gastando tempo e energia em tarefas de alto valor?" | Tempo em tarefas operacionais vs. trabalho de design; % de prazos cumpridos; média de iterações por projeto |
| **A** | **Ability** (Capacidade) | "As competências e o conhecimento necessários estão presentes e acessíveis no time?" | Mapeamento de skills (ratios), participação em treinamentos, frequência de colaboração |
| **C** | **Clarity** (Clareza) | "Membros do time *e* parceiros externos entendem e concordam sobre o valor que o design entrega?" | Concordância dos designers sobre a visão, consciência dos parceiros externos, inclusão do time de design nos projetos |
| **H** | **Health** (Saúde) | "Os membros do time estão felizes e realizados no trabalho?" | eNPS (employee Net Promoter Score), índices de engajamento, dados de *attrition* (rotatividade) |

```
            R E A C H — auditoria de realidade do DesignOps
   ┌─────────┬───────────┬──────────┬──────────┬──────────┐
   │ Results │ Efficiency│ Ability  │ Clarity  │ Health   │
   │ o produ-│ tempo em  │ skills e │ todos    │ time fe- │
   │ to melho│ alto valor│ conheci- │ entendem │ liz e    │
   │ rou?    │ ?         │ mento?   │ o valor? │ realizado│
   │ (output)│ (processo)│ (pessoas)│ (alinha- │ (cultura)│
   │         │           │          │  mento)  │          │
   └─────────┴───────────┴──────────┴──────────┴──────────┘
     ↑ produto    ↑ fluxo    ↑ capac.   ↑ percep.   ↑ moral
```

### Como o framework avalia impacto — triangulação

Ponto metodológico crucial: REACH usa **triangulação** — analisar **múltiplas métricas em conjunto** — em vez de buscar "prova estatística". A NN/g é honesta sobre causalidade: *"mudanças em muitas dessas métricas podem estar acontecendo devido a esforços de DesignOps, a alguma outra coisa, ou a pura coincidência."* Por isso:

- **Estabeleça uma linha de base (*baseline*)** ANTES de lançar iniciativas de DesignOps.
- **Faça benchmark trimestral ou semestral** ("benchmark quarterly or biannually") para observar tendências ao longo do tempo.
- Interprete o **conjunto** das 5 dimensões, não uma métrica isolada — uma melhora em *Efficiency* sem melhora em *Health* (ex.: time mais rápido mas exausto) é um sinal de alerta que só a visão conjunta revela.

### A lógica das 5 dimensões (como decorar com sentido)

As 5 letras cobrem a cadeia completa de valor de um time de design:
- **Results** = o **output** (o produto ficou melhor?).
- **Efficiency** = o **processo/fluxo** (gastamos tempo no que importa?).
- **Ability** = as **pessoas/capacidades** (temos as skills?).
- **Clarity** = o **alinhamento/percepção** (todos enxergam o valor?).
- **Health** = a **cultura/moral** (o time está bem?).

### Por que importa

DesignOps precisa **provar seu valor** (lembre do pilar C da NN/g — *Measure/Socialize*). Sem medição, DesignOps vira "fé". REACH dá um vocabulário de medição **multidimensional e honesto** (assume incerteza causal, foca em tendência) — diretamente análogo a um **dashboard de observabilidade** que mistura métricas técnicas e de produto.

### 📌 Pontos de prova

- **Decore o acrônimo e cada letra**: **R**esults, **E**fficiency, **A**bility, **C**larity, **H**ealth. Saiba a **pergunta-guia** de cada uma.
- **Triangulação** > prova estatística; **baseline antes** + **benchmark trimestral/semestral**.
- NN/g **assume incerteza causal** ("pode ser DesignOps, outra coisa, ou coincidência") — é uma pegadinha clássica: REACH **não prova causalidade**, ele **indica tendência**.
- Associe cada letra a uma "camada": Results=produto, Efficiency=processo, Ability=pessoas/skills, Clarity=percepção/alinhamento, Health=moral/cultura.
- **REACH = "auditoria de realidade"** (reality audit) do DesignOps.

---

## 8. Measuring DesignOps with REACH (Kate Kaplan, vídeo)

**Fonte:** vídeo — https://youtu.be/NgWb6Ej4mJQ (Kate Kaplan / NN/g)

**🎬 Vídeo confirmado:** "Measuring DesignOps with REACH" — **Nielsen Norman Group (NN/g)**, apresentado por **Kate Kaplan** — https://youtu.be/NgWb6Ej4mJQ

> Vídeo curto (**~4 minutos**, publicado em **12/02/2024**; também disponível no site oficial em [nngroup.com/videos/measuring-designops-reach](https://www.nngroup.com/videos/measuring-designops-reach/)). É a **versão condensada em vídeo** do framework REACH apresentada pela própria autora — o detalhamento completo das 5 dimensões está no **Tópico 7**.

### Conceito central — o que o vídeo de fato diz

A tese de abertura, repetida quase literalmente: **"o sucesso de DesignOps é difícil de rastrear e medir" ("DesignOps success is difficult to track and measure").** O vídeo propõe usar o framework **REACH** (**R**esults, **E**fficiency, **A**bility, **C**larity, **H**ealth) para resolver isso com **dois movimentos explícitos**:

1. **Identificar métricas relevantes DENTRO de cada uma das 5 categorias** — ou seja, REACH não é uma métrica, é um conjunto de *baldes* (categorias) que você preenche com métricas próprias.
2. **Triangular as métricas** ("triangulating metrics") — cruzar várias delas para obter uma visão **abrangente** do desempenho de DesignOps, em vez de olhar uma isolada.

### O ponto metodológico que o vídeo crava

O vídeo enfatiza que as métricas devem ser **ancoradas em metas claras** ("clear goals to understand the success of **individual** DesignOps programs"): as métricas se ajustam aos **objetivos específicos de cada programa/organização**, e **não** se aplicam de forma universal/genérica. Cada programa de DesignOps define o que "sucesso" significa para si, e só então escolhe as métricas que povoam as 5 categorias do REACH.

Pontos correlatos que a apresentação reforça (consistentes com o artigo do Tópico 7):
- A medição é **multidimensional** — o valor está no **painel das 5 dimensões juntas** (triangulação), não em uma "métrica mágica".
- A leitura é **por tendência ao longo do tempo** (comparar contra uma baseline), com **humildade causal**: enxergar direção e **iniciar conversas**, não "provar" matematicamente que DesignOps causou X.

### 📌 Pontos de prova

- **Frase-âncora do vídeo:** "medir o sucesso de DesignOps é difícil" → por isso existe o REACH.
- **Os 2 usos do REACH no vídeo:** (1) **identificar métricas relevantes em cada uma das 5 categorias**; (2) **triangular** essas métricas. Saiba os dois verbos: *identificar* + *triangular*.
- **Métricas atadas a metas claras de cada programa** — REACH é **adaptável ao contexto**, não um checklist universal. (Pegadinha: não existe "a métrica certa" fixa.)
- **REACH ≠ métrica única; é um painel multidimensional** por triangulação, lido por tendência contra baseline.
- É a **mesma matéria do Tópico 7** — qualquer questão sobre o vídeo se resolve com o framework R-E-A-C-H. Concentre a memorização no acrônimo e nas perguntas-guia de cada letra (Tópico 7).

### Fontes consultadas

- Vídeo (YouTube): ["Measuring DesignOps with REACH" — NN/g, Kate Kaplan](https://youtu.be/NgWb6Ej4mJQ)
- [Página oficial do vídeo no NN/g (~4 min, 12/02/2024)](https://www.nngroup.com/videos/measuring-designops-reach/)
- [Artigo-base: "Measuring DesignOps with REACH" — NN/g](https://www.nngroup.com/articles/measuring-designops-reach/)

---

# Semana 10 — Design Playbooks

## 9. How (and why) to create a design playbook (UX Planet)

**Fonte:** https://uxplanet.org/how-and-why-to-create-a-design-playbook-74eb49236850 (Sindhu Shivaprasad)

### Conceito central

Um **design playbook** é um **documento vivo (*living, breathing document*)** que **registra os processos de design ao mesmo tempo em que codifica os valores do time**. Shivaprasad o descreve como **"a fundação de um time de design forte e ágil"**. A dualidade é o ponto: **processo + valores**.

### Por que é um documento vivo

*"Membros de um time entram e saem a cada poucos anos, mas a necessidade de um sistema de design sólido é duradoura."* O playbook **sobrevive à rotatividade**: ele preserva o conhecimento institucional ("tribal") que, sem documentação, vai embora com cada pessoa que sai. Por isso deve ser **reavaliado periodicamente** — a autora sugere revisitar a cada **seis meses** para checar se ainda funciona.

### O que ele documenta (a dualidade central)

1. **Processos e sistemas** — operacionaliza os fluxos de design, permitindo que novos membros se integrem rápido mantendo consistência.
2. **Valores e princípios** — codifica padrões do time que **"permitem harmonia na diversidade"** (*harmony in diversity*), removendo subjetividade e reduzindo fricção entre membros.

### Benefícios

- **Single source of truth** (fonte única de verdade) entre times multifuncionais.
- **Velocidade sobre rapidez** (*velocity over speed*) — direciona a energia "para os objetivos certos", em vez de trabalho rápido porém desfocado. (*Speed* = andar rápido; *velocity* = andar rápido **na direção certa** — é a distinção que o texto faz.)
- **Colaboração de time** — multiplica a expertise ao definir padrões compartilhados.

### Como criar — passo a passo (8 passos)

1. **Escolha o canal de comunicação** — plataformas acessíveis e pesquisáveis: **Notion, GitBook, Outline**.
2. **Cocriação** — envolva todo o time em sessões colaborativas (ex.: **FigJam**). O playbook não é escrito por uma pessoa só.
3. **Comece simples** — comece com um **"unicycle" (monociclo)**: um arcabouço básico documentando os processos que já existem. (Referência ao conceito de MVP "construa um monociclo antes do carro".)
4. **Referencie trabalhos existentes** — apoie-se em playbooks consagrados (ex.: **Convivio**, **Obvious**).
5. **Defina o propósito** — estabeleça o **"porquê"** para promover união entre áreas de produto.
6. **Adapte à sua realidade** — customize práticas de mercado ao seu contexto específico.
7. **Sequencie a informação** — estruture linearmente, **do alto nível (objetivos) ao específico (princípios do time)**.
8. **Teste e itere** — reavalie regularmente o que funciona e o que não funciona na prática.

### Estrutura recomendada

A documentação deve progredir de **"objetivos de nível mais alto"** para **"processos e princípios específicos do time"** — ajudando os designers a entender o fluxo ideal e a localizar rapidamente o que precisam.

### Por que importa

Playbook é onde **DesignOps vira documento**. É o instrumento concreto do *Enable* (NN/g pilar C: "cultivar entendimento de design via playbooks acessíveis") e materializa a *prática* de design ops descrita por Keith. Resolve o problema de conhecimento "tribal" e protege o time da rotatividade.

### 📌 Pontos de prova

- **Playbook = documento vivo que une PROCESSO + VALORES.** Dualidade central — quase certo de cair.
- **Sobrevive à rotatividade**; **reavaliar a cada ~6 meses**.
- **Velocity > speed** (direção certa > rapidez crua) — distinção que costuma virar questão.
- **8 passos de criação** — saiba pelo menos: canal pesquisável (Notion/GitBook), **cocriação**, comece simples (**unicycle/MVP**), do **alto nível ao específico**, **iterar**.
- **Single source of truth** — termo recorrente em playbooks (aparece também no Dell, tópico 10).

---

## 10. Product Design Playbook — single source of truth (Dell)

**Fonte:** https://medium.com/@artlc/product-design-playbook-creating-a-single-source-of-truth-7c56ef24e1cf (Arturo Leal, Dell)

### Conceito central — o case da Dell pós-reorganização

A **Dell Digital Design** cresceu rápido: passou de "um time pequeno-médio de designers UI/UX para uma Org de Design formal com mais de cem Product Designers, Design Managers, Content Strategists, Researchers, Design Leaders e representação C-Level". Esse crescimento gerou problemas sistêmicos clássicos de escala. O playbook foi a resposta de **DesignOps** para "trazer ordem ao caos" (*bring order to chaos*).

### Pontos-chave detalhados

**O problema (por que precisaram do playbook):**
- Muito conhecimento institucional permanecia **não documentado, "tribal e 'na cabeça' dos colegas"** (*tribal and 'in the head' of our teammates*) — levando a "muita ambiguidade, instabilidade e incerteza".
- Designers tinham dificuldade de **articular seu valor** para stakeholders em um ambiente de TI corporativa.

**As 3 necessidades centrais identificadas:**
1. Padronizar frameworks, fluxos e processos.
2. Estabelecer um **ponto de referência unificado** para a prática de design.
3. **Demonstrar o valor** do design centrado no humano em toda a organização.

**Estrutura do playbook da Dell (3 categorias):**

| Categoria | Pergunta | Conteúdo |
|---|---|---|
| **1. Identity** (Identidade) | "Quem somos?" | Princípios da org; declarou **"COMPLEXITY as our enemy"** (a complexidade é o inimigo); valores que guiam decisões de design |
| **2. Process** (Processo) | "Como?" | Atividades mapeadas às fases: **Understand, Discover, Design, Test & Learn** — "práticas padrão da indústria adaptadas à nossa realidade" |
| **3. Core Competencies** (Competências centrais) | — | *Soft skills* e habilidades; ênfase em **times balanceados e multifuncionais** que colaboram com clientes, stakeholders e usuários |

**Função de "single source of truth":** o playbook é um *"conjunto de definições úteis e 'plays' adaptados à realidade da Dell Technologies"*, fornecendo **linguagem comum** e frameworks consistentes na organização expandida — centralizando o conhecimento antes espalhado nas cabeças das pessoas.

**Lições e próximos passos:** resultados iniciais validaram a hipótese, mas o time tratou como **começo, não fim** — comprometeu-se com melhoria iterativa via feedback de stakeholders, medição por KPIs definidos, e melhores canais de distribuição (migrando de **material impresso para formatos digitais** — portal online, wiki — durante a pandemia).

### Por que importa

É o **case empírico** da Semana 10: mostra um playbook real, em escala enterprise, nascido exatamente da dor de escala descrita em DesignOps. Conecta tudo: o problema (conhecimento tribal + escala), a solução (playbook como SSOT), e a evolução (documento vivo, digital, iterado).

### 📌 Pontos de prova

- **Contexto:** crescimento rápido (→ +100 pessoas) gerou **conhecimento "tribal"** e necessidade de **ordem ao caos**.
- **Estrutura tripla: Identity / Process / Core Competencies.** Saiba o que cada uma cobre.
- **"COMPLEXITY as our enemy"** — frase de efeito da Dell, fácil de citar.
- Fases do processo Dell: **Understand → Discover → Design → Test & Learn.**
- **Single source of truth** + **linguagem comum** = função do playbook.
- Evolução: **impresso → digital** (portal/wiki) na pandemia; documento vivo, iterado por KPIs.

---

## 11. Revelo — Product & Design Playbook

**Fonte:** https://revelo.gitbook.io/playbook

### Conceito central

O playbook da Revelo (empresa brasileira de tech recruiting) é um **artefato que concentra "não apenas a forma como trabalhamos como time, mas também aquilo em que acreditamos"** — explicitamente **"em constante evolução e construído por muitas mãos"** (documento vivo + cocriação, exatamente como prega o tópico 9). Serve a novos funcionários como **"um bom ponto de partida para entender nossas rotinas"** e é apresentado como adaptável por outras organizações. Hospedado em **GitBook** (canal pesquisável — exatamente a recomendação do tópico 9).

### Pontos-chave detalhados

**Mindset / princípios — redução de risco:**
A filosofia central é **reduzir risco para evitar construir features que ninguém usa**. O modelo mental: **Métrica-norte → Apostas → Experimentos**.
- Começa pela **métrica-norte** (*north star metric*) que define o norte do time.
- Converte **temas prioritários trimestrais em épicos (apostas/*bets*)**.
- Usa **experimentos** para validar desejabilidade e valor.
- Adaptabilidade explícita: *"As apostas/planos podem mudar conforme o time aprende."*

```
   Métrica-norte  →   Apostas (bets)   →   Experimentos
   (north star)       (épicos do tri)      (validar valor/desejabilidade)
        └──────────── laço de aprendizado: planos mudam ←──────────┘
```

**Cerimônias do squad ágil (cadência de rituais):**

| Cerimônia | Frequência | Duração | Propósito |
|---|---|---|---|
| **Daily** | Diária | ~15 min | Alinhamento de tarefas via board do Jira |
| **Product Planning** | Semanal | ~30 min | Priorização de stories guiada por métricas |
| **Refinement** | Semanal | ~60 min | Refinamento de design/dev antes do planning de dev |
| **Development Planning** | Semanal | ~1h | Atribuição de tarefas e definição de cronograma |
| **Retro** | Quinzenal | ~30 min | Revisão de processo / retrospectiva |

**Estrutura de time:**
- **PM e PD trabalham em duplas** dentro dos squads, com **metas e incentivos compartilhados** ("PM e PD trabalham em duplas dentro dos squads com metas e incentivos compartilhados").
- Product e Design reportam a uma **liderança unificada**.
- Squads operam dentro de **TPG (Tech, Product, Growth)** mantendo autonomia.
- Times de tech tipicamente: **3–4 devs + 1 Tech Lead**.

### Por que importa

É um **playbook brasileiro, público e ágil** — contraponto ao case enterprise da Dell. Mostra como mindset (redução de risco), ferramentas (Jira, GitBook) e cerimônias ágeis se integram num único documento. Reforça que playbook ≠ só processo: traz também **o que o time acredita** (mindset).

### 📌 Pontos de prova

- **Modelo Métrica-norte → Apostas → Experimentos** (redução de risco; evitar features inúteis).
- **PM + PD em duplas** com **metas/incentivos compartilhados** (integração produto-design — ecoa o "design system = técnico, adoção = cultural" do Keith e o *Organize* da NN/g).
- **Cerimônias ágeis** e suas frequências (Daily diária, Planning/Refinement semanais, Retro quinzenal).
- Playbook = **forma de trabalhar + aquilo em que acreditamos** (processo + valores; documento vivo, cocriado).
- Estrutura **TPG** e squad típico (3–4 devs + Tech Lead).

---

## 12. Victoria State Government — Human-Centred Design Playbook

**Fonte (PDF, lido na íntegra):** https://www.vic.gov.au/sites/default/files/2020-06/DDI_HCD%20Playbook_v1.4_1.pdf (Governo do Estado de Victoria, Austrália — Digital, Design and Innovation Branch / DDI). Versão 1.4.

### Conceito central

Um **playbook de Design Centrado no Humano (HCD — Human-Centred Design) para o setor público**, voltado a **"servidores públicos que estão projetando, contratando (*procuring*) ou gerenciando projetos de HCD"**. Definição-âncora: **"Human-centred design (HCD) é uma abordagem de resolução de problemas que coloca as pessoas para quem estamos projetando no coração do processo."** O processo começa com **empatia** e é **iterativo** — faz do feedback dos usuários "parte crítica de como a solução evolui".

### Estrutura do playbook (6 grandes seções)

1. **Introduction to HCD** — guia de início rápido sobre HCD no setor público de Victoria.
2. **Design plans** — planos para estruturar projetos conforme prazo e orçamento.
3. **Methods** — catálogo de ~26 métodos/ferramentas de HCD.
4. **Outputs** — ~22 artefatos visuais e produtos.
5. **Case studies** — 3 projetos reais (Single Digital Presence; Ignite: Workplace of the future; Community Crime Prevention).
6. **Acknowledgements**.

### O processo de design — 5 fases (formato "double-double-diamond")

```
   ALIGN ───► DISCOVER ───► DEFINE ───► DEVELOP ───► DELIVER
   (kick-off) (pesquisa)   (define o   (prototipa  (constrói a
              etnográfica   problema)   muitas      melhor
              + qualitativa             soluções)   solução)
              └──── PROBLEM SPACE ────┘ └──── SOLUTION SPACE ────┘
```

| Fase | O que acontece |
|---|---|
| **Align** | Reunião de kick-off para definir o **estado futuro desejado** e métricas de sucesso com o parceiro |
| **Discover** | Período de aprendizado com pesquisa **qualitativa, etnográfica e de HCD** para entender comportamentos e desejos dos stakeholders |
| **Define** | Análise de todos os achados para **formular um enunciado de problema detalhado** |
| **Develop** | **Prototipagem rápida** de múltiplas ideias e conceitos, testados em campo com stakeholders |
| **Deliver** | Construir o conceito mais promissor na **solução mais ótima** |

> Nota: as duas primeiras fases (Discover/Define) compõem o **PROBLEM SPACE**; as duas últimas (Develop/Deliver) o **SOLUTION SPACE** — é uma variação do **Double Diamond** do UK Design Council, com a fase **Align** adicionada na frente.

### Pensamento divergente × convergente (Double Diamond)

Baseado no **Double Diamond do UK Design Council**:
- **Períodos divergentes** (Discover, Develop) = **"criar escolhas" (*create choices*)** — tentar muitas abordagens, perguntar "o que poderia ser", sem análise profunda prematura.
- **Períodos convergentes** (Align, Define, Deliver) = **"fazer escolhas" (*make choices*)** — avaliar, articular e decidir.
- Projetos de HCD bem-sucedidos dedicam **tempo saudável a ambos**. O erro comum sob pressão de tempo: pular o divergente e "reusar ideias passadas não porque são as melhores, mas porque já foram feitas antes" — o que **sufoca a inovação**.

### Abordagem analítica × abordagem de design

- **Abordagem analítica (tradicional):** linear; exige investimento pesado **cedo** na análise profunda da questão → resposta altamente informada. **Risco:** se o problema foi mal enquadrado no início, gasta-se muito para chegar a "uma solução refinada porém inadequada".
- **Abordagem de design (não-linear):** gasta os estágios iniciais **descobrindo o verdadeiro problema**; testa hipóteses "rápida e baratamente", deixando o problema real "se revelar" conforme valida/invalida suposições. É a **essência da prototipagem**: aprendizado acelerado sobre problema *e* solução ao mesmo tempo.

### Por que o setor público é diferente

> *"Como servidores públicos, nossos objetivos geralmente visam melhores resultados sociais, o que difere muito dos objetivos financeiros de entidades privadas."*

Desafios do setor público de Victoria: servir populações diversas e vulneráveis; engajar múltiplos stakeholders com interesses conflitantes; entregar **serviços** mais que produtos; entregar **em escala desde o início**; altos padrões de privacidade; mudança de longo prazo dentro de **ciclos administrativos** limitados no tempo.

Dois frameworks de "problematização" são citados:
- **Adaptive Leadership (Heifetz & Linsky):** distingue desafios **técnicos** (resolvíveis com conhecimento de especialista — ex.: construir uma ponte) de desafios **adaptativos** (dinâmicos, imprevisíveis, exigem aprendizado novo e mudança de crenças). **Problemas do setor público são mais adaptativos que técnicos.**
- **Cynefin (Dave Snowden):** classifica desafios em **obvious, complicated, complex, chaotic, disorder(ly)** e indica a resposta adequada a cada um. Muitos desafios públicos caem em **complex** (multi-stakeholder, em constante mudança, dependem de comportamento humano) → exigem abordagem **probe-sense-respond**.
- **O que os três compartilham (Adaptive Leadership + Cynefin + HCD):** a crença de que **entender e apreciar plenamente o problema é a parte mais importante do trabalho**, exigindo uma **mentalidade experimental e de aprendizado**.

### Os 6 princípios-guia do HCD (de Victoria)

Para engajar membros do público (especialmente vulneráveis), recomenda-se abordar o trabalho de forma:

| Princípio | Pergunta-guia |
|---|---|
| **Dignified** (Digno) | Como valorizo as pessoas como colaboradoras únicas e honro experiência vivida, cultura e forças? |
| **Attentive** (Atento) | Como planejo atender às minhas próprias necessidades e às dos outros? |
| **Relational** (Relacional) | Como facilito confiança e um espírito de participação voluntária? |
| **Truth-telling** (Verdadeiro) | Como adoto autenticidade e veracidade, mesmo quando é difícil? |
| **Aware** (Consciente) | Como me torno consciente do poder e como o discuto, negocio e compartilho? |
| **Trustworthy** (Confiável) | Como cuido das histórias e informações que me são dadas? |

### Benefícios e risco/recompensa

- **Benefícios para os cidadãos:** melhores políticas/serviços; **redução de fricção transacional**; redução de "sobrecarga de pensamento" ao usar serviços públicos.
- **Benefícios para o governo:** perspectiva *outside-in* do problema; reduz risco de política/serviço "fracassado" via validação; reduz custos com sistemas mais direcionados; aumenta confiança e reputação; melhora eficiência operacional; constrói **resiliência organizacional** via processo ágil e iterativo.
- **Risk and reward:** HCD "pode parecer arriscado", mas a intenção central é justamente **de-riscar** o projeto via processo estruturado — investir tempo no início para **evitar sobreinvestir em soluções inadequadas**.

### Os 3 tipos de "design plans" (planos de design)

Organizados por **intenção, prazo e orçamento** (orçamento estimado a uma diária mediana de **AUD$1.500/pessoa/dia** para um designer sênior):

1. **Learn about a group or community and what matters to them** — quando se quer trabalhar com pessoas **externas** à organização.
2. **Develop strategic recommendations or a policy** — quando se quer trabalhar **internamente**.
3. **Prototype, test and iterate the design of a product, service or policy** — quando se quer **começar a desenvolver uma solução**.

Cada plano é montado **combinando métodos e outputs** do catálogo (ex.: *affinity mapping, card sorting, co-design, contextual inquiry, journey maps, personas, service blueprint, prototypes, wireframe* etc.).

### Por que importa

É o **playbook mais completo e "de manual"** do conjunto: combina **definição de HCD + processo (5 fases) + Double Diamond + frameworks de problema (Cynefin, Adaptive Leadership) + princípios éticos + catálogo de métodos/outputs + planos por orçamento**. É o exemplo de como um playbook **operacionaliza HCD em escala governamental** — e o que mais "rende" questões conceituais (Double Diamond, Cynefin, divergente/convergente).

### 📌 Pontos de prova

- **Definição de HCD:** coloca as pessoas "no coração do processo"; começa com **empatia**; é **iterativo**.
- **As 5 fases: Align → Discover → Define → Develop → Deliver.** Decore a ordem e o que cada uma faz. (Align = a fase extra antes do Double Diamond clássico.)
- **Problem space (Discover/Define) × Solution space (Develop/Deliver).**
- **Double Diamond / divergente (criar escolhas) × convergente (fazer escolhas).** Saiba quais fases são quais.
- **Analítico (linear, risco de resolver o problema errado) × Design (não-linear, descobre o problema real).**
- **Cynefin** (obvious/complicated/complex/chaotic/disorder) e **Adaptive Leadership** (técnico × adaptativo) — setor público = problemas **complex/adaptativos**. O que os três compartilham: **entender o problema é o mais importante**.
- **Os 6 princípios-guia: Dignified, Attentive, Relational, Truth-telling, Aware, Trustworthy.** (Mnemônico possível em PT: *Digno, Atento, Relacional, Verdadeiro, Consciente, Confiável*.)
- **3 design plans** (externo / interno / prototipar) montados por **métodos + outputs**, orçados por diária.
- **Setor público é diferente:** objetivos **sociais** (não financeiros); HCD **de-risca** via processo estruturado.

---

# Síntese geral e conexões

Os quatro grandes temas da disciplina formam **uma cadeia coerente** — do conceito à medição à documentação. Veja como se conectam:

```
   DESIGNOPS ──────────────► DESIGN SYSTEMS ──────► REACH ──────────► PLAYBOOK
   (a prática/disciplina)    (um dos artefatos)    (como medir)      (como documentar)
        │                          │                    │                  │
   "DevOps do Design"        "é para interfaces"   "auditoria de        "documento vivo:
   menu NN/g (3 pilares)     system of systems     realidade"           processo + valores"
   reduz fricção             layer-cake            R-E-A-C-H            single source of truth
                                                   triangulação
```

### 1. DesignOps é o guarda-chuva; o resto são suas peças

- **DesignOps** (Semana 02) é a **disciplina/prática** que orquestra *pessoas, processos e craft em escala* (NN/g). Sua tese operacional é a analogia com **DevOps**: reduzir fricção, automatizar, ser intencional, ter propriedade do ciclo. O menu de 9 itens da NN/g é o cardápio do que DesignOps pode fazer.
- Dentro do menu, **Harmonize** prescreve o **Design System** (Semana 05). Brad Frost crava seu escopo ("é para *interfaces*", é um *system of systems*, governado por *layer-cake*), e Jeremy Keith faz a distinção decisiva: o **design system é uma COISA (técnica)**; **design ops é a PRÁTICA (cultural) de adotá-lo**. Logo, design system sem design ops é um artefato que ninguém usa.
- **Enable/Measure** (pilar C da NN/g) puxam, respectivamente, o **Playbook** (Semana 10) e o **REACH** (Semana 08).

### 2. REACH responde "o DesignOps está funcionando?"

O pilar **C — gerar impacto** da NN/g exige **Measure**. O **REACH** (Semana 08) é o instrumento: mede **R**esults (produto), **E**fficiency (processo), **A**bility (pessoas), **C**larity (alinhamento), **H**ealth (cultura) — uma "auditoria de realidade" multidimensional, por **triangulação**, comparada a uma **baseline** ao longo do tempo. É o equivalente da **observabilidade** num pipeline CI/CD: você não confia na sensação, você **mede a tendência**. A própria atividade "DesignOps é o DevOps do Design" (Semana 02) usa esse diagnóstico de estado atual como ponto de partida do plano.

### 3. O Playbook é onde DesignOps vira documento

O **Playbook** (Semana 10) materializa o **Enable** da NN/g e a **prática** de Keith. As quatro fontes convergem para a mesma anatomia:
- **Documento vivo** que une **processo + valores** (UX Planet) — sobrevive à rotatividade, é **cocriado** e **iterado** (~6 meses).
- **Single source of truth** que combate o conhecimento "tribal" gerado pela escala (Dell) — estrutura *Identity / Process / Core Competencies*.
- **Mindset + rituais ágeis** num só lugar (Revelo) — *métrica-norte → apostas → experimentos*, PM+PD em duplas.
- **HCD operacionalizado em escala** (Victoria) — 5 fases (Align→Discover→Define→Develop→Deliver), Double Diamond, Cynefin, princípios éticos, catálogo de métodos/outputs.

### 4. Os fios que atravessam TUDO

| Fio condutor | Onde aparece |
|---|---|
| **Escala gera fricção; operação resolve** | NN/g (escala), Designer Hangout (fricção), Hassu (design em escala), Dell (+100 pessoas) |
| **Reduzir débito (técnico/UX) via padronização e automação** | Designer Hangout, Brad Frost (layer-cake evita snowflakes), DevOps↔DesignOps |
| **Coisa × Prática / Técnico × Cultural** | Keith (a distinção mais citável da disciplina) |
| **Documento vivo / iteração / cocriação** | UX Planet, Revelo, Dell, Victoria (todos os playbooks) |
| **Single source of truth / linguagem comum** | UX Planet, Dell, Revelo |
| **Medir é difícil → painel multidimensional, não métrica mágica** | REACH (artigo + vídeo) |
| **Entender o problema > correr para a solução** | Victoria (analítico×design, Cynefin, divergente×convergente) |
| **Analogia com engenharia (DevOps/CI-CD/observabilidade)** | Designer Hangout, atividade Inteli, e a moldura UEX inteira |

### Frase-resumo para a prova

> **DesignOps é o "DevOps do Design": uma prática (não um cargo obrigatório) que orquestra pessoas, processos e craft em escala. Ela produz artefatos — como o Design System (que, por Frost, é para interfaces e é um *system of systems*) e o Playbook (documento vivo de processo + valores, *single source of truth*) — e mede seu próprio impacto com frameworks como o REACH (Results, Efficiency, Ability, Clarity, Health), por triangulação contra uma baseline. A adoção desses artefatos é um desafio cultural, não técnico (Keith).**

---

# Glossário rápido para a prova

| Termo | Definição curta |
|---|---|
| **DesignOps** | Orquestração e otimização de pessoas, processos e craft para amplificar o valor do design em escala (NN/g). |
| **Menu de DesignOps** | 3 pilares × 3 áreas: (A) trabalhar juntos — Organize/Collaborate/Humanize; (B) fazer o trabalho — Standardize/Harmonize/Prioritize; (C) gerar impacto — Measure/Socialize/Enable. |
| **DesOps (5 princípios)** | Accountability, Speed, Agility, Tooling, Risk Management (adaptados do DevOps). |
| **Wagile** | *Waterfall* disfarçado de *agile*; sintoma de design não-integrado ao ciclo. |
| **Débito de UX/design** | Inconsistências e padrões divergentes acumulados por falta de padronização; análogo ao débito técnico. |
| **Design System** | "História oficial de como uma org projeta e constrói **interfaces** digitais" (Frost); *system of systems* (componentes, tokens, tipografia, cor, ícones). |
| **Layer-cake (Frost)** | (1) componentes do DS → (2) receitas de produto → (3) snowflakes; evita gargalo. |
| **Atomic Design** | Metodologia de Frost: átomos→moléculas→organismos→templates→páginas. |
| **Design Ops (Keith)** | A **prática** de adotar e usar um design system (≠ a coisa). Desafio **cultural**. |
| **Style guide / Pattern library** | Style guide = regras visuais/de voz; pattern library = coleção de componentes. Ambos cabem dentro de um design system. |
| **REACH** | Framework NN/g p/ medir DesignOps: **R**esults, **E**fficiency, **A**bility, **C**larity, **H**ealth. Por triangulação, contra baseline. |
| **Design Playbook** | Documento **vivo** que une **processo + valores**; *single source of truth*; cocriado e iterado. |
| **Single source of truth** | Fonte única de verdade compartilhada entre times. |
| **HCD** | Human-Centred Design: resolução de problemas com as pessoas "no coração do processo"; iterativo, começa com empatia. |
| **Double Diamond** | Divergir (criar escolhas) ↔ convergir (fazer escolhas), 2×; base do processo de Victoria. |
| **5 fases (Victoria)** | Align → Discover → Define → Develop → Deliver (Problem space → Solution space). |
| **Cynefin** | obvious / complicated / complex / chaotic / disorder; setor público ≈ **complex**. |
| **Adaptive Leadership** | Desafios técnicos (especialista resolve) × adaptativos (exigem aprendizado/mudança de crença). |
| **6 princípios HCD (Victoria)** | Dignified, Attentive, Relational, Truth-telling, Aware, Trustworthy. |
| **hub-and-spoke** | Modelo de time de design: núcleo central (hub, design system) + designers embarcados nos squads (spokes). |
| **Métrica-norte → Apostas → Experimentos** | Modelo de redução de risco do playbook da Revelo. |

---

*Fim do material. Bons estudos — foque nas seções 📌 Pontos de prova e na tabela de conexões da síntese.*
