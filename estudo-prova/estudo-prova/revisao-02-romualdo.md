# Revisão para Prova — Fundamentos de Eng. de Software / CI-CD / DevOps (Prof. José Romualdo, eixo COM)

> Fonte: `02-romualdo-fundamentos-cicd-com.md`. Documento de revisão em duas partes: **Parte 1 — Cola condensada** e **Parte 2 — Flashcards (P&R)**.

---

# Parte 1 — Cola condensada

## SDLC, ALM e gerenciamento de configuração

**SDLC (Ciclo de Vida de Desenvolvimento de Software)** — processo estruturado das fases pelas quais o software passa, do planejamento à manutenção. Foco em **construir e entregar**.
- **Fases:** Planejamento → Requisitos → Design → Implementação → Testes → Deploy → Manutenção. (AWS usa **6**: Plan, Design, Implement, Test, Deploy, Maintain.)
- **Modelos** (= *como* as fases se organizam no tempo):

| Modelo | Característica-chave |
|---|---|
| **Waterfall (Cascata)** | Sequencial e rígido; cliente só vê no fim. |
| **V-Model** | Cada fase de dev tem fase de teste espelhada. |
| **Iterativo** | Versões incrementais; risco de scope creep. |
| **Espiral** | Iteração + **foco em análise de risco** a cada volta. |
| **Ágil** | Sprints curtas, adaptável, abraça mudança (Scrum/Kanban/XP). |
| **Big Bang** | Quase sem planejamento; só projetos minúsculos. |

- **AWS** acrescenta: **segurança em todas as fases (DevSecOps)** + automação por tooling. "Speed and stability não são tradeoffs".

**ALM (Application Lifecycle Management)** — framework que gerencia a aplicação por **toda a sua vida**, do planejamento à **aposentadoria (decommissioning)**.
- **ALM ⊃ SDLC.** SDLC é o subconjunto de "build"; ALM adiciona governança, portfólio, colaboração e aposentadoria.
- Único estágio que o ALM enfatiza e o SDLC clássico não: **Descomissionamento**.
- **Jira** = camada de gestão/requisitos/backlog; **GitLab** = camada técnica (repo + CI/CD + segurança).

**Gerenciamento de configuração (Red Hat)** — processo de **manter o estado desejado** de sistemas de TI, combatendo **configuration drift** (divergência gradual do estado-base, que causa lentidão, falhas de segurança e até outages).
- **Declarativo** = você descreve o "o quê" (estado final), não o "como".
- **CI (Configuration Item)** = qualquer ativo/componente de TI; **CMDB** = banco que rastreia CIs, atributos, dependências e mudanças.
- Anda junto com **change management** dentro do **ITSM/ITIL**. Ferramentas: Ansible, Puppet, Chef, Salt.
- Distinção: **config management** (Ansible/Puppet/Chef) = estado de software **dentro** de máquinas; **IaC/provisioning** (Terraform) = cria/destrói a **infra em si**.

**SCM / GCS (Gerência de Configuração de Software)** — atividade guarda-chuva que gerencia **a mudança de artefatos** (itens de configuração), não só código; mudança é **inevitável**.
- Funções: **identificação, controle de versões, controle de mudanças, auditoria, relato de status**.
- **Baseline** = item/conjunto formalmente **revisado e aprovado** que vira referência congelada; só muda via processo formal (**CCB** decide após análise de impacto).
- Três pilares práticos: **versões, mudanças, releases**. SemVer = `MAJOR.MINOR.PATCH`.

## Arquitetura — C4 Model

**C4 (Simon Brown)** = diagramas hierárquicos em níveis de zoom (analogia Google Maps): **Context → Container → Component → Code** (do abstrato ao detalhado).

| Nível | O que mostra |
|---|---|
| **1. Context (Contexto)** | O sistema + **pessoas/atores** + **sistemas externos** + fronteiras. Sistema em cor distinta; externos em cinza. |
| **2. Container** | Unidades **deployáveis** (apps, APIs, bancos, SPA, mobile) + decisões de tecnologia. |
| **3. Component** | Componentes internos de **um** container (agrupamentos de código). |
| **4. Code** | Diagramas de classe UML; gerado pela IDE, não desenhado à mão. |

