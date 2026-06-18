# Revisão para Prova — Prof. Hermano (eixo COM)
### Entrega Contínua · Testes · SRE · Fundamentos de Computação

> Arquivo de revisão derivado de `03-hermano-entrega-continua-testes-sre-com.md`.
> **Parte 1** é a cola condensada (leia na véspera). **Parte 2** são flashcards (teste-se).

---

# Parte 1 — Cola condensada

## 1. Entrega contínua — CI / CD / Continuous Deployment (GitLab)

Continuum de automação do commit até produção. A pegadinha clássica: **"CD" é ambíguo** — pode ser **Delivery** ou **Deployment**.

| Prática | O que faz | Onde para | Passo final |
|---|---|---|---|
| **CI** (Continuous Integration) | Integra + **builda + testa** cada mudança, várias vezes/dia | Na validação (build + testes) | gera artefato validado |
| **Continuous Delivery** | Cria, testa, configura e implanta em **staging**; fica **sempre pronto p/ lançar** | Antes da produção | **MANUAL** (clique de release) |
| **Continuous Deployment** | Tudo da Delivery **+ deploy automático em produção** | Vai direto até prod | **AUTOMÁTICO** (zero humano) |

- Citação GitLab: *"implantação contínua = todo código validado pela CI é implantado automaticamente; entrega contínua = esse código **pode** ser implantado."*
- **Mnemônico:** De*liver*y tem um humano apertando o botão; De*ploy*ment não.
- Os três dependem de uma **boa suíte de testes automatizados** como rede de segurança.
- Continuous Deployment só é viável com confiança altíssima nos testes + **feature flags** + **rollback**.

## 2. GitHub Actions — workflow / job / step / runner

Plataforma de CI/CD nativa do GitHub. Workflows em **YAML** dentro de **`.github/workflows/*.yml`**.

```
Workflow (.yml em .github/workflows/)
  └─ on:  → eventos/triggers (push, pull_request, schedule, workflow_dispatch, release)
  └─ Job(s)   → PARALELOS por padrão; runs-on: define o runner; needs: sequencia
       └─ Step(s) → SEQUENCIAIS, compartilham o filesystem do job
            ├─ run:  → comando shell (ex: npm test)
            └─ uses: → Action reutilizável (ex: actions/checkout@v4)
```

| Termo | O que é |
|---|---|
| **Workflow** | Processo automatizado em YAML, em `.github/workflows/` |
| **Event/Trigger (`on:`)** | `push`, `pull_request`, `schedule` (cron), `workflow_dispatch` (manual), `release` |
| **Job** | Conjunto de steps no **mesmo runner**. Paralelos por padrão; `needs:` cria dependência |
| **Step** | Tarefa individual: `run:` (shell) ou `uses:` (action). **Sequenciais** |
| **Runner** | VM efêmera que executa o job: `ubuntu-latest`, `windows-latest`, `macos-latest` ou self-hosted |
| **Action** | Unidade reutilizável do Marketplace (`actions/checkout`, `actions/setup-node`) |

- **`uses: actions/checkout@v4`** é quase sempre o **1º step** — sem ele o runner não tem o código.
- **`needs:`** transforma paralelo em sequencial (DAG). **Matrix** roda o mesmo job em várias versões. **Cache** acelera. **Secrets** = `${{ secrets.X }}`. **Artifacts** passam arquivos entre jobs.
- YAML usa **espaços, nunca tab**. `workflow_dispatch` = botão "Run workflow".
- **4 métricas DORA:** Deployment Frequency, Lead Time for Changes, Change Failure Rate, MTTR.

## 3. Testes de integração vs. unitários (Microsoft + Martin Fowler)

**Integração** = dois ou mais componentes **reais** juntos (BD, FS, rede, pipeline HTTP). **Unitário** = componente isolado com **fakes/mocks**.

| Aspecto | Unitário | Integração |
|---|---|---|
| Escopo | 1 método isolado | 2+ componentes juntos |
| Dependências | Fakes/mocks | **Reais** (BD, FS, rede) |
| Velocidade | **Rápido** | **Mais lento** |
| Valida | Lógica de negócio | Infraestrutura, pipeline req/resp |

