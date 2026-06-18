# Revisão para Prova — Sistemas de Informação e Gestão de Negócios (Prof. Egon, eixo NEG)

> Material de revisão condensado em pt-BR, derivado de `06-egon-sistemas-negocios-neg.md`.
> Escopo: Semanas 03 (SI/ERP/CRM), 04 (Lean Seis Sigma), 06 (produtividade/futuro do trabalho), 07 (tributos), 09 (estruturas societárias).

---

## Parte 1 — Cola condensada

### SIG — Sistemas de Informação Gerenciais (papel na decisão)

- **Sistema de Informação (SI):** conjunto de **pessoas, processos, dados, hardware e software** que coleta, processa, armazena e distribui informação para apoiar **decisão, coordenação e controle**.
- **SIG / MIS (Management Information System):** categoria de SI que entrega **informação estruturada aos gestores** — relatórios **resumidos e periódicos** que viram indicadores. É a parte do SI que serve o nível **tático/gerencial**.
- **Dado ≠ informação:** dado é o fato bruto ("vendeu 300 unidades"); informação é dado **processado e contextualizado** ("vendas caíram 12% no Sudeste").
- **Três níveis de decisão** — quanto mais alto, mais a decisão é **não estruturada/incerta** e a informação mais **agregada, externa e prospectiva**:
  - **Operacional** (supervisores) → decisão estruturada/rotineira, curto prazo.
  - **Tático/gerencial** (gerência média) → semiestruturada, médio prazo.
  - **Estratégico** (diretoria) → não estruturada, longo prazo.

| Sigla | Nome | Nível | O que faz |
|---|---|---|---|
| **SPT / TPS** | Proc. de Transações | Operacional | Registra transações diárias rotineiras (PDV, folha) |
| **SIG / MIS** | Inf. Gerencial | Tático | Relatórios resumidos/periódicos a partir do SPT |
| **SAD / DSS** | Apoio à Decisão | Tático/estratégico | Modelos, simulações, cenários "e se...?" |
| **SE / EIS / ESS** | Especialista / Apoio ao Executivo | Estratégico | Dashboards de KPIs; base de conhecimento + regras |

- **Cadeia de dependência:** **TPS alimenta MIS e DSS**. Sem registro confiável da transação, não há relatório nem análise. ("transação → relatório → decisão").

### ERP × CRM

- **ERP (Enterprise Resource Planning):** **software integrado** que unifica os processos de negócio numa **única base de dados central**. É o **"sistema de registro" / fonte única da verdade**. Derruba os **silos de dados** (ilhas de informação). Foco **interno** (back-office, eficiência).
  - **Módulos:** Financeiro/Contábil, **RH (HCM)**, Manufatura/Produção (MRP), Cadeia de Suprimentos (SCM), Vendas/Distribuição. Um evento percorre vários módulos **sem reentrada de dados**.
  - **Implantação:** on-premise (local), cloud (SaaS), híbrido.
- **CRM (Customer Relationship Management):** **estratégia + práticas + tecnologia** centradas no cliente. Conceito-âncora: **visão 360°** do cliente (histórico unificado). Foco **externo** (relacionamento, mercado).
  - **Três áreas:** **Vendas** (funil/pipeline, forecast), **Marketing** (**segmentação**, campanhas, automação), **Atendimento** (tickets, SAC omnichannel).
- **Relação:** **complementares**, não concorrentes. ERP olha para **dentro** (recursos/processos); CRM olha para **fora** (cliente). Quem só tem CRM vende bem e entrega mal; quem só tem ERP entrega bem e vende mal.

| Critério | **ERP** | **CRM** |
|---|---|---|
| Foco | Interno (processos/recursos) | Externo (cliente/mercado) |
| Conceito-chave | Base única / sistema de registro | Visão 360° do cliente |
| Combate | Silos de informação | Comunicação genérica "tamanho único" |
| Atende | Finanças, RH, produção, SCM, vendas | Vendas, marketing, atendimento |
| Métrica | Eficiência, custo, conformidade | Conversão, retenção, LTV, ROI |
| Pioneira citada | SAP | Salesforce (CRM em nuvem/SaaS) |

### Questão de Negócios 1 — Módulo de RH (ERP) × Segmentação (CRM)