- **PEGADINHA:** "Container" no C4 **≠ container Docker** — é qualquer unidade deployável.
- Todo elemento precisa de **nome + tipo + tecnologia + descrição**; diagrama precisa de **legenda e título**.

## Docker — imagem / container / Dockerfile / multi-stage

| Conceito | O que é |
|---|---|
| **Imagem** | Template **imutável**, somente-leitura, em camadas, construído pelo Dockerfile. (Análogo: classe.) |
| **Container** | **Instância em execução** de uma imagem + camada gravável. (Análogo: objeto.) |
| **Dockerfile** | Texto com instruções de build (`FROM`, `RUN`, `COPY`, `CMD`...). |
| **Registry** | Repositório de imagens (Docker Hub, GitLab Registry, GHCR) — `push`/`pull`. |

- Fluxo: `Dockerfile → build → image → push (registry) → pull → run → container`.
- **Cache:** ordene instruções da **menos → mais mutável**; **código por último**. `apt-get update && install` no **mesmo RUN** + limpeza (`rm -rf /var/lib/apt/lists/*`) no mesmo RUN (cada RUN = 1 camada).
- **Multi-stage build:** separa estágio de **build** do de **runtime** (`FROM ... AS builder` + `COPY --from=builder`); imagem final só com o binário, **sem o SDK** → imagem muito menor.
- **.dockerignore** reduz contexto e evita vazar segredos. Base mínima (**Alpine**/distroless) = menos CVEs. **Rodar como não-root**. **COPY > ADD**. Pin por digest (trade-off: perde patches automáticos).

## Kubernetes — cluster / pod

**K8s** — plataforma open-source (Google, 2014) para **orquestrar workloads containerizados**, declarativa, com reconciliação contínua e self-healing.
- Hierarquia: **Cluster → Control Plane + Nós (workers) → Pods → Containers**.
- **Control Plane:** API Server (entrada), Scheduler (escolhe nó), Controller Manager (loops de reconciliação), **etcd** (estado chave-valor). **Nó:** kubelet, container runtime, kube-proxy.
- **Pod = menor unidade deployável**; containers no Pod **compartilham rede (mesmo IP) e volumes**. Geralmente 1 container/Pod.
- Entrega: service discovery/LB, rollouts/rollbacks, bin packing, **self-healing**, gestão de secrets, escala horizontal (HPA).
- **K8s NÃO faz CI/CD** — ele **roda** o que o pipeline entregou (separação build/release/run).

## Métricas DORA + Four Keys

**DORA (DevOps Research and Assessment)** mede performance de entrega em dois grupos: **throughput (velocidade)** e **stability (estabilidade)**. Frase-âncora: **"velocidade e estabilidade NÃO são tradeoffs"**.

| Métrica | Grupo | O que mede |
|---|---|---|
| **Deployment Frequency** (Frequência de deploy) | Throughput | Com que frequência o time entrega em produção. |
| **Lead Time for Changes** (Lead time de mudanças) | Throughput | Tempo do commit até estar em produção. |
| **Change Failure Rate** (Taxa de falha de mudança) | Stability | % de deploys que causam falha (rollback/hotfix). |
| **Failed Deployment Recovery Time / MTTR** | Stability | Tempo para recuperar de um deploy que falhou. |

- **2 métricas medem velocidade, 2 medem estabilidade.**
- 5ª métrica recente (dora.dev): **Deployment Rework Rate**.
- Tiers: **Elite / High / Medium / Low** (a partir de 2021/2022 o "Elite" foi aposentado → **High/Medium/Low**).
- DORA serve para **melhoria contínua**, não para punir indivíduos (métrica de time/sistema; cuidado com gaming). Throughput + stability lidos **juntos**.

**Four Keys (Google)** — projeto open-source que **automatiza a coleta das 4 métricas DORA**.
- Stack: **webhooks (GitHub/GitLab/Cloud Build) → BigQuery → SQL agendado → dashboard (Looker)**.
- Grupos: **Velocity** (DF, LT) e **Stability** (CFR, Time to Restore).

## Observabilidade — 3 pilares

**Observabilidade** investiga o **desconhecido** correlacionando sinais (vs **monitoramento** = responde perguntas que você **já sabia** fazer — dashboards/alertas pré-definidos).

