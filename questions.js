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
    explanation: "Lembre assim: no C4, 'container' não quer dizer Docker; quer dizer uma parte executável do sistema, como API, banco ou app web. No Dockerfile, coloque primeiro o que muda pouco, como dependências, e depois o código, para aproveitar cache. Multi-stage é como cozinhar numa cozinha completa, mas servir o prato final sem levar panelas e ferramentas junto: a imagem final fica menor e mais segura."
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
    explanation: "Hook local ajuda, mas não garante: o dev pode usar '--no-verify' ou nem ter o hook instalado. É como uma placa de 'não entre', não uma porta trancada. Quem bloqueia de verdade é controle no servidor. Já o Gitleaks realmente procura segredos no histórico usando regras e padrões, como achar uma chave de API esquecida num commit antigo."
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
    explanation: "Configuração não deve ficar no código. Regra fácil: se abrir o repositório no GitHub vaza senha, está errado. Twelve-Factor manda usar variáveis de ambiente. Build, Release e Run são etapas separadas: primeiro gera o pacote, depois combina com config, depois executa. Dev/prod parity é fazer desenvolvimento e produção parecerem o máximo possível, como usar o mesmo banco via container."
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
    explanation: "SLO é meta interna; SLA é promessa para cliente. Então o SLO precisa ser mais rígido, como avisar quando o tanque chega na reserva antes do carro parar. Error budget é a margem de erro permitida: se ainda tem margem, pode lançar; se acabou, segura deploy. Toil é trabalho manual repetitivo, mesmo que esteja organizado no Jira."
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
    explanation: "TestServer não abre porta real nem usa localhost; ele simula a chamada HTTP em memória. Pense como ensaiar uma ligação dentro do próprio app, sem sair para a internet. Fowler separa testes amplos, que usam vários serviços reais e ficam lentos/frágeis, de testes estreitos, que testam fronteiras com mocks ou stubs."
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
    explanation: "Para grafo planar simples, decore: máximo de arestas = 3v - 6. Com 10 vértices: 30 - 6 = 24. Para faces, use Euler: v - e + f = 2. Com 8 vértices e 12 arestas: 8 - 12 + f = 2, então f = 6. É como contar regiões num mapa desenhado sem cruzar linhas."
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
    explanation: "Euler olha para arestas; Hamilton olha para vértices. Para circuito euleriano, todos os graus precisam ser pares. Se só dois são ímpares, dá caminho aberto, não circuito. Carteiro Chinês é problema de arestas e tem solução eficiente. Caixeiro Viajante é de visitar vértices com menor custo e é difícil. Dirac pede grau mínimo >= n/2, não grau par nem planaridade."
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
    explanation: "Hall é regra de vaga: todo grupo de tarefas precisa ter pelo menos o mesmo número de processadores possíveis. Aqui as tarefas 2 e 3 só podem ir para x; duas pessoas disputando uma única cadeira. Não dá matching perfeito. Berge diz o contrário da pegadinha: se ainda existe caminho aumentante, o matching ainda pode melhorar. Bipartido k-regular sempre consegue emparelhar perfeitamente."
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
    explanation: "ERP cuida da casa por dentro: estoque, financeiro, RH, folha. CRM cuida do cliente: vendas, relacionamento e campanhas. Colocar campanha de cliente no RH ou folha de funcionário no CRM mistura domínios. Eles se integram, sim, mas cada um continua dono do seu assunto, como cozinha e salão num restaurante."
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
    explanation: "DMAIC melhora processo que já existe. Para criar processo novo, pense em DMADV. A fase Control é para não deixar a melhoria sumir, como manter dieta com balança e rotina. No Lean, o pior desperdício é superprodução, porque produzir demais cria estoque, espera, transporte e retrabalho."
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
    explanation: "Elisão é pagar menos imposto dentro da lei, planejando antes. Evasão é sonegar depois, fora da lei. ISS costuma ser cumulativo; ICMS e IPI geram créditos em etapas da cadeia. Imposto sobre consumo é regressivo porque pesa mais no pobre: R$ 5 de imposto no arroz doem mais para quem ganha pouco."
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
    explanation: "SLU não exige capital mínimo; quem tinha regra de 100 salários era a antiga EIRELI. Cliff é o período mínimo antes de ganhar participação: se sair antes de 1 ano, não leva quotas. Drag Along é o majoritário puxar os minoritários na venda, nas mesmas condições, para facilitar vender a empresa inteira."
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
    explanation: "Design System é a biblioteca: componentes, tokens e padrões. DesignOps é fazer as pessoas usarem bem isso no dia a dia. Exemplo: ter um Figma lindo não resolve se cada time cria botão do zero. Keith trata Design System como a 'coisa' técnica e DesignOps como a prática cultural de adoção. DesignOps pode existir sem Design System, mas Design System sem DesignOps vira arquivo esquecido."
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
    explanation: "REACH não é uma nota mágica que prova lucro direto. É um jeito de olhar várias dimensões do DesignOps. Efficiency pergunta se o designer está fazendo trabalho de alto valor ou perdendo tempo com burocracia e retrabalho. Speed é só ir rápido; velocity é ir rápido na direção certa. Um time pode correr muito e ainda assim entregar a coisa errada."
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
    explanation: "Pressão e autoridade até podem fazer alguém obedecer, mas raramente geram adesão real. É como mandar o time usar uma ferramenta nova sem ouvir ninguém: eles resistem ou usam mal. Para mudança cultural, funcionam melhor consulta, colaboração e explicação racional. O modelo SCARF ajuda a lembrar: quando a pessoa se sente ameaçada em status, autonomia ou justiça, ela fica defensiva."
  }
];