- **RH do ERP → valor PARA DENTRO:** capital humano, eficiência operacional, conformidade trabalhista, planejamento de força de trabalho, trilhas de carreira. Retorno por **redução de custo/risco** (difuso, médio prazo).
- **Segmentação do CRM → valor PARA FORA:** divide a base de clientes em grupos (valor/LTV, comportamento, funil, perfil) para tratar clientes diferentes de formas diferentes. Retorno por **aumento de receita** (mensurável, curto prazo).
- **Paralelo elegante:** ambos são **motores de personalização baseada em dados** — RH personaliza para o **colaborador**, CRM personaliza para o **cliente**. Diferença = **sujeito** e **fronteira** da empresa.
- **Conclusão esperada:** **complementaridade / integração ERP↔CRM**, não escolha excludente.

### Lean Seis Sigma

- **Seis Sigma (6σ):** metodologia de **qualidade orientada a dados** que **reduz variabilidade e defeitos**. **Sigma (σ) = desvio-padrão = variação**; quanto **maior o nível sigma, menor a variação**. **6σ = 3,4 defeitos por milhão (DPMO) = 99,99966%** de conformidade. O "inimigo" é a **variação**.
  - Origem: **Motorola** (Bill Smith, anos 80); escalado pela **GE** (Jack Welch, anos 90).
  - Papéis ("cintos"): White/Yellow → **Green Belt** → **Black Belt** → **Master Black Belt** → **Champion/Sponsor**.
- **DMAIC** = roteiro de 5 fases para **melhorar processo existente**:
  1. **D — Define (Definir):** problema, escopo, meta, **voz do cliente (VOC)**.
  2. **M — Measure (Medir):** desempenho atual / baseline, coleta de dados, nível sigma.
  3. **A — Analyze (Analisar):** **causas-raiz** (Ishikawa, 5 Porquês, Pareto).
  4. **I — Improve (Melhorar/Incrementar):** desenvolver, testar e implementar soluções.
  5. **C — Control (Controlar):** **sustentar o ganho**, evitar regressão ("efeito sanfona") — cartas de controle, poka-yoke.
  - **Não confundir com DMADV** (Define, Measure, Analyze, **Design, Verify**) = **projetar** processo/produto **novo** (DFSS). DMAIC = melhorar o que existe.
- **Lean (Manufatura Enxuta):** vem do **Sistema Toyota de Produção**; **maximiza valor eliminando desperdício (muda)**.
- **Lean Seis Sigma:** Lean ataca **desperdício** (velocidade/fluxo) + Seis Sigma ataca **variação** (qualidade) = processos **rápidos E precisos**.

**Os 7 desperdícios do Lean (muda) — mnemônico "TIM WOOD":**
1. **T**ransporte — mover material sem necessidade.
2. **I**nventário (estoque) — capital parado, obsolescência.
3. **M**ovimentação — deslocamento desnecessário de pessoas/equipamentos.
4. **W**aiting (espera) — tempo ocioso aguardando material/aprovação.
5. **O**verproduction (superprodução) — produzir além/antes da demanda → **o pior**, pois gera os outros.
6. **O**ver-processing (superprocessamento) — fazer mais do que o cliente exige.
7. **D**efeitos — retrabalho, refugo, correção.
> Há um **8º** moderno: **não aproveitamento do talento/conhecimento das pessoas**.

### Paradoxo da produtividade (Solow) e futuro do trabalho

- **Paradoxo de Solow (1987):** *"Vemos a era dos computadores em toda parte, exceto nas estatísticas de produtividade."* Apesar do investimento maciço em TI, os ganhos de produtividade esperados **não apareciam** nas estatísticas. Solow = Nobel 1987, autor do **modelo de crescimento de Solow**.
- **Explicações:** **(1) defasagem temporal** (tecnologia de propósito geral exige anos de reorganização — caso da eletricidade); **(2) erro de mensuração** (PIB não capta valor digital/grátis); **(3) redistribuição** (desloca lucro, não cria); **(4) dispersão** (poucas empresas de fronteira capturam o ganho).
- **"Novo paradoxo da produtividade"** (Fernando Veloso, FGV/IBRE): inovação intensa (IA/automação) **+** produtividade desacelerada **+** medo de desemprego em massa.
  - Dados: produtividade EUA caiu de **2,8% (1995–2004) → 1,3% (2005–2016)**; OCDE **2,3% → 1,1%**.
  - Automação: **McKinsey ~45%** dos trabalhadores dos EUA; **Banco Mundial até 57%** dos empregos da OCDE.
  - **Duas visões:** **Gordon = pessimista** (inovação digital vale menos que eletricidade/motor); **Brynjolfsson, Rock & Syverson = otimistas da defasagem** (ganho existe, mas está atrasado pela reorganização). **Acemoglu & Restrepo:** robôs têm **impacto negativo** sobre emprego/salário.
  - **Conclusão:** o desfecho depende de **políticas, educação/capacitação e ambiente de negócios** — não da tecnologia em si. Vale para o Brasil.