| Pilar | O que é | Responde |
|---|---|---|
| **Logs** | Eventos discretos com timestamp. | "O que aconteceu exatamente neste momento?" |
| **Métricas** | Valores numéricos agregados no tempo (latência, throughput, CPU, erro). | "Como o sistema se comporta ao longo do tempo?" |
| **Traces** | Caminho de uma requisição por vários serviços (spans). | "Por onde passou a requisição e onde está o gargalo?" |

- **OpenTelemetry (OTel)** = padrão **neutro/vendor-agnostic** de instrumentação; **Application Insights** (Azure, APM) o consome.
- Instrumentação **automática (codeless)** vs **baseada em código (OTel Distro + connection string)**. Navegador usa **SDK JS** (não OTel).
- Observabilidade alimenta as métricas de **estabilidade** do DORA (detectar falhas, medir MTTR) e os SLIs do SRE.

**SRE** — "class SRE implements interface DevOps" (DevOps = cultura; **SRE = prática prescritiva**). Hierarquia: **SLI → SLO → SLA**; **Error Budget = 1 − SLO**; **Toil** = trabalho manual repetitivo automatizável; **postmortem blameless** = sem culpados.

## Clean Code e Code Review

**Clean Code (Uncle Bob, cap. 1):**
- Código é **lido ~10x mais do que escrito** → **legibilidade primeiro**.
- **Code rot:** código ruim apodrece e a produtividade **tende a zero**.
- **"Later equals never"** — sujeira atrasa **já**, não só no futuro. A "grande reescrita" raramente salva.
- **Boy Scout Rule** (deixe mais limpo do que encontrou); funções pequenas que fazem **uma coisa**; nomes significativos; **DRY**; comentário ideal explica **o porquê**.

**Code Review:**
- **CL = Change List** (≈ PR/MR). Google: **descrição = primeira linha resumida + corpo com o porquê**; **CLs pequenos** (revisão rápida, menos bugs, fácil reverter); responda a todos os comentários.
- GitHub (Sarah Vessels): **pergunte em vez de exigir**; marque **blocker vs opcional**; dê exemplos; afirme o que está bom; "Request changes" com parcimônia (só segurança/quebra de prod); **testes derrubam viés**.

## Segurança — SAST / Snyk / OWASP

**SAST (Static Application Security Testing)** = analisa **código parado** (estático), **white-box**, **sem executar**; roda **cedo** (commit/PR/CI) — **shift-left**.

| Tipo | Como age | Quando |
|---|---|---|
| **SAST** | Código estático, white-box. | Cedo (commit/PR/CI). |
| **DAST** | App **rodando**, black-box, ataca endpoints. | Tardio (staging/prod). |
| **SCA** | **Dependências/terceiros** (CVEs em libs). | CI (Trivy, Dependabot). |
| **IAST** | Híbrido: instrumenta a app em execução. | Durante testes. |

- **Snyk** (dev-first): **Snyk Code = SAST** (seu código), **Snyk Open Source = SCA** (dependências), + Container + IaC. Diferencial: **remediação inline na IDE/PR** + priorização por contexto.
- Vantagens de SAST no CI: feedback cedo, automação, **gate de bloqueio**. Desvantagem: **falsos positivos**.

**OWASP Top 10 (2021)** — 10 riscos de segurança web mais críticos.

| ID | Categoria | Destaque |
|---|---|---|
| **A01** | **Broken Access Control** | **Subiu para o nº 1.** IDOR, elevação de privilégio. Prevenir: **deny by default**, autorização **no servidor**. |
| A02 | Cryptographic Failures | — |
| **A03** | **Injection (inclui XSS)** | SQLi, OS command, XSS. Prevenir: **prepared statements/queries parametrizadas**, validação/escaping. |
| A04 | Insecure Design | **Novo em 2021.** |
| **A05** | **Security Misconfiguration** | Defaults inseguros, erros vazando stack trace, headers ausentes. Prevenir: **hardening + remover defaults + patches**. |
| A06 | Vulnerable & Outdated Components | — |
| A07 | Identification & Authentication Failures | — |
| A08 | Software & Data Integrity Failures | — |
| A09 | Security Logging & Monitoring Failures | — |
| A10 | SSRF | **Novo em 2021.** |