**ASP.NET Core:** `WebApplicationFactory<Program>` → cria um **`TestServer`** (HTTP **em memória, sem rede**) → `CreateClient()` envia requisições. Padrão **Arrange-Act-Assert (AAA)**. **SQLite `:memory:`** (precisa ficar aberto/singleton) é preferível ao EF Core InMemory. `ConfigureWebHost` = config global da factory; `ConfigureTestServices` + `WithWebHostBuilder` = por teste. Reinicializar BD entre testes = **isolamento**.

**Martin Fowler — narrow vs. broad:**

| | **Narrow** | **Broad** |
|---|---|---|
| Escopo | Código que fala com **um** serviço externo | Caminhos por **múltiplos serviços reais** |
| Dependências | **Test doubles** | Versões **reais** de tudo |
| Ambiente | Leve (framework de unit test) | Pesado + **rede** |
| Velocidade | Rápido | Lento, frágil |

Fowler prefere chamar os amplos de **"system / end-to-end tests"**. Se só há broad → migre para narrow.

**Pirâmide de testes:** base larga de **unitários** (rápidos, baratos), meio de **integração**, topo estreito de **E2E** (lentos, frágeis). Invertida = anti-padrão "**ice cream cone**".

## 4. JUnit 5 + Mockito (vídeo Amigoscode)

- **`spring-boot-starter-test`** empacota **JUnit 5 + AssertJ + Mockito + MockMvc**.
- **AssertJ** = asserções fluentes: `assertThat(x).isEqualTo(y)`, `assertThat(lista).hasSize(2)`. Mais legível que `assertEquals`.
- **`@DataJpaTest` + H2 em memória** = testa **só a camada Repository** (fatia JPA), rápido/isolado — integração estreita.

| Anotação JUnit 5 | Quando roda |
|---|---|
| `@Test` | marca método de teste |
| `@BeforeEach`/`@AfterEach` | antes/depois de **CADA** teste |
| `@BeforeAll`/`@AfterAll` | **uma vez** (estático) |
| `@ParameterizedTest` | mesmo teste, vários inputs |
| `@Disabled` | ignora |

**Mockito:**
- `mock(Classe.class)` cria o dublê; **`when(...).thenReturn(...)`** programa o stub; **`verify(...)`** confirma a interação (`verify(repo, times(1)).metodo()`).
- **`@Mock`** (dependência) + **`@InjectMocks`** (SUT) + **`@ExtendWith(MockitoExtension.class)`** = injeção automática.
- **`ArgumentCaptor`** = captura o objeto **realmente passado** a um método mockado, p/ inspecionar campos: `verify(repo).save(captor.capture()); captor.getValue()`.
- Exceções: `assertThrows` (JUnit) / `assertThatThrownBy` (AssertJ).
- **Com mock → unitário; sem mock, camadas reais (`@SpringBootTest`, `MockMvc`) → integração.**

## 5. Qualidade com DevOps (Microsoft)

- Qualidade testada em **funcionalidade, escala e segurança**, ao longo de todo o pipeline.
- **CD = compilar + testar + configurar + implantar automaticamente** de build → produção.
- **Shift-left** = testar **cedo** (unit, lint, análise estática) → defeitos baratos. **Shift-right** = testar **em produção** (canary, A/B, monitoramento sintético, chaos). **Complementares.**
- Design ideal: **microsserviços** (limites naturais de responsabilidade) + **IaC**.
- Como a MS entrega: 3 iniciativas → **foco na entrega, equipes autônomas, testar em produção**.
  - **Removeram o período de estabilização** → dívida técnica gerida no próprio sprint.
  - **Trunk-based development** (trabalhar na main) reduz dívida de merge.
  - **Feature flags** desacoplam deploy de release.
  - Riscos a mitigar: **falhas em cascata** e **SPOF** (single point of failure).
  - Cuidado com **excesso de métricas** — escolher as que dirigem decisões.

## 6. SRE no Mercado Livre + plataforma Fury