- **Solow no vídeo (MIT Work of the Future, 2020):** visão **moderada** — automação **transforma** o trabalho, não o **destrói em massa**; o problema real é a **partilha da prosperidade** (ganhos não chegam ao trabalhador comum); desfecho depende de **instituições e políticas**.
- **Ponte com o resto da matéria:** **tecnologia ≠ produtividade automática** — exige reorganizar processos e capacitar pessoas (mesma lição do Lean Seis Sigma).

### Impostos sobre consumo no Brasil

- **Impostos sobre consumo:** incidem sobre **produção, circulação e venda** de bens/serviços; são **indiretos** (embutidos no preço, pagos pelo consumidor). **~40% da carga tributária (2021)** vem de consumo/produção.

| Tributo | Esfera | Observação |
|---|---|---|
| **IPI** | **Federal** | Produtos industrializados; **não-cumulativo** e **seletivo** (0%–300%) |
| **ICMS** | **Estadual** (Estados+DF) | Maior arrecadador estadual, mais complexo; **não-cumulativo** e **seletivo** |
| **ISS / ISSQN** | **Municipal** | Serviços (LC 116/2003); 2%–5%; em regra **cumulativo** |
| **PIS / COFINS** | **Federal** | Contribuições sobre faturamento; financiam a seguridade |

- **Macete de esfera:** **IPI, PIS, COFINS = federais**; **ICMS = estadual**; **ISS = municipal**.
- **Não-cumulatividade:** IPI e ICMS **creditam** o imposto já pago nas etapas anteriores (evita "imposto sobre imposto").
- **Seletividade:** alíquota varia pela **essencialidade** — essenciais pagam menos, supérfluos/nocivos pagam mais.
- **Regressividade:** imposto sobre consumo é **igual para todos** → pesa **proporcionalmente mais sobre quem ganha menos**. (Progressivo = alíquota sobe com a renda, ex. IR; regressivo = alíquota efetiva cai com a renda.) Brasil tributa **muito o consumo e pouco a renda/patrimônio**. Exemplos: fogão de R$ 1.000 com IPI; higiene feminina (18–25%, "pobreza menstrual").

### Planejamento tributário — elisão × evasão

- **Planejamento tributário = elisão fiscal:** estratégias **legais** para reduzir a carga, por três caminhos: **evitar a incidência**, **reduzir o valor** a recolher, **retardar o pagamento** legalmente.

| Aspecto | **Elisão fiscal** | **Evasão fiscal** |
|---|---|---|
| Natureza | **Legal** e permitida | **Ilegal** e criminosa |
| Quando | **Antes** do fato gerador (planejamento) | Geralmente **depois** (ocultação) |
| Método | Planejamento dentro da lei | Sonegação, fraude, omissão |
| Consequência | Economia legítima | Multas, juros e **crime** |
| Exemplo | Escolher o Simples por ser mais barato | Não emitir nota para esconder receita |

> Existe ainda a **elusão fiscal** (abuso de forma / simulação) — zona cinzenta, pode ser desconsiderada pelo Fisco. Eixo de prova: **elisão (legal) × evasão (ilegal)**.

- **Três regimes:** **Simples Nacional** (até **R$ 4,8 mi/ano**, guia única **DAS**, simplicidade); **Lucro Presumido** (até **R$ 78 mi/ano**, tributa margem **estimada** fixa); **Lucro Real** (**obrigatório acima de R$ 78 mi/ano** e sempre no setor financeiro, tributa **lucro efetivo**).
  - **Fator R** (Simples, serviços): se a folha ≥ **28%** da receita, migra para anexo de alíquota menor (ex.: 15,5% → ~6%).
  - **Presumido × Real:** se o lucro real for **menor** que a margem presumida → **Lucro Real** paga menos; se **maior** → **Presumido** sai mais barato.
  - Opção de regime só muda em **janeiro**; CNAE errado pode gerar apuração incorreta; exige contador.

### Estruturas societárias para startups