## Git hooks, Husky, lint-staged, Gitleaks

**Git hooks** = scripts em **`.git/hooks`** disparados em ações do Git. **Client-side NÃO são clonados** (não forçam política sozinhos → daí Husky). **Server-side** podem **rejeitar** o push (impõem política).

| Hook | Quando dispara | Uso típico |
|---|---|---|
| **pre-commit** | Antes de pedir a mensagem | Lint, testes rápidos, **scan de secrets**. Burlável com `--no-verify`. |
| **prepare-commit-msg** | Antes do editor de mensagem | Pré-preencher mensagem. |
| **commit-msg** | Antes do commit concluir | **Validar formato da mensagem** (Conventional Commits). |
| **pre-push** | Durante `git push`, antes de transferir | Validar refs, rodar testes antes de enviar. |
| **pre-receive** (server) | Ao receber o push | Controle de acesso; rejeita **todas** as refs. |
| **update** (server) | Por branch no push | Como pre-receive, mas rejeita **só aquela** ref. |
| **post-receive** (server) | Após o push | Notificar CI, e-mail. |

- **Shift-left** = verificar o mais cedo possível (idealmente no commit, antes do push/CI).
- **Husky** distribui hooks **versionados** (resolve "hooks não são clonados"); **lint-staged** roda só nos **arquivos em stage** (velocidade); **Gitleaks** varre **secrets**.
- **Gitleaks:** regex + **análise de entropia (Shannon)**; varre **todo o histórico** (`git log -p`); config em **`.gitleaks.toml`** (regras + allowlists); integra em pre-commit e CI; relatórios JSON/CSV/JUnit/**SARIF**; suporta **baseline**. (Segredo commitado fica no histórico mesmo se removido → previna no pre-commit.)

## Virtualização vs containers + Trivy

| Aspecto | VM | Container |
|---|---|---|
| Virtualiza | **Hardware** (via hypervisor) | **SO** (kernel do host **compartilhado**) |
| SO | **Um SO convidado completo por VM** | Kernel do host compartilhado |
| Isolamento | **Hypervisor** | **namespaces (isolamento) + cgroups (limites)** do Linux |
| Tamanho | Dezenas de **GB** | Dezenas de **MB** |
| Boot | Lento (boota SO inteiro) | Rápido (reusa o kernel) |

- Containers são leves, portáveis e podem rodar **dentro de VMs**.
- **Trivy (Aqua)** = scanner open-source de **imagens, filesystem, repos git, IaC e Kubernetes**; acha **CVEs (SO + deps), misconfig, secrets, licenças**; gera **SBOM**. **CVEs são herdados da base image** → base mínima + rebuild + scan no CI. Comandos: `trivy image`, `trivy fs`, `trivy config`, `trivy k8s`.
- **GitLab SAST:** habilita com `include: template: Jobs/SAST.gitlab-ci.yml`; detecta linguagem; motor principal **Semgrep**; findings no **MR widget**; **finding (branch) → vulnerability (branch padrão)**; relatório = artefato **JSON**.

## The Twelve-Factor App (Heroku, Adam Wiggins, 2011)

Metodologia de 12 fatores para apps SaaS portáveis e escaláveis ("e também fora da nuvem").

| # | Fator | Resumo |
|---|---|---|
| I | Codebase | Uma base versionada, **muitos deploys**. |
| II | Dependencies | **Declare e isole** dependências. |
| **III** | **Config** ⭐ | **Config no ambiente (env vars)**, separada do código. |
| IV | Backing services | Serviços de apoio como **recursos anexados** intercambiáveis. |
| **V** | **Build, release, run** ⭐ | **Separe estritamente** build / release / run. |
| VI | Processes | Processos **stateless**. |
| VII | Port binding | Serviço exposto via **port binding** (self-contained). |
| VIII | Concurrency | Escalar **horizontalmente** por processos. |
| IX | Disposability | **Startup rápido + shutdown gracioso**. |
| **X** | **Dev/prod parity** ⭐ | Dev, staging e prod **o mais parecidos possível**. |
| XI | Logs | Logs como **streams de eventos** para stdout. |
| XII | Admin processes | Tarefas admin como **processos one-off**. |

- **III Config:** teste — "dá para tornar o repo público agora sem vazar segredo?". O mesmo build roda em qualquer ambiente trocando só as env vars.
- **V Build/Release/Run:** Build = artefato imutável; Release = **build + config** (imutável, ex. v123); Run = executa. **Não se altera código em runtime**; rollback = voltar à release anterior. (Docker build→image + K8s run materializam isto.)
- **X Dev/Prod parity:** minimizar 3 gaps — **tempo** (commit→deploy em horas), **pessoal** (quem escreve opera), **ferramentas** (mesmos backing services). Containers garantem ("roda igual em qualquer lugar"); habilita continuous deployment.
- **Boas práticas de container (Google Cloud):** um app/uma preocupação por container; tratar **PID 1 + sinais (SIGTERM) + processos zumbis** (use `tini`/`exec`); **não confie só em `latest`** (tags imutáveis: versão/SHA); imagem mínima + scanning + imutabilidade.

## IaC / Terraform

**IaC (Infraestrutura como Código)** = construir/mudar/gerenciar infra de forma **versionável, reusável e compartilhável** como código (auditoria, reprodutibilidade).
- **Terraform (HashiCorp)** = IaC **declarativa em HCL** (`.tf`), multi-cloud via **providers** (+1000), com **state** e **plan/apply**. Idempotente; tende a **infra imutável**.
- **Declarativo** (estado final desejado) ≠ **procedural** (passos).
- **Blocos:** `terraform` (required_providers/version), `provider`, `data` (consulta), `resource` (cria). Sintaxe: `resource "tipo" "nome_local" {}`.
- **Workflow:** Scope → Author → Initialize (`init`) → Plan → Apply. (`init` cria o lock file; `fmt`/`validate`/`show`/`destroy`.)
- **State (`terraform.tfstate`)** = "fonte da verdade"; **sensível** (pode ter segredos) → remote state (S3/Terraform Cloud) + locking. **Commitar `.tf`, NÃO commitar `.tfstate`/segredos.**
- Terraform **provisiona** (cria/destrói infra); Ansible/Puppet/Chef **configuram** software dentro de máquinas.
- Instalação: macOS = Homebrew (tap hashicorp); Linux = apt + repo + GPG key; Windows = Chocolatey.

## OpenChoreo

**OpenChoreo** = **Internal Developer Platform (IDP) sobre Kubernetes** (abstrai o K8s; UI Backstage).

| Conceito | O que é |
|---|---|
| **Project** | Agrupa componentes e deployments relacionados. |
| **Component** | Unidade deployável: **Service** (API), **Web Application** (front), **Scheduled Task** (cron). |
| **Component Workload** | Spec de runtime (imagem, portas, recursos, env). |
| **Deployment Track** | Trilha de versão que progride pelos ambientes. |
| **Environment** | Alvo de deploy (Dev / Staging / Prod). |
| **Cluster Data Plane** | Onde os componentes **rodam**. |
| **Cluster Workflow Plane** | Capacidades de **CI/CD** (`--with-build`). |

- Hierarquia: **Project → Components → Deployment Tracks → Environments**.
- Itens da atividade: **Conventional Commits** (`tipo(escopo): descrição`, validável em commit-msg via commitlint), **TruffleHog** (secrets, com **verificação de validade** da credencial), **push da imagem ao registry** (GitLab/Docker Hub), **MR com pipeline verde** = gate.

## As 5 ideias que atravessam toda a prova
1. **Declarativo + estado desejado** (config mgmt, 12-factor, K8s, Terraform).
2. **Shift-left** de segurança/qualidade (hooks → SAST/SCA → scan de imagem → gate no MR).
3. **Separação build/release/run + imutabilidade** (12-factor V, Docker, tags não-`latest`, Terraform).
4. **Velocidade E estabilidade juntas** (DORA, testes, observabilidade, SRE).
5. **Containers como denominador comum** (dev/prod parity, K8s, artefato CI→registry→prod).

**Pegadinhas-chave:** container C4 ≠ container Docker · SDLC ⊂ ALM · SAST ≠ DAST ≠ SCA · finding ≠ vulnerability · SRE implementa DevOps · K8s não faz CI/CD · client-side hooks não são clonados.

---

# Parte 2 — Flashcards (P&R)

**P:** Quais são as 4 métricas DORA e em que dois grupos se dividem?
**R:** Throughput: **Deployment Frequency** e **Lead Time for Changes**. Stability: **Change Failure Rate** e **Failed Deployment Recovery Time (MTTR)**.

**P:** O que mede a **Deployment Frequency**?
**R:** Com que frequência o time entrega código em produção (throughput).

**P:** O que mede o **Lead Time for Changes**?
**R:** O tempo de um commit (versionado) até estar em produção (throughput).

**P:** O que mede a **Change Failure Rate**?
**R:** A % de deploys que causam falha exigindo intervenção (rollback/hotfix) (stability).

**P:** O que mede o **MTTR / Failed Deployment Recovery Time**?
**R:** O tempo para recuperar de um deploy que falhou (stability).

**P:** Qual a frase-âncora do DORA sobre velocidade e estabilidade?
**R:** "Velocidade e estabilidade **não são tradeoffs**" — os melhores times se destacam em ambas.

**P:** Qual a 5ª métrica DORA (evolução recente)?
**R:** **Deployment Rework Rate** (deploys não planejados causados por incidentes em produção).

**P:** O que é o **Four Keys** e qual sua stack?
**R:** Projeto open-source do Google que automatiza a coleta das 4 métricas DORA. Stack: **webhooks → BigQuery → SQL → dashboard**.

**P:** Quais são os 4 níveis do **C4 Model**, do mais abstrato ao mais detalhado?
**R:** **Context → Container → Component → Code**.

**P:** No C4, o que o nível **Context** mostra?
**R:** O sistema em construção + **pessoas/atores** + **sistemas externos** + fronteiras (sistema em cor distinta, externos em cinza).

**P:** No C4, "Container" é a mesma coisa que container Docker?
**R:** **Não.** No C4 é qualquer **unidade deployável** (app, API, banco, SPA, mobile) — pegadinha clássica.

**P:** O que cada elemento de um diagrama C4 precisa ter?
**R:** **Nome + tipo + tecnologia + descrição**; o diagrama precisa de **legenda e título**.

**P:** Qual a diferença entre **imagem** e **container** Docker?
**R:** Imagem = template **imutável** somente-leitura (análogo a classe); container = **instância em execução** da imagem com camada gravável (análogo a objeto).

**P:** O que é um **multi-stage build** e por que usá-lo?
**R:** Dockerfile com vários `FROM` (ex. `FROM ... AS builder`), copiando só o necessário com `COPY --from=builder`. Separa build de runtime → imagem final pequena (só o binário, **sem o SDK**).

**P:** Por que ordenar instruções do Dockerfile da menos para a mais mutável?
**R:** Para **maximizar o cache de build**; o código (que muda mais) deve vir por último, preservando as camadas de dependências em cache.

**P:** Por que combinar `apt-get update && install` no mesmo `RUN`?
**R:** Para evitar **cache busting** — senão o Docker reusa um `update` velho. Cada `RUN` = 1 camada; limpe (`rm -rf /var/lib/apt/lists/*`) no mesmo RUN.

**P:** Qual a hierarquia de execução no Kubernetes?
**R:** **Cluster → Control Plane + Nós (workers) → Pods → Containers**.

**P:** O que é um **Pod** e o que seus containers compartilham?
**R:** A **menor unidade deployável** do K8s; os containers no Pod compartilham **namespace de rede (mesmo IP/portas), volumes e configuração**.

**P:** Quais os componentes do Control Plane do K8s?
**R:** **API Server, Scheduler, Controller Manager e etcd**.

**P:** O Kubernetes faz CI/CD?
**R:** **Não.** Ele orquestra a **execução** (run); o build/release do código vem do **pipeline de CI/CD**.

**P:** Quais são os **3 pilares da observabilidade** e o que cada um responde?
**R:** **Logs** ("o que aconteceu agora?"), **Métricas** ("como o sistema se comporta no tempo?"), **Traces** ("por onde passou a requisição e onde está o gargalo?").

**P:** Qual a diferença entre **monitoramento** e **observabilidade**?
**R:** Monitoramento responde perguntas que você **já sabia** fazer (dashboards/alertas pré-definidos); observabilidade permite investigar o **desconhecido** correlacionando os pilares.

**P:** O que é o **OpenTelemetry**?
**R:** Framework/padrão de instrumentação **neutro de fornecedor (vendor-agnostic)**; o Application Insights o consome.

**P:** O que é **SAST** e qual sua natureza?
**R:** Static Application Security Testing — analisa **código parado** (estático), **white-box**, **sem executar**; roda cedo no pipeline (shift-left).

**P:** Qual a diferença entre **SAST, DAST e SCA**?
**R:** **SAST** = código estático/white-box; **DAST** = app **rodando**/black-box, ataca endpoints; **SCA** = analisa **dependências de terceiros** (CVEs em libs).