- **Driver:** escala latino-americana (dezenas de milhares de microsserviços, picos de Black Friday/Hot Sale). Operação manual (**toil**) não escala → confiabilidade tem que ser **engenharia automatizada**.
- Maior desafio relatado **não é técnico, é cultural**: adoção de SLO, "**you build it, you run it**", **post-mortems sem culpa (blameless)**.
- **Error budget** equilibra **velocidade de entrega vs. disponibilidade** (a tensão central).
- Observabilidade = **métricas + logs + traces**; alertas por **queima de error budget**. Resiliência: circuit breaker, retry/backoff, degradação graciosa.

**Fury** = **Internal Developer Platform (IDP/PaaS)** do Mercado Livre, **desde 2015**:
- **Camada de abstração** entre o dev e a infra (AWS/GCP + Docker + **Kubernetes** como motor).
- Filosofia **NoOps**: a plataforma assume o trabalho de ops; ~16 mil devs, dezenas de milhares de microsserviços.
- **Self-service** via web + CLI: criar um **"scope"** provisiona infra **automaticamente** (load balancer, autoscaling, instâncias, observabilidade).
- CI/CD padronizado + **rollback automático**; "**golden paths**" embutem as boas práticas → reduz **toil** e **carga cognitiva**.

## 7. Garantia da qualidade — SQA (Pressman)

- SQA = atividades **planejadas e sistemáticas**, **transversais** ao ciclo (não só "testar no fim").
- Elementos: padrões, **revisões e auditorias**, testes, coleta/análise de erros, gestão de mudança, treinamento.
- **FTR (Formal Technical Reviews):** inspeções de Fagan, walkthroughs. Princípio: **revisar o produto, não o produtor** (ecoa o blameless do SRE).
- Defeito encontrado **cedo é mais barato** (custo cresce exponencial) → base econômica do shift-left.
- **DRE (Defect Removal Efficiency) = E / (E + D)** — E = defeitos achados antes da entrega, D = achados pelo cliente; ideal → **1**.
- **Densidade de defeitos** = defeitos / KLOC.
- Confiabilidade: **MTBF, MTTF, MTTR** (ligação com SRE). SQA estatístico usa **princípio de Pareto**.

## 8. Padrões de software (GoF / Sommerville)

Padrão = **problema recorrente + solução reutilizável nomeada**. Descrito por **Nome / Problema / Solução / Consequências (trade-offs)**.

| Categoria GoF | Propósito | Exemplos |
|---|---|---|
| **Criacionais** | Como **criar** objetos | Singleton, Factory Method, Abstract Factory, Builder |
| **Estruturais** | Como **compor** objetos/classes | Adapter, Decorator, Facade, Proxy, Composite |
| **Comportamentais** | Como objetos **colaboram/comunicam** | **Observer**, Strategy, Command, State, Iterator |

- **Observer** (comportamental): Subject mantém lista de Observers e os notifica (`notify()`) a cada mudança de estado; cada Observer implementa `update()`. Relação **um-para-muitos**, **baixo acoplamento**. Base de MVC, eventos, bindings de UI.
- **Padrões de arquitetura** (nível de sistema, ≠ design pattern): **MVC**, **Camadas (Layered)**, Cliente-servidor, Pipe-and-filter, Repositório, Microsserviços, Event-driven.

## 9. Manipulação de bits (Elemar Júnior)

Operações bit a bit são **mais rápidas que aritmética** → técnica de **alta performance** (jogos, tempo real, compiladores). Usos: flags, máscaras, criptografia, compactação, processamento de imagens.

| Op | Símbolo | Regra |
|---|---|---|
| **AND** | `&` | 1 só se **ambos** 1 |
| **OR** | `\|` | 1 se **algum** 1 |
| **XOR** | `^` | 1 se **diferentes** |
| **NOT** | `~` | inverte todos (complemento) |
| **Shift esq.** | `<<` | desloca p/ esquerda, preenche com 0 |
| **Shift dir.** | `>>` | desloca p/ direita |

Exemplo clássico do vídeo: **170 (`10101010`)** e **85 (`01010101`)** → `a & b = 0`, `a | b = 255`, `a ^ b = 255`.

