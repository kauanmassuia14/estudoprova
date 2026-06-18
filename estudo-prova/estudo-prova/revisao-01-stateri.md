# Revisão para Prova — DesignOps & Design Systems (UEX)

> Prof.ª Julia Stateri · eixo UEX · base: `01-stateri-designops-uex.md`
> Temas: DesignOps · Design Systems · framework REACH · Design Playbooks

---

## Parte 1 — Cola condensada

### A frase que resume tudo
> **"DesignOps é o DevOps do Design."** Aplica ao design a mesma intencionalidade operacional que a engenharia já tem via DevOps: **reduzir fricção operacional** para **proteger o tempo de criação**, automatizar e ter propriedade do ciclo.

### O que é DesignOps (decore a definição NN/g)
- **"Orquestração e otimização de pessoas, processos e craft (*ofício*) para amplificar o valor e o impacto do design em escala."**
- Trio chave: **pessoas · processos · craft** (people, process, craft).
- Palavra-chave: **ESCALA**. DesignOps nasce da dor de crescer (mais designers/produtos/stakeholders).
- **Papel × Mentalidade:** *NÃO* precisa de um cargo "DesignOps Manager" para fazer DesignOps. É mentalidade antes de cargo.

### Os 3 pilares (Menu de DesignOps NN/g) — 3 pilares × 3 áreas = 9
| Pilar | Pergunta | 3 áreas |
|---|---|---|
| **A. Como trabalhamos juntos** (pessoas) | relações | **Organize · Collaborate · Humanize** |
| **B. Como fazemos o trabalho** (processo) | eficiência | **Standardize · Harmonize · Prioritize** |
| **C. Como geramos impacto** (valor) | demonstração | **Measure · Socialize · Enable** |

- **Design System está em Harmonize (pilar B)** — não é sinônimo de DesignOps.
- **Playbook está em Enable (pilar C)**; **REACH está em Measure (pilar C)**.
- É um **menu**: escolhe-se o que precisa conforme a maturidade; abordagem **incremental**, nunca *big bang*.

### 5 princípios de DesOps (adaptados do DevOps)
**Accountability · Speed · Agility · Tooling · Risk Management**
- **Wagile** = *waterfall* disfarçado de *agile* (design não-integrado, etapa tardia e isolada).
- **Débito de UX/design** = inconsistências e padrões divergentes acumulados por falta de padronização; análogo ao **débito técnico**. DesignOps o amortiza via padronização + automação.

### Distinções importantes (caem muito)
| Termo | É | NÃO é |
|---|---|---|
| **DesignOps** | uma **prática/disciplina** (Keith: *"não é uma coisa, é uma prática"*; = "a prática de adotar e usar um design system") | um cargo obrigatório; não é o design system |
| **Design System** | uma **coisa/artefato** técnico; *"system of systems"* (componentes, tokens, tipografia, cor, ícones); guarda-chuva | não é dono de marca/conteúdo/voz; *"incorpora* padrões mas não os *define/possui"* |
| **Pattern Library** | coleção de **componentes/padrões** de UI | não é o sistema inteiro |
| **Style Guide** | regras **visuais e de voz** (cor, tipografia, espaçamento, tom) | não é o sistema inteiro |

**Hierarquia (Keith):** Design System ⊃ ( Pattern Library + Style Guide + princípios + tokens + governança ).
**Diagnóstico de Keith:** Design System = desafio **técnico**; Design Ops (adoção) = desafio **cultural**. Se o DS existe mas ninguém usa → problema **cultural**, não técnico.

### Design System segundo Brad Frost
- Virada da definição: **"products" → "interfaces"** (design system é **para interfaces de usuário**).
- **Layer-cake** (governança que evita gargalo): **(1) componentes do DS → (2) receitas de produto → (3) snowflakes** (únicos, vivem só no produto). Analogia IKEA: parafusos compartilhados vs. peças específicas.
- **Atomic Design** (Frost): átomos → moléculas → organismos → templates → páginas. Criou também o **Pattern Lab**.

### DesignOps segundo Thiago Hassu (Meiuca / "Design em Escala")
- DesignOps = **time que otimiza e padroniza ferramentas, processos e skills** para escalar a entrega de produto (potencializada por um Design System).
- **Dependência assimétrica:** DesignOps **pode** existir **sem** Design System; Design System **NÃO** existe **sem** DesignOps.
- **Escalar = eficiência operacional, NÃO mais headcount.** DS é tratado como **produto** (roadmap, versão, time to market); ambos são **cíclicos/evolutivos**.
- Posicionamento **transversal**: DesignOps fica entre **Design + Tecnologia + Produto** (não isolado em design).
- Modelos de alocação: **Centralizado** (consistência, vira gargalo) × **Embedded** (velocidade, risco de inconsistência) × **Híbrido / hub-and-spoke** (equilíbrio, mais comum em escala).