const examQuestionsV2 = [
  {
    id: 1,
    axis: "Computação",
    theme: "C4, Deployables & Imagens Docker",
    context: "Um time desenhou uma arquitetura C4 e marcou uma API, um banco Postgres e uma aplicação web como 'containers'. Um desenvolvedor reclamou dizendo que só a API empacotada em Docker poderia receber esse nome.",
    question: "Sobre C4 e Docker, assinale a alternativa correta:",
    options: [
      { key: "A", text: "No C4, container sempre significa container Docker." },
      { key: "B", text: "Banco de dados não pode aparecer como container no C4." },
      { key: "C", text: "No C4, container é uma unidade executável ou deployável do sistema, não necessariamente Docker." },
      { key: "D", text: "Multi-stage build serve apenas para acelerar testes locais." },
      { key: "E", text: "Copiar todo o código antes de instalar dependências sempre melhora o cache do Docker." }
    ],
    answer: "C",
    explanation: "Decore: C4 container é 'pedaço que roda', não 'Docker'. Pode ser API, banco, app web ou mobile. Docker é outra coisa. Exemplo curto: no mapa C4, Postgres pode ser container mesmo rodando fora de Docker."
  },
  {
    id: 2,
    axis: "Computação",
    theme: "Segredos, Hooks & Defesa em Camadas",
    context: "Uma equipe colocou Gitleaks no pre-commit local e removeu qualquer validação no servidor, alegando que agora é impossível subir segredo para o repositório.",
    question: "Qual é o erro principal dessa decisão?",
    options: [
      { key: "A", text: "Gitleaks só funciona depois do deploy em produção." },
      { key: "B", text: "Hook local pode ser pulado ou nem estar instalado; validação crítica deve existir também no servidor/CI." },
      { key: "C", text: "Segredos em Git não representam risco se estiverem em branch privada." },
      { key: "D", text: "Pre-commit local é mais forte que pre-receive server-side." },
      { key: "E", text: "Entropia de Shannon impede qualquer falso positivo." }
    ],
    answer: "B",
    explanation: "Hook local é lembrete, não cadeado. O dev pode usar '--no-verify' ou estar sem o hook. Para prova, pense em defesa em camadas: local ajuda, CI/servidor bloqueia. Exemplo: cinto de segurança ajuda, mas freio do carro continua obrigatório."
  },
  {
    id: 3,
    axis: "Computação",
    theme: "12-Factor App",
    context: "Uma aplicação guarda DATABASE_PASSWORD em config.production.json dentro do repositório privado. O time argumenta que está seguro porque o GitHub é privado.",
    question: "Pelo Twelve-Factor App, qual prática está correta?",
    options: [
      { key: "A", text: "Manter config por ambiente no repositório é recomendado." },
      { key: "B", text: "Credenciais podem ficar no código se o repositório for privado." },
      { key: "C", text: "Config que varia entre ambientes deve ficar em variáveis de ambiente ou mecanismo externo equivalente." },
      { key: "D", text: "Build e Run devem ser misturados para facilitar rollback." },
      { key: "E", text: "Produção deve usar ferramentas diferentes de desenvolvimento para evitar dependência local." }
    ],
    answer: "C",
    explanation: "Regra de bolso: se publicar o repo vaza senha, está errado. Config vai fora do código, normalmente em env vars. Exemplo: URL do banco muda entre dev e prod; o código não deveria mudar por causa disso."
  },
  {
    id: 4,
    axis: "Computação",
    theme: "SRE, SLO & Error Budget",
    context: "Um serviço tem SLA externo de 99,5%. O time quer definir SLO interno de 99,0% para reduzir alertas.",
    question: "Qual análise está correta?",
    options: [
      { key: "A", text: "O SLO interno deveria ser mais rígido que o SLA, para agir antes de violar contrato." },
      { key: "B", text: "SLO deve ser sempre menor que SLA." },
      { key: "C", text: "Error budget é usado apenas para calcular multa contratual." },
      { key: "D", text: "Se sobra error budget, deploys devem ser proibidos." },
      { key: "E", text: "Toil deixa de ser toil quando é registrado em ticket." }
    ],
    answer: "A",
    explanation: "SLO é alarme interno; SLA é promessa externa. O alarme toca antes do prejuízo. Exemplo: se o contrato aceita 99,5%, o time pode mirar 99,9% para corrigir antes de pagar multa."
  },
  {
    id: 5,
    axis: "Computação",
    theme: "Testes & Pirâmide",
    context: "Um projeto tem poucos testes unitários e muitos testes end-to-end lentos, que quebram por instabilidade de rede e dados externos.",
    question: "Que diagnóstico combina melhor com a pirâmide de testes?",
    options: [
      { key: "A", text: "A suíte está saudável, pois testes end-to-end devem ser a maioria." },
      { key: "B", text: "A suíte lembra uma pirâmide invertida: muitos testes caros no topo e poucos baratos na base." },
      { key: "C", text: "Testes unitários são sempre inúteis em APIs." },
      { key: "D", text: "Mocks tornam qualquer teste amplo mais realista." },
      { key: "E", text: "Testes lentos são melhores porque simulam produção com mais fidelidade." }
    ],
    answer: "B",
    explanation: "Pirâmide boa tem muitos testes baratos e rápidos na base. Muitos E2E lentos viram 'casquinha de sorvete': parece cobertura, mas quebra fácil. Exemplo: testar regra de desconto não precisa abrir navegador e chamar banco real."
  },
  {
    id: 6,
    axis: "Matemática",
    theme: "Grafos Planares",
    context: "Um grafo planar simples conexo tem 12 vértices. Depois, outro grafo planar conexo tem 9 vértices e 15 arestas.",
    question: "Qual é o máximo de arestas do primeiro grafo e quantas faces tem o segundo?",
    options: [
      { key: "A", text: "30 arestas e 8 faces." },
      { key: "B", text: "30 arestas e 7 faces." },
      { key: "C", text: "36 arestas e 8 faces." },
      { key: "D", text: "24 arestas e 6 faces." },
      { key: "E", text: "32 arestas e 9 faces." }
    ],
    answer: "A",
    explanation: "Duas fórmulas para decorar: máximo planar simples = 3v - 6; Euler = v - e + f = 2. Com 12 vértices: 36 - 6 = 30. Com 9 e 15: 9 - 15 + f = 2, então f = 8."
  },
  {
    id: 7,
    axis: "Matemática",
    theme: "Euler vs Hamilton",
    context: "Um fiscal precisa passar por todas as ruas de um bairro sem repetir rua. Outro precisa visitar todas as casas uma vez e voltar ao início.",
    question: "Qual associação está correta?",
    options: [
      { key: "A", text: "Ruas são Hamilton; casas são Euler." },
      { key: "B", text: "Ruas são Euler; casas são Hamilton." },
      { key: "C", text: "Ambos são sempre problemas polinomiais fáceis." },
      { key: "D", text: "Euler exige visitar cada vértice exatamente uma vez." },
      { key: "E", text: "Hamilton exige usar cada aresta exatamente uma vez." }
    ],
    answer: "B",
    explanation: "Euler = arestas. Hamilton = vértices. Rua é aresta; casa é vértice. Exemplo de memória: 'Euler entrega carta passando pelas ruas'; 'Hamilton visita lugares'."
  },
  {
    id: 8,
    axis: "Matemática",
    theme: "Matching & Hall",
    context: "Três alunos precisam escolher três temas. Ana aceita T1 ou T2; Bruno aceita T1; Carla aceita T1. Cada tema só pode ficar com um aluno.",
    question: "O que o Teorema de Hall indica?",
    options: [
      { key: "A", text: "Existe alocação perfeita porque há três alunos e três temas." },
      { key: "B", text: "Não existe alocação perfeita, pois Bruno e Carla dependem do mesmo único tema T1." },
      { key: "C", text: "Hall só vale para grafos não bipartidos." },
      { key: "D", text: "Basta Ana aceitar dois temas para garantir matching perfeito." },
      { key: "E", text: "Todo matching inicial já é máximo." }
    ],
    answer: "B",
    explanation: "Hall pergunta: cada grupo tem opções suficientes? Bruno e Carla juntos têm só uma opção: T1. Duas pessoas, uma cadeira. Não fecha matching perfeito."
  },
  {
    id: 9,
    axis: "Negócios",
    theme: "ERP vs CRM",
    context: "Uma empresa quer guardar dados de campanha de marketing no módulo de folha de pagamento e registrar férias de funcionários no CRM.",
    question: "Qual princípio está sendo violado?",
    options: [
      { key: "A", text: "Separação de responsabilidades entre sistemas de back-office e relacionamento com cliente." },
      { key: "B", text: "Todo dado deve ficar no CRM." },
      { key: "C", text: "ERP só serve para vendas." },
      { key: "D", text: "CRM substitui contabilidade e RH." },
      { key: "E", text: "Integração entre sistemas deve ser sempre evitada." }
    ],
    answer: "A",
    explanation: "ERP cuida do operacional interno; CRM cuida do cliente. Eles conversam, mas não trocam de profissão. Exemplo: CRM sabe que o cliente comprou; ERP emite nota, controla estoque e financeiro."
  },
  {
    id: 10,
    axis: "Negócios",
    theme: "Lean Seis Sigma",
    context: "Uma equipe quer desenhar do zero um processo de onboarding que nunca existiu. Outra quer reduzir erro num processo de suporte já em operação.",
    question: "Qual combinação está correta?",
    options: [
      { key: "A", text: "DMAIC para processo novo; DMADV para processo existente." },
      { key: "B", text: "DMADV para processo novo; DMAIC para melhorar processo existente." },
      { key: "C", text: "DMAIC e DMADV são nomes diferentes para a mesma coisa." },
      { key: "D", text: "Control é a etapa de criação inicial do processo." },
      { key: "E", text: "Lean considera defeito o desperdício que gera todos os outros." }
    ],
    answer: "B",
    explanation: "DMAIC melhora o que já existe. DMADV desenha algo novo. Exemplo: consertar fila lenta do suporte = DMAIC; criar onboarding do zero = DMADV."
  },
  {
    id: 11,
    axis: "Negócios",
    theme: "Tributos",
    context: "Uma loja escolhe legalmente um regime tributário antes de vender. Outra vende e depois esconde notas para pagar menos.",
    question: "Como classificar os dois casos?",
    options: [
      { key: "A", text: "Ambos são evasão fiscal." },
      { key: "B", text: "O primeiro é elisão; o segundo é evasão." },
      { key: "C", text: "O primeiro é evasão; o segundo é elisão." },
      { key: "D", text: "Ambos são elisão fiscal." },
      { key: "E", text: "Nenhum tem relação com tributação." }
    ],
    answer: "B",
    explanation: "Elisão é planejamento legal antes do fato gerador. Evasão é fraude/sonegação. Exemplo simples: escolher Simples Nacional quando permitido é elisão; esconder venda é evasão."
  },
  {
    id: 12,
    axis: "Negócios",
    theme: "Startups, Vesting & Saída",
    context: "Um cofundador tem vesting de 4 anos com cliff de 1 ano e sai depois de 8 meses. O contrato também tem Drag Along.",
    question: "Qual conclusão está correta?",
    options: [
      { key: "A", text: "Ele recebe 8 meses proporcionais de quotas." },
      { key: "B", text: "Ele não recebe quotas por sair antes do cliff; Drag Along permite puxar minoritários numa venda." },
      { key: "C", text: "Cliff significa direito imediato a todas as quotas." },
      { key: "D", text: "Drag Along protege apenas o comprador minoritário." },
      { key: "E", text: "Vesting elimina a necessidade de acordo de sócios." }
    ],
    answer: "B",
    explanation: "Cliff é carência. Saiu antes de 1 ano, não levou participação. Drag Along é o majoritário puxar os minoritários para vender junto, nas mesmas condições. Exemplo: facilita vender 100% da startup."
  },
  {
    id: 13,
    axis: "UX/DesignOps",
    theme: "Design System & Adoção",
    context: "A empresa tem biblioteca React e Figma completa, mas os squads continuam criando componentes próprios porque não sabem quem mantém o sistema nem quando devem contribuir.",
    question: "Qual problema aparece com mais força?",
    options: [
      { key: "A", text: "Falta apenas trocar a cor dos componentes." },
      { key: "B", text: "Falta DesignOps: governança, adoção, processos e manutenção." },
      { key: "C", text: "Design System dispensa documentação." },
      { key: "D", text: "Componentes duplicados são sinal de maturidade." },
      { key: "E", text: "A solução é proibir design em todos os squads." }
    ],
    answer: "B",
    explanation: "Design System não é só biblioteca bonita. Precisa de processo: quem mantém, como contribuir, como adotar. Exemplo: se cada time cria seu botão, o problema não é só técnico; é operação e cultura."
  },
  {
    id: 14,
    axis: "UX/DesignOps",
    theme: "REACH & Playbooks",
    context: "Um time mede DesignOps apenas por quantidade de telas entregues por semana, sem avaliar retrabalho, clareza de papéis ou alinhamento com estratégia.",
    question: "Qual crítica está correta?",
    options: [
      { key: "A", text: "Quantidade de telas é suficiente para medir DesignOps." },
      { key: "B", text: "REACH olha dimensões mais amplas; velocidade sem direção não garante valor." },
      { key: "C", text: "Velocity e speed são exatamente iguais." },
      { key: "D", text: "Playbook deve ignorar tomada de decisão." },
      { key: "E", text: "Eficiência significa fazer mais reuniões." }
    ],
    answer: "B",
    explanation: "Speed é correr. Velocity é correr na direção certa. REACH ajuda a olhar eficiência, adoção e saúde operacional, não só volume. Exemplo: entregar 20 telas erradas é rápido, mas não é bom."
  },
  {
    id: 15,
    axis: "Liderança",
    theme: "SCARF & Influência",
    context: "Uma gerente quer implantar code review obrigatório. Ela anuncia: 'A partir de amanhã, quem reclamar terá avaliação negativa'.",
    question: "Qual leitura é mais adequada pelo SCARF e por táticas de influência?",
    options: [
      { key: "A", text: "A pressão aumenta autonomia e justiça percebida." },
      { key: "B", text: "A ameaça tende a gerar defesa; consulta e explicação racional aumentariam compromisso." },
      { key: "C", text: "Táticas hard sempre geram comprometimento real." },
      { key: "D", text: "SCARF só se aplica a decisões financeiras." },
      { key: "E", text: "Status e autonomia não afetam times técnicos." }
    ],
    answer: "B",
    explanation: "Ameaça ativa defesa. Para mudança de hábito, melhor explicar o motivo, ouvir objeções e combinar experimento. Exemplo: 'vamos testar code review por 30 dias para reduzir bug em produção' gera mais adesão que punição."
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

const essayQuestionsV2 = [
  {
    id: 1,
    axis: "Computação",
    theme: "Segurança, CI/CD e Configuração",
    context: "Uma healthtech percebeu que seus deploys ficaram rápidos, mas inseguros: variáveis sensíveis aparecem em arquivos versionados, os scans de segredo rodam apenas no computador de alguns desenvolvedores e a imagem Docker final contém SDKs, ferramentas de build e dependências de desenvolvimento.",
    prompt: "Explique um plano curto para corrigir esses problemas usando 12-Factor App, validações de segurança no pipeline e Docker multi-stage.",
    referenceAnswer: "Resposta esperada:\n" +
                     "1. Remover segredos do repositório e usar variáveis de ambiente ou secret manager. Regra simples: o repo poderia ser público sem vazar senha.\n" +
                     "2. Manter hooks locais como ajuda, mas colocar Gitleaks/scan de segredo também no CI ou no servidor, porque hook local pode ser pulado.\n" +
                     "3. Usar Docker multi-stage: primeiro estágio compila/testa com SDK; imagem final leva só runtime e artefatos necessários.\n" +
                     "4. Separar Build, Release e Run: build gera artefato imutável; release combina artefato com config; run apenas executa."
  },
  {
    id: 2,
    axis: "Negócios, UX & Liderança",
    theme: "Adoção de Processos",
    context: "Uma empresa criou um Design System e um novo processo de code review, mas os times resistem. Cada squad continua criando componentes próprios, e a liderança tenta resolver com cobrança diária e ameaças de avaliação negativa.",
    prompt: "Proponha uma resposta usando DesignOps, REACH/Playbooks e SCARF para aumentar adoção real sem depender de pressão.",
    referenceAnswer: "Resposta esperada:\n" +
                     "1. Tratar o Design System como produto interno: definir dono, processo de contribuição, documentação viva e rotina de suporte.\n" +
                     "2. Usar DesignOps para governança e adoção, não só para criar biblioteca. Exemplo: combinar como squads pedem ou alteram componentes.\n" +
                     "3. Medir com visão REACH: menos retrabalho, mais eficiência, clareza de papéis e adoção real; não só número de telas entregues.\n" +
                     "4. Pela lógica SCARF, evitar ameaça a autonomia e justiça. Melhor propor experimento curto, explicar benefício e ouvir objeções."
  }
];