**Máscaras e truques:**
- **`x << n` = x · 2ⁿ**; **`x >> n` = x / 2ⁿ** (inteiro).
- Testar bit n: `(x & (1 << n)) != 0`. Ligar: `x | (1 << n)`. Desligar: `x & ~(1 << n)`. Alternar (toggle): `x ^ (1 << n)`.
- **`x & 1`** = paridade (1 ímpar, 0 par).
- **`x & (x - 1)`** zera o LSB ligado → conta bits (Kernighan) / testa potência de 2: `(x != 0) && ((x & (x-1)) == 0)`.
- **XOR troca duas variáveis sem temp:** `a ^= b; b ^= a; a ^= b;`
- Um `int` guarda 32 flags booleanas (como `rwx` do Unix).

## 10. Garbage Collection (.NET)

GC = **gerenciador automático de memória** do **managed heap**. Todos os **reference types** vão para o heap; value types locais → stack. Alocar = somar ao ponteiro (quase tão rápido quanto stack); objetos contíguos = boa localidade.

**Algoritmo: mark → relocate → compact**
1. **Marking:** parte das **roots** (campos estáticos, locais na stack, registradores, GC handles, fila de finalização) e monta o grafo de objetos **alcançáveis**. Os fora do grafo = lixo.
2. **Relocating + Compacting:** copia sobreviventes, remove buracos dos mortos, **corrige os ponteiros** das roots. Só compacta se houver muitos objetos mortos.

**3 gerações** (premissa: novo vive pouco, velho vive muito):

| Geração | Conteúdo | Coleta |
|---|---|---|
| **Gen 0** | recém-criados, **vida curta** | **mais frequente** |
| **Gen 1** | **buffer** curta↔longa | intermediária |
| **Gen 2** | **vida longa** | menos frequente = **full GC** |

- **Promoção:** sobreviveu → sobe de geração; Gen 2 **fica** na Gen 2. Coletar uma geração coleta **ela + as mais jovens**. **Gen 2 collection = full GC** (heap inteiro).
- **LOH (Large Object Heap):** objetos **≥ 85.000 bytes** (arrays); "**geração 3**", coletado **junto com a Gen 2**, **não compactado** por padrão.
- **3 condições de coleta:** pouca memória física, threshold do heap excedido, `GC.Collect()` explícito (raro).
- **Unmanaged** (handles de SO): GC não sabe liberar → use **`Dispose()`/`IDisposable`** (com `using`) e/ou `Finalize()`/`SafeHandle`. GC é **"stop-the-world"** (suspende threads exceto a que disparou).

## 11. Mapa de memória de um processo (UFRJ)

5 segmentos, de endereços **baixos → altos**:

```
ALTOS  ┌──────────────┐
       │ args / env   │
       │ STACK   ↓     │  locais, params, end. de retorno; LIFO; cresce p/ BAIXO
       │  (livre)     │  ← stack e heap crescem um em direção ao outro
       │ HEAP    ↑     │  malloc/new (dinâmico); cresce p/ CIMA; leaks/fragmentação
       │ BSS          │  globais/estáticas NÃO inicializadas (zeradas)
       │ DATA         │  globais/estáticas INICIALIZADAS
       │ TEXT (RO)    │  instruções do programa, somente-leitura
BAIXOS └──────────────┘
```

| Segmento | Conteúdo | Nota |
|---|---|---|
| **Text** | código/instruções | **somente leitura**, compartilhável |
| **Data** | globais/estáticas **inicializadas** (`int x=5;`) | vem do executável |
| **BSS** | globais/estáticas **não-init** (`int y;`) | zeradas na carga; **NÃO ocupa espaço no arquivo** |
| **Heap** | dinâmico (`malloc`/`new`) | cresce ↑; manual ou GC; fonte de **leaks** |
| **Stack** | locais, params, retorno | cresce ↓; LIFO; **stack overflow** (recursão) |

- Local → stack. Global/estática → data (init) ou BSS (não-init). `malloc`/`new` → heap.
- **Stack overflow ≠ memory leak** (stack vs. heap). Escrever em text = segfault.

## 12. SRE — SLI / SLO / SLA, error budget, toil

**SRE** = engenharia de software aplicada a operações; criado por **Ben Treynor no Google (~2003)**. "O que acontece quando você pede a um engenheiro de software para projetar uma equipe de operações."