**P:** Na plataforma Snyk, qual módulo é SAST e qual é SCA?
**R:** **Snyk Code = SAST** (seu código); **Snyk Open Source = SCA** (dependências). Também tem Snyk Container e Snyk IaC.

**P:** Qual a principal desvantagem do SAST?
**R:** **Falsos positivos** (exigem triagem) e não pega vulnerabilidades só visíveis em runtime.

**P:** No OWASP Top 10 2021, o que é **A01**?
**R:** **Broken Access Control** (Quebra de controle de acesso) — subiu para o **nº 1**. Prevenir com deny-by-default e autorização no servidor.

**P:** No OWASP Top 10 2021, o que é **A03** e o que inclui?
**R:** **Injection** (Injeção) — inclui **XSS** desde 2021. Prevenir com **prepared statements/queries parametrizadas** e validação/escaping.

**P:** No OWASP Top 10 2021, o que é **A05**?
**R:** **Security Misconfiguration** (configuração de segurança incorreta) — defaults inseguros, erros vazando stack trace. Prevenir com **hardening + remover defaults + patches**.

**P:** Quais são os 4 hooks do git mais cobrados e quando disparam?
**R:** **pre-commit** (antes da mensagem, lint/secrets), **commit-msg** (valida a mensagem), **pre-push** (antes de enviar), **pre-receive** (no servidor, pode rejeitar o push).

