const examQuestions = [
  {
    id: 1,
    axis: "Computação",
    theme: "Modelagem C4 & Docker Multi-stage",
    context: "Uma startup de logística está migrando sua arquitetura de microserviços e reestruturando sua esteira de CI/CD. O arquiteto principal sugeriu a documentação usando o Modelo C4 e a otimização de imagens Docker por meio de builds multi-stage. Durante a reunião de engenharia, surgiram diferentes opiniões sobre como essas práticas se correlacionam com o gerenciamento de configuração e o cache de build.",
    question: "Avalie as seguintes afirmações sobre o Modelo C4 e práticas de containerização com Docker:\n\n" +
              "I. No modelo C4, um 'Container' representa obrigatoriamente um container Docker, sendo incorreto utilizá-lo para representar componentes como bancos de dados relacionais que rodam em servidores físicos tradicionais.\n" +
              "II. Em um Dockerfile contendo build multi-stage, as instruções devem ser ordenadas das menos mutáveis para as mais mutáveis. Copiar o código-fonte da aplicação antes de instalar as dependências de pacotes (ex: npm install ou pip install) quebra o aproveitamento do cache das camadas, forçando a reinstalação de todas as dependências a cada build.\n" +
              "III. A imagem final resultante de um build multi-stage contém apenas os binários gerados e o runtime mínimo necessário (como imagens Distroless ou Alpine), eliminando os SDKs de desenvolvimento das camadas finais. Isso reduz a superfície de ataque e mitiga vulnerabilidades de segurança (CVEs) herdadas de terceiros.\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "I e II, apenas." },
      { key: "C", text: "II e III, apenas." },
      { key: "D", text: "I e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "C",
    explanation: "A afirmação I está incorreta (é uma pegadinha clássica): no C4 Model, um 'Container' representa qualquer unidade deployável ou executável independente (como um banco de dados, uma SPA, um aplicativo mobile ou um serviço Java/Go), não tendo relação estrita ou obrigatória com containers Docker. As afirmações II e III são verdadeiras: a ordenação do Dockerfile de menos mutável para mais mutável maximiza o cache do Docker (instalar dependências primeiro e copiar código no fim); e o multi-stage build de fato gera imagens muito menores e seguras ao omitir o SDK de desenvolvimento."
  },
  {
    id: 2,
    axis: "Computação",
    theme: "Segurança, Git Hooks & Gitleaks",
    context: "Durante uma auditoria de segurança de uma fintech, identificou-se que chaves privadas e segredos de API foram commitados acidentalmente em uma branch de feature de desenvolvimento. A equipe decidiu adotar mecanismos de 'shift-left' de segurança, integrando ferramentas de varredura estática de segurança diretamente no fluxo de trabalho do Git usando Husky e Gitleaks.",
    question: "Considere as asserções a seguir a respeito de Git Hooks e detecção de segredos:\n\n" +
              "I. A implementação de hooks client-side (como o 'pre-commit') usando Husky garante de forma definitiva que nenhum commit contendo segredos ou credenciais em texto claro seja enviado ao repositório remoto Git da organização.\n\n" +
              "PORQUE\n\n" +
              "II. O Gitleaks é capaz de varrer todo o histórico de commits do repositório Git usando análise de entropia de Shannon combinada com regras de expressões regulares (Regex), gerando relatórios de auditoria estruturados (como JUnit ou SARIF).\n\n" +
              "A respeito dessas asserções, assinale a opção correta:",
    options: [
      { key: "A", text: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I." },
      { key: "B", text: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I." },
      { key: "C", text: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa." },
      { key: "D", text: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira." },
      { key: "E", text: "Ambas as asserções são proposições falsas." }
    ],
    answer: "D",
    explanation: "A asserção I é falsa porque os hooks client-side (locais) NÃO são clonados pelo comando 'git clone' e podem ser facilmente burlados pelo desenvolvedor usando a flag '--no-verify' no commit. Apenas hooks server-side (como pre-receive) conseguem garantir de forma absoluta o bloqueio de commits inseguros na origem. A asserção II é verdadeira: o Gitleaks de fato varre o histórico (`git log -p`) usando entropia de Shannon e Regex para achar credenciais, gerando saídas SARIF."
  },
  {
    id: 3,
    axis: "Computação",
    theme: "12-Factor App & Containerização",
    context: "A metodologia The Twelve-Factor App (Heroku, 2011) define princípios arquiteturais para o desenvolvimento de aplicações cloud-native e SaaS. Ao mapear essa metodologia para infraestruturas containerizadas (Docker/Kubernetes), os engenheiros analisam os fatores que garantem a paridade entre ambientes e a portabilidade do software.",
    question: "Com base nos fatores definidos na metodologia Twelve-Factor App, avalie as seguintes afirmações:\n\n" +
              "I. De acordo com o Fator III (Config), as configurações da aplicação (tudo o que varia entre deploys) devem ser armazenadas no repositório de código, organizadas em arquivos de configuração nomeados de acordo com o ambiente (ex: config.development.json e config.production.json).\n" +
              "II. O Fator V (Build, Release, Run) estabelece uma separação rigorosa entre as três etapas, garantindo que o build (geração da imagem Docker imutável) seja combinado com a configuração do ambiente (env vars) na fase de Release para criar um release com tag única, sendo terminantemente proibido alterar o código em tempo de execução (Run).\n" +
              "III. O Fator X (Dev/prod parity) preconiza minimizar os gaps de tempo (commit até deploy), de pessoal (quem programa também opera) e de ferramentas (usar backing services idênticos em todos os ambientes), o que é facilitado e viabilizado pelo uso de containers.\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "I e II, apenas." },
      { key: "C", text: "II e III, apenas." },
      { key: "D", text: "I e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "C",
    explanation: "A afirmação I está incorreta porque o Fator III (Config) prega que as configurações de ambiente devem ser estritamente armazenadas em variáveis de ambiente, NUNCA em arquivos dentro do repositório (mesmo que específicos por branch ou ambiente). O teste definitivo do Fator III é: 'Eu posso tornar o repositório público neste momento sem vazar nenhuma credencial?'. As afirmações II e III representam exatamente a essência dos fatores V e X."
  },
  {
    id: 4,
    axis: "Computação",
    theme: "SRE (Error Budget, SLO & Toil)",
    context: "Um comitê de engenharia de confiabilidade de sites (SRE) precisa harmonizar o conflito entre o time de desenvolvimento (que deseja lançar novas funcionalidades em alta velocidade) e o time de operações (que deseja preservar a estabilidade da aplicação). O comitê adota a tríade SLI/SLO/SLA e a gestão do orçamento de erro (Error Budget).",
    question: "Considerando as práticas prescritivas de SRE defendidas pelo Google, identifique a afirmação correta:",
    options: [
      { key: "A", text: "O SLO (Service Level Objective) é um compromisso externo e deve ser sempre igual ou mais flexível do que o SLA (Agreement) para que a empresa evite multas financeiras em caso de interrupções de serviço." },
      { key: "B", text: "O Error Budget (100% - SLO) atua como uma moeda de troca: se houver orçamento restante ao fim de uma janela móvel, o time de desenvolvimento é impedido de realizar novos deploys para proteger o sistema." },
      { key: "C", text: "O Toil é caracterizado como trabalho operacional manual e repetitivo que cresce linearmente com a escala do serviço. Gerenciar incidentes por meio de uma fila de tickets organizada e priorizada em uma ferramenta corporativa como o Jira anula a definição de Toil." },
      { key: "D", text: "O SLO (Service Level Objective) deve ser mais rígido (estrito) do que o SLA (Service Level Agreement), agindo como uma margem de segurança interna que permite disparar alertas e reparações antes que o acordo financeiro externo seja violado." },
      { key: "E", text: "A regra de ouro dos 50% de SRE estipula que a equipe de engenharia deve dedicar no mínimo 50% do seu tempo ao trabalho operacional manual reativo de plantão (on-call) para manter o sistema operacional." }
    ],
    answer: "D",
    explanation: "O SLO deve ser mais rígido que o SLA (ex: SLO de 99.9% vs SLA de 99.5%) para servir de alerta e contenção interna antes do estouro do contrato financeiro (SLA). A alternativa A está incorreta (inverte a relação). A B está incorreta (se há budget de erro, pode-se lançar features; se esgota, os deploys param). A C está incorreta (usar fila de tickets ou Jira não descaracteriza Toil; continua sendo toil, apenas organizado). A E está incorreta (o trabalho operacional não deve passar de 50%, liberando o resto para projetos e automação)."
  },
  {
    id: 5,
    axis: "Computação",
    theme: "Testes de Integração vs. Unitários",
    context: "Na construção de uma suíte de testes de uma API web robusta em ASP.NET Core ou Spring Boot, a equipe de desenvolvimento debate sobre a arquitetura dos testes para evitar o anti-padrão da pirâmide invertida (casquinha de sorvete ou 'ice cream cone').",
    question: "A respeito das estratégias de teste de software e dos conceitos de Martin Fowler, avalie as seguintes asserções:\n\n" +
              "I. Nos testes de integração de APIs ASP.NET Core usando WebApplicationFactory, o TestServer gerado executa a aplicação em memória de forma que o HttpClient fornecido trafega pacotes HTTP reais através da interface de loopback (localhost) e consome portas TCP livres do sistema operacional.\n\n" +
              "PORQUE\n\n" +
              "II. Conforme Martin Fowler, os 'broad integration tests' (testes de integração amplos) avaliam a comunicação de múltiplos componentes reais dependendo de conexões de rede e banco de dados ativos, sendo recomendado migrar para 'narrow integration tests' (estreitos) com dublês de teste (mocks/stubs) nas fronteiras do sistema para reduzir a lentidão e a instabilidade.\n\n" +
              "Assinale a alternativa correta:",
    options: [
      { key: "A", text: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I." },
      { key: "B", text: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I." },
      { key: "C", text: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa." },
      { key: "D", text: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira." },
      { key: "E", text: "Ambas as asserções são proposições falsas." }
    ],
    answer: "D",
    explanation: "A asserção I é falsa porque o `TestServer` do ASP.NET Core executa as requisições inteiramente em memória por meio de chamadas diretas de delegate HTTP, SEM usar sockets de rede, interfaces de loopback (localhost) ou portas TCP físicas do sistema. A asserção II é verdadeira, detalhando fielmente a definição de Martin Fowler sobre testes de integração amplos (broad) vs estreitos (narrow) e o conselho de migração."
  },
  {
    id: 6,
    axis: "Matemática",
    theme: "Planaridade & Fórmula de Euler",
    context: "No design físico de placas de circuito impresso (PCB) e no roteamento de canais de fibra óptica sob uma rede de alta performance, a teoria dos grafos é aplicada para evitar o cruzamento de linhas condutoras de sinal, o que geraria interferência eletromagnética (crosstalk). Um grafo é dito planar se pode ser desenhado no plano de modo que nenhuma aresta se cruze.",
    question: "Um engenheiro de hardware deseja projetar um circuito conexo simplificado planar simples com exatamente 10 vértices (pontos de solda). Qual é o número MÁXIMO de trilhas condutoras (arestas) que ele pode desenhar nessa placa de circuito para garantir que nenhuma trilha se cruze?\n\n" +
              "Em seguida, se ele projetar uma placa menor conectada de forma planar simples com 8 vértices e 12 arestas sem cruzamento, em quantas faces (regiões delimitadas do plano, incluindo a externa) a placa ficará dividida na imersão planar?",
    options: [
      { key: "A", text: "Máximo de 28 arestas; e 6 faces." },
      { key: "B", text: "Máximo de 24 arestas; e 6 faces." },
      { key: "C", text: "Máximo de 24 arestas; e 8 faces." },
      { key: "D", text: "Máximo de 20 arestas; e 4 faces." },
      { key: "E", text: "Máximo de 26 arestas; e 7 faces." }
    ],
    answer: "B",
    explanation: "Para um grafo planar simples conexo com v >= 3, o limite superior de arestas é e <= 3v - 6. Substituindo v = 10, temos e <= 3(10) - 6 = 24 arestas no máximo. Para a segunda parte, usamos a Fórmula de Euler para grafos planares conexos: v - e + f = 2. Substituindo v = 8 e e = 12, temos 8 - 12 + f = 2 => f - 4 = 2 => f = 6 faces. Portanto, 24 arestas e 6 faces (Alternativa B)."
  },
  {
    id: 7,
    axis: "Matemática",
    theme: "Caminhos e Circuitos Eulerianos e Hamiltonianos",
    context: "Um robô de testes automatizados precisa trafegar por uma rede de sensores para coletar dados diagnósticos. A equipe de engenharia analisa duas abordagens de otimização de rota: a primeira (Roteamento A) exige passar por cada canal físico de comunicação (aresta) exatamente uma vez; a segunda (Roteamento B) exige visitar cada dispositivo físico (vértice) exatamente uma vez, retornando ao ponto de partida.",
    question: "Considerando as características de caminhos e circuitos em grafos, avalie as seguintes afirmações:\n\n" +
              "I. Um grafo conexo possui um circuito euleriano se, e somente se, possui exatamente dois vértices de grau ímpar, os quais servirão como os pontos obrigatórios de partida e chegada da rota.\n" +
              "II. O Roteamento A descreve o Problema do Carteiro Chinês (CPP), que busca uma trilha euleriana e possui complexidade algorítmica polinomial (P). O Roteamento B descreve o Problema do Caixeiro Viajante (TSP), que busca um ciclo hamiltoniano de custo mínimo e é classificado como NP-difícil.\n" +
              "III. De acordo com o Teorema de Dirac, um grafo simples de ordem n >= 3 é hamiltoniano se todos os seus vértices tiverem grau par e o grafo for planar.\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "II, apenas." },
      { key: "C", text: "I e II, apenas." },
      { key: "D", text: "II e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "B",
    explanation: "A afirmação I está incorreta porque um circuito euleriano exige que TODOS os vértices tenham grau par. Ter exatamente dois vértices de grau ímpar permite um CAMINHO euleriano (que não fecha em ciclo). A afirmação II está correta: CPP (Euler) é resolvido em tempo polinomial, enquanto TSP (Hamilton) é NP-difícil. A afirmação III está incorreta: o Teorema de Dirac diz que um grafo simples com n >= 3 é hamiltoniano se seu grau mínimo δ(G) >= n/2 (nada tem a ver com graus pares ou planaridade)."
  },
  {
    id: 8,
    axis: "Matemática",
    theme: "Matching (Emparelhamento) & Teorema de Hall",
    context: "Em um cluster de computação em nuvem, um orquestrador precisa alocar um lote de 3 tarefas simultâneas (A = {1, 2, 3}) para um conjunto de 3 processadores virtuais disponíveis (B = {x, y, z}). As compatibilidades de execução (arestas) mapeadas pelo sistema são: a tarefa 1 roda em x e y; as tarefas 2 e 3 rodam exclusivamente no processador x.",
    question: "A respeito das propriedades de emparelhamento (matching) e do Teorema de Hall, analise as afirmações:\n\n" +
              "I. Não é possível alocar todas as tarefas de forma exclusiva (saturar a parte A), pois se tomarmos o subconjunto S = {2, 3} de tarefas, sua vizinhança é N(S) = {x}, violando a condição de casamento de Hall, já que |N(S)| = 1 < 2 = |S|.\n" +
              "II. O Teorema de Berge estabelece que um emparelhamento M é máximo se, e somente se, o grafo contém ao menos um caminho M-aumentante (alternância de arestas fora e dentro de M terminando em vértices livres).\n" +
              "III. Todo grafo bipartido k-regular com k >= 1 admite obrigatoriamente um emparelhamento perfeito (matching que satura todos os vértices).\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "I e II, apenas." },
      { key: "C", text: "II e III, apenas." },
      { key: "D", text: "I e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "D",
    explanation: "A afirmação I está correta: o subconjunto S={2,3} tem apenas {x} como vizinho comum, gerando um gargalo que viola a condição de Hall, logo não há matching que cubra A. A afirmação II está incorreta porque o Teorema de Berge diz que M é máximo se, e somente se, NÃO existe caminho M-aumentante. A afirmação III é um corolário clássico do Teorema de Hall aplicado a grafos bipartidos regulares."
  },
  {
    id: 9,
    axis: "Negócios",
    theme: "Arquitetura ERP vs. CRM & Dados Mestres",
    context: "Uma empresa varejista de e-commerce de médio porte está projetando a integração dos seus sistemas corporativos. Durante o comitê de tecnologia, o Diretor de Vendas propôs que a segmentação comportamental dos clientes (para disparo de campanhas) fosse executada diretamente de dentro do módulo de Gestão de RH (HCM) do ERP, e o cadastro de folha de pagamento de funcionários fosse gerido na ferramenta de CRM.",
    question: "Considere as asserções a seguir a respeito de ERP, CRM e integração sistêmica:\n\n" +
              "I. A proposta do Diretor de Vendas é inadequada porque o módulo de RH do ERP visa gerar valor internamente (gestão do capital humano, folha de pagamento e conformidade), enquanto a segmentação comportamental do CRM serve ao mercado externo (funil de vendas e atração de clientes). Integrar ambos para esses fins específicos geraria sobreposição ineficiente de domínios e violação dos dados mestres.\n\n" +
              "PORQUE\n\n" +
              "II. O ERP atua essencialmente como fonte única da verdade (sistema de registro) unificada para operações de back-office, enquanto o CRM consolida a visão 360° voltada ao relacionamento com o cliente, tornando-os sistemas complementares que devem se integrar nos pontos de entrada de dados mestres, emissão de faturas e pedidos.\n\n" +
              "A respeito dessas asserções, assinale a opção correta:",
    options: [
      { key: "A", text: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I." },
      { key: "B", text: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I." },
      { key: "C", text: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa." },
      { key: "D", text: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira." },
      { key: "E", text: "Ambas as asserções são proposições falsas." }
    ],
    answer: "A",
    explanation: "Ambas as asserções são verdadeiras e a II justifica perfeitamente a I. A proposta do diretor mistura os domínios do ERP (back-office, conformidade interna, RH) com o CRM (relacionamento externo, funil, segmentação). O ERP e o CRM devem operar integrados em processos de intersecção como faturamento, pedidos e clientes (dados mestres), mantendo a separação coerente de suas responsabilidades centrais."
  },
  {
    id: 10,
    axis: "Negócios",
    theme: "Lean Seis Sigma (DMAIC & Desperdícios)",
    context: "Um gerente de processos recebeu a tarefa de otimizar o fluxo de triagem de incidentes de suporte em um portal SaaS. Ele aplicará a metodologia integrada Lean Seis Sigma para reduzir os erros de triagem e acelerar o atendimento.",
    question: "Considerando as ferramentas de qualidade e eliminação de desperdício do Lean Seis Sigma, avalie as seguintes afirmações:\n\n" +
              "I. Para desenhar um processo de atendimento totalmente novo, que nunca existiu no portal, a equipe deve seguir estritamente o roteiro clássico DMAIC, pois ele foi concebido para o design de novos processos livres de desperdício.\n" +
              "II. Na fase de Controle ('C') do DMAIC, o uso de poka-yokes (dispositivos à prova de erros) e cartas de controle estatístico é fundamental para evitar a regressão do processo otimizado ao estado ineficiente anterior, combatendo o chamado 'efeito sanfona'.\n" +
              "III. De acordo com os 7 desperdícios (muda) do Lean, o pior desperdício é o de Defeitos (retrabalho), pois a correção de bugs consome tempo e recursos que poderiam ser aplicados na criação de valor.\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "II, apenas." },
      { key: "C", text: "I e III, apenas." },
      { key: "D", text: "II e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "B",
    explanation: "A afirmação I está incorreta porque o DMAIC é para melhorar processos EXISTENTES; para projetar processos NOVOS do zero usa-se o DMADV (ou DFSS). A afirmação II está correta: a fase Control serve exatamente para sustentar ganhos e evitar o 'efeito sanfona'. A afirmação III está incorreta (outra pegadinha clássica): na filosofia Lean, o pior dos 7 desperdícios é a Superprodução (Overproduction), pois ela gera e esconde todos os outros desperdícios (inventário, transporte, espera, etc.)."
  },
  {
    id: 11,
    axis: "Negócios",
    theme: "Tributação sobre Consumo & Elisão vs. Evasão",
    context: "Uma startup digital brasileira de delivery está revisando seu planejamento tributário para o próximo ano fiscal. O CFO discute a incidência de impostos sobre suas operações mistas de intermediação digital e venda direta de mercadorias.",
    question: "Com base na legislação tributária brasileira e nos princípios fiscais, analise as afirmações a seguir:\n\n" +
              "I. A Elisão Fiscal constitui o planejamento tributário de natureza estritamente legal, realizado antes da ocorrência do fato gerador para reduzir, postergar ou evitar a carga tributária. Em contrapartida, a Evasão Fiscal é a sonegação ilegal e fraudulenta praticada após a ocorrência do fato gerador.\n" +
              "II. O ISS (municipal) incide sobre os serviços da LC 116/2003 e é predominantemente cumulativo (alíquota de 2% a 5%), enquanto o ICMS (estadual) e o IPI (federal) são não-cumulativos, gerando créditos tributários a cada etapa da circulação comercial.\n" +
              "III. Os impostos indiretos sobre o consumo no Brasil (como ICMS e IPI) são caracterizados por sua regressividade, o que significa que as alíquotas efetivas incidentes sobre bens de consumo básico pesam proporcionalmente mais sobre a renda das famílias de menor poder aquisitivo.\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "I e II, apenas." },
      { key: "C", text: "II e III, apenas." },
      { key: "D", text: "I e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "E",
    explanation: "Todas as afirmações estão corretas. A afirmação I define perfeitamente elisão (legal/planejada) vs evasão (sonegação ilegal). A afirmação II descreve corretamente a cumulatividade típica do ISS e a não-cumulatividade creditável do ICMS e IPI. A afirmação III retrata a regressividade fiscal do modelo tributário brasileiro focado no consumo."
  },
  {
    id: 12,
    axis: "Negócios",
    theme: "Estruturas Societárias, Vesting & Acordo de Sócios",
    context: "Três estudantes de Engenharia de Software estão criando uma startup fintech. Eles planejam formalizar a sociedade legal do negócio, desenhar a distribuição de quotas societárias e garantir que a empresa esteja estruturada para receber rodadas futuras de investimento de Venture Capital.",
    question: "Considerando as estruturas societárias brasileiras e as práticas de governança de startups, avalie as seguintes afirmações:\n\n" +
              "I. A SLU (Sociedade Limitada Unipessoal), criada em 2019 e que substituiu a extinta EIRELI em 2021, exige a integralização de capital social mínimo equivalente a 100 salários mínimos vigentes para manter a limitação de responsabilidade patrimonial do sócio único.\n" +
              "II. O Vesting com cláusula de Cliff (ex: 4 anos de vesting com 1 ano de cliff) estipula que se um cofundador ou colaborador chave se desligar da startup antes de completar os primeiros 12 meses de trabalho, ele não terá direito a receber nenhuma porcentagem das quotas da empresa.\n" +
              "III. No Acordo de Sócios, a cláusula de 'Drag Along' garante aos acionistas majoritários o poder de obrigar os sócios minoritários a venderem suas ações sob as mesmas condições negociadas na venda do controle da empresa, facilitando operações de M&A (fusões e aquisições).\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "I e II, apenas." },
      { key: "C", text: "II e III, apenas." },
      { key: "D", text: "I e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "C",
    explanation: "A afirmação I está incorreta: a SLU (Sociedade Limitada Unipessoal) NÃO exige capital mínimo (a EIRELI exigia 100 salários mínimos, o que motivou sua extinção por tornar o processo restritivo). As afirmações II e III definem perfeitamente os termos típicos do ecossistema de startups (Vesting/Cliff e cláusulas de saída Drag Along e Tag Along)."
  },
  {
    id: 13,
    axis: "UX/DesignOps",
    theme: "Design System vs. DesignOps",
    context: "Em uma grande empresa de tecnologia, a diretoria de design investiu na criação de um Design System unificado contendo biblioteca de componentes em Figma e React, tokens de estilo e guias de tom de voz. Contudo, após 6 meses, os times de desenvolvimento continuam codificando componentes ad-hoc e ignorando a biblioteca centralizada. O comitê discute se o problema reside na infraestrutura técnica do sistema de design ou nas operações de design.",
    question: "A partir do cenário apresentado e das teorias de Jeremy Keith e Thiago Hassu, assinale a opção correta:",
    options: [
      { key: "A", text: "De acordo com Jeremy Keith, a criação técnica de um Design System representa um desafio essencialmente cultural, enquanto a sua adoção pelas equipes (DesignOps) representa um desafio predominantemente técnico de engenharia de software." },
      { key: "B", text: "Conforme Thiago Hassu, a relação entre DesignOps e Design System é simétrica e de interdependência mútua, sendo impossível que a disciplina de DesignOps exista ou atue de forma isolada sem que um Design System formal já esteja implantado na organização." },
      { key: "C", text: "Jeremy Keith conceitua o Design System como uma 'coisa' (artefato técnico) e o DesignOps como uma 'prática' (adoção do sistema). Ele pontua que o Design System em si é um desafio majoritariamente técnico, ao passo que a adoção (DesignOps) constitui um desafio quase que puramente cultural." },
      { key: "D", text: "Segundo Brad Frost, um Design System abrange todas as diretrizes de branding e marketing digital da empresa, devendo o DesignOps atuar centralizando toda a governança do portfólio de produtos em um modelo centralizado puro." },
      { key: "E", text: "A falta de adoção da biblioteca de componentes deve ser resolvida alterando o modelo de alocação de DesignOps para centralizado puro, pois o modelo embedded (embutido) elimina o risco de inconsistências visuais e técnicas nos produtos." }
    ],
    answer: "C",
    explanation: "A alternativa C retrata fielmente a filosofia de Jeremy Keith: o Design System é a 'coisa' (desafio técnico) e o DesignOps é a 'prática' de governança e adoção (desafio essencialmente cultural de processos e pessoas). A alternativa A inverte a relação técnico/cultural de Keith. A alternativa B está incorreta porque Thiago Hassu teoriza uma dependência assimétrica: DesignOps pode existir sem Design System (otimizando processos, skills e ferramentas gerais do design), mas o Design System NÃO sobrevive sem DesignOps (vira um artefato morto/sem adoção)."
  },
  {
    id: 14,
    axis: "UX/DesignOps",
    theme: "Framework REACH & Design Playbooks",
    context: "A gerente de operações de design (DesignOps) de uma empresa de serviços financeiros precisa comprovar o valor das suas iniciativas e estruturar o Design Playbook do time. Ela decide aplicar o framework REACH proposto pelo Nielsen Norman Group (NN/g) e as práticas de documentação viva.",
    question: "Considerando o framework REACH e a estruturação de Design Playbooks, avalie as seguintes afirmações:\n\n" +
              "I. A dimensão 'Efficiency' (Eficiência) do REACH visa responder se os designers conseguem focar em tarefas de alto valor criativo ou se estão sobrecarregados com fricções operacionais e retrabalho (toil), situando-se no nível de processos e fluxos.\n" +
              "II. O REACH constitui uma métrica quantitativa simplificada de valor único que visa estabelecer de forma direta e incontestável a relação de causa-efeito entre a implantação do DesignOps e os lucros financeiros trimestrais da empresa.\n" +
              "III. No desenvolvimento de um Design Playbook, o conceito de 'Velocity' prega que a equipe priorize a velocidade absoluta de entrega a curto prazo ('speed'), ignorando o alinhamento de direção estratégica para garantir entregas frequentes em produção.\n\n" +
              "É correto o que se afirma em:",
    options: [
      { key: "A", text: "I, apenas." },
      { key: "B", text: "I e II, apenas." },
      { key: "C", text: "II e III, apenas." },
      { key: "D", text: "I e III, apenas." },
      { key: "E", text: "I, II e III." }
    ],
    answer: "A",
    explanation: "Apenas a afirmação I está correta. A afirmação II está incorreta porque o REACH não é uma métrica única, mas sim uma estrutura de triangulação de 5 dimensões que não busca provar causalidade absoluta (pois há variáveis isoladas difíceis de controlar), mas sim identificar tendências de maturidade operacional. A afirmação III está incorreta porque os playbooks diferenciam 'speed' de 'velocity': 'speed' é apenas velocidade bruta; 'velocity' é velocidade com direção correta (alinhamento estratégico), sendo a 'velocity' o foco prioritário."
  },
  {
    id: 15,
    axis: "Liderança",
    theme: "Modelo SCARF & Táticas de Yukl",
    context: "Carlos é líder de tecnologia e precisa convencer seu time de engenharia de software a adotar a prática de Pair Programming por um período experimental de 30 dias. Ele sabe que a equipe valoriza a autonomia individual e teme que a iniciativa seja uma forma velada de microgerenciamento por parte da gerência.",
    question: "A respeito das táticas de influência proativa de Yukl e do modelo neurocientífico SCARF de David Rock, avalie as asserções a seguir:\n\n" +
              "I. Para obter o comprometimento real da equipe, Carlos deve priorizar táticas 'hard' como Legitimação e Pressão (ex: basear o pedido estritamente nas políticas de produtividade e realizar cobranças diárias persistentes), pois essas ações ativam o Sistema 2 (lógico/Drew) dos engenheiros, estimulando a cooperação.\n\n" +
              "PORQUE\n\n" +
              "II. Ameaças de ordem social aos domínios de Status, Autonomia e Justiça ativam as mesmas redes neurais associadas à dor física. Isso gera uma resposta defensiva de afastamento mediada pelo Sistema 1 (emocional/Gun), a qual desativa recursos do córtex pré-frontal e sabota a tomada de decisões criativas do time.\n\n" +
              "Assinale a alternativa correta:",
    options: [
      { key: "A", text: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I." },
      { key: "B", text: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I." },
      { key: "C", text: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa." },
      { key: "D", text: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira." },
      { key: "E", text: "Ambas as asserções são proposições falsas." }
    ],
    answer: "D",
    explanation: "A asserção I é falsa porque táticas 'hard' (Pressão, Legitimação) geram no máximo conformidade ou resistência aberta, ativando uma resposta de ameaça social no cérebro. Carlos deve focar em táticas 'soft' (Consulta, Colaboração, Persuasão Racional). A asserção II é verdadeira e baseada na neurociência do modelo SCARF de David Rock, detalhando como as ameaças sociais afetam o córtex pré-frontal e estimulam o comportamento defensivo do Sistema 1."
  }
];

const essayQuestions = [
  {
    id: 1,
    axis: "Computação",
    theme: "Melhorias de Pipeline CI/CD na FinServe",
    context: "A FinServe, empresa de soluções financeiras em nuvem, tem buscado acelerar suas entregas por meio de pipelines de CI/CD, mas começou a notar comportamentos indesejados que colocam em risco a estabilidade e a confiança no processo de deploy. Entre os sintomas observados estão: (1) Builds que 'quebram' de formas diferentes em branches variadas, exigindo retrabalho manual para alinhar versões; (2) Ambientes de homologação onde configurações divergem dos repositórios declarativos, gerando 'bugs de ambiente' que só aparecem após ajustes manuais; (3) Deploys que ainda provocam breves indisponibilidades em produção ou erros intermitentes entre microsserviços; (4) Dificuldade em rastrear qual artefato válido passou pelos testes antes de chegar ao ar, impedindo reverter com segurança para uma versão comprovadamente estável.",
    prompt: "Elabore um plano de ação estruturado identificando as práticas ou etapas do pipeline de CI/CD que estão falhando e proponha melhorias concretas (processos e ferramentas) com base nos princípios de DevOps e 12-Factor App para restabelecer a consistência entre ambientes, eliminar intervenções manuais e garantir deploys sem downtime.",
    referenceAnswer: "Práticas falhando e soluções sugeridas:\n" +
                     "1. Falha no Controle de Versão de Infraestrutura: Configurações manuais gerando configuration drift. Solução: Adotar Infraestrutura como Código (IaC) com Terraform para manter ambientes declarativos idênticos e integrados ao Git.\n" +
                     "2. Falha na Automação e Paralelismo de Testes: Builds quebrando por inconsistências em branches. Solução: Dockerizar os estágios de testes em containers efêmeros executados em paralelo na pipeline CI/CD (ex: GitHub Actions).\n" +
                     "3. Falha na Estratégia de Deploy: Downtime e erros na liberação de microsserviços. Solução: Implementar Canary Deployments ou Blue/Green Deployments via Kubernetes (com ingress routing) para troca de tráfego sem queda.\n" +
                     "4. Falha na Rastreabilidade de Artefatos: Dificuldade de rollback seguro. Solução: Adotar um Artifact Registry (versionamento de artefatos imutáveis por commit hash/SHA e tag, e não por tag mutable 'latest')."
  },
  {
    id: 2,
    axis: "Negócios & Operações",
    theme: "Plano DevOps e Observabilidade - Costa Coffee",
    context: "Você foi contratado como Engenheiro DevOps na empresa Costa Coffee. A empresa executa milhares de vendas por toda a Europa diariamente e está enfrentando os seguintes problemas: (a) Os desenvolvedores perdem muito tempo resolvendo conflitos de código e frequentemente perdem versões devido a merges mal feitos; (b) Toda nova versão do software gera instabilidade ao ser implementada em produção; (c) O time gasta, semanalmente, 35% do tempo de trabalho buscando por problemas nos softwares; (d) A empresa identificou um aumento na conta de cloud devido a uso indevido de sua infraestrutura por terceiros não autorizados.",
    prompt: "Elabore um plano de ação claro e objetivo para apresentar ao seu CTO, abordando processos, metodologias e ferramentas para mitigar cada um dos quatro problemas apontados.",
    referenceAnswer: "Plano para a Costa Coffee:\n" +
                     "1. Resolução dos merges/versões: Adotar o GitFlow combinado com Conventional Commits e proteção de branches principais (main/develop). Utilizar Rebase antes do merge para manter o histórico linear e obrigar a revisão via Pull Requests com testes automáticos.\n" +
                     "2. Correção da instabilidade de deploy: Implementar pipeline automatizada de CI/CD contendo testes unitários e de integração estreitos. Utilizar Feature Flags para desacoplar deploy de release, e implantar deploys progressivos (Canary) no Kubernetes.\n" +
                     "3. Redução do tempo de busca de erros (35%): Implementar Observabilidade completa baseada nos três pilares (Logs estruturados, Métricas de saúde/infraestrutura e Traces distribuídos) via OpenTelemetry, integrando com Prometheus/Grafana ou APM para alertas proativos antes da queima de SLOs.\n" +
                     "4. Segurança de Cloud e custos: Implementar gerenciamento rígido de identidade e acesso (IAM) seguindo a política de menor privilégio. Roda varreduras automáticas de chaves com ferramentas como Gitleaks nos repositórios, implantar auditorias e configurar controle financeiro com orçamentos (ex: AWS Budgets)."
  }
];