**A tríade (distinção crítica):**

| Sigla | Nome | O que é | Exemplo |
|---|---|---|---|
| **SLI** | Service Level **Indicator** | a **métrica medida** | latência p99 = 220ms; disp. = 99,95% |
| **SLO** | Service Level **Objective** | a **meta interna** sobre o SLI | "99,9% das req < 300ms no mês" |
| **SLA** | Service Level **Agreement** | **contrato externo + penalidade** | "99,9% uptime ou reembolso 10%" |

Ordem: **SLI mede → SLO mira → SLA obriga (com multa)**. **SLO é mais rígido que SLA** (margem interna antes de pagar penalidade).

**Error Budget = 100% − SLO** ("orçamento de não-confiabilidade permitida"):
- SLO 99,9% → 0,1% → ~**43 min/mês** de downtime permitido. Cálculo **contínuo** (janela móvel).
- **Moeda comum dev↔ops:** orçamento sobrando → libere features; **esgotado → congele releases** e foque em confiabilidade. Exige aceitação institucional.

**Os "noves":** 99% = ~3,65 dias/ano · 99,9% = ~8,77h/ano (~43,8 min/mês) · 99,99% = ~52,6 min/ano · 99,999% = ~5,26 min/ano.

**Toil** = trabalho operacional **manual, repetitivo, sem valor duradouro, que escala linearmente** com o serviço. SREs **eliminam toil via automação**. **Pegadinha: estar num sistema de tickets NÃO deixa de ser toil.**

**Regra dos 50%:** Ops reativo ≤ 50% do tempo; o resto = engenharia/projeto. Acima → **burnout** e quebra dos ciclos virtuosos.

**Ciclos virtuosos** (loops de feedback de melhoria contínua): (1) **SLIs/SLOs + error budgets**; (2) **post-mortems blameless** — foco no processo/tecnologia, não na pessoa. *"Você não pode ser confiável por meio de demissões."*

**Getting started (Mikey Dickerson, salvou o healthcare.gov):** SRE não é tudo-ou-nada. Base da pirâmide = **MONITORAMENTO** ("não dá p/ saber se é confiável se não dá p/ medir"). Depois: 1 serviço → SLI/SLO simples → monitorar.

**SRE vs. DevOps:** DevOps = **filosofia/cultura** (o "quê"/"porquê"); SRE = **implementação concreta** (o "como"). "Se DevOps fosse uma interface, SRE é uma classe que a implementa." Princípio: **"you build it, you run it"** quebra o silo dev/ops.

## 13. Como ser um ótimo programador (Pólya)

O que separa **great** de **good** dev **não é a linguagem nem as ferramentas** — são habilidades/atributos. Dois pilares:

1. **Resolução de problemas — "programar É resolver problemas":** entender o problema a fundo (dados, restrições) **antes de codar**, fazer um plano, **quebrar em pedaços menores**, simplificar/visualizar. Referência clássica: **"How to Solve It" de George Pólya**. Código limpo reflete pensamento claro.
2. **Fundamentos de CS — entender o "porquê":** o que acontece nos bastidores (gerência de **memória**, eficiência **Big-O**, **call stack**, iteração, recursão, abstração). Acelera aprender novas linguagens.

- Princípios: **DRY, KISS, YAGNI, SOLID**. "Código é lido muito mais vezes do que escrito."
- Debugar metodicamente (hipótese → instrumentação → isolamento). Feedback/code review como aprendizado (ecoa blameless). **Consistência > intensidade**.
- Melhorar (LinkedIn): dominar 1 linguagem, ler código bom (GitHub/open source), projetos reais, refatorar (linters/debuggers), base = **DSA + design patterns + OOP + prática deliberada**.

## 14. OOP — os 4 pilares (MIT 6.01)

**Classe** = molde; **objeto/instância** = exemplar concreto. **Atributo** = estado; **método** = comportamento. **Herança** = relação **"é-um"**, `super()`/override.

**4 pilares (A-E-H-P):**