**P:** Por que hooks client-side não forçam política sozinhos?
**R:** Porque **não são copiados no `git clone`** (e podem ser burlados com `--no-verify`). Por isso usa-se Husky para distribuí-los versionados.

**P:** Qual o papel de **Husky**, **lint-staged** e **Gitleaks**?
**R:** Husky **distribui hooks versionados**; lint-staged roda só nos **arquivos em stage** (velocidade); Gitleaks **varre secrets**.

**P:** Como o Gitleaks detecta secrets e o que varre?
**R:** Por **regex + análise de entropia (Shannon)**; varre **todo o histórico** do git (`git log -p`); config em `.gitleaks.toml`.

**P:** Qual a diferença entre **VM** e **container**?
**R:** VM virtualiza o **hardware** (hypervisor + 1 SO completo por VM, GB); container virtualiza o **SO** (kernel do host compartilhado, MB).

**P:** Como um container faz isolamento no Linux?
**R:** Por **namespaces** (isolamento) + **cgroups** (limites de recurso) — cada container é um processo isolado em user space.

**P:** O que é o **Trivy** e o que escaneia?
**R:** Scanner de segurança open-source que escaneia **imagens, filesystem, repos git, IaC e Kubernetes**; acha CVEs, misconfig, secrets e licenças; gera **SBOM**.

