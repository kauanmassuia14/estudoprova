# Material de Estudo Aprofundado — Fundamentos de Engenharia de Software / CI/CD / DevOps

**Disciplina:** Fundamentos de Engenharia de Software / CI/CD / DevOps (eixo COM)
**Professor:** José Romualdo da Costa Filho
**Turma:** Inteli 2026-1B-T13
**Objetivo deste documento:** estudo aprofundado para a prova — para cada tópico você encontra o **conceito central**, **pontos-chave detalhados**, **exemplos/comandos concretos**, **por que importa** e **📌 Pontos de prova**.

> Convenção: quando uma fonte foi lida diretamente, a URL é citada inline. Quando a fonte é um vídeo/podcast/livro pago ou uma página que bloqueou a leitura automática, o tema é coberto por conhecimento consolidado e marcado com _(fonte não acessível diretamente — coberto por conhecimento consolidado)_.

---

## Índice

- **Semana 01 — Ciclo de vida e fundamentos**
  - [1. SDLC — Ciclo de Vida de Desenvolvimento de Software](#1-sdlc--ciclo-de-vida-de-desenvolvimento-de-software)
  - [2. SDLC segundo a AWS (complemento)](#2-sdlc-segundo-a-aws-complemento)
  - [3. ALM — Application Lifecycle Management](#3-alm--application-lifecycle-management)
  - [4. CNCF Cloud Native Landscape](#4-cncf-cloud-native-landscape)
  - [5. Gerenciamento de configuração (Red Hat)](#5-gerenciamento-de-configuração-red-hat)
- **Semana 02 — Configuração, arquitetura, containers, métricas**
  - [6. Gerenciamento de configurações Parte 1 (videoaula)](#6-gerenciamento-de-configurações-parte-1-videoaula)
  - [7. Gerenciamento de configuração e ITSM (Red Hat pt-br)](#7-gerenciamento-de-configuração-e-itsm-red-hat-pt-br)
  - [8. Modelo C4 de arquitetura de software](#8-modelo-c4-de-arquitetura-de-software)
  - [9. Docker — primeiros passos](#9-docker--primeiros-passos)
  - [10. Kubernetes — visão geral e Pods](#10-kubernetes--visão-geral-e-pods)
  - [11. Métricas DORA](#11-métricas-dora)
  - [12. Four Keys (Google Cloud)](#12-four-keys-google-cloud)
  - [13. DORA Metrics (Atlassian)](#13-dora-metrics-atlassian)
  - [14. Observabilidade e Application Insights](#14-observabilidade-e-application-insights)
  - [15. SRE — Site Reliability Engineering](#15-sre--site-reliability-engineering)
- **Semana 03 — Qualidade de código e segurança**
  - [16. Código Limpo (Clean Code, cap. 1)](#16-código-limpo-clean-code-cap-1)
  - [17. Como escrever CLs (Google Eng Practices)](#17-como-escrever-cls-google-eng-practices)
  - [18. Análise SAST](#18-análise-sast)
  - [19. Como revisar código com eficácia (GitHub)](#19-como-revisar-código-com-eficácia-github)
- **Semana 04 — Git hooks, containers, 12-factor, segurança**
  - [20. Shift-left e Git hooks (Pro Git 8.3)](#20-shift-left-e-git-hooks-pro-git-83)
  - [21. Husky, lint-staged e Gitleaks](#21-husky-lint-staged-e-gitleaks)
  - [22. Virtualização vs containers](#22-virtualização-vs-containers)
  - [23. Boas práticas de Dockerfile](#23-boas-práticas-de-dockerfile)
  - [24. Registry e vulnerabilidades (Trivy)](#24-registry-e-vulnerabilidades-trivy)
  - [25. SAST no GitLab CI](#25-sast-no-gitlab-ci)
  - [26. The Twelve-Factor App](#26-the-twelve-factor-app)
  - [27. Boas práticas para construir containers (Google Cloud)](#27-boas-práticas-para-construir-containers-google-cloud)
  - [28. OWASP Top 10 (2021)](#28-owasp-top-10-2021)
  - [29. Twelve-Factor na prática (videoaulas)](#29-twelve-factor-na-prática-videoaulas)
- **Semana 05 — Testes de integração e métricas DevOps**
  - [30. Testes de integração no pipeline](#30-testes-de-integração-no-pipeline)
  - [31. Medindo desempenho de CI/CD (JetBrains)](#31-medindo-desempenho-de-cicd-jetbrains)
  - [32. Métricas do DevOps (Atlassian)](#32-métricas-do-devops-atlassian)
  - [33. DevOps na prática (podcast)](#33-devops-na-prática-podcast)
- **Semana 08 — Infraestrutura como Código / Terraform**
  - [34. Build infrastructure (Terraform AWS)](#34-build-infrastructure-terraform-aws)
  - [35. O que é o Terraform? (IBM)](#35-o-que-é-o-terraform-ibm)
  - [36. Terraform em 10 minutos (videoaula)](#36-terraform-em-10-minutos-videoaula)
  - [37. O que é IaC com Terraform?](#37-o-que-é-iac-com-terraform)
  - [38. Instalar o Terraform](#38-instalar-o-terraform)
- **Semana 09 — OpenChoreo (atividade ponderada)**
  - [39. OpenChoreo quick start](#39-openchoreo-quick-start)
- [Síntese: o pipeline de ponta a ponta](#síntese-o-pipeline-de-ponta-a-ponta)

---

# Semana 01 — Ciclo de vida e fundamentos

## 1. SDLC — Ciclo de Vida de Desenvolvimento de Software

_(IBM — https://www.ibm.com/think/topics/sdlc : a página retornou HTTP 403 nas tentativas de leitura; tema coberto por conhecimento consolidado, complementado pela página da AWS lida diretamente.)_

### Conceito central
O **SDLC (Software Development Life Cycle / Ciclo de Vida de Desenvolvimento de Software)** é um processo estruturado que define **as fases pelas quais um software passa**, do planejamento até a manutenção/descomissionamento. O objetivo é entregar software de alta qualidade, no prazo e no orçamento, de forma **previsível e repetível**. Ele dá uma linguagem comum entre stakeholders, reduz risco e torna o trabalho mensurável.

### As fases do SDLC
A nomenclatura varia (5, 6 ou 7 fases), mas o núcleo é sempre o mesmo:

| Fase | O que acontece |
|---|---|
| **1. Planejamento** | Análise custo-benefício, cronograma, estimativa e alocação de recursos, viabilidade, escopo. |
| **2. Requisitos / Análise** | Levantamento e documentação de requisitos funcionais e não funcionais; o que o sistema deve fazer. |
| **3. Design / Projeto** | Arquitetura do software, escolha de tecnologias, modelagem de dados, definição de interfaces e padrões. |
| **4. Implementação / Desenvolvimento** | Codificação propriamente dita, com controle de versão e práticas de código seguro. |
| **5. Testes** | Testes automatizados e manuais para encontrar bugs antes da produção (unitário, integração, sistema, aceitação). |
| **6. Implantação (Deploy)** | Empacotamento, configuração e publicação do build em produção. |
| **7. Manutenção / Operação** | Correção de bugs, melhorias, monitoramento de desempenho e segurança; eventualmente, descomissionamento. |

### Modelos de SDLC
Um modelo é **como** as fases são organizadas no tempo:

- **Waterfall (Cascata):** fases sequenciais, cada uma depende da anterior; documentação pesada upfront. Bom para projetos pequenos com requisitos bem definidos e estáveis. Ponto fraco: inflexível a mudanças — o cliente só vê o produto no fim.
- **V-Model (Verificação e Validação):** variação do cascata em que cada fase de desenvolvimento tem uma fase de teste correspondente (requisitos ↔ teste de aceitação, design ↔ teste de integração, etc.). Ênfase em qualidade/teste desde cedo.
- **Iterativo:** o sistema é construído em versões incrementais que vão sendo aprimoradas. Permite feedback antecipado, mas há risco de scope creep (crescimento descontrolado de escopo).
- **Espiral (Spiral):** combina iteração com fluxo linear, com **ênfase em análise de risco** a cada volta da espiral. Adequado a projetos grandes e de alto risco.
- **Ágil (Agile):** divide o trabalho em ciclos curtos (sprints), com iteração rápida, avaliação contínua e colaboração próxima com o cliente. Abraça mudança. Frameworks: Scrum, Kanban, XP.
- **Big Bang:** pouco planejamento, codifica-se direto; só funciona em projetos minúsculos/experimentais.

### Por que importa
O SDLC é o **mapa mental** de toda a disciplina. CI/CD, DevOps, testes, IaC e SRE são automações e melhorias aplicadas sobre as fases do SDLC. Sem entender o ciclo, os tópicos seguintes ficam soltos.

### 📌 Pontos de prova
- Saiba **listar as fases na ordem** e o que ocorre em cada uma.
- Saiba diferenciar **modelo** (waterfall, ágil, espiral...) de **fase** (planejar, projetar...).
- **Waterfall = sequencial e rígido**; **Ágil = iterativo e adaptável**; **Espiral = foco em risco**; **V-Model = teste espelhando cada fase**.
- SDLC foca na **construção e entrega**; ALM é mais amplo (ver tópico 3).

---

## 2. SDLC segundo a AWS (complemento)

_(AWS — https://aws.amazon.com/what-is/sdlc/ — lido diretamente.)_

### Conceito central
A AWS descreve o SDLC em **seis estágios: Plan, Design, Implement, Test, Deploy, Maintain** (https://aws.amazon.com/what-is/sdlc/), e apresenta quatro modelos principais: **Waterfall, Iterativo, Espiral e Ágil**.

### O que a AWS acrescenta de distinto
1. **Segurança integrada (DevSecOps):** a AWS posiciona segurança como **parte integral de todas as fases**, não como etapa final. Avaliações de segurança devem ocorrer ao longo de todo o ciclo (conecta diretamente com SAST, Trivy, OWASP — semanas 03 e 04).
2. **Ferramentas e automação:** recomenda serviços para acelerar o ciclo — CodePipeline (pipeline CI/CD), CodeBuild (build), CodeGuru (revisão de código assistida) e Grafana (monitoramento). Isto materializa o SDLC como um **pipeline automatizado**.

### Por que importa
A leitura da AWS é o elo entre o SDLC "teórico" (IBM) e a prática moderna: cada fase tem uma ferramenta de automação correspondente, e segurança é transversal (shift-left).

### 📌 Pontos de prova
- AWS = **6 fases**: Plan → Design → Implement → Test → Deploy → Maintain.
- Mensagem-chave da AWS: **segurança em todas as fases (DevSecOps)** + **automação por tooling**.
- "Speed and stability não são tradeoffs" é tema recorrente (ver DORA).

---

## 3. ALM — Application Lifecycle Management

_(Checkmarx — https://checkmarx.com/glossary/application-lifecycle-management-alm/ — lido diretamente.)_

### Conceito central
**ALM (Gerenciamento do Ciclo de Vida da Aplicação)** é um framework abrangente que gerencia a aplicação por **toda a sua existência** — do planejamento inicial até a aposentadoria (decommissioning). A frase-chave da fonte: _"ALM provides a continuous lifecycle view, whereas SDLC is a subset that focuses on the build phase of the lifecycle"_ (https://checkmarx.com/glossary/application-lifecycle-management-alm/).

### SDLC vs ALM — a distinção que cai em prova
| Aspecto | SDLC | ALM |
|---|---|---|
| Foco | Processo passo-a-passo de **construir e entregar** | Visão **contínua** do ciclo de vida inteiro |
| Escopo | Requisitos → manutenção | Governança + portfólio + desenvolvimento + operação + **aposentadoria** |
| Relação | É um **subconjunto** do ALM | **Engloba** o SDLC + governança e gestão |
| Inclui | Criação e entrega | Backlog, rastreamento de bugs/issues, requisitos, colaboração entre áreas |

> Mnemônico: **SDLC é o "como construir"; ALM é o "como gerenciar a aplicação a vida toda"**, incluindo governança e colaboração interdepartamental.

### Os 7 estágios do ALM (Checkmarx)
1. Planejamento e levantamento de requisitos
2. Design
3. Desenvolvimento (com versionamento e código seguro)
4. Testes
5. Implantação
6. Manutenção e suporte
7. **Descomissionamento** (aposentar a aplicação, migrar/arquivar dados)

### Onde Jira e GitLab se encaixam
- A fonte cita como sistemas de ALM: **Jira (Atlassian)**, TFS (Microsoft) e Rally (CA).
- Essas ferramentas costuram requisitos, versionamento, testes, deploy e gestão de código-fonte ao longo das fases.
- Na prática: **Jira** governa requisitos/backlog/issues/sprints (a camada de gestão); **GitLab** cobre versionamento (Git), CI/CD, registry e segurança (a camada técnica de execução). Juntos formam um ALM ponta-a-ponta.

### 📌 Pontos de prova
- **ALM ⊃ SDLC.** SDLC é o subconjunto de "build". ALM adiciona governança, portfólio e aposentadoria.
- Único estágio que o ALM tem e o SDLC clássico não enfatiza: **Decommissioning (aposentadoria)**.
- Jira = camada de gestão/requisitos; GitLab = camada técnica (repo + CI/CD + segurança).

---

## 4. CNCF Cloud Native Landscape

_(CNCF — https://landscape.cncf.io/ — a página é renderizada via JavaScript e não retornou conteúdo textual; tema coberto por conhecimento consolidado.)_

### Conceito central
O **CNCF Cloud Native Interactive Landscape** é um **mapa interativo do ecossistema cloud native** mantido pela Cloud Native Computing Foundation (parte da Linux Foundation). Cataloga centenas de projetos e produtos, organizados por **função/categoria**, ajudando times a escolher ferramentas.

### Como está organizado (camadas e categorias)
- **App Definition & Development:** bancos de dados, streaming/messaging, frameworks de aplicação, gestão de imagens (ex.: Helm, Argo, Harbor).
- **Orchestration & Management:** orquestração de containers, service mesh, service proxy, API gateway, descoberta de serviços. **Kubernetes** é o centro desta camada; também Istio/Linkerd (service mesh), Envoy (proxy), CoreDNS.
- **Runtime:** runtime de containers (containerd, CRI-O), runtime de rede (CNI: Calico, Cilium), runtime de armazenamento (CSI, Rook, Longhorn).
- **Provisioning:** automação e configuração (**Terraform**, Ansible), registries de imagens, segurança/compliance, gestão de chaves.
- **Observability & Analysis (transversal):** **Prometheus** (métricas), **Grafana** (dashboards), **OpenTelemetry** (instrumentação/coleta), **Jaeger** (tracing distribuído), Fluentd (logs).
- **CI/CD (Continuous Integration & Delivery):** **Argo CD** e **Flux** (GitOps), **Tekton** (pipelines nativos de Kubernetes), Spinnaker.

### Níveis de maturidade (graduation)
Projetos da CNCF passam por três estágios, que indicam maturidade e adoção:
1. **Sandbox** — projetos iniciais/experimentais.
2. **Incubating** — adoção crescente, governança madura.
3. **Graduated** — maduros e amplamente adotados em produção (ex.: **Kubernetes, Prometheus, Envoy, containerd, Helm, Argo, OpenTelemetry**).

### Por que importa
Mostra que CI/CD, containers, orquestração e observabilidade **não são produtos isolados, e sim um ecossistema interligado**. Cada tópico desta disciplina (Docker, K8s, DORA, observabilidade, IaC) tem um "endereço" no landscape.

### 📌 Pontos de prova
- CNCF organiza o ecossistema por **camadas**: definição de app, orquestração, runtime, provisionamento + observabilidade e CI/CD transversais.
- Maturidade: **Sandbox → Incubating → Graduated**.
- Saiba alocar projetos: Kubernetes (orquestração), Prometheus/Grafana/OTel/Jaeger (observabilidade), Argo/Flux/Tekton (CI/CD GitOps), Terraform/Ansible (provisionamento).

---

## 5. Gerenciamento de configuração (Red Hat)

_(Red Hat EN — https://www.redhat.com/en/topics/automation/what-is-configuration-management — lido diretamente.)_

### Conceito central
**Gerenciamento de configuração é o processo de manter o estado desejado de sistemas e componentes de TI**, garantindo que o sistema se comporte de forma consistente ao longo de seu ciclo de vida (https://www.redhat.com/en/topics/automation/what-is-configuration-management).

### Pontos-chave
- **Configuration drift (desvio de configuração):** divergência gradual entre o estado real e o estado-base pretendido. Causa "sistemas mais lentos, exposições de segurança e conformidade, ou até interrupções (outages)". Combatê-lo é o motivo central da disciplina.
- **Configuration Items (CIs):** qualquer ativo/componente envolvido na entrega de serviços de TI.
- **CMDB (Configuration Management Database):** banco que rastreia CIs — seus atributos, dependências e histórico de mudanças.
- **Automação declarativa:** em escala, não se configura manualmente; usa-se uma **estrutura declarativa** onde você define o **estado desejado** e a ferramenta converge para ele.
- **Ferramentas citadas:** Ansible (ênfase Red Hat), Terraform, Puppet, Chef, Salt.
- **Relação com mudança:** opera ao lado do **change management** (ITSM), que governa como atualizações de infraestrutura e respostas a incidentes acontecem.

### Distinção importante: configuração ≠ IaC ≠ orquestração
- **Configuration management** (Ansible/Puppet/Chef): garante o estado de software/SO **dentro** de máquinas já existentes.
- **IaC / provisioning** (Terraform): cria/destrói a **infraestrutura em si** (VMs, redes, buckets).
- Há sobreposição, mas a prova costuma cobrar a ênfase: "estado desejado" + "evitar drift" + "declarativo".

### 📌 Pontos de prova
- Definição: **manter o estado desejado** dos sistemas; combater **configuration drift**.
- **Declarativo** = você descreve o "o quê" (estado final), não o "como" (passos).
- CI, CMDB e relação com **ITSM/change management** (ver tópico 7).

---

# Semana 02 — Configuração, arquitetura, containers, métricas

## 6. Gerenciamento de configurações Parte 1 (videoaula)

**🎬 Vídeo confirmado:** "Engenharia de Software - Aula 16 - Gerenciamento de configurações (Parte 1)" — Prof. Marcelo Fantinato (USP/EACH, no estilo das videoaulas da Univesp) — https://www.youtube.com/watch?v=eNYNv156YlY

### Conceito central
A aula 16 do curso de Engenharia de Software do Prof. Marcelo Fantinato (professor associado do EACH-USP, área de Sistemas de Informação) trata da **Gerência de Configuração de Software (GCS / SCM — Software Configuration Management)**: o conjunto de **atividades de apoio** (umbrella activities) que controlam e rastreiam **as mudanças nos artefatos ("itens de configuração") ao longo de todo o projeto**, e não apenas no código. A mensagem central da aula é que **mudança é inevitável** em software, e GCS é a disciplina que **gerencia essa mudança de forma controlada** em vez de sofrê-la de forma caótica. A Parte 1 cobre o vocabulário e o ciclo formal; a Parte 2 (continuação) desce ao operacional de versionamento/build.

### O que a aula efetivamente apresenta
A aula é fortemente ancorada na visão clássica de engenharia de software (linha Pressman/Sommerville), organizada em torno de:

1. **Itens de configuração (SCIs — Software Configuration Items):** tudo que é produzido e pode mudar — código-fonte, especificação de requisitos, projeto/arquitetura, planos de teste, manuais, dados, e até o **ambiente/ferramentas**. A GCS trata o software como um conjunto evolutivo desses itens, não só "o código".
2. **Baseline (linha de base):** um SCI (ou conjunto) **formalmente revisado e aprovado** que passa a servir de **referência congelada**; a partir dela, só se altera via processo formal de mudança. É o conceito-âncora da aula.
3. **Repositório / SCM repository:** onde os itens e suas versões ficam armazenados de forma controlada (a "fonte da verdade" do projeto).
4. **As tarefas/funções da GCS** (o núcleo do conteúdo):
   - **Identificação** — nomear e organizar os itens de configuração e suas relações.
   - **Controle de versões (version control)** — gerir variantes e revisões de cada item ao longo do tempo.
   - **Controle de mudanças (change control)** — o **processo formal**: solicitação de mudança (change request) → avaliação de impacto → decisão de um **comitê de controle de mudanças (CCB)** → execução → revisão → check-in da nova versão na baseline.
   - **Auditoria de configuração** — verificar que a mudança foi feita corretamente e que a baseline está íntegra.
   - **Relato de status (status accounting)** — registrar e comunicar o estado de cada item e mudança ("o que mudou, quando, por quem, por quê").

### Os pilares (síntese para a prova)
1. **Controle de versões (version control):**
   - Rastreia toda alteração em artefatos (código, configs, docs). Git é o padrão moderno.
   - Conceitos: commit, branch, merge, tag, **baseline** (conjunto de versões "congelado" e aprovado como referência).
   - **Baseline** é o conceito central: uma fotografia formalmente revisada que serve de ponto de partida controlado para mudanças.
2. **Gestão de mudanças (change management / change control):**
   - Processo formal para propor, avaliar, aprovar e rastrear mudanças (change request → análise de impacto → aprovação pelo **CCB** → implementação → verificação/auditoria).
   - Evita mudanças não rastreadas (que causam drift).
3. **Gestão de releases (release management):**
   - Empacotamento, versionamento (ex.: SemVer `MAJOR.MINOR.PATCH`) e promoção de builds entre ambientes (dev → staging → prod).
   - Define o que entra em cada release e garante rastreabilidade do que está em produção.

### Os pilares
1. **Controle de versões (version control):**
   - Rastreia toda alteração em artefatos (código, configs, docs). Git é o padrão.
   - Conceitos: commit, branch, merge, tag, baseline (um conjunto de versões "congelado" e aprovado como referência).
   - **Baseline** é central em SCM: uma fotografia formalmente revisada que serve de ponto de partida controlado para mudanças.
2. **Gestão de mudanças (change management):**
   - Processo formal para propor, avaliar, aprovar e rastrear mudanças (change request → análise de impacto → aprovação → implementação → verificação).
   - Evita mudanças não rastreadas (que causam drift).
3. **Gestão de releases (release management):**
   - Empacotamento, versionamento (ex.: SemVer `MAJOR.MINOR.PATCH`) e promoção de builds entre ambientes (dev → staging → prod).
   - Define o que entra em cada release e garante rastreabilidade do que está em produção.

### Por que importa
SCM/GCS é o "cimento" que conecta SDLC, CI/CD e ITSM. Sem controle de versão + mudanças + releases, o pipeline não tem rastreabilidade nem reprodutibilidade. A aula deixa claro que GCS é uma **atividade-guarda-chuva** que atravessa todas as fases do projeto (não uma fase isolada).

### 📌 Pontos de prova
- **GCS gerencia a mudança** de artefatos (itens de configuração), não só código; mudança é **inevitável**.
- Funções da GCS: **identificação, controle de versões, controle de mudanças, auditoria, relato de status**.
- **Baseline** = item/configuração formalmente **revisado e aprovado** que vira referência congelada; só muda via processo formal.
- **CCB** (comitê/processo de controle de mudanças) decide change requests após **análise de impacto**.
- Os **três pilares** práticos: versões, mudanças, releases.
- **SemVer**: `MAJOR` (quebra compatibilidade) `.MINOR` (recurso compatível) `.PATCH` (correção).

**Fontes da busca:** [Vídeo no YouTube](https://www.youtube.com/watch?v=eNYNv156YlY) · [Engenharia de Software - Gestão de configuração de software (Fantinato/Univesp)](https://www.youtube.com/watch?v=w3dX97i4v2c) · [Perfil de Marcelo Fantinato (EACH-USP)](http://each.uspnet.usp.br/fantinato/)

---

## 7. Gerenciamento de configuração e ITSM (Red Hat pt-br)

_(Red Hat pt-br — https://www.redhat.com/pt-br/topics/automation/what-is-configuration-management — lido diretamente.)_

### Conceito central
Versão em português do conceito do tópico 5, com ênfase na **integração com ITSM (gerenciamento de serviços de TI)**.

### Pontos-chave (da fonte)
- O gerenciamento de configuração **integra-se ao processo maior de ITSM** e funciona em conjunto com o **gerenciamento de mudanças**, que "descreve as políticas e processos que a sua organização segue quando atualiza a infraestrutura ou responde a eventos críticos".
- **CMDB** monitora **itens de configuração (CIs)** — "qualquer ativo ou componente envolvido no fornecimento de serviços de TI" — armazenando atributos, dependências e mudanças, e mapeando **relacionamentos entre componentes**.
- **Detecção de desvio (drift):** ferramentas modernas comparam sistemas entre si ou contra uma configuração básica para flagrar inconsistências.
- A ferramenta ideal oferece flexibilidade para gerenciar **data centers físicos, nuvens públicas e edge**, com suporte a rede, segurança, aplicações e provisionamento.

### Relação com ITSM (ITIL)
ITSM (frequentemente via ITIL) define processos como **Change Management, Configuration Management, Incident Management e Problem Management**. O CMDB é o coração do **Service Asset and Configuration Management (SACM)**: ele responde "o que temos, como se relaciona e qual o estado de cada coisa".

### 📌 Pontos de prova
- Gerenciamento de configuração ⊂ **ITSM** e anda junto com **gerenciamento de mudanças**.
- **CMDB** = banco de **CIs** + dependências (mapa de relacionamentos).
- "Detecção de drift" = comparar estado atual vs baseline.

---

## 8. Modelo C4 de arquitetura de software

_(InfoQ — https://www.infoq.com/articles/C4-architecture-model/ — lido diretamente.)_

### Conceito central
O **modelo C4** (criado por Simon Brown) é um conjunto de **diagramas hierárquicos** que descrevem a arquitetura de software em diferentes **níveis de zoom**. C4 = **Context, Containers, Components, Code** (https://www.infoq.com/articles/C4-architecture-model/). Analogia: como o Google Maps — você dá zoom do mundo até a rua.

### Os 4 níveis

**Nível 1 — System Context (Contexto):** _o quadro geral._
- Mostra **o sistema que você está construindo** e como ele se encaixa no mundo: as **pessoas (atores/usuários)** que o usam e os **outros sistemas (externos)** com que interage.
- Elementos: **Pessoas/Usuários**, **O Sistema** (geralmente destacado em cor distinta, ex.: azul), **Sistemas Externos** (caixas cinza), e **Relacionamentos** (linhas com descrição).
- Exemplo da fonte (internet banking): cliente pessoa física como usuário; o sistema conecta a um mainframe bancário e a um sistema de e-mail; cinza = o que já existe, azul = o que está sendo construído.

**Nível 2 — Container:** dá zoom no sistema e mostra os **containers** — aplicações, data stores, microsserviços, etc. (unidades **deployáveis**, não código individual). Inclui **decisões de tecnologia**. Ex.: web app server-side, SPA, app mobile, API, banco de dados.

> ⚠️ "Container" no C4 **NÃO é container Docker**. É qualquer unidade executável/deployável separadamente (uma aplicação, um banco). Pegadinha clássica de prova.

**Nível 3 — Component:** dá zoom em **um container** e revela seus **componentes internos**, que devem mapear para abstrações reais do código (agrupamentos de código). Ex.: controllers REST, componentes de acesso a banco.

**Nível 4 — Code:** detalhe de implementação via diagramas de classe UML (interfaces e classes). Brown recomenda **não** desenhar esse nível manualmente — IDEs geram sob demanda.

### Notação e clareza
- O C4 **não prescreve notação específica** — funciona em quadro branco, post-its ou ferramentas de diagrama.
- Cada elemento deve ter: **nome, tipo, tecnologia e texto descritivo**.
- Sempre incluir **legenda** (cores, formas, siglas, estilos de linha) e **título** (tipo + escopo do diagrama).
- O modelo combate o problema comum: "a maioria dos diagramas de arquitetura é uma confusão de caixas e linhas".

### Atividade da disciplina — Diagrama de Contexto (Nível 1) para um sistema IoT agrícola
Exemplo aplicado (sistema de monitoramento de máquinas agrícolas IoT):
- **Atores (pessoas):** Operador de campo, Gestor da fazenda/agrônomo, Técnico de manutenção.
- **O sistema (em destaque):** Plataforma de Monitoramento de Máquinas Agrícolas.
- **Sistemas externos (cinza):** Dispositivos IoT/sensores embarcados nas máquinas (telemetria), Serviço de mapas/GPS, Sistema meteorológico, Gateway de notificações (e-mail/SMS/push), ERP/sistema de gestão da fazenda.
- **Relacionamentos (com descrição + protocolo):** "Sensores enviam telemetria via MQTT/HTTPS"; "Operador consulta dashboards via navegador"; "Plataforma envia alertas via gateway de notificação".
- **Fronteira (boundary):** tudo que você constrói fica dentro da caixa do sistema; o resto (sensores, mapas, clima, ERP) fica fora, como dependências externas.

### 📌 Pontos de prova
- C4 = **Context → Container → Component → Code** (do mais abstrato ao mais detalhado).
- **Nível 1 (Contexto):** identificar **atores, o sistema, sistemas externos e fronteiras**. Cor distinta para o sistema em construção; cinza para externos.
- **Container no C4 ≠ container Docker** (é unidade deployável: app, API, banco, SPA, mobile).
- Todo elemento precisa de **nome + tipo + tecnologia + descrição**; diagrama precisa de **legenda e título**.

---

## 9. Docker — primeiros passos

_(Docker — https://docs.docker.com/get-started/ — a página retornou conteúdo mínimo; tema complementado por conhecimento consolidado.)_

### Conceito central
**Docker** é uma plataforma para empacotar uma aplicação e todas as suas dependências em uma **imagem**, e executá-la como um **container** — um processo isolado que roda igual em qualquer lugar.

### Imagem vs Container — a distinção fundamental
| Conceito | O que é |
|---|---|
| **Imagem (image)** | Template **imutável**, somente-leitura, em camadas (layers), construído a partir de um `Dockerfile`. É a "receita congelada" (binários + libs + runtime + config). Análogo: uma classe. |
| **Container** | **Instância em execução** de uma imagem, com uma camada gravável por cima. Análogo: um objeto instanciado da classe. |
| **Dockerfile** | Arquivo de texto com instruções para **construir** a imagem (`FROM`, `RUN`, `COPY`, `CMD`...). |
| **Registry** | Repositório de imagens (Docker Hub, GitLab Container Registry, GHCR). Onde se faz `push`/`pull`. |

### Comandos básicos
```bash
docker build -t minha-app:1.0 .     # constrói imagem a partir do Dockerfile no diretório atual
docker images                       # lista imagens locais
docker run -d -p 8080:80 minha-app:1.0   # cria e executa container (detached, mapeando porta)
docker ps                           # lista containers em execução (-a inclui parados)
docker logs <container_id>          # mostra logs do container
docker exec -it <container_id> sh   # abre shell dentro do container
docker stop <container_id>          # para o container
docker pull nginx:alpine            # baixa imagem do registry
docker push registry/minha-app:1.0  # envia imagem ao registry
docker tag minha-app:1.0 registry/minha-app:1.0  # cria tag/alias
```

### Dockerfile mínimo
```dockerfile
FROM node:20-alpine          # imagem base
WORKDIR /app                 # diretório de trabalho
COPY package*.json ./        # copia manifests primeiro (cache!)
RUN npm ci --omit=dev        # instala dependências
COPY . .                     # copia o restante do código
EXPOSE 3000                  # documenta a porta
CMD ["node", "server.js"]    # comando padrão ao subir o container
```

### Por que importa
Containers resolvem o clássico "na minha máquina funciona": a imagem carrega o ambiente inteiro. É a base de Kubernetes, do 12-factor (dev/prod parity) e dos pipelines de CI/CD.

### 📌 Pontos de prova
- **Imagem = template imutável; container = instância em execução.**
- Camadas (layers) + cache: ordem das instruções no Dockerfile importa (ver tópico 23).
- Fluxo: `Dockerfile → build → image → push (registry) → pull → run → container`.

---

## 10. Kubernetes — visão geral e Pods

_(Kubernetes — https://kubernetes.io/docs/concepts/overview/ — lido diretamente.)_

### Conceito central
**Kubernetes (K8s)** é uma plataforma open-source, portátil e extensível para **gerenciar workloads e serviços containerizados**, com configuração **declarativa** e automação. O nome vem do grego "timoneiro/piloto"; "K8s" = K + 8 letras + s. Foi liberado pela Google em 2014 (https://kubernetes.io/docs/concepts/overview/).

### O problema que resolve
Em produção é preciso gerenciar containers **automaticamente** com zero downtime: se um container cai, outro precisa subir imediatamente. K8s provê um framework para rodar sistemas distribuídos de forma **resiliente** — escalonamento, failover, padrões de deploy (ex.: canary) e gestão de ciclo de vida.

### Modelo mental: Cluster → Nós → Pods → Containers
- **Cluster:** o conjunto inteiro de máquinas gerenciadas.
- **Control Plane (plano de controle / "master"):** gerencia o estado do cluster e toma decisões globais. Componentes: **API Server** (porta de entrada), **Scheduler** (decide em qual nó cada Pod roda), **Controller Manager** (loops de reconciliação) e **etcd** (banco chave-valor que guarda o estado).
- **Nós (workers):** máquinas (físicas ou virtuais) que rodam as aplicações. Cada nó tem **kubelet** (garante que os containers rodem nos Pods), **container runtime** (containerd, CRI-O) e **kube-proxy** (regras de rede).
- **Pod:** a **menor unidade deployável** do K8s — um ou mais containers que **compartilham namespace de rede (mesmo IP/portas), volumes de armazenamento e configuração**. Geralmente 1 container por Pod; múltiplos só quando fortemente acoplados (ex.: sidecar).

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: app-container
    image: my-app:latest
    ports:
    - containerPort: 8080
```

### O que o K8s entrega (recursos)
- **Service discovery & load balancing** — expõe containers por DNS/IP e balanceia tráfego.
- **Storage orchestration** — monta storage local/cloud automaticamente.
- **Rollouts/rollbacks automatizados** — converge o estado real para o desejado a uma taxa controlada.
- **Bin packing automático** — encaixa containers nos nós conforme CPU/memória declarados.
- **Self-healing** — reinicia containers que falham, substitui os não responsivos (health checks), só direciona tráfego quando o container está pronto (readiness).
- **Gestão de secrets/config** — armazena senhas, tokens, chaves e atualiza sem reconstruir a imagem.
- **Escalonamento horizontal** — via comando, UI ou automático (HPA, por uso de CPU).

### O que o K8s NÃO é (a fonte destaca)
- **Não é PaaS tradicional**; **não faz CI/CD** (não builda código-fonte); **não fornece middleware** embutido (filas, bancos, cache); **não impõe** solução de logging/monitoramento (apenas integra a sua). Ou seja: K8s orquestra **execução**, mas o **build/deploy do código vem do pipeline de CI/CD** — daí a separação build/release/run do 12-factor.

### Por que importa
K8s é o destino de execução do mundo cloud native. Conecta containers (Docker), 12-factor (processos stateless, disposability, port binding), observabilidade e SRE.

### 📌 Pontos de prova
- Hierarquia: **Cluster → Control Plane + Nós → Pods → Containers**.
- **Pod = menor unidade deployável**; containers no Pod **compartilham rede e volumes**.
- Control Plane: **API Server, Scheduler, Controller Manager, etcd**. Nó: **kubelet, runtime, kube-proxy**.
- **Modelo declarativo + reconciliação contínua + self-healing**. K8s **não faz CI/CD por si só**.

---

## 11. Métricas DORA

_(dora.dev — https://dora.dev/guides/dora-metrics/ — lido diretamente; benchmarks por tier complementados por conhecimento consolidado, pois a página não traz a tabela.)_

### Conceito central
**DORA (DevOps Research and Assessment)** definiu métricas que medem **performance de entrega de software**, agrupadas em **throughput (velocidade)** e **stability (estabilidade)**. Achado central: _"speed and stability are not tradeoffs"_ — os melhores times se destacam em **ambas** simultaneamente (https://dora.dev/guides/dora-metrics/).

### As 4 métricas clássicas
| Métrica | Categoria | Definição |
|---|---|---|
| **Deployment Frequency (Frequência de deploy)** | Throughput | Com que frequência o time entrega em produção. |
| **Lead Time for Changes (Lead time de mudanças)** | Throughput | Tempo de um commit (versionado) até estar em produção. |
| **Change Failure Rate (Taxa de falha de mudança)** | Stability | % de deploys que causam falha exigindo intervenção (rollback/hotfix). |
| **Failed Deployment Recovery Time / MTTR** | Stability | Tempo para recuperar de um deploy que falhou. (Substituiu o termo MTTR — "Mean Time To Recovery".) |

> A fonte dora.dev mostra um **modelo evoluído com 5 métricas**, acrescentando **Deployment Rework Rate** (deploys não planejados causados por incidentes em produção). Para a prova, as **4 clássicas** são o essencial; cite a 5ª como evolução recente.

### Benchmarks por tier (conhecimento consolidado — State of DevOps)
| Métrica | Elite | High | Medium | Low |
|---|---|---|---|---|
| Deployment Frequency | sob demanda (várias/dia) | 1/dia – 1/semana | 1/semana – 1/mês | < 1/mês |
| Lead Time for Changes | < 1 hora | 1 dia – 1 semana | 1 semana – 1 mês | > 1 mês |
| Change Failure Rate | 0–15% | 16–30% | 16–30% | 16–30%+ |
| Time to Restore (MTTR) | < 1 hora | < 1 dia | 1 dia – 1 semana | > 1 semana |

> Nota: a partir do relatório de **2021/2022**, o DORA passou a clusterizar em **três** níveis (High/Medium/Low), aposentando o rótulo "Elite". Saiba citar ambas as versões.

### Throughput vs Stability
- **Throughput** = quantas mudanças passam pelo sistema num período (velocidade de produção). Métricas: Deployment Frequency, Lead Time.
- **Stability** = quão bem os deploys ocorrem (confiabilidade, proteção da experiência do usuário). Métricas: Change Failure Rate, Recovery Time.

### Por que importa
DORA é o padrão da indústria para medir DevOps. Conecta o pipeline (CI/CD) com resultado de negócio e com SRE/observabilidade (que fornecem os dados das métricas de estabilidade).

### 📌 Pontos de prova
- **As 4 métricas e seus 2 grupos**: throughput (Deployment Frequency, Lead Time) vs stability (Change Failure Rate, MTTR/Recovery Time).
- **Velocidade e estabilidade NÃO são tradeoffs** — frase-âncora do DORA.
- 2 métricas medem **velocidade**, 2 medem **estabilidade**.
- 5ª métrica recente: **Deployment Rework Rate**.

---

## 12. Four Keys (Google Cloud)

_(Google Cloud — https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance — lido diretamente.)_

### Conceito central
**Four Keys** é um projeto open-source do Google que **mede as 4 métricas DORA automaticamente** a partir de eventos de ferramentas (GitHub/GitLab/Cloud Build), agrupando-as em **Velocity** (Deployment Frequency, Lead Time) e **Stability** (Change Failure Rate, Time to Restore Service) (https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance).

### Arquitetura de coleta (ETL)
```
Fontes (GitHub, GitLab, Cloud Build)
   → Webhooks HTTP
   → Pipeline Four Keys
   → BigQuery (tabela de eventos raw)
   → Queries SQL agendadas (extração/transformação)
   → Tabelas: changes, deployments, incidents
   → Dashboard (Looker Studio / Data Studio)
```
- Aceita eventos de **qualquer ferramenta que emita HTTP**.
- Categorização padrão: commits do GitHub → **changes**; deploys do Cloud Build → **deployments**; issues com label `incident` → **incidents**.
- Toda transformação é em **SQL no BigQuery** — recategorizar é editar o SQL, sem reprocessar o pipeline.

### Como cada métrica é calculada
- **Deployment Frequency:** mediana de dias por semana com ao menos um deploy bem-sucedido.
- **Lead Time for Changes:** mapeia SHAs de commits aos deploys; junta `changes` com `deployments`; mediana do tempo.
- **Change Failure Rate:** liga `deployments` a `incidents` por ID do deploy.
- **Time to Restore Service:** tempo entre criação e resolução do incidente, ligado ao deploy que resolveu.

### Categorização de times
- DORA original (2020): **Elite / High / Medium / Low**.
- Atualização (2022): clusterização revisada para **High / Medium / Low** (rótulo "Elite" descontinuado).

### 📌 Pontos de prova
- Four Keys = **implementação automatizada das métricas DORA** (open-source do Google).
- Stack: **webhooks → BigQuery → SQL → dashboard**.
- Grupos: **Velocity** (DF, LT) e **Stability** (CFR, TTR).

---

## 13. DORA Metrics (Atlassian)

_(Atlassian — https://www.atlassian.com/devops/frameworks/dora-metrics — o corpo do artigo veio truncado; tema coberto por conhecimento consolidado.)_

### Conceito central
A Atlassian apresenta as **4 métricas DORA** como bússola para melhorar a performance de DevOps, enfatizando que métricas servem para **identificar gargalos e guiar melhoria contínua**, não para "vigiar" pessoas.

### Como interpretar/melhorar cada métrica (visão Atlassian/consolidada)
- **Deployment Frequency baixa →** invista em automação de pipeline, deploys menores e mais frequentes, feature flags.
- **Lead Time alto →** reduza tamanho dos PRs, automatize testes/build, elimine etapas manuais e filas de aprovação.
- **Change Failure Rate alta →** reforce testes automatizados, revisão de código, deploys progressivos (canary/blue-green).
- **MTTR alto →** melhore **observabilidade** (logs/métricas/traces), alertas, runbooks e capacidade de rollback rápido.

### Armadilhas comuns
- **Gamear métricas** (ex.: fatiar deploys artificialmente para inflar Deployment Frequency).
- Usar DORA como **métrica individual de produtividade** (é métrica de **time/sistema**).
- Olhar throughput **sem** estabilidade (ou vice-versa) — precisam ser lidos **juntos**.

### Relação com cultura DevOps
DORA mede **resultados**; a melhora vem de **práticas + cultura** (colaboração, automação, blameless, fluxo contínuo). Métricas são meio, não fim.

### 📌 Pontos de prova
- DORA serve para **melhoria contínua**, não para punir indivíduos.
- Cada métrica tem alavancas específicas (automação, PRs menores, observabilidade, rollback).
- **Throughput + Stability lidos em conjunto**; cuidado com gaming.

---

## 14. Observabilidade e Application Insights

_(Microsoft — https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview — lido diretamente.)_

### Conceito central
**Application Insights** é um recurso de **APM (Application Performance Monitoring)** do Azure Monitor. Coleta e analisa **telemetria** de aplicações, atualmente via **OpenTelemetry (OTel)** — um framework de observabilidade **neutro de fornecedor** (https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview).

### Os 3 pilares da observabilidade
| Pilar | O que é | Pergunta que responde |
|---|---|---|
| **Logs** | Registros de eventos discretos com timestamp (texto/estruturado). | "O que aconteceu exatamente neste momento?" |
| **Métricas (metrics)** | Valores numéricos agregados ao longo do tempo (latência, throughput, uso de CPU, taxa de erro). | "Como o sistema está se comportando ao longo do tempo?" |
| **Traces (rastreamento distribuído)** | Caminho de uma requisição atravessando múltiplos serviços (spans encadeados). | "Por onde passou esta requisição e onde está o gargalo?" |

> **Monitoramento vs Observabilidade:** monitoramento responde perguntas que você **já sabia** fazer (dashboards/alertas pré-definidos); observabilidade permite **investigar o desconhecido** correlacionando os três pilares.

### Instrumentação (Application Insights)
- **Instrumentação automática (auto-instrumentation / codeless):** plataformas habilitam coleta sem alterar código (ex.: prévia para AKS/Kubernetes). Rápido de adotar.
- **Instrumentação baseada em código (OTel Distro):** adiciona o **Azure Monitor OpenTelemetry Distro** ao app + uma **connection string**. Mais configurável e extensível. Recomendado para a maioria dos cenários server-side.
- Pontos de entrada: web apps server-side, apps em VM, JavaScript no navegador (usa o **SDK JS**, não OTel), Azure Functions (`telemetryMode: OpenTelemetry`), AKS e agentes de IA.

### Telemetria e experiências
- Telemetria típica: **requests, dependencies (chamadas externas), exceptions**, métricas, eventos de uso.
- Experiências do produto: **Application Map** (mapa visual das interações entre componentes), **Live Metrics** (tempo real), **Failures/Performance views**, **Availability tests**, **Funnels/User Flows/Cohorts** (uso), **Logs (Log Analytics)** para consulta/correlação.

### Por que importa
Observabilidade é o que **alimenta as métricas de estabilidade do DORA** (detectar falhas, medir MTTR) e é o pilar técnico do SRE (SLIs vêm de métricas/logs/traces).

### 📌 Pontos de prova
- **3 pilares: Logs, Métricas, Traces.** Saiba o que cada um responde.
- **OpenTelemetry = padrão neutro/vendor-agnostic** de instrumentação; App Insights o consome.
- **Auto-instrumentação vs baseada em código.** Navegador usa SDK JS (não OTel).
- Diferença **monitoramento (conhecido) vs observabilidade (desconhecido)**.

---

## 15. SRE — Site Reliability Engineering

_(cloudcasters — https://cloudcasters.io/pt-br/site-reliability-engineer-sre/ — a página retornou HTTP 403; tema coberto por conhecimento consolidado, incluindo o enquadramento de SRE sobre DevOps.)_

### Conceito central
**SRE (Site Reliability Engineering / Engenharia de Confiabilidade de Sites)** é uma disciplina criada na **Google** (Ben Treynor) que **aplica princípios de engenharia de software a problemas de operações/infraestrutura**. Frase canônica: _"SRE is what happens when you ask a software engineer to design an operations team"_. É uma **camada/implementação concreta do DevOps**: "class SRE implements interface DevOps".

### SRE vs DevOps
- **DevOps** = cultura/filosofia (quebrar silos entre Dev e Ops, automatizar, medir, compartilhar).
- **SRE** = um **conjunto prescritivo de práticas** que implementa essa filosofia, com métricas e processos concretos (SLO, error budget, toil budget).

### Conceitos-chave (caem em prova)
| Termo | Definição |
|---|---|
| **SLI (Service Level Indicator)** | Métrica quantitativa do nível de serviço (ex.: % de requisições com latência < 300ms; taxa de disponibilidade). |
| **SLO (Service Level Objective)** | **Alvo** para um SLI ao longo de um período (ex.: 99,9% de disponibilidade no mês). |
| **SLA (Service Level Agreement)** | **Contrato** com o cliente, com consequências (multas/créditos) se violado. SLA costuma ser mais frouxo que o SLO interno. |
| **Error Budget (orçamento de erro)** | `1 − SLO`. Se o SLO é 99,9%, há 0,1% de "orçamento" para falhar. Enquanto há budget, o time pode arriscar e lançar rápido; se estoura, **freia features e foca em confiabilidade**. |
| **Toil** | Trabalho operacional manual, repetitivo, automatizável e sem valor duradouro. SRE busca **limitar toil** (ex.: ≤ 50% do tempo) e automatizá-lo. |
| **Blameless postmortem** | Análise pós-incidente **sem culpar pessoas**, focada em causas sistêmicas e prevenção. Pré-requisito cultural para aprender com falhas. |

### Relação SRE ↔ pilares deste curso
- SLIs vêm de **observabilidade** (tópico 14).
- Error budget conecta-se ao **Change Failure Rate** e ao **MTTR** do DORA.
- SRE equilibra **velocidade (lançar) e confiabilidade (não quebrar)** — exatamente o "throughput vs stability" do DORA.

### Estudo de caso XP (consolidado)
Casos como o da XP Inc. ilustram a adoção de SRE em escala financeira: definição de SLOs por produto, error budgets que regulam o ritmo de releases, automação de toil e cultura de postmortems blameless, com observabilidade (métricas/logs/traces) como base. SRE entra como **camada sobre o DevOps** já existente, profissionalizando a confiabilidade.

### 📌 Pontos de prova
- **SRE implementa DevOps** (DevOps = cultura; SRE = prática prescritiva).
- Saiba a hierarquia **SLI → SLO → SLA** e que **Error Budget = 1 − SLO**.
- **Toil** = trabalho manual repetitivo automatizável; **postmortem blameless** = sem culpados.
- Error budget é o mecanismo que **equilibra lançar rápido vs manter confiável**.

---

# Semana 03 — Qualidade de código e segurança

## 16. Código Limpo (Clean Code, cap. 1)

**🎬 Vídeo confirmado:** "O que é Código Limpo? // Entendendo o Livro Clean Code (Capítulo 1)" — https://www.youtube.com/watch?v=O5aWwBXPoh4

### Conceito central
O vídeo destrincha o **Capítulo 1 do livro Clean Code**, de Robert C. "Uncle Bob" Martin, cujo título é justamente **"Clean Code" / "Código Limpo"**. A tese central: **código é lido muito mais vezes do que é escrito** (a razão leitura:escrita é da ordem de 10:1), logo **legibilidade é prioridade número um**. Código limpo é aquele que **qualquer pessoa do time entende facilmente** e que **outro desenvolvedor — não o autor original — consegue ler e melhorar**. É simples, direto, expressa claramente a intenção e **não tem duplicação**.

### O fio condutor do vídeo (cap. 1)
O capítulo (e o vídeo) parte da pergunta provocadora "**vai haver código?**" — sim, código não vai desaparecer, porque ele é a **especificação precisa** dos requisitos; portanto saber escrevê-lo bem é permanente. A partir daí, desenvolve:

- **Code Rot e o "pântano" (the mess):** código ruim **apodrece** com o tempo. À medida que a bagunça cresce, a **produtividade do time despenca e tende a zero** — cada nova mudança quebra duas outras coisas. É a "armadilha de produtividade".
- **"A grande reescrita" raramente salva:** times bagunçados sonham com reescrever do zero; geralmente acabam com um **segundo pântano** competindo com o primeiro. A solução real é **manter o código limpo continuamente**.
- **"Vou limpar depois" é a armadilha:** a famosa frase de Uncle Bob — **"Later equals never"** ("depois é igual a nunca"). Escrever sujo "para entregar rápido" desacelera **imediatamente**, não só no futuro.
- **A culpa é nossa, não do gerente:** profissionais devem **defender o código limpo** mesmo sob pressão de prazo — assim como um médico não deixaria de lavar as mãos porque o paciente tem pressa. Entregar sujeira para "ir mais rápido" é o que **realmente** atrasa.

### Pontos-chave do capítulo 1
- **Custo do código ruim:** código bagunçado desacelera o time progressivamente; a "produtividade tende a zero" com o acúmulo de débito técnico.
- **A Regra do Escoteiro (Boy Scout Rule):** "deixe o acampamento mais limpo do que encontrou" — melhore um pouco o código sempre que mexer nele.
- **Definições de código limpo (citadas por outros autores no cap.):**
  - Bjarne Stroustrup: elegante, eficiente, faz **uma coisa bem**.
  - Grady Booch: lê como **prosa bem escrita**.
  - Ron Jeffries: sem duplicação, expressivo, abstrações mínimas.
- **Profissionalismo e "We are authors":** programadores são **autores** — escrevem para outros humanos lerem, não só para a máquina.
- **A atitude:** entregar código limpo é responsabilidade profissional; pressão de prazo não justifica sujeira (que acaba atrasando ainda mais).

### Princípios práticos associados (Clean Code geral)
- **Nomes significativos** (revelam intenção; pronunciáveis; pesquisáveis).
- **Funções pequenas**, que fazem **uma única coisa** (SRP).
- **Evitar duplicação (DRY).**
- **Comentários**: bons comentários explicam **o porquê**, não o **o quê**; código auto-explicativo > comentário.
- **Tratamento de erros** sem poluir a lógica.

### Por que importa
Qualidade de código é a matéria-prima de tudo: revisões (CLs, code review), SAST e manutenibilidade dependem dela. Código limpo reduz Change Failure Rate e Lead Time.

### 📌 Pontos de prova
- Código é **lido mais do que escrito** (≈10:1) → legibilidade primeiro.
- **Code rot**: código ruim derruba a produtividade ao longo do tempo (tende a zero).
- **"Later equals never"** — "depois é igual a nunca"; sujeira atrasa **já**, não só no futuro.
- A "grande reescrita" raramente resolve; o caminho é **limpar continuamente**.
- **Boy Scout Rule**; funções pequenas que fazem **uma coisa**; nomes significativos; DRY.
- Comentário ideal explica **o porquê**; o melhor comentário é código claro.
- Definições citadas no cap.: Stroustrup (elegante, faz **uma coisa bem**), Booch (lê como **prosa**), Jeffries (sem duplicação, expressivo).

**Fontes da busca:** [Vídeo no YouTube](https://www.youtube.com/watch?v=O5aWwBXPoh4) · [Clean Code Fundamentals — Episode 1 (Uncle Bob, cleancoders.com)](https://cleancoders.com/episode/clean-code-episode-1) · [Chapter 1: Clean Code — resumo (Medium)](https://smrita.medium.com/chapter-1-clean-code-robert-c-martin-268584144e6b)

---

## 17. Como escrever CLs (Google Eng Practices)

_(Google — https://google.github.io/eng-practices/review/developer/ — lido diretamente, com complemento consolidado das subpáginas.)_

### Conceito central
Guia do Google para o **desenvolvedor que submete mudanças (CL = "changelist", equivalente a um Pull/Merge Request)** para revisão. Objetivo: passar pela revisão **mais rápido e com mais qualidade** (https://google.github.io/eng-practices/review/developer/).

### Os pilares do guia
1. **Escrever boas descrições de CL:**
   - **Primeira linha:** resumo curto e imperativo do que o CL faz (não "consertos", e sim "Remove campo deprecated X do struct Y").
   - **Corpo:** o **quê** e principalmente o **porquê** — contexto, abordagem, alternativas descartadas.
   - Descrição é registro permanente no histórico; deve ser autoexplicativa anos depois.
2. **CLs pequenos (Small CLs):**
   - Mudanças pequenas e focadas são revisadas mais rápido, com menos bugs, mais fáceis de reverter e de mergear.
   - "Pequeno" = uma mudança coesa autocontida, não necessariamente poucas linhas.
3. **Lidar com comentários do revisor:**
   - Não leve crítica para o lado pessoal; o foco é o código.
   - Responda a **todos** os comentários (resolva ou explique).
   - Se discordar, argumente com dados/técnica; busque consenso, escale só se necessário.
4. **Lidar com pushback/desacordo (subpágina):**
   - Quando o revisor pede uma mudança, geralmente ele tem razão sobre legibilidade do "leitor futuro". Se você acha que ele está errado, **explique**; se ainda assim houver impasse, prevalece o padrão do time, não "quem grita mais".

### Por que importa
Define o lado do **autor** no code review. Boas descrições + CLs pequenos reduzem Lead Time e Change Failure Rate (DORA) e melhoram a colaboração.

### 📌 Pontos de prova
- **CL = Change List** (≈ PR/MR). Foco do guia: o **autor** da mudança.
- **Descrição = primeira linha resumida + corpo com o porquê.**
- **CLs pequenos** = revisão mais rápida, menos bugs, fácil reverter.
- Responda a todos os comentários; discorde com argumentos técnicos.

---

## 18. Análise SAST

**🎬 Vídeo confirmado:** "Snyk Demo in 20 Minutes | 2022" (canal oficial Snyk) — https://www.youtube.com/watch?v=9RHM4ybvyT8

### Conceito central
**SAST (Static Application Security Testing / Análise Estática de Segurança)** examina o **código-fonte, bytecode ou binário SEM executá-lo**, em busca de vulnerabilidades e padrões inseguros. É **white-box** (tem acesso ao código). O vídeo é uma **demonstração prática da ferramenta Snyk** mostrando SAST (e a plataforma de "developer security") em ação.

### A ferramenta demonstrada: Snyk
O vídeo apresenta a **Snyk** como plataforma de **segurança "dev-first"** (centrada no desenvolvedor), que integra a análise de segurança **dentro do fluxo de trabalho** — IDE, repositório Git e pipeline de CI/CD — em vez de deixá-la só para o time de segurança no fim. A demo (~20 min) percorre os módulos do produto:

| Módulo Snyk | O que faz | Categoria |
|---|---|---|
| **Snyk Code** | **SAST** — escaneia o **código-fonte que você escreve** em busca de vulnerabilidades (injeção, XSS, etc.), com sugestões de correção **inline**. | SAST |
| **Snyk Open Source** | **SCA** — escaneia **dependências de terceiros** (npm, Maven, NuGet, PyPI, RubyGems...) procurando CVEs conhecidas. | SCA |
| **Snyk Container** | Escaneia **imagens de container** e suas base images. | Container |
| **Snyk IaC** | Escaneia **infraestrutura como código** (Terraform, K8s) por misconfigurations. | IaC |

### O que a demo destaca (pontos do vídeo)
- **Snyk Code = SAST com motor de IA:** análise estática em tempo real, com **remediação inline dentro da IDE** e **priorização orientada a contexto** (mostra primeiro o que realmente importa).
- **Frictionless / shift-left:** o desenvolvedor recebe o feedback **no momento em que escreve o código** (IDE) e novamente no **Pull Request**, antes do merge — não depois, em produção.
- **Encontra-e-corrige:** além de apontar, o Snyk **sugere a correção** (fix) e prioriza por severidade/risco de exploração, reduzindo a superfície de ataque.
- **Plataforma unificada:** SAST + SCA + Container + IaC numa só ferramenta — cobre tanto o **código que você escreve** (SAST) quanto o **código que você importa** (SCA), que são problemas distintos.
- **Integração no CI/CD:** o scan vira um **gate** automatizado do pipeline (pode falhar o build em vulnerabilidade crítica), e roda via CLI/integração com GitHub/GitLab.

### SAST vs outras análises
| Tipo | Como age | Quando |
|---|---|---|
| **SAST** | Analisa o **código parado** (estático), white-box. | Cedo (commit, PR, CI). **Shift-left.** |
| **DAST** | Testa a aplicação **rodando** (black-box), atacando endpoints. | Tardio (staging/produção). |
| **SCA** | Analisa **dependências/terceiros** (CVEs em libs). | CI (ex.: Trivy, Dependabot). |
| **IAST** | Híbrido: instrumenta a app em execução. | Durante testes. |

### O que o SAST encontra
- Injeção (SQL, comando, XSS), dados sensíveis hardcoded, **secrets** em código, uso inseguro de criptografia, problemas de controle de acesso, buffer overflows (em linguagens nativas), padrões de código inseguro.

### Vantagens de integrar SAST no CI
- **Shift-left:** acha o problema **cedo**, quando é mais barato corrigir (custo de bug cresce exponencialmente em fases tardias).
- **Automação e consistência:** roda em todo commit/MR, sem depender de revisor humano lembrar.
- **Feedback ao desenvolvedor** no contexto (linha do código, no MR).
- **Gate de qualidade:** o pipeline pode **falhar** se houver vulnerabilidade crítica, bloqueando o merge.
- Limitações: **falsos positivos** (precisa triagem), não pega vulnerabilidades só visíveis em runtime (daí complementar com DAST).

### Por que importa
SAST é o braço de segurança do **DevSecOps**: integra segurança ao SDLC desde cedo (alinhado ao tópico 2/AWS). Ferramentas concretas: Gitleaks (secrets, tópico 21), GitLab SAST (tópico 25), Semgrep, SonarQube; e Trivy/SCA para dependências (tópico 24).

### 📌 Pontos de prova
- **SAST = estático/white-box, sem rodar o código; cedo no pipeline (shift-left).**
- **DAST = dinâmico/black-box, app rodando.** **SCA = dependências/CVEs.**
- Vantagens no CI: feedback cedo, automação, gate de bloqueio. Desvantagem: **falsos positivos**.
- **Snyk** (ferramenta do vídeo): plataforma **dev-first**; **Snyk Code = SAST** (seu código), **Snyk Open Source = SCA** (dependências), + Container e IaC.
- Diferencial demonstrado: **remediação inline na IDE/PR** + priorização por contexto (shift-left na prática).

**Fontes da busca:** [Vídeo "Snyk Demo in 20 Minutes | 2022"](https://www.youtube.com/watch?v=9RHM4ybvyT8) · [Página do vídeo (SecuritySenses)](https://securitysenses.com/videos/snyk-demo-20-minutes-2022) · [Snyk Code — SAST](https://snyk.io/product/snyk-code/)

---

## 19. Como revisar código com eficácia (GitHub)

_(GitHub Blog — Sarah Vessels — https://github.blog/developer-skills/github/how-to-review-code-effectively-a-github-staff-engineers-philosophy/ — lido diretamente.)_

### Conceito central
Filosofia de **code review do lado do revisor**, por Sarah Vessels (staff engineer da GitHub, +7.000 PRs revisados). PRs são **conversas**: o autor propõe, o revisor é "um segundo par de olhos" que melhora a implementação **por discussão, não por imposição** (https://github.blog/...).

### Princípios
1. **Clareza é tudo:** distinga **preferência pessoal** de **bloqueador**. Marque explicitamente o que é blocker vs sugestão opcional.
2. **Pergunte, não exija:** em vez de "isto está errado", pergunte sobre edge cases, formato dos dados, performance, premissas. Respeita o conhecimento de contexto do autor.
3. **Afirme junto com a crítica:** reconheça o que está bom (bons testes, legibilidade, padrões seguidos).
4. **Dê exemplos concretos:** "ofereça um exemplo da abordagem que você sugere" eleva a clareza da revisão.

### Bom review vs review ruim
| Bom review | Review ruim |
|---|---|
| Diz o que é **blocker** vs opcional | "Não gostei disso" sem explicar |
| Cita evidências/explica o porquê | "Isso não vai funcionar" sem dizer por quê |
| Referencia código/issues específicos | Aprovação/rejeição em bloco sem comentários |
| Sugere resolução concreta | Expectativa de prazo obscura |

### Outras heurísticas
- **Withhold approval conscientiously:** ela **raramente** usa "Request changes" — reserva para **risco imediato de segurança** ou de quebrar produção. Aprova mesmo com sugestões pendentes que podem ir em PR futuro.
- **Revisar é prioridade:** código mergeado está mais perto de ser entregue do que o trabalho em progresso dela mesma. Checa notificações ao longo do dia.
- **Tom colaborativo, não adversarial:** emojis (👍, ❤️), agradecer, dar crédito ao revisor ao implementar a sugestão.
- **Testes vencem confiança cega:** familiaridade com o autor cria viés perigoso; "um teste verifica que o código funciona — você não precisa acreditar na palavra do autor".
- **PRs pequenos** reduzem fricção (espelha o guia do Google, tópico 17).
- **Self-review primeiro** e bom uso de **drafts** (draft = não pronto; ready = pronto para deploy). **CODEOWNERS** evita difusão de responsabilidade.

### 📌 Pontos de prova
- **Pergunte em vez de exigir; marque blockers vs opcionais; dê exemplos; afirme o que está bom.**
- Use "Request changes" com parcimônia (segurança/quebra de produção).
- **Testes derrubam viés**; PRs pequenos; tom colaborativo.

---

# Semana 04 — Git hooks, containers, 12-factor, segurança

## 20. Shift-left e Git hooks (Pro Git 8.3)

_(Pro Git 8.3 — https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks — lido diretamente.)_

### Conceito central
**Git hooks** são **scripts** que o Git executa automaticamente quando ações importantes ocorrem (commit, push, merge, receive...). Vivem em **`.git/hooks`** (templates `*.sample` são criados no `git init`; para ativar, renomeie removendo `.sample` e dê permissão de execução). Podem ser escritos em qualquer linguagem (shell, Python, Ruby...) (https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

> **Shift-left:** mover verificações (lint, testes, secrets) o **mais cedo possível** no fluxo — idealmente no momento do commit, antes mesmo do push/CI. Git hooks são o instrumento clássico de shift-left local.

### Client-side vs Server-side
- **Client-side (locais):** disparam em operações locais (commit, merge, push). ⚠️ **NÃO são copiados no `git clone`** — não servem para **forçar** política (por isso usa-se Husky para distribuí-los, tópico 21).
- **Server-side:** rodam no servidor durante o push; **podem rejeitar** o push e mandar erro ao cliente. São os que **realmente** impõem política.

### Hooks principais (caem em prova)
| Hook | Quando dispara | Uso típico | Aborta? |
|---|---|---|---|
| **pre-commit** | Antes de pedir a mensagem de commit | Lint, estilo, testes rápidos, trailing whitespace, **scan de secrets** | Sim (exit ≠ 0); burlável com `git commit --no-verify` |
| **prepare-commit-msg** | Antes de abrir o editor de mensagem | Pré-preencher mensagem (merge, squash, amend) | Sim |
| **commit-msg** | Antes do commit concluir | **Validar formato da mensagem** (ex.: Conventional Commits) | Sim (exit ≠ 0) |
| **post-commit** | Após o commit | Notificações | Não |
| **pre-push** | Durante `git push`, antes de transferir | Validar refs, rodar testes antes de enviar | Sim |
| **pre-receive** (server) | Ao receber um push | Controle de acesso, barrar non-fast-forward; rejeita **todas** as refs | Sim |
| **update** (server) | Uma vez por branch no push | Como pre-receive, mas por branch; rejeita **só aquela** ref | Sim |
| **post-receive** (server) | Após o push completar | Notificar CI, e-mail, atualizar issue tracker | Não |

### Por que importa
Hooks são a base do shift-left e da automação local: secrets scanning (Gitleaks), lint (lint-staged), validação de mensagem (commit-msg + Conventional Commits) — tudo antes do código sair da máquina.

### 📌 Pontos de prova
- Hooks são **scripts em `.git/hooks`**; **client-side não são clonados** (não forçam política sozinhos).
- **pre-commit** (antes da mensagem), **commit-msg** (valida a mensagem), **pre-push** (antes de enviar), **pre-receive/update** (no servidor, podem rejeitar o push).
- **`--no-verify`** burla hooks client-side. **Shift-left** = verificar cedo.

---

## 21. Husky, lint-staged e Gitleaks

_(Gitleaks — https://github.com/gitleaks/gitleaks — lido diretamente. Husky e lint-staged cobertos por conhecimento consolidado.)_

### Conceito central
**Husky** orquestra Git hooks de forma **versionada e compartilhada** (resolve o problema dos hooks não serem clonados); **lint-staged** roda verificações **apenas nos arquivos em stage**; **Gitleaks** é o scanner de **secrets**.

### Husky
- Instala hooks via npm e os mantém **dentro do repositório** (config versionada), de modo que todo dev recebe os mesmos hooks ao instalar dependências.
- Configura hooks como `pre-commit`, `commit-msg`, `pre-push` apontando para scripts/comandos.
- Exemplo `pre-commit`: `npx lint-staged`. Exemplo `commit-msg`: `npx commitlint --edit "$1"` (valida Conventional Commits).

### lint-staged
- Roda linters/formatters/testes **só nos arquivos staged**, em vez do projeto inteiro → muito mais rápido.
- Exemplo (`package.json`):
```json
{
  "lint-staged": {
    "*.{js,ts}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### Gitleaks
- **SAST de secrets**: encontra senhas, API keys, tokens em **repos git, arquivos e stdin** (https://github.com/gitleaks/gitleaks).
- **Como detecta:** regex + **análise de entropia (Shannon)** — alta entropia indica maior chance de ser segredo real (reduz falsos positivos).
- **Metadados de um achado:** Finding, Secret, RuleID, Fingerprint, Location (arquivo, linha, commit SHA, autor).
- **Modos:** scan de **git** (varre `git log -p`, todo o histórico), de **diretório/arquivo** e de **stdin**.
- **Configuração:** `.gitleaks.toml` (regras regex customizadas, thresholds de entropia, **allowlists** para suprimir falsos positivos).
- **Pre-commit:** integra como hook; commits com segredo **falham** (pode pular com `SKIP=gitleaks`).
- **CI/CD:** GitHub Actions (`gitleaks-action`), imagens Docker oficiais, CLI em pipelines. Suporta **baseline** (JSON que ignora achados já conhecidos e flagra só os novos) e relatórios em JSON/CSV/JUnit/**SARIF**.
- Nota: o projeto está em modo "feature-complete" (só patches de segurança); sucessor: **Betterleaks**.

### Por que importa
Combinação clássica de shift-left: **Husky** garante que o hook rode em todos os devs; **lint-staged** mantém rápido; **Gitleaks** impede que segredos vazem para o histórico (vazou no histórico → comprometido para sempre).

### 📌 Pontos de prova
- **Husky distribui hooks versionados** (resolve "hooks não são clonados"); **lint-staged limita ao stage** (velocidade); **Gitleaks varre secrets**.
- Gitleaks usa **regex + entropia**; varre **todo o histórico**; config em **`.gitleaks.toml`**; integra em **pre-commit e CI**.
- Segredo commitado **continua no histórico** mesmo se removido depois → previna no pre-commit.

---

## 22. Virtualização vs containers

_(Docker — https://www.docker.com/resources/what-container/ — lido diretamente.)_

### Conceito central
A diferença está em **onde fica o sistema operacional** e **quem faz o isolamento**. VMs virtualizam o **hardware** (cada VM tem um SO completo); containers virtualizam o **SO** (compartilham o kernel do host) (https://www.docker.com/resources/what-container/).

### As pilhas (stacks)
```
        VIRTUAL MACHINES                         CONTAINERS
 ┌───────────────────────────┐         ┌───────────────────────────┐
 │  App A  │  App B  │ App C  │         │  App A  │  App B  │ App C  │
 │  Bins/  │  Bins/  │ Bins/  │         │  Bins/  │  Bins/  │ Bins/  │
 │  Libs   │  Libs   │ Libs   │         │  Libs   │  Libs   │ Libs   │
 ├─────────┼─────────┼────────┤         ├─────────┴─────────┴────────┤
 │ Guest OS│ Guest OS│GuestOS │  (10s   │   Container Engine (Docker)│
 │ (cada VM tem 1 SO inteiro) │   de GB)├────────────────────────────┤
 ├───────────────────────────┤         │      Host OS (kernel)      │ (compartilhado)
 │        Hypervisor         │         ├────────────────────────────┤
 ├───────────────────────────┤         │       Hardware físico      │
 │       Hardware físico     │         └────────────────────────────┘
 └───────────────────────────┘            (imagens em 10s de MB)
```

### Quem faz o quê
| Aspecto | VM | Container |
|---|---|---|
| Camada de virtualização | **Hypervisor** (cria hardware virtual) | **Container engine** sobre o kernel do host |
| SO | **Um SO convidado completo por VM** (redundante) | **Kernel do host compartilhado** (eficiente) |
| Isolamento | Feito pelo **hypervisor** (hardware virtual por VM) | **Primitivas do Linux: namespaces (isolamento) + cgroups (limites de recurso)**; cada container é um **processo isolado em user space** |
| Tamanho | Dezenas de **GB** | Dezenas de **MB** |
| Boot | Lento (boota SO inteiro) | Rápido (reusa o kernel já rodando) |

### Benefícios dos containers
- **Leves** (compartilham o kernel → mais apps por máquina, menos custo de SO/licença).
- **Portáveis** ("roda igual independentemente da infraestrutura").
- **Eficientes** (mais densidade, menos VMs/SOs).
- **Isolados, mas compartilhando** o kernel.

### Containers + VMs juntos
Na prática, containers frequentemente rodam **dentro de VMs**: combina a flexibilidade dos containers com as fronteiras de segurança das VMs.

### 📌 Pontos de prova
- **VM = hypervisor + SO completo por VM (GB).** **Container = kernel do host compartilhado (MB).**
- Isolamento de container = **namespaces + cgroups** (Linux); de VM = **hypervisor**.
- Containers: leves, portáveis, rápidos; podem rodar **dentro de VMs**.

---

## 23. Boas práticas de Dockerfile

_(Docker — https://docs.docker.com/develop/develop-images/dockerfile_best-practices/ — lido diretamente.)_

### Conceito central
Construir imagens **pequenas, rápidas de buildar (cache), reproduzíveis e seguras**. O cache de build é a chave de performance; multi-stage é a chave de tamanho.

### Ordenação de camadas e cache
- Instruções são avaliadas **em sequência**; o Docker **reusa camadas em cache** enquanto a instrução (e o que ela depende) não muda.
- Regra de ouro: **ordene da menos para a mais frequentemente alterada**. Base e dependências de sistema primeiro; **código da aplicação por último**.
- **Cache busting do apt:** sempre combine `update` e `install` no **mesmo `RUN`** (senão o Docker reusa um `apt-get update` velho):
```dockerfile
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    nginx \
    && rm -rf /var/lib/apt/lists/*
```
- Cada `RUN` cria **uma camada** → combine comandos relacionados; limpe caches (`rm -rf /var/lib/apt/lists/*`) **no mesmo RUN** (senão o lixo persiste na camada).

### Multi-stage builds
Reduzem drasticamente o tamanho final separando **build** de **runtime**:
```dockerfile
# Estágio de build
FROM golang:1.20 AS builder
COPY . /src
RUN go build -o /app /src

# Estágio de runtime (só o binário)
FROM alpine:3.21
COPY --from=builder /app /app
CMD ["/app"]
```
A imagem final contém só o binário compilado, **não** o SDK inteiro.

### .dockerignore
Como `.gitignore`, exclui arquivos do **build context** (reduz contexto e evita vazar segredos):
```
*.md
.git
node_modules
.env
```

### Imagem base mínima
- Prefira bases pequenas (ex.: **Alpine**, < 6 MB) → downloads rápidos, **menor superfície de ataque**, menos CVEs.
- Bases de runtime podem ser mais "magras" que as de build.

### Versão / pinning
- Tags são mutáveis (`ubuntu:24.04` pode mudar com o tempo). Para integridade de supply chain, fixe por **digest**:
```dockerfile
FROM alpine:3.21@sha256:a8560b36e8b8...
```
- Trade-off: ao fixar digest você **opta por sair de correções automáticas** de segurança (ferramentas como Docker Scout automatizam atualização do digest).
- Pode fixar versão de pacotes: `RUN apt-get install -y s3cmd=1.1.*`.

### COPY vs ADD
- **COPY:** cópia simples do contexto/estágios — **preferível** na maioria dos casos.
- **ADD:** suporta URLs remotas, refs git e **extração automática de tar** — reserve para baixar artefatos remotos.

### Rodar como não-root
```dockerfile
RUN groupadd -r app && useradd --no-log-init -r -g app app
USER app
```
Evite `sudo`; se precisar elevar privilégio pontual, use `gosu`.

### Outras boas práticas
- `--pull` (puxa base atualizada), `--no-cache` (rebuild do zero), ordenar args multi-linha alfabeticamente, **rebuildar imagens regularmente** (incorporar patches), buildar e validar **no CI**.

### 📌 Pontos de prova
- **Ordene instruções da menos → mais mutável** para maximizar cache; **código por último**.
- **`apt-get update && install` no mesmo RUN** + limpeza no mesmo RUN (cada RUN = 1 camada).
- **Multi-stage** = imagem final pequena (só runtime). **.dockerignore** evita vazar segredos e reduz contexto.
- Base mínima (Alpine) = menos CVEs; **rodar como não-root**; **COPY > ADD**; pin por digest (com trade-off de patches).

---

## 24. Registry e vulnerabilidades (Trivy)

_(Trivy — https://github.com/aquasecurity/trivy — lido diretamente.)_

### Conceito central
**Trivy** (Aqua Security) é um **scanner de segurança open-source, abrangente e versátil**: encontra vulnerabilidades (CVEs), misconfigurations, secrets e licenças em vários alvos (https://github.com/aquasecurity/trivy). É a peça de **SCA + scan de imagem** do pipeline.

### O que escaneia (targets)
- **Imagens de container**
- **Filesystems** (projetos locais)
- **Repositórios git remotos**
- **Imagens de VM**
- **Clusters Kubernetes**

### O que encontra
- **CVEs** em **pacotes do SO** e em **dependências de linguagem** (gera **SBOM**).
- **Misconfigurations de IaC** (Terraform, Kubernetes, Dockerfile).
- **Secrets** e dados sensíveis.
- **Licenças** de software.

### Comandos
```bash
trivy image python:3.4-alpine                       # escaneia uma imagem do registry
trivy fs --scanners vuln,secret,misconfig myproj/   # escaneia filesystem (vuln + secret + config)
trivy config ./infra/                               # escaneia IaC (misconfig)
trivy k8s --report summary cluster                  # escaneia um cluster Kubernetes
```

### CVEs herdados de base images (ponto central da atividade)
- Toda imagem é construída **sobre uma base** (`FROM ubuntu`, `FROM node`...). **Vulnerabilidades da base são herdadas** pela sua imagem, mesmo que seu código seja perfeito.
- Por isso: use **bases mínimas** (Alpine/distroless), **rebuilde regularmente** para puxar patches, e **escaneie no CI** antes de fazer push ao registry.
- Fluxo recomendado no pipeline: `build → trivy image (gate) → push para registry` — falhe o pipeline se houver CVE CRITICAL/HIGH sem fix disponível ignorado.

### Por que importa
Liga Dockerfile best practices (base mínima) + 12-factor + DevSecOps + registry. O registry (Docker Hub, GitLab Registry) é onde imagens vivem; escanear antes/depois do push evita publicar imagens vulneráveis.

### 📌 Pontos de prova
- Trivy escaneia **imagens, filesystem, repos git, IaC e Kubernetes**; acha **CVEs (SO + deps), misconfig, secrets, licenças**; gera **SBOM**.
- **CVEs são herdados da base image** → base mínima + rebuild + scan no CI.
- Comandos: `trivy image`, `trivy fs`, `trivy config`, `trivy k8s`. SCA = análise de dependências/terceiros.

---

## 25. SAST no GitLab CI

_(GitLab — https://docs.gitlab.com/user/application_security/sast/ — lido diretamente.)_

### Conceito central
GitLab integra **SAST diretamente no pipeline de CI/CD** via `.gitlab-ci.yml`, detectando automaticamente as linguagens e rodando os analisadores apropriados (https://docs.gitlab.com/user/application_security/sast/).

### Habilitando
```yaml
# via template oficial
include:
  - template: Jobs/SAST.gitlab-ci.yml
```
```yaml
# via CI/CD component
include:
  - component: gitlab.com/components/sast/sast@main
```
- Por padrão, SAST roda em **branch pipelines** (configurável para MR pipelines).
- O template **detecta a linguagem** e escolhe o analisador.

### Analisadores e linguagens
- Suporte completo (Advanced SAST + analisador padrão): **C, C++, C#, Go, Java, JavaScript, PHP, Python, Ruby, TypeScript, YAML**.
- Só analisador padrão: Apex, Elixir, Groovy, Kotlin, Objective-C, Scala, Swift.
- Motores: **Semgrep** (regras gerenciadas pela GitLab), **GitLab Advanced SAST** (scan **cross-file/cross-function**), **SpotBugs** (JVM), PMD-Apex, Sobelow, Kubesec.

### Relatório e findings no MR
- Cada analisador gera um **relatório JSON** como artefato do job (schema definido pela GitLab).
- Findings aparecem no **widget do Merge Request** (novos vs resolvidos), na **Changes view** (marca a linha, tier Ultimate) e nos reports do MR.
- Distinção importante: findings nascem em **feature branches**; ao mergear na branch padrão, viram **vulnerabilities** (vulnerabilidades confirmadas).

### GitLab Advanced SAST (Ultimate)
- Scan **cross-file/cross-function** (segue fluxo de dados entre arquivos/funções → menos falsos positivos).
- **Detecção de falsos positivos** automática para crítico/alto e **resolução agêntica** (gera MRs com correções para High/Critical).

### Por que importa
É o exemplo concreto de **DevSecOps no pipeline**: segurança como **gate** automatizado dentro do MR, fechando o ciclo SAST (tópico 18) com Gitleaks (secrets) e Trivy (dependências/imagens).

### 📌 Pontos de prova
- Habilita-se com `include: template: Jobs/SAST.gitlab-ci.yml`; detecta linguagem automaticamente.
- Findings aparecem no **MR widget**; **finding (branch) → vulnerability (branch padrão)**.
- Motor principal: **Semgrep**; **Advanced SAST** faz **cross-file/cross-function** (Ultimate).
- Relatório = artefato **JSON**.

---

## 26. The Twelve-Factor App

_(12factor.net — https://12factor.net/ — lido diretamente.)_

### Conceito central
Metodologia (Adam Wiggins / Heroku) com **12 fatores** para construir **apps SaaS** portáveis, escaláveis e adequados a deploy contínuo na nuvem (https://12factor.net/).

### Os 12 fatores
| # | Fator | Resumo |
|---|---|---|
| I | **Codebase** | Uma base de código no controle de versão, **muitos deploys**. |
| II | **Dependencies** | **Declare e isole** dependências explicitamente (não dependa de pacotes do sistema). |
| III | **Config** | **Armazene config no ambiente** (env vars), separada do código. ⭐ |
| IV | **Backing services** | Trate serviços de apoio (banco, cache, fila) como **recursos anexados** intercambiáveis. |
| V | **Build, release, run** | **Separe estritamente** as etapas build, release e run. ⭐ |
| VI | **Processes** | Execute como **processos stateless** (sem estado em memória/disco local). |
| VII | **Port binding** | Exponha o serviço via **port binding** (app self-contained, sem servidor externo). |
| VIII | **Concurrency** | Escale **horizontalmente** pelo modelo de processos. |
| IX | **Disposability** | **Startup rápido e shutdown gracioso** (robustez, deploys rápidos). |
| X | **Dev/prod parity** | Mantenha dev, staging e prod **o mais parecidos possível**. ⭐ |
| XI | **Logs** | Trate logs como **streams de eventos** para stdout (o ambiente roteia/armazena). |
| XII | **Admin processes** | Rode tarefas administrativas como **processos one-off** no mesmo ambiente. |

### Aprofundamento dos três pedidos

**III — Config:** configuração é **tudo que varia entre deploys** (credenciais de banco, handles de serviços, chaves). Deve ficar em **variáveis de ambiente**, **nunca** hardcoded no código nem em arquivos versionados. Teste: você poderia **tornar o repositório público agora** sem vazar segredo? Se não, a config está no lugar errado. Permite que **o mesmo build** rode em dev/staging/prod só trocando as env vars. (Conecta com Gitleaks/secrets e com a connection string do App Insights.)

**V — Build, Release, Run:** três estágios **estritamente separados**:
- **Build:** transforma o código em um artefato executável (compila, baixa deps). Produz o **build** (imutável).
- **Release:** combina o **build + a config** daquele ambiente → gera um **release** identificado e imutável (ex.: v123).
- **Run:** executa o release no ambiente de execução.
- Regra: **não se altera código em runtime**; toda mudança gera novo build/release. Releases devem ter **rollback** trivial (voltar à release anterior). Isto é exatamente o que o Docker (build → image) + K8s (run) materializam.

**X — Dev/Prod Parity:** minimizar três "gaps": **tempo** (do commit ao deploy — horas, não semanas), **pessoal** (quem escreve também opera — DevOps), **ferramentas** (mesmos backing services em dev e prod, não SQLite em dev e Postgres em prod). Containers são a ferramenta-chave para garantir paridade ("roda igual em qualquer lugar"). Habilita **continuous deployment**.

### Por que importa
12-factor é o "manifesto" que amarra containers, K8s, CI/CD e config management. Quase todo princípio mapeia para uma prática vista no curso (config→env, build/release/run→Docker+pipeline, dev/prod parity→containers, disposability/processes→Pods).

### 📌 Pontos de prova
- Saiba **listar os 12** (ao menos reconhecer cada um) e o resumo.
- **III Config = env vars, separada do código** ("repo público sem vazar segredo").
- **V Build/Release/Run = estritamente separados**; release = build + config, imutável, com rollback.
- **X Dev/Prod parity = minimizar gaps de tempo/pessoal/ferramentas**; containers garantem.
- VI Processes (stateless) e IX Disposability casam com Pods do K8s.

---

## 27. Boas práticas para construir containers (Google Cloud)

_(Google Cloud — https://cloud.google.com/blog/products/containers-kubernetes/best-practices-for-building-containers — a URL retornou 404; tema coberto por conhecimento consolidado, pois é um artigo de referência amplamente conhecido.)_

### Conceito central
Google Cloud lista boas práticas para imagens **enxutas, seguras e bem-comportadas em produção/Kubernetes**. Complementa as best practices do Docker (tópico 23) com foco em **comportamento de processo** e **operação**.

### Práticas
1. **Empacote um único app por container.** "Uma preocupação por container" — facilita escala, logs e ciclo de vida independentes (alinhado ao 12-factor VI e ao Pod do K8s).
2. **Trate corretamente o PID 1, sinais e processos zumbis.** O processo principal do container roda como **PID 1** e deve **propagar sinais** (SIGTERM) para shutdown gracioso e **reapear** processos filhos órfãos. Use um init mínimo (`tini`) ou `exec` para o app virar PID 1. (Casa com 12-factor IX Disposability.)
3. **Otimize para o cache de build.** Ordene instruções da menos à mais mutável (mesma lógica do Docker).
4. **Remova ferramentas desnecessárias.** Menos binários = **menor superfície de ataque**; prefira imagens **distroless**/mínimas.
5. **Construa a menor imagem possível.** Multi-stage, base mínima.
6. **Use scanning de vulnerabilidades** (ex.: Trivy, Container/Artifact Registry scanning) antes/depois do push.
7. **Marque (tag) imagens corretamente** — **não confie só em `latest`**. Use tags semânticas/imutáveis (versão, git SHA) para deploys reproduzíveis e rollback (casa com 12-factor V).
8. **Imagens imutáveis.** Não modifique containers em runtime; reconstrua.

### 📌 Pontos de prova
- **Um app/uma preocupação por container.**
- **PID 1 + sinais + zumbis**: app precisa receber SIGTERM e fazer shutdown gracioso; cuidado com zumbis (use `tini`/`exec`).
- **Não use só `latest`** — tags imutáveis (versão/SHA) para reprodutibilidade e rollback.
- Imagem mínima + scanning + imutabilidade.

---

## 28. OWASP Top 10 (2021)

_(OWASP — https://owasp.org/Top10/2021/ — lista de categorias lida diretamente; descrições de A01/A03/A05 complementadas por conhecimento consolidado.)_

### Conceito central
**OWASP Top 10** é a lista de referência dos **10 riscos de segurança mais críticos** em aplicações web, atualizada periodicamente (https://owasp.org/Top10/2021/).

### As 10 categorias (2021)
| ID | Categoria |
|---|---|
| **A01** | **Broken Access Control** (Quebra de controle de acesso) — subiu para o nº 1 |
| A02 | Cryptographic Failures (Falhas criptográficas) |
| **A03** | **Injection** (Injeção — inclui XSS) |
| A04 | Insecure Design (Design inseguro) — categoria nova em 2021 |
| **A05** | **Security Misconfiguration** (Configuração de segurança incorreta) |
| A06 | Vulnerable and Outdated Components (Componentes vulneráveis/desatualizados) |
| A07 | Identification and Authentication Failures |
| A08 | Software and Data Integrity Failures |
| A09 | Security Logging and Monitoring Failures |
| A10 | Server-Side Request Forgery (SSRF) — nova em 2021 |

### Aprofundamento

**A01 — Broken Access Control:** usuários conseguem agir além das permissões pretendidas.
- Exemplos: **IDOR** (trocar `/conta/123` por `/conta/124` e ver dados de outro), elevação de privilégio (virar admin), acessar API sem checar autorização, **força bruta de URL/parametros**, CORS mal configurado.
- Prevenção: **negar por padrão** (deny by default), aplicar controle de acesso **no servidor** (nunca confiar no cliente), aplicar **ownership checks** por registro, **RBAC/ABAC** centralizado, logar falhas de acesso e alertar.

**A03 — Injection:** dados não confiáveis são interpretados como comando/consulta.
- Exemplos: **SQL Injection** (`' OR '1'='1`), NoSQL injection, OS command injection, **XSS** (injeção de script no navegador — incorporado a esta categoria em 2021).
- Prevenção: **queries parametrizadas / prepared statements** (nunca concatenar string em SQL), ORMs com binding, **validação e sanitização** de entrada (allowlist), **escaping** contextual na saída (anti-XSS), least privilege no banco.

**A05 — Security Misconfiguration:** configuração insegura ou padrão.
- Exemplos: contas/senhas padrão, serviços/portas desnecessários abertos, **mensagens de erro detalhadas** vazando stack trace, **headers de segurança ausentes**, permissões de cloud/bucket abertas, software com config default permissiva, **diretórios listáveis**.
- Prevenção: **hardening** repetível e automatizado, remover features/componentes não usados, **patch/atualização** contínua, revisar configs de nuvem, **segregar ambientes** com configs próprias, escanear config (Trivy `config`, IaC scanning). Liga diretamente com **configuration management** (tópicos 5/7) e **dev/prod parity** (12-factor X).

### Por que importa
OWASP é o vocabulário comum de AppSec. SAST (Gitleaks, GitLab SAST), Trivy e revisões de código existem em boa parte para **caçar exatamente estas categorias**.

### 📌 Pontos de prova
- Saiba que **A01 = Broken Access Control é o nº 1** de 2021; **A03 = Injection (com XSS)**; **A05 = Security Misconfiguration**.
- A01: deny-by-default, autorização no servidor. A03: **prepared statements/parametrização**. A05: **hardening + remover defaults + patches**.
- Categorias novas em 2021: **A04 Insecure Design** e **A10 SSRF**.

---

## 29. Twelve-Factor na prática (videoaulas)

**🎬 Vídeos confirmados:**
- Parte I — "Live #59: Twelve-Factor App: Boas Práticas na Nuvem (e também fora dela)" — https://www.youtube.com/watch?v=08a4HGT_n-U
- Parte II — "Live #60: Twelve-Factor App: Boas Práticas na Nuvem (e também fora dela) - Parte 2" — https://www.youtube.com/watch?v=lfxDjfg_WYI

### Conceito central
As duas lives discutem a metodologia **Twelve-Factor App** sob a ótica de **boas práticas para aplicações na nuvem (cloud-native) — "e também fora dela"**, ou seja: os 12 fatores não servem só para SaaS na nuvem, são boas práticas gerais de engenharia. A proposta é **aterrissar cada fator em decisões concretas** de projeto (onde guardar config, como tratar serviços de apoio, como separar build/run), tipicamente com containers + pipeline de CI/CD. A divisão em duas partes acompanha os 12 fatores: a **Parte I** abre a metodologia e percorre os primeiros fatores (codebase, dependências, config, backing services...); a **Parte II** fecha os fatores restantes (concorrência, descartabilidade, paridade dev/prod, logs, processos administrativos).

### O que as lives enfatizam
- **Origem e motivação:** metodologia criada por engenheiros da **Heroku (Adam Wiggins, 2011)** para guiar apps **escaláveis, manuteníveis e fáceis de implantar** na nuvem.
- **III Config no ambiente:** o ponto mais martelado — credenciais e tudo que **varia entre ambientes** vão para **variáveis de ambiente**, nunca hardcoded nem versionado (teste: "dá para tornar o repo público sem vazar segredo?").
- **IV Backing services como recursos anexados:** banco (PostgreSQL/MySQL/SQL Server), cache/NoSQL (Redis/MongoDB), mensageria (Kafka/Service Bus), monitoramento (Application Insights/Prometheus) — todos tratados como **recursos plugáveis e intercambiáveis** via URL/credencial, sem distinção entre local e gerenciado.
- **I Codebase:** **uma base de código versionada** (Git) por aplicação, com **múltiplos deploys** (dev/staging/prod) a partir dela.
- **Aplicação fora da nuvem também:** o recado de que seguir os 12 fatores melhora qualquer app, não só as hospedadas em cloud.

### Mapeamento prática ↔ fator
| Prática | Fator |
|---|---|
| Repositório Git único, deploys por ambiente | I Codebase |
| `package.json`/`requirements.txt`/`Cargo.toml` + container | II Dependencies |
| `.env` / variáveis de ambiente / secrets do CI | III Config |
| URL/credenciais de Postgres, Redis injetadas por env | IV Backing services |
| `docker build` (build) → tag/release (release) → `docker run`/K8s (run) | V Build/Release/Run |
| App sem sessão em memória; estado em Redis/DB | VI Processes |
| App escuta numa porta (`EXPOSE`/`PORT`) | VII Port binding |
| Réplicas/escala horizontal no K8s | VIII Concurrency |
| `SIGTERM` → shutdown gracioso; readiness/liveness probes | IX Disposability |
| Mesma imagem em dev/staging/prod | X Dev/Prod parity |
| `console.log`/stdout coletado pelo agregador | XI Logs |
| Migrations como job one-off | XII Admin processes |

### 📌 Pontos de prova
- Saiba **dar um exemplo concreto** de cada fator (a tabela acima).
- O conjunto **Docker + CI/CD + Kubernetes** implementa naturalmente o 12-factor.
- 12-factor nasceu na **Heroku (Wiggins, 2011)** para apps cloud, mas vale **"também fora da nuvem"** (boa prática geral).
- Fatores mais cobrados nas lives: **III Config (env vars)** e **IV Backing services (recursos anexados intercambiáveis)**.

**Fontes da busca:** [Parte I — Live #59 (YouTube)](https://www.youtube.com/watch?v=08a4HGT_n-U) · [Parte II — Live #60 (YouTube)](https://www.youtube.com/watch?v=lfxDjfg_WYI) · [The Twelve-Factor App (pt-br)](https://12factor.net/pt_br/)

---

# Semana 05 — Testes de integração e métricas DevOps

## 30. Testes de integração no pipeline

_(Renato Groffe — https://renatogroffe.medium.com/... — lido diretamente; complementado por conhecimento consolidado sobre a pirâmide de testes.)_

### Conceito central
O artigo (contexto .NET) apresenta tipos de teste e ferramentas, com foco em **testes unitários e comportamentais (BDD)**, mocks e automação em CI/CD (https://renatogroffe.medium.com/testes-de-software-com-net-5-exemplos-de-utiliza%C3%A7%C3%A3o-9b5514119ba2). Abaixo, complemento estruturado.

### A pirâmide de testes (conhecimento consolidado)
```
            /\        E2E / UI        ← poucos, lentos, caros, frágeis
           /  \       (Selenium, Cypress)
          /----\      Integração      ← médios; testam módulos juntos
         /      \     (API + banco real/containerizado)
        /--------\    Unitários       ← muitos, rápidos, baratos, isolados
       /__________\   (xUnit, JUnit, Jest)
```
- **Unitário:** testa a **menor unidade** isolada (função/classe), com **mocks** para dependências. Rápido e barato. Frameworks: xUnit/NUnit/MSTest (.NET), JUnit (Java), Jest (JS), pytest (Python).
- **Integração:** testa **vários componentes juntos** (ex.: serviço + banco real, chamadas entre módulos/API). É onde se pega erro de "as peças não se encaixam". Frequentemente usa **containers efêmeros** (ex.: Testcontainers) para subir banco/dependência real.
- **E2E:** simula o usuário do início ao fim, atravessando toda a stack. Poucos, pois são lentos e frágeis.

### Ferramentas e técnicas do artigo
- Frameworks: **xUnit** (`[Theory]` + `[InlineData]`), NUnit (`[TestCase]`), MSTest (`[DataTestMethod]`/`[DataRow]`) — testes **parametrizados**.
- **Mocks:** Moq (mais configurável) e NSubstitute (menos verboso) — isolam dependências.
- **Fluent Assertions:** asserções legíveis com mensagens customizadas.
- **BDD:** SpecFlow (testes a partir de user stories).
- **CI/CD:** automação via **GitHub Actions** e **Azure DevOps** (build → test → deploy).

### Onde testes se encaixam no pipeline de CI/CD
```
commit → pre-commit (lint/secrets) → CI: build → testes unitários → testes de integração
        → SAST/SCA → empacotar imagem → testes E2E (staging) → deploy → smoke tests (prod)
```
- **Unitários** rodam cedo e rápido (gate barato).
- **Integração** rodam após o build, frequentemente subindo dependências em containers.
- **E2E/smoke** em staging/produção.
- Testes automatizados **reduzem Change Failure Rate** e habilitam deploys frequentes (DORA).

### 📌 Pontos de prova
- **Pirâmide: muitos unitários (base) → integração (meio) → poucos E2E (topo).**
- **Teste de integração = componentes juntos** (serviço + banco/API); pega erros de "encaixe"; usa containers efêmeros.
- Testes parametrizados (`Theory/InlineData`), **mocks** (Moq/NSubstitute) isolam dependências.
- Testes no CI **reduzem CFR** e habilitam deploy frequente.

---

## 31. Medindo desempenho de CI/CD (JetBrains)

_(JetBrains — https://www.jetbrains.com/pt-br/teamcity/ci-cd-guide/devops-ci-cd-metrics/ — o corpo veio truncado; tema coberto por conhecimento consolidado.)_

### Conceito central
Além das 4 métricas DORA (resultado de entrega), há métricas **operacionais do pipeline** que ajudam a achar gargalos no próprio CI/CD.

### Métricas de CI/CD (consolidado)
| Métrica | O que mede | Por que importa |
|---|---|---|
| **Build duration** | Tempo total do build | Builds lentos atrasam feedback (e Lead Time). |
| **Build success rate** | % de builds verdes | Builds vermelhos crônicos = base instável. |
| **Queue/wait time** | Tempo na fila antes de executar | Falta de agentes/runners → gargalo. |
| **Test coverage** | % do código coberto por testes | Indica risco (não garante qualidade sozinha). |
| **Flaky tests** | Testes que falham de forma intermitente | Corroem a confiança no pipeline; mascaram bugs reais. |
| **Deployment frequency / Lead time / CFR / MTTR** | (DORA) | Resultado da entrega. |
| **Mean time to detection** | Tempo até detectar um problema | Conecta com observabilidade. |

### Como melhorar
- **Builds rápidos:** paralelização, cache de dependências e de camadas Docker, dividir testes, builds incrementais.
- **Reduzir flaky tests:** isolar testes, controlar estado/tempo, quarentenar e corrigir.
- **Reduzir fila:** mais runners/autoscaling.
- **Subir success rate:** gates, "não deixar o build vermelho", política de "stop the line".

### 📌 Pontos de prova
- Métricas de **pipeline** (build duration, success rate, queue time, flaky tests, coverage) complementam o **DORA** (entrega).
- **Flaky tests** corroem a confiança no CI; cobertura **não é garantia** de qualidade.
- Acelerar build = cache (deps + camadas Docker) + paralelização.

---

## 32. Métricas do DevOps (Atlassian)

_(Atlassian pt-br — https://www.atlassian.com/br/devops/frameworks/devops-metrics — corpo truncado; coberto por conhecimento consolidado; ver tópicos 11–13.)_

### Conceito central
A Atlassian organiza as métricas DevOps em torno das **4 do DORA** + métricas de confiabilidade, com a mensagem de que métricas guiam **melhoria contínua de fluxo e qualidade**, não vigilância individual.

### Métricas destacadas
- **Frequência de implantação** (velocidade).
- **Lead time para mudanças** (velocidade).
- **MTTR / tempo de recuperação** (estabilidade).
- **Taxa de falha de mudança** (estabilidade).
- **Disponibilidade / uptime** (confiabilidade percebida).
- **Tempo de detecção (MTTD)** e cobertura de testes (qualidade preventiva).

### Interpretação
- Ler **velocidade e estabilidade em conjunto** (não otimizar uma destruindo a outra).
- Usar como **diagnóstico de gargalo** e baseline para experimentos de melhoria.
- Cultura **blameless**: métrica de **sistema/time**, não de pessoa.

### 📌 Pontos de prova
- As **4 DORA** são o núcleo; Atlassian acrescenta **disponibilidade** e **tempo de detecção**.
- Métricas servem para **melhoria contínua**, lidas em conjunto (velocidade + estabilidade).

---

## 33. DevOps na prática (podcast)

_(Podcast no Spotify "Compreendendo DevOps na prática". Não acessível diretamente — coberto por conhecimento consolidado.)_

### Conceito central
**DevOps** é uma **cultura + conjunto de práticas** que unifica **Desenvolvimento (Dev)** e **Operações (Ops)** para entregar software com **mais velocidade, qualidade e confiabilidade**, derrubando os silos tradicionais.

### Pilares (CALMS) e o "infinito" DevOps
- **CALMS:** **C**ulture (colaboração, sem culpa) · **A**utomation (CI/CD, IaC, testes) · **L**ean (fluxo, reduzir desperdício) · **M**easurement (DORA, observabilidade) · **S**haring (conhecimento compartilhado).
- **Ciclo infinito:** Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → (volta ao Plan). O monitoramento realimenta o planejamento.

### Importância nas corporações
- **Time-to-market** menor (deploys frequentes, automação).
- **Qualidade e confiabilidade** (testes + observabilidade + SRE).
- **Eficiência de custo** e **escalabilidade** (containers, cloud, IaC).
- **Cultura de melhoria contínua** medida por DORA.
- Habilita **DevSecOps** (segurança integrada) e **SRE** (confiabilidade como engenharia).

### 📌 Pontos de prova
- **DevOps = cultura + práticas** unindo Dev e Ops; não é uma ferramenta nem um cargo isolado.
- **CALMS** e o **ciclo infinito** (monitoramento realimenta o planejamento).
- DevOps habilita **CI/CD, IaC, DevSecOps e SRE**.

---

# Semana 08 — Infraestrutura como Código / Terraform

## 34. Build infrastructure (Terraform AWS)

_(HashiCorp — https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build — lido diretamente.)_

### Conceito central
O tutorial mostra como **escrever e aplicar** uma configuração Terraform que cria uma instância EC2 na AWS, exercitando o **workflow init → fmt → validate → apply → show** (https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build).

### Estrutura de uma configuração (HCL)
**Bloco `terraform`** (configura o próprio Terraform e os providers):
```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92"     # major 5, minor >= 92
    }
  }
  required_version = ">= 1.2"
}
```
**Bloco `provider`** (config do provedor de nuvem; autenticação via env vars `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY`):
```hcl
provider "aws" {
  region = "us-west-2"
}
```
**Bloco `data`** (consulta recurso existente, ex.: AMI Ubuntu mais recente):
```hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }
  owners = ["099720109477"]
}
```
**Bloco `resource`** (define infraestrutura a criar):
```hcl
resource "aws_instance" "app_server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  tags = {
    Name = "learn-terraform"
  }
}
```
> Sintaxe do resource: `resource "<TIPO>" "<NOME_LOCAL>" { ... }`. O tipo (`aws_instance`) vem do provider; o nome local (`app_server`) é referência interna.

### Comandos do workflow
```bash
terraform init      # baixa/instala providers; cria .terraform.lock.hcl (reprodutibilidade)
terraform fmt       # reformata arquivos ao padrão HashiCorp
terraform validate  # checa sintaxe e consistência interna
terraform apply     # gera plano, pede confirmação e cria a infra
terraform show      # exibe o state (propriedades reais da infra)
terraform destroy   # destrói tudo o que foi criado
```

### 📌 Pontos de prova
- Blocos: **`terraform` (required_providers/version)**, **`provider`**, **`data`** (consulta), **`resource`** (cria).
- Sintaxe resource: `resource "tipo" "nome_local" {}`.
- Workflow: **init → fmt → validate → apply → (show) → destroy**.
- `init` cria o **lock file**; autenticação AWS via **env vars**.

---

## 35. O que é o Terraform? (IBM)

_(IBM — https://www.ibm.com/br-pt/topics/terraform — a página retornou HTTP 403; tema coberto por conhecimento consolidado e pelas páginas da HashiCorp lidas diretamente.)_

### Conceito central
**Terraform** (HashiCorp) é a ferramenta de **IaC** que provisiona e gerencia infraestrutura de forma **declarativa**, usando a linguagem **HCL (HashiCorp Configuration Language)**, com um **state** que rastreia o mundo real.

### Como funciona
- **Providers:** plugins que traduzem HCL em chamadas de API (AWS, Azure, GCP, Kubernetes, +1000 providers).
- **HCL declarativo:** você descreve o **estado desejado**; o Terraform calcula o **diff** e aplica.
- **State (`terraform.tfstate`):** "fonte da verdade" do que o Terraform gerencia; permite calcular mudanças entre atual e desejado. **Sensível** (pode conter segredos) → usar **remote state** (S3, Terraform Cloud) com locking em equipe.
- **Plan/Apply:** `plan` mostra o que mudará **antes** de mudar; `apply` executa.
- **Idempotência:** aplicar a mesma config repetidamente converge ao mesmo estado (sem efeitos colaterais extras).
- **Infraestrutura imutável:** mudanças tendem a **recriar** recursos em vez de alterar in-place (reduz drift e surpresas).

### Terraform vs ferramentas de configuração
| | Terraform (provisioning/IaC) | Ansible/Puppet/Chef (config mgmt) |
|---|---|---|
| Foco | **Criar/destruir** infraestrutura (VMs, redes, buckets) | Configurar software **dentro** de máquinas existentes |
| Estilo | Declarativo + state | Declarativo/procedural |
| Imutável vs mutável | Tende a **imutável** | Tende a **mutável** |

### 📌 Pontos de prova
- Terraform = **IaC declarativa em HCL**, multi-cloud via **providers**, com **state** e **plan/apply**.
- **Idempotência** e **infraestrutura imutável**.
- **State é sensível** → remote state + locking. Terraform **provisiona**; Ansible/Puppet/Chef **configuram** (sobreposição parcial).

---

## 36. Terraform em 10 minutos (videoaula)

**🎬 Vídeo confirmado:** "Terraform em 10 Minutos // Dicionário do Programador" — canal **Dicionário do Programador** (Fabio Akita) — https://www.youtube.com/watch?v=0EAjJe8aPkc

### Conceito central
O vídeo do **Dicionário do Programador** (série de explicações curtas do Akita) é uma **introdução conceitual rápida ao Terraform e ao IaC**: a ideia de que **hoje é possível criar e gerenciar infraestrutura de servidores usando apenas código** (arquivos de texto declarativos), em vez de clicar manualmente no console da nuvem. O recado central é o **ganho de reprodutibilidade**: a mesma definição em código recria o ambiente inteiro de forma consistente, versionável e auditável.

### O que o vídeo apresenta
- **IaC (Infraestrutura como Código):** prática de **provisionar, configurar e gerenciar** recursos de infraestrutura por meio de **arquivos de definição legíveis por máquina** — em vez de processos manuais.
- **Terraform (HashiCorp):** ferramenta **open-source** que define e provisiona infraestrutura usando uma **linguagem de configuração declarativa simples (HCL)** — arquivos com extensão **`.tf`**.
- **Providers (provedores):** os arquivos `.tf` declaram os **providers** (AWS, Google Cloud, Azure, etc.) que sabem conversar com cada nuvem.
- **Resources (recursos):** os elementos que você quer criar — **máquinas virtuais, redes, bancos de dados** — descritos como blocos `resource`.
- **State (`.tfstate`):** além dos `.tf`, o Terraform mantém um arquivo de **estado (`.tfstate`)** que registra o que já foi criado no mundo real, permitindo calcular o diff entre o desejado e o existente.
- **Declarativo:** você descreve o **estado final** desejado e o Terraform descobre **como** chegar lá (cria/altera/destrói o necessário).

### Pontos práticos
- Demonstração típica: escrever `main.tf` → `terraform init` → `terraform plan` → `terraform apply` → verificar no provedor → `terraform destroy`.
- Estruture o projeto: `main.tf`, `variables.tf`, `outputs.tf`, `terraform.tfvars`.
- **Versione os `.tf`** no Git (mas **NÃO** versione `.tfstate` com segredos nem `*.tfvars` com credenciais — use `.gitignore`/secrets).
- **Variáveis** (`variable`) e **outputs** (`output`) tornam a config reutilizável.
- `terraform plan` é o "ensaio"; revise sempre antes do `apply` (vira até gate de CI: `plan` no MR, `apply` no merge).

### 📌 Pontos de prova
- **Terraform = IaC declarativa em HCL** (`.tf`); cria infra "via código" em vez de cliques no console.
- Trio do vídeo: **provider** (a nuvem), **resource** (o que criar), **state/`.tfstate`** (o que já existe).
- **Commitar `.tf`, NÃO commitar `.tfstate`/segredos.**
- `variables.tf` + `outputs.tf` + `terraform.tfvars` = config parametrizada e reutilizável.
- `plan` antes de `apply` (revisão de mudança).

**Fontes da busca:** [Vídeo "Terraform em 10 Minutos" (Dicionário do Programador)](https://www.youtube.com/watch?v=0EAjJe8aPkc) · [Terraform em 10 minutos — guia (virtsoft)](https://virtsoft.com.br/terraform-em-10-minutos/) · [IaC com Terraform — princípios básicos (Medium)](https://medium.com/@habbema/iac-com-terraform-dea7dc57712e)

---

## 37. O que é IaC com Terraform?

_(HashiCorp — https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code — lido diretamente.)_

### Conceito central
**Infraestrutura como Código (IaC)** permite "construir, mudar e gerenciar infraestrutura de forma segura, consistente e repetível, definindo configurações de recursos que você pode **versionar, reusar e compartilhar**" (https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code).

### Benefícios
- **Versionamento e colaboração:** configs no controle de versão → trilha de auditoria e colaboração segura, como código de aplicação.
- **Multi-plataforma:** +1000 providers (AWS/Azure/GCP/K8s...) sob uma **linguagem e workflow únicos**.
- **Reprodutibilidade e consistência:** abordagem declarativa torna deploys previsíveis; o **state** permite ao Terraform "determinar as mudanças necessárias para a infra bater com a configuração".

### Declarativo vs procedural
- **Declarativo (Terraform):** você especifica o **estado final desejado**; o sistema calcula dependências e ordem de execução automaticamente.
- **Procedural/imperativo:** você escreve os **passos** explícitos.

### Workflow Terraform (5 passos da fonte)
1. **Scope** — identificar a infra necessária.
2. **Author** — escrever os arquivos de config.
3. **Initialize** — instalar plugins/providers (`terraform init`).
4. **Plan** — pré-visualizar as mudanças (`terraform plan`).
5. **Apply** — executar (`terraform apply`).

### State management
O **state file** funciona como "fonte da verdade do ambiente", rastreando a infra real e habilitando o cálculo preciso de mudanças entre o atual e o desejado.

### 📌 Pontos de prova
- **IaC = versionar/reusar/compartilhar infra** como código (auditoria, reprodutibilidade).
- **Declarativo (estado desejado) ≠ procedural (passos)**.
- Workflow: **Scope → Author → Initialize → Plan → Apply**; **state = fonte da verdade**.

---

## 38. Instalar o Terraform

_(HashiCorp — https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli — lido diretamente.)_

### Comandos por SO
**macOS (Homebrew):**
```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```
**Linux (Ubuntu/Debian, apt):**
```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common
wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt-get install terraform
```
**Windows (Chocolatey):**
```bash
choco install terraform
```

### Verificar e autocompletar
```bash
terraform -help               # confirma instalação (lista comandos)
terraform -version            # mostra a versão
touch ~/.zshrc                # (ou ~/.bashrc)
terraform -install-autocomplete   # habilita tab completion; reinicie o shell
```

### 📌 Pontos de prova
- macOS = **Homebrew (tap hashicorp)**; Linux = **apt + repo + GPG key**; Windows = **Chocolatey**.
- Verificar: `terraform -version` / `terraform -help`. Autocomplete: `terraform -install-autocomplete`.

---

# Semana 09 — OpenChoreo (atividade ponderada)

## 39. OpenChoreo quick start

_(OpenChoreo — https://openchoreo.dev/docs/getting-started/quick-start-guide/ — lido diretamente; itens da atividade ponderada complementados por conhecimento consolidado.)_

### Conceito central
**OpenChoreo** é uma **Internal Developer Platform (IDP) sobre Kubernetes** — abstrai a complexidade do K8s para que devs implantem aplicações via abstrações de alto nível, com UI (Backstage) unificada (https://openchoreo.dev/docs/getting-started/quick-start-guide/).

### Abstrações centrais (caem na atividade)
| Conceito | O que é |
|---|---|
| **Project** | Unidade organizacional que agrupa componentes e deployments relacionados. Um project default é criado na instalação. |
| **Component** | Unidade deployável da aplicação. Tipos: **Service** (backend/API), **Web Application** (frontend), **Scheduled Task** (tarefa periódica/cron). |
| **Component Workload** | A especificação de runtime do componente (imagem, portas, recursos, variáveis) — o que de fato executa no plano de dados. |
| **Deployment Track** | Trilha de evolução/versão de um componente (ex.: ligada a uma branch/linha de release) que progride pelos ambientes. |
| **Environment** | Alvo de deploy (Development, Staging, Production), provisionados na instalação. |
| **Cluster Data Plane** | Onde os componentes efetivamente rodam (runtime Kubernetes). |
| **Cluster Workflow Plane** | Capacidades de CI/CD ("build and deploy from source", com a flag `--with-build`). |

### Quick start (passos)
1. Subir o dev container com Docker.
2. Rodar o script de instalação (cria cluster k3d + deploy via Helm).
3. Implantar uma app React de exemplo via script.
4. Acessar a **Backstage UI** em localhost (auth via ThunderID).
5. Explorar CI/CD e observabilidade (flags opcionais).
6. Limpar recursos com o script de uninstall.

### Itens da atividade ponderada (conhecimento consolidado)
- **Conventional Commits:** padrão de mensagem `tipo(escopo): descrição` (ex.: `feat(auth): add login`, `fix: corrige null pointer`). Tipos comuns: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`. Habilita **changelog e SemVer automáticos** e é validável via hook **commit-msg** (commitlint). (Liga ao tópico 20/21.)
- **Varredura de secrets com TruffleHog:** scanner de secrets (alternativa ao Gitleaks) que vasculha repositórios, histórico e até **verifica se a credencial encontrada é válida/ativa** (verification). Roda em pre-commit e/ou no pipeline antes de buildar a imagem.
- **GitLab Registry / Docker Hub:** a imagem buildada é publicada num **container registry** (GitLab Container Registry ou Docker Hub) via `docker push`; o registry é a fonte das imagens que o OpenChoreo/K8s puxa para rodar (Component Workload aponta para a imagem no registry).
- **MR com pipeline verde:** a entrega segue por **Merge Request**; o pipeline (lint + secrets scan + testes + SAST + build + push) precisa ficar **verde** antes do merge — é o **gate de qualidade/segurança**. Pipeline vermelho bloqueia o merge.

### Por que importa
OpenChoreo é a **síntese aplicada** do curso: junta Git (Conventional Commits, hooks), segurança (TruffleHog), containers (registry), Kubernetes (data plane) e o conceito de **ambientes/trilhas de deploy** num fluxo de plataforma — exatamente o pipeline ponta-a-ponta.

### 📌 Pontos de prova
- Hierarquia: **Project → Components (Service / Web App / Scheduled Task) → Deployment Tracks → Environments**; **Component Workload** = spec de runtime; **Data Plane** roda, **Workflow Plane** faz CI/CD.
- OpenChoreo = **IDP sobre Kubernetes** (abstrai K8s; UI Backstage).
- Atividade: **Conventional Commits** (validável em commit-msg), **TruffleHog** (secrets, com verificação de validade), **push da imagem para registry** (GitLab/Docker Hub), **MR com pipeline verde** = gate.

---

# Síntese: o pipeline de ponta a ponta

Os tópicos não são ilhas — formam **um único fluxo** do código à operação confiável. Veja como tudo se conecta:

```
[ SDLC / ALM ]  define as fases (plan → ... → maintain) e a governança (Jira/GitLab).
      │
      ▼
[ Configuração + SCM ]  controle de versões, mudanças e releases; combater configuration drift
      │                  (estado desejado, declarativo, CMDB/ITSM).
      ▼
[ Código limpo + Git hooks (shift-left) ]  Husky distribui hooks; lint-staged acelera;
      │   commit-msg valida Conventional Commits; Gitleaks/TruffleHog barram secrets — TUDO antes do push.
      ▼
[ CI: build + testes + segurança ]  pirâmide de testes (unit → integração → E2E);
      │   SAST (GitLab SAST/Semgrep), SCA + scan de imagem (Trivy → CVEs herdados de base images);
      │   OWASP Top 10 como alvo. Code review (CLs pequenos, perguntar > exigir). MR só mergeia com PIPELINE VERDE.
      ▼
[ Containers (Docker) ]  Dockerfile best practices (cache, multi-stage, base mínima, não-root);
      │   container = kernel compartilhado (namespaces+cgroups) vs VM (hypervisor+SO).
      │   Push da imagem ao REGISTRY (GitLab/Docker Hub).
      ▼
[ 12-Factor App ]  Config em env vars (III); Build/Release/Run separados (V) ← Docker materializa;
      │   Dev/Prod parity (X) ← containers garantem; processes stateless + disposability ← Pods.
      ▼
[ Kubernetes ]  Cluster → Nós → Pods; declarativo + self-healing + rollouts/rollbacks.
      │   K8s NÃO faz CI/CD: ele RODA o que o pipeline entregou (build/release/run).
      ▼
[ IaC / Terraform ]  a própria infra (cluster, redes, buckets) é código declarativo (HCL),
      │   versionada, com state como fonte da verdade; plan antes de apply.
      ▼
[ Observabilidade ]  3 pilares (logs, métricas, traces) via OpenTelemetry/App Insights →
      │   alimentam detecção de falhas e medição.
      ▼
[ Métricas DORA ]  throughput (Deployment Frequency, Lead Time) + stability (Change Failure Rate, MTTR).
      │   Four Keys automatiza a coleta. "Velocidade e estabilidade NÃO são tradeoffs."
      ▼
[ SRE ]  camada sobre o DevOps: SLI → SLO → SLA, Error Budget (=1−SLO) regula o ritmo de releases,
      │   limita toil, postmortems blameless. Fecha o loop de confiabilidade.
      ▼
[ OpenChoreo ]  amarra tudo numa IDP sobre Kubernetes: Project → Components → Deployment Tracks →
          Environments, com Conventional Commits + secrets scan + registry + MR verde.
```

### As cinco ideias que atravessam toda a prova
1. **Declarativo + estado desejado** aparece em config management, 12-factor, Kubernetes e Terraform: você descreve **o quê**, a ferramenta converge.
2. **Shift-left de segurança e qualidade**: hooks → SAST/SCA → scan de imagem → gate no MR. Achar cedo é mais barato (DevSecOps; AWS/OWASP).
3. **Separação build/release/run + imutabilidade**: 12-factor V, Docker (imagem imutável), tags não-`latest`, Terraform (infra imutável), releases com rollback.
4. **Velocidade E estabilidade juntas** (não tradeoff): DORA, testes automatizados, observabilidade e SRE existem para entregar **rápido sem quebrar**.
5. **Containers como denominador comum**: garantem dev/prod parity, viabilizam K8s, e são o artefato que viaja do CI ao registry à produção.

> Dica final de prova: para cada conceito, saiba (a) a **definição em uma frase**, (b) **uma distinção** que costuma ser pegadinha (ex.: container C4 ≠ container Docker; SDLC ⊂ ALM; SAST ≠ DAST ≠ SCA; finding ≠ vulnerability; SRE implementa DevOps; K8s não faz CI/CD), e (c) **onde ele se encaixa no pipeline** acima.