| Pilar | Definição |
|---|---|
| **Encapsulamento** | agrupar dados+métodos e **esconder o estado interno**; acesso só via interface pública (private + getters/setters) |
| **Abstração** | expor **o que** faz, esconder **como**; modelar só o essencial (interfaces, classes abstratas) |
| **Herança** | subclasse reutiliza/estende a superclasse; relação "é-um" |
| **Polimorfismo** | mesmo nome/interface, comportamentos diferentes conforme o tipo |

- **Encapsulamento ≠ Abstração:** encapsular = esconder/proteger estado; abstrair = esconder complexidade/expor essencial.
- **Polimorfismo:** subtipo (override — subclasse redefine método) vs. ad-hoc (overload — mesmo nome, assinaturas diferentes).

## A grande história (síntese)

`git commit` → **CI** (build+testes) → **CD** (Delivery c/ gate manual ou Deployment auto) → **operar+monitorar** (shift-right, DORA) → **SRE** (SLI→SLO→SLA, error budget, toil, blameless). Confiabilidade é **construída em cada camada**, não acidente nem heroísmo de plantão.

---

# Parte 2 — Flashcards (P&R)

**P:** Qual a diferença entre Continuous Delivery e Continuous Deployment?
**R:** Delivery deixa o código **pronto para produção mas com aprovação manual** ("pode ser implantado"); Deployment faz o **deploy automático em produção**, sem intervenção humana ("é implantado automaticamente").

**P:** O que a Continuous Integration (CI) automatiza e onde ela para?
**R:** Integrar código no repositório compartilhado e **buildar + testar cada mudança** automaticamente. Para na validação, gerando um artefato testado.

**P:** Descreva a pirâmide de testes e o anti-padrão associado.
**R:** Base larga de **unitários** (rápidos/baratos), meio de **integração**, topo estreito de **E2E** (lentos/frágeis). Invertida = anti-padrão "**ice cream cone**".

**P:** Teste de integração vs. teste unitário (escopo e dependências)?
**R:** Unitário = **componente isolado** com fakes/mocks (rápido). Integração = **2+ componentes reais juntos** (BD, FS, rede, pipeline HTTP), mais lento.

**P:** Segundo Martin Fowler, qual a diferença entre narrow e broad integration test?
**R:** **Narrow** = código que fala com **um** serviço externo usando **test doubles**, escopo leve e rápido. **Broad** = caminhos por **vários serviços reais**, precisa de rede/ambiente, lento (Fowler prefere chamá-los de "system/end-to-end tests").

**P:** Na hierarquia do GitHub Actions, jobs e steps são paralelos ou sequenciais?
**R:** **Jobs** rodam em **paralelo** por padrão (`needs:` cria dependência/sequência); **steps** rodam em **sequência** dentro do job, compartilhando o filesystem.

**P:** Diferença entre `uses:` e `run:` em um step do GitHub Actions?
**R:** **`uses:`** invoca uma **Action reutilizável** (ex: `actions/checkout@v4`); **`run:`** executa um **comando shell** direto na VM.

**P:** Onde ficam os arquivos de workflow e o que faz `runs-on:`?
**R:** Em **`.github/workflows/*.yml`**. `runs-on:` define o **runner** (VM), ex: `ubuntu-latest`.

**P:** Cite as 4 métricas DORA.
**R:** Deployment Frequency, Lead Time for Changes, Change Failure Rate, Mean Time to Restore (MTTR).

**P:** No ASP.NET Core, o que faz o `WebApplicationFactory` e o `TestServer`?
**R:** A factory cria um **`TestServer`** — servidor HTTP **em memória, sem rede real** — e fornece um `HttpClient` (via `CreateClient()`) para testar endpoints.

**P:** O que `spring-boot-starter-test` empacota?
**R:** **JUnit 5, AssertJ, Mockito e MockMvc** juntos no classpath.

**P:** No Mockito, qual a função de `when().thenReturn()` e de `verify()`?
**R:** `when(...).thenReturn(...)` **programa o stub** (define o que o mock retorna); `verify(...)` **confirma a interação** (que o método foi chamado, e quantas vezes).