**P:** Por que uma imagem pode ter CVEs mesmo com código perfeito?
**R:** Porque **vulnerabilidades são herdadas da base image** (`FROM`). Solução: base mínima + rebuild regular + scan no CI.

**P:** No 12-factor, o que diz o fator **III (Config)**?
**R:** Config (tudo que varia entre deploys) deve ficar em **variáveis de ambiente**, separada do código. Teste: "dá para tornar o repo público sem vazar segredo?".

**P:** No 12-factor, o que diz o fator **V (Build, release, run)**?
**R:** **Separar estritamente** as 3 etapas: build (artefato imutável), release (build + config), run (executa). Não se altera código em runtime; rollback = voltar à release anterior.

**P:** No 12-factor, o que diz o fator **X (Dev/prod parity)**?
**R:** Manter dev, staging e prod o mais parecidos possível, minimizando os gaps de **tempo, pessoal e ferramentas**. Containers garantem a paridade.

**P:** Quem criou o 12-factor e quando?
**R:** Engenheiros da **Heroku** (Adam Wiggins, **2011**), para apps cloud-native — mas vale "também fora da nuvem".

**P:** O que é **IaC**?
**R:** Infraestrutura como Código — gerenciar infra de forma **versionável, reusável e compartilhável** como código, de forma declarativa e repetível.