- **Sociedade Limitada (Ltda.):** capital em **quotas**, **Contrato Social**, regida pelo **Código Civil**, sem capital mínimo, responsabilidade **limitada às quotas**. **Simples, barata, flexível** → ponto de partida natural da startup.
- **Sociedade Anônima (S.A.):** capital em **ações**, **Estatuto Social**, regida pela **Lei 6.404/76**, responsabilidade limitada ao preço das ações. Governança **complexa/cara** (conselho, assembleias, auditoria). Pode ser fechada ou aberta (bolsa/CVM). Permite **classes de ações** (ordinárias = voto; preferenciais = dividendos).
- **EI / EIRELI / SLU:** **EI** = titular único, **responsabilidade ilimitada** (risco). **EIRELI** (2011) = titular único limitado, mas exigia **100 salários mínimos** → **extinta em 2021** (Lei 14.195), convertida em SLU. **SLU** (Lei da Liberdade Econômica, 13.874/2019) = **um único sócio, responsabilidade limitada, sem capital mínimo** → tornou a EIRELI obsoleta.
  - **Linha do tempo:** EI (ilimitada) → EIRELI (2011, exige 100 SM) → SLU (2019, sem capital mínimo) → EIRELI extinta (2021).

| Critério | Ltda. | S.A. | SLU | EI |
|---|---|---|---|---|
| Capital em | Quotas | **Ações** | Quotas | — |
| Responsabilidade | Limitada | Limitada | Limitada | **Ilimitada** |
| Capital mínimo | Não | Não | Não | — |
| Documento | Contrato Social | **Estatuto Social** | Ato constitutivo | Requerimento |
| Governança | Simples | Complexa | Simples | Mínima |
| Capta VC / IPO | Limitado | **Sim (ideal)** | Não | Não |

- **Por que startups escolhem cada tipo:** **começam Ltda. (ou SLU se fundador solo)** por ser barata/rápida/flexível com responsabilidade limitada; **migram para S.A. ao captar** porque o **venture capital prefere/exige** S.A. (emissão de ações, classes, governança, stock options, preparação para IPO/venda — a "moldura jurídica do crescimento").
- **Instrumentos:** **Acordo de Sócios/Acionistas** (regras de entrada/saída, **tag along** = minoritário acompanha venda do majoritário, **drag along** = majoritário arrasta o minoritário, preferência, governança). **Vesting** = sócio conquista a participação **ao longo do tempo** (estrutura típica: **4 anos com cliff de 1 ano**); **cliff** = carência inicial (sai antes → não leva nada). **Stock options** = incentivo de longo prazo (mais natural em S.A.). Protegem do "**founder problem**".

---

## Parte 2 — Flashcards (P&R)

**P:** O que é um SIG/MIS e qual seu papel?
**R:** Sistema de Informação Gerencial — entrega informação estruturada aos gestores em relatórios resumidos e periódicos, apoiando a decisão no nível tático/gerencial.

**P:** Qual a diferença entre dado e informação?
**R:** Dado é o fato bruto; informação é o dado processado e contextualizado para gerar significado.

**P:** Quais os três níveis organizacionais de decisão?
**R:** Operacional (rotineiro, curto prazo), tático/gerencial (semiestruturado, médio prazo) e estratégico (não estruturado, longo prazo).

**P:** Qual a cadeia de dependência entre os tipos de SI?
**R:** O SPT/TPS (transações) alimenta o SIG/MIS (relatórios) e o SAD/DSS (decisões): transação → relatório → decisão.

**P:** O que é um ERP?
**R:** Software integrado de gestão que unifica os processos da empresa numa base de dados única; é o "sistema de registro" / fonte única da verdade e combate os silos de informação.

**P:** Cite os principais módulos de um ERP.
**R:** Financeiro/Contábil, RH (HCM), Manufatura/Produção (MRP), Cadeia de Suprimentos (SCM) e Vendas/Distribuição.

**P:** O que é um CRM?
**R:** Estratégia + práticas + tecnologia centradas no cliente, com visão 360° (histórico unificado), atendendo vendas, marketing e atendimento.

**P:** Qual a diferença de foco entre ERP e CRM?
**R:** ERP olha para dentro (processos/recursos internos); CRM olha para fora (relacionamento com o cliente). São complementares.

**P:** A segmentação de clientes pertence a qual sistema e a qual área?
**R:** Ao CRM, na área de marketing — divide a base em grupos para tratar clientes diferentes de formas diferentes.

**P:** No comparativo da Questão de Negócios 1, como cada componente gera valor?
**R:** O módulo de RH do ERP gera valor para dentro (capital humano, redução de custo/risco); a segmentação do CRM gera valor para fora (cliente, aumento de receita). Ambos personalizam estratégia com base em dados.

**P:** O que é o Seis Sigma e o que combate?
**R:** Metodologia de qualidade orientada a dados que reduz variabilidade e defeitos; seu "inimigo" é a variação (sigma = desvio-padrão).