**P:** Para que servem `@Mock`, `@InjectMocks` e `@ExtendWith(MockitoExtension.class)`?
**R:** `@Mock` marca a dependência mockada, `@InjectMocks` injeta os mocks no SUT, e a extension habilita a inicialização automática — juntos automatizam a injeção dos dublês.

**P:** Para que serve um `ArgumentCaptor`?
**R:** Capturar o **objeto realmente passado** a um método mockado (ex: `verify(repo).save(captor.capture())`) para fazer asserções sobre seus campos.

**P:** Diferença entre `@BeforeEach` e `@BeforeAll` no JUnit 5?
**R:** `@BeforeEach` roda antes de **cada** teste; `@BeforeAll` roda **uma vez**, antes de todos, e deve ser **estático**.

**P:** O que é shift-left e shift-right, e por que são complementares?
**R:** **Shift-left** = testar cedo (unit, lint, análise estática) → defeitos baratos. **Shift-right** = testar em produção (canary, A/B, chaos). Complementares: um pega defeitos cedo, o outro valida comportamento real só visível em prod.

**P:** Por que a Microsoft removeu o "período de estabilização" do sprint?
**R:** Ele incentivava acumular dívida técnica de testes; passaram a gerir a dívida **durante** o sprint, com implantações pequenas e frequentes.

**P:** O que é a plataforma Fury do Mercado Livre e qual sua filosofia?
**R:** Uma **Internal Developer Platform (IDP/PaaS)** desde 2015, camada de abstração sobre AWS/GCP + Docker + **Kubernetes**, com filosofia **NoOps** (a plataforma assume ops), self-service e rollback automático.

**P:** O que significa NoOps?
**R:** A plataforma assume ao máximo a sobrecarga **operacional** do dev — ele cuida só do serviço, e a infra/ops é abstraída automaticamente (golden paths, observabilidade por padrão).

**P:** O que é a DRE (Defect Removal Efficiency) e seu valor ideal?
**R:** **DRE = E / (E + D)**, onde E = defeitos achados antes da entrega e D = achados pelo cliente. Ideal → **1**.

**P:** Princípio central das revisões de software segundo Pressman?
**R:** **Revisar o produto, não o produtor** — foco no artefato/processo, não na pessoa (ecoa o post-mortem blameless do SRE).

**P:** Cite as 3 categorias de design patterns do GoF com um exemplo cada.
**R:** **Criacionais** (Singleton, Factory), **Estruturais** (Adapter, Decorator, Facade), **Comportamentais** (Observer, Strategy, Command).

**P:** O padrão Observer pertence a qual categoria e qual relação ele estabelece?
**R:** **Comportamental**; relação **um-para-muitos** com baixo acoplamento — o Subject notifica todos os Observers a cada mudança de estado (base de MVC/eventos).

**P:** Qual a regra do operador bitwise AND, OR e XOR?
**R:** **AND (`&`)** = 1 só se ambos forem 1; **OR (`|`)** = 1 se ao menos um for 1; **XOR (`^`)** = 1 se os bits forem diferentes.

**P:** A que equivalem `x << n` e `x >> n`?
**R:** `x << n` = **x · 2ⁿ** (multiplicação); `x >> n` = **x / 2ⁿ** (divisão inteira).

**P:** Como testar, ligar, desligar e alternar o bit n com máscaras?
**R:** Testar: `(x & (1<<n)) != 0`; ligar: `x | (1<<n)`; desligar: `x & ~(1<<n)`; alternar: `x ^ (1<<n)`.

**P:** O que faz `x & (x-1)` e para que serve?
**R:** Zera o **bit menos significativo ligado**; usado para contar bits ligados (Kernighan) e testar potência de 2: `(x!=0) && ((x&(x-1))==0)`.

**P:** Cite as 5 regiões de memória de um processo e o conteúdo de cada.
**R:** **Text** (código, somente-leitura), **Data** (globais/estáticas inicializadas), **BSS** (globais/estáticas não-init, zeradas), **Heap** (dinâmico, malloc/new), **Stack** (locais, params, retorno).

**P:** Em que direção crescem o heap e a stack?
**R:** **Heap cresce para cima** (endereços maiores), **stack cresce para baixo**, um em direção ao outro; a colisão = esgotamento de memória.