### REACH — medir DesignOps (NN/g, Kate Kaplan) = "auditoria de realidade"
| Letra | Dimensão | Pergunta-guia | Camada |
|---|---|---|---|
| **R** | **Results** | O produto/experiência melhorou? | produto (output) |
| **E** | **Efficiency** | Designers gastam tempo em tarefas de alto valor? | processo/fluxo |
| **A** | **Ability** | As skills e o conhecimento estão presentes/acessíveis? | pessoas |
| **C** | **Clarity** | Todos (interno + externo) entendem o valor do design? | alinhamento |
| **H** | **Health** | O time está feliz e realizado? (eNPS, attrition) | cultura/moral |

- Mede por **triangulação** (várias métricas juntas), **NÃO prova causalidade** — "pode ser DesignOps, outra coisa ou coincidência". Lê-se por **tendência**.
- **Baseline ANTES** das iniciativas + **benchmark trimestral/semestral**.
- **REACH não é uma métrica única** — são 5 *baldes/categorias* preenchidos com métricas próprias, **atadas a metas claras de cada programa** (adaptável ao contexto, não checklist universal).
- O vídeo crava 2 usos: **(1) identificar métricas em cada categoria · (2) triangular**.

### Design Playbook (Semana 10)
- **Documento vivo** que une **PROCESSO + VALORES** (a dualidade central). É a **single source of truth**; **cocriado** e **iterado** (~**6 meses**). Sobrevive à **rotatividade** (mata o conhecimento "tribal").
- **Velocity > Speed**: andar rápido **na direção certa** > só rápido.
- **8 passos de criação (UX Planet):** canal pesquisável (Notion/GitBook/Outline) → cocriação (FigJam) → comece simples (*unicycle*/MVP) → referencie playbooks existentes → defina o propósito → adapte à realidade → sequencie do **alto nível ao específico** → teste e itere.
- **Dell** (case enterprise): cresceu p/ +100 pessoas → "ordem ao caos"; estrutura **Identity / Process / Core Competencies**; *"COMPLEXITY as our enemy"*; fases **Understand → Discover → Design → Test & Learn**; migrou **impresso → digital**.
- **Revelo** (BR, GitBook): mindset de **redução de risco** = **Métrica-norte → Apostas (bets) → Experimentos**; PM + PD em **duplas** com metas compartilhadas.
- **Victoria (HCD setor público):** HCD = pessoas "no coração do processo", começa com **empatia**, iterativo.
  - **5 fases: Align → Discover → Define → Develop → Deliver** (Align é a fase extra antes do Double Diamond). **Problem space** (Discover/Define) × **Solution space** (Develop/Deliver).
  - **Double Diamond:** divergir = *criar escolhas* (Discover, Develop) × convergir = *fazer escolhas* (Align, Define, Deliver).
  - Analítico (linear, risco de resolver o problema errado) × Design (não-linear, descobre o problema real).
  - **Cynefin** (obvious/complicated/complex/chaotic/disorder; setor público ≈ **complex**) + **Adaptive Leadership** (técnico × adaptativo). Os três (+ HCD) compartilham: **entender o problema é a parte mais importante**.
  - **6 princípios HCD:** **D**ignified, **A**ttentive, **R**elational, **T**ruth-telling, **A**ware, **T**rustworthy.

### Cadeia que conecta tudo
**DESIGNOPS** (prática / "DevOps do Design") → produz **DESIGN SYSTEMS** (artefato, em *Harmonize*) → medido por **REACH** (em *Measure*) → documentado em **PLAYBOOK** (em *Enable*).

### Autores-chave (não confundir)
- **Kate Kaplan / NN/g** → definição de DesignOps, Menu (3 pilares) e framework **REACH**.
- **Brad Frost** → "design systems são para interfaces", *system of systems*, **layer-cake**, **Atomic Design**, Pattern Lab.
- **Jeremy Keith (adactio)** → coisa × prática; design system ⊃ pattern library/style guide; técnico × cultural.
- **Thiago Hassu (Meiuca)** → DesignOps na prática BR, dependência assimétrica DS↔DesignOps, design em escala.

---

## Parte 2 — Flashcards (P&R)

**P:** Qual a definição de DesignOps da NN/g?
**R:** A orquestração e otimização de pessoas, processos e craft (ofício) para amplificar o valor e o impacto do design em escala.

**P:** Qual a frase-síntese que resume DesignOps?
**R:** "DesignOps é o DevOps do Design" — aplica ao design a intencionalidade operacional da engenharia: reduzir fricção e proteger o tempo de criação.

**P:** Quais são os 3 pilares do Menu de DesignOps (NN/g)?
**R:** (A) Como trabalhamos juntos; (B) Como fazemos o trabalho; (C) Como nosso trabalho gera impacto.

**P:** Quais as 3 áreas do pilar B ("Como fazemos o trabalho")?
**R:** Standardize, Harmonize e Prioritize.