**P:** Quanto vale o nível 6σ em defeitos?
**R:** 3,4 defeitos por milhão de oportunidades (DPMO), ou seja, 99,99966% de conformidade.

**P:** Quais são as 5 fases do DMAIC?
**R:** Define (Definir), Measure (Medir), Analyze (Analisar), Improve (Melhorar) e Control (Controlar).

**P:** Qual a diferença entre DMAIC e DMADV?
**R:** DMAIC melhora um processo existente; DMADV (Define, Measure, Analyze, Design, Verify) projeta um processo/produto novo (DFSS).

**P:** Por que a fase Control do DMAIC é decisiva?
**R:** Sustenta o ganho ao longo do tempo e evita a regressão ("efeito sanfona").

**P:** O que é Lean e de onde vem?
**R:** Filosofia de maximizar valor eliminando desperdício (muda), originada do Sistema Toyota de Produção.

**P:** O que muda quando se combinam Lean e Seis Sigma?
**R:** Lean ataca o desperdício (velocidade/fluxo) e Seis Sigma ataca a variação (qualidade) — juntos entregam processos rápidos E precisos.

**P:** Quais são os 7 desperdícios do Lean (TIM WOOD)?
**R:** Transporte, Inventário, Movimentação, Espera (Waiting), Superprodução (Overproduction), Superprocessamento (Over-processing) e Defeitos.

**P:** Qual é o pior dos 7 desperdícios e por quê?
**R:** A superprodução (overproduction) — produzir além/antes da demanda, pois gera os outros desperdícios.

**P:** Qual é a frase do paradoxo de Solow (1987)?
**R:** "Vemos a era dos computadores em toda parte, exceto nas estatísticas de produtividade."

**P:** O que é o Paradoxo da Produtividade de Solow?
**R:** A observação de que, apesar do investimento maciço em TI, os ganhos de produtividade esperados não apareciam nas estatísticas econômicas.

**P:** Quais explicações clássicas justificam o paradoxo?
**R:** Defasagem temporal, erros de mensuração, redistribuição (não criação) e dispersão de produtividade entre empresas.

**P:** No "novo paradoxo", quem é o pessimista e quem é o otimista?
**R:** Gordon é pessimista (inovação digital vale menos); Brynjolfsson, Rock e Syverson são otimistas da defasagem (ganho existe, mas está atrasado pela reorganização).

**P:** Qual a conclusão sobre o futuro do trabalho/produtividade?
**R:** O desfecho depende de políticas, educação/capacitação e reorganização de processos — não da tecnologia em si; o problema central é a partilha da prosperidade.

**P:** Qual a diferença entre elisão e evasão fiscal?
**R:** Elisão é legal — planejamento antes do fato gerador; evasão é ilegal/criminosa — sonegação e fraude, geralmente após o fato gerador.

**P:** Em que esfera ficam IPI, ICMS e ISS?
**R:** IPI (e PIS/COFINS) = federal; ICMS = estadual; ISS = municipal.

**P:** O que significa um imposto ser regressivo?
**R:** A alíquota efetiva cai conforme a renda sobe; impostos sobre consumo pesam proporcionalmente mais sobre quem ganha menos.

**P:** Quais os limites de faturamento dos três regimes tributários?
**R:** Simples Nacional até R$ 4,8 mi/ano; Lucro Presumido até R$ 78 mi/ano; Lucro Real obrigatório acima de R$ 78 mi/ano (e sempre no setor financeiro).

**P:** Quais as diferenças centrais entre Ltda. e S.A.?
**R:** Ltda. = quotas, Contrato Social, simples e barata (estágio inicial); S.A. = ações, Estatuto Social, Lei 6.404/76, complexa, ideal para captação/IPO.

**P:** Por que startups começam Ltda./SLU e migram para S.A.?
**R:** Ltda./SLU são baratas, rápidas e flexíveis com responsabilidade limitada para validar o negócio; ao captar, migram para S.A. porque o venture capital prefere/exige ações, classes, governança e preparação para IPO.

**P:** O que é vesting (e cliff)?
**R:** Vesting faz o sócio conquistar sua participação ao longo do tempo (típico: 4 anos); o cliff é a carência inicial (geralmente 1 ano) — se o sócio sai antes, não leva nada. Protege do "founder problem".

**P:** O que aconteceu com a EIRELI?
**R:** Foi extinta em 2021 (Lei 14.195) e substituída pela SLU (Lei da Liberdade Econômica, 2019), que permite sócio único com responsabilidade limitada e sem capital mínimo.