**P:** Por que a BSS não ocupa espaço no arquivo executável?
**R:** Porque contém variáveis não inicializadas que são **zeradas na carga** — o executável guarda só a **anotação de tamanho**, não os dados.

**P:** Quais são as fases do algoritmo de Garbage Collection do .NET?
**R:** **Marking** (encontra objetos vivos a partir das roots) → **Relocating** (atualiza referências) → **Compacting** (libera os mortos e junta os sobreviventes).

**P:** Descreva as 3 gerações do GC e qual é coletada mais frequentemente.
**R:** **Gen 0** (vida curta, coletada **mais frequente**), **Gen 1** (buffer), **Gen 2** (vida longa, coleta = **full GC**, menos frequente). Sobreviver promove para a próxima geração.

**P:** O que é o LOH e a partir de que tamanho um objeto vai para lá?
**R:** **Large Object Heap**, objetos **≥ 85.000 bytes**; é a "geração 3", coletado **junto com a Gen 2** e **não compactado** por padrão.

**P:** Como liberar recursos unmanaged, já que o GC não sabe fazê-lo?
**R:** Implementar **`Dispose()`** (padrão `IDisposable`, usar com `using`) e/ou sobrescrever `Finalize()` / usar `SafeHandle` como rede de segurança.

**P:** Diferencie SLI, SLO e SLA.
**R:** **SLI** = a métrica medida; **SLO** = a meta interna sobre o SLI; **SLA** = o contrato externo com o cliente + penalidade. O SLO é mais rígido que o SLA.

**P:** Qual a fórmula do error budget? Quanto downtime/mês dá um SLO de 99,9%?
**R:** **Error Budget = 100% − SLO**. SLO 99,9% → 0,1% → **~43 min/mês** de downtime permitido.

**P:** Para que serve o error budget na prática?
**R:** É a **moeda comum dev↔ops**: com orçamento sobrando, libera-se features; **esgotado → congelar releases** e focar em confiabilidade.

**P:** O que é toil e qual a pegadinha clássica sobre ele?
**R:** Trabalho operacional **manual, repetitivo, sem valor duradouro, que escala com o serviço**. Pegadinha: estar num **sistema de tickets NÃO** deixa de ser toil ("é apenas trabalho árduo bem controlado").

**P:** O que diz a "regra dos 50%" do SRE?
**R:** O trabalho operacional/reativo **não deve passar de 50%** do tempo da equipe; o resto vai para engenharia/projeto. Acima disso → burnout e quebra dos ciclos virtuosos.

**P:** Qual o primeiro passo da hierarquia de confiabilidade (Dickerson)?
**R:** **Monitoramento** — "não dá para saber se algo é confiável se não dá para medi-lo." É a base da pirâmide.

**P:** SRE vs. DevOps: como se relacionam?
**R:** DevOps = **filosofia/cultura** (o quê/porquê); SRE = **implementação concreta** (o como). "Se DevOps fosse uma interface, SRE é uma classe que a implementa."

**P:** O que são os "ciclos virtuosos" do SRE?
**R:** Loops de feedback de melhoria contínua: (1) **SLIs/SLOs + error budgets** e (2) **post-mortems blameless** (foco no processo, não na pessoa).

**P:** Cite os 4 pilares da OOP.
**R:** **Encapsulamento, Abstração, Herança, Polimorfismo** (A-E-H-P).

**P:** Qual a diferença entre encapsulamento e abstração?
**R:** **Encapsulamento** = esconder/proteger o estado interno (acesso só pela interface pública). **Abstração** = esconder a complexidade e expor só o essencial (o "o quê", não o "como").

**P:** O que distingue polimorfismo de subtipo do ad-hoc?
**R:** **Subtipo (override)** = subclasse redefine o método herdado. **Ad-hoc (overload)** = mesmo nome com assinaturas diferentes.

**P:** Segundo o vídeo "How To Be A GREAT Programmer", o que separa um great de um good dev?
**R:** **Não é a linguagem nem as ferramentas**, mas habilidades/atributos: resolução de problemas ("programar É resolver problemas", método de **George Pólya**) e fundamentos de CS (memória, Big-O, call stack).