**P:** Em qual pilar/área do Menu NN/g vive o Design System?
**R:** No pilar B, dentro de Harmonize (compartilhar inteligência de design).

**P:** Preciso de um cargo formal de "DesignOps Manager" para praticar DesignOps?
**R:** Não. DesignOps é antes uma mentalidade; qualquer time pode praticá-la sem um cargo dedicado (distinção Papel × Mentalidade).

**P:** Quais são os 5 princípios de DesOps adaptados do DevOps?
**R:** Accountability, Speed, Agility, Tooling e Risk Management.

**P:** O que é "wagile"?
**R:** Waterfall disfarçado de agile — quando se diz "ágil" mas o design fica isolado e tardio, em cascata, fora do ciclo de aprendizado.

**P:** O que é débito de UX/design e como o DesignOps lida com ele?
**R:** Inconsistências e padrões divergentes acumulados por falta de padronização (análogo ao débito técnico); o DesignOps o amortiza via padronização (design system) e automação.

**P:** Segundo Jeremy Keith, qual a diferença entre design system e design ops?
**R:** Design system é uma "coisa" (artefato técnico); design ops "não é uma coisa, é uma prática" — a prática de adotar e usar um design system.

**P:** Para Keith, design system e design ops apresentam desafios de que natureza, respectivamente?
**R:** Design system = desafio predominantemente técnico; design ops (adoção) = desafio quase inteiramente cultural.

**P:** Qual a diferença entre Style Guide e Pattern Library?
**R:** Style guide = regras visuais e de voz (cor, tipografia, espaçamento, tom). Pattern library = coleção de componentes/padrões de UI. Ambos cabem dentro de um design system.

**P:** Qual mudança de palavra Brad Frost fez na definição de design system?
**R:** Trocou "products" por "interfaces" — design systems são para interfaces de usuário, não para tudo na organização.

**P:** O que é o modelo "layer-cake" de Brad Frost?
**R:** Camadas de governança: (1) componentes do design system → (2) receitas específicas de produto → (3) snowflakes (soluções únicas). Evita que o DS vire gargalo.

**P:** O que é Atomic Design e quem o criou?
**R:** Metodologia de Brad Frost que decompõe interfaces em átomos → moléculas → organismos → templates → páginas.

**P:** Qual a dependência assimétrica entre DesignOps e Design System segundo Hassu?
**R:** DesignOps pode existir sem Design System; mas Design System não existe sem DesignOps (senão vira artefato morto).

**P:** Para Hassu, escalar design é uma questão de quê?
**R:** De eficiência operacional (repensar processos, ferramentas e skills), não de contratar mais gente (headcount).

**P:** O que significa o acrônimo REACH?
**R:** Results, Efficiency, Ability, Clarity, Health — as 5 dimensões para medir o impacto/maturidade de DesignOps.

**P:** A que cada letra do REACH corresponde (camada)?
**R:** Results = produto; Efficiency = processo/fluxo; Ability = pessoas/skills; Clarity = alinhamento/percepção; Health = cultura/moral.

**P:** Como o REACH mede maturidade e por que não prova causalidade?
**R:** Por triangulação (várias métricas em conjunto, contra uma baseline, por tendência). Não prova causalidade — mudanças podem vir do DesignOps, de outra coisa ou de coincidência.

**P:** O que se deve fazer antes de lançar iniciativas de DesignOps ao usar REACH, e com que cadência medir?
**R:** Estabelecer uma baseline antes; fazer benchmark trimestral ou semestral.

**P:** O que é um Design Playbook?
**R:** Um documento vivo que registra os processos e codifica os valores do time (processo + valores); funciona como single source of truth, cocriado e iterado.

**P:** Qual a distinção entre velocity e speed em playbooks?
**R:** Speed = andar rápido; velocity = andar rápido na direção certa. O playbook prioriza velocity sobre speed.

**P:** Como se estrutura o playbook da Dell e qual sua frase de efeito?
**R:** Identity / Process / Core Competencies; frase: "COMPLEXITY as our enemy".

**P:** Quais são as 5 fases do processo de HCD do playbook de Victoria?
**R:** Align → Discover → Define → Develop → Deliver (Discover/Define = problem space; Develop/Deliver = solution space).

**P:** No Double Diamond, o que significam pensamento divergente e convergente?
**R:** Divergente = "criar escolhas" (Discover, Develop); convergente = "fazer escolhas" (Align, Define, Deliver).

**P:** Quais são os 6 princípios-guia do HCD de Victoria?
**R:** Dignified, Attentive, Relational, Truth-telling, Aware, Trustworthy.

**P:** Cite os autores-chave e seu tema principal.
**R:** Kate Kaplan/NN/g (definição, Menu, REACH); Brad Frost (design system p/ interfaces, layer-cake, Atomic Design); Jeremy Keith (coisa × prática, técnico × cultural); Thiago Hassu (design em escala, dependência DS↔DesignOps).