**P:** Qual a diferença entre abordagem **declarativa** e **procedural** no Terraform?
**R:** Declarativa = você descreve o **estado final desejado** (Terraform calcula como chegar); procedural = você escreve os **passos** explícitos.

**P:** Quais os 4 blocos principais de uma config Terraform?
**R:** `terraform` (providers/version), `provider`, `data` (consulta), `resource` (cria). Sintaxe: `resource "tipo" "nome_local" {}`.

**P:** Qual o workflow do Terraform e o que NÃO se deve commitar?
**R:** Scope → Author → Initialize (`init`) → Plan → Apply. **Commitar os `.tf`**, mas **NÃO** commitar `.tfstate`/segredos (state é sensível → remote state + locking).

**P:** Qual a diferença entre Terraform e Ansible/Puppet/Chef?
**R:** Terraform **provisiona** (cria/destrói infra: VMs, redes, buckets); Ansible/Puppet/Chef **configuram** software **dentro** de máquinas existentes.

**P:** Qual a relação entre **SDLC** e **ALM**?
**R:** **ALM ⊃ SDLC.** SDLC é o subconjunto focado em "build/entrega"; ALM cobre toda a vida da aplicação, incluindo governança e **descomissionamento (aposentadoria)**.

**P:** Diferencie um **modelo** de SDLC de uma **fase**.
**R:** Fase = etapa (planejar, projetar, testar...); modelo = **como** as fases se organizam no tempo (waterfall, ágil, espiral, V-Model).

**P:** O que é **configuration drift** e o que é gerenciamento de configuração?
**R:** Drift = divergência gradual entre o estado real e o estado-base. Gerenciamento de configuração = manter o **estado desejado** dos sistemas, combatendo o drift (declarativo).

**P:** O que é uma **baseline** em SCM?
**R:** Um item/conjunto de configuração formalmente **revisado e aprovado** que vira referência congelada; só muda via processo formal (CCB após análise de impacto).

**P:** Diferencie **SRE** de **DevOps**.
**R:** DevOps = **cultura/filosofia**; SRE = **prática prescritiva** que a implementa ("class SRE implements interface DevOps"), com SLI/SLO/SLA, error budget e toil.

**P:** O que é **Error Budget** e como se calcula?
**R:** O "orçamento" de falha permitido: **Error Budget = 1 − SLO**. Enquanto há budget, o time arrisca e lança rápido; se estoura, freia features e foca em confiabilidade.

**P:** No GitLab SAST, qual a diferença entre **finding** e **vulnerability**?
**R:** Findings nascem em **feature branches**; ao mergear na **branch padrão**, viram **vulnerabilities** (vulnerabilidades confirmadas). Motor principal: Semgrep.

**P:** O que é o **OpenChoreo** e qual sua hierarquia de abstrações?
**R:** Uma **IDP sobre Kubernetes** (UI Backstage). Hierarquia: **Project → Components (Service / Web App / Scheduled Task) → Deployment Tracks → Environments**.

**P:** O que são **Conventional Commits** e onde se valida?
**R:** Padrão de mensagem `tipo(escopo): descrição` (feat, fix, docs...); habilita changelog/SemVer automáticos e é validável pelo hook **commit-msg** (commitlint).

**P:** Segundo Clean Code, qual a razão leitura:escrita do código e o que ela implica?
**R:** Cerca de **10:1** — código é lido muito mais do que escrito, logo **legibilidade é prioridade nº 1**.

**P:** O que significa "**Later equals never**"?
**R:** "Depois é igual a nunca" — adiar a limpeza do código não acontece; escrever sujo atrasa **imediatamente**, não só no futuro.
