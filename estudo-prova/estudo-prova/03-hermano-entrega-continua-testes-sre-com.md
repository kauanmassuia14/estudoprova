# Material de Estudo Aprofundado — Entrega Contínua, Testes, SRE e Fundamentos de Computação

**Disciplina:** Entrega Contínua, Testes, SRE e Fundamentos de Computação
**Professor:** Hermano Peixoto de Oliveira Junior (eixo COM)
**Turma:** Inteli 2026-1B-T13

> Documento de estudo aprofundado. Para cada tópico: conceito central, pontos-chave detalhados, exemplos/comandos/código concretos, por que importa e **📌 Pontos de prova**. Fontes acessadas estão citadas inline. Conteúdo de vídeos e livros pagos (Pressman, Sommerville) é coberto por conhecimento consolidado, com a nota correspondente.

---

## Índice

**Semana 05 — Entrega/implantação contínua**
1. [Entrega contínua: CI vs CD vs Continuous Deployment (GitLab)](#1-entrega-contínua-ci-vs-cd-vs-continuous-deployment-gitlab)
2. [GitHub Actions na prática: workflows, jobs, steps, runners, triggers](#2-github-actions-na-prática)

**Semana 06 — Testes de integração e qualidade**
3. [Testes de integração no ASP.NET Core (Microsoft)](#3-testes-de-integração-no-aspnet-core)
4. [Preparar o ambiente de testes de integração (WebApplicationFactory, TestServer, BD em memória)](#4-preparar-o-ambiente-de-testes-de-integração)
5. [Integration Test segundo Martin Fowler (narrow vs broad)](#5-integration-test-segundo-martin-fowler)
6. [Testes unitários e de integração com JUnit 5 e Mockito](#6-testes-unitários-e-de-integração-com-junit-5-e-mockito)
7. [Fornecer serviços de qualidade com DevOps (Microsoft)](#7-fornecer-serviços-de-qualidade-com-devops)
8. [Como a Microsoft fornece software com DevOps](#8-como-a-microsoft-fornece-software-com-devops)
9. [SRE e Disponibilidade no Mercado Livre](#9-sre-e-disponibilidade-no-mercado-livre)
10. [Plataforma Fury (Internal Developer Platform do Mercado Livre)](#10-plataforma-fury-internal-developer-platform-do-mercado-livre)
11. [Garantia da qualidade de software — SQA (Pressman)](#11-garantia-da-qualidade-de-software--sqa-pressman)

**Semana 07 — Métricas de pipeline e fundamentos de computação**
12. [Coleta e análise de métricas em pipeline CI/CD (atividade prática)](#12-coleta-e-análise-de-métricas-em-pipeline-cicd)
13. [Padrões de software — design e arquitetura (Sommerville)](#13-padrões-de-software-sommerville)
14. [Manipulação de bits (bitwise)](#14-manipulação-de-bits-bitwise)
15. [Fundamentos de Garbage Collection (.NET)](#15-fundamentos-de-garbage-collection-net)
16. [Mapa de memória de um processo (UFRJ)](#16-mapa-de-memória-de-um-processo)

**Semana 09 — SRE**
17. [SRE: ciclos virtuosos (SLI/SLO, post-mortems)](#17-sre-ciclos-virtuosos)
18. [SRE: o lado humano (toil, 50%, burnout)](#18-sre-o-lado-humano)
19. [SRE na prática / getting started](#19-sre-na-prática--getting-started)
20. [O papel do SRE: SLI, SLO, SLA, error budget, toil](#20-o-papel-do-sre-sli-slo-sla-error-budget-toil)

**Semana 10 — Habilidades de programação e OOP**
21. [Como melhorar suas habilidades de programação (LinkedIn)](#21-como-melhorar-suas-habilidades-de-programação)
22. [How To Be A GREAT Programmer](#22-how-to-be-a-great-programmer)
23. [Programação Orientada a Objetos (MIT 6.01) — os 4 pilares](#23-programação-orientada-a-objetos-os-4-pilares)

[**Síntese: do commit à confiabilidade em produção**](#síntese-do-commit-à-confiabilidade-em-produção)

---

# Semana 05 — Entrega/implantação contínua

## 1. Entrega contínua: CI vs CD vs Continuous Deployment (GitLab)

**Fonte:** https://about.gitlab.com/pt-br/topics/continuous-delivery/

### Conceito central
As três práticas formam um continuum de automação que vai do commit do desenvolvedor até o software rodando em produção. A confusão clássica de prova é tratar "CD" como uma coisa só — na verdade o "D" pode significar **Delivery** (entrega) ou **Deployment** (implantação), e a diferença entre elas é **exatamente onde fica o último botão manual**.

### Pontos-chave detalhados

| Prática | O que automatiza | Onde para | Gatilho do passo final |
|---|---|---|---|
| **Continuous Integration (CI)** | Integrar código em um repositório compartilhado; **buildar e testar cada alteração** automaticamente, várias vezes ao dia | Após validar o código por compilação + testes automatizados | — (gera artefato validado) |
| **Continuous Delivery (CD)** | Todas as etapas do ciclo: **criação, testes, configuração e implantação** em ambientes de staging; o software fica **sempre pronto para ser lançado** | Antes do push final para produção — requer **aprovação humana** | **Manual** (clique de release) |
| **Continuous Deployment** | Tudo que a Delivery faz **+ o deploy automático em produção** de todo código que passou na CI | Roda direto até produção | **Automático** (sem intervenção) |

Citação-chave da fonte (GitLab):
> "A implantação contínua significa que todo o código validado pela CI é implantado automaticamente em produção, enquanto a entrega contínua significa que esse código *pode* ser implantado."

- **CI** (https://about.gitlab.com/pt-br/topics/continuous-delivery/): "a prática de integrar código em um repositório compartilhado e criar/testar cada alteração" automaticamente. Reduz a "dívida de integração" — quanto mais cedo e mais frequentemente integra, menores os conflitos de merge.
- **CD (Delivery):** "funciona em conjunto com a integração contínua para automatizar o processo de lançamento de aplicações." A diferença para Deployment é o gate de aprovação manual.
- **Continuous Deployment:** zero toque humano. Exige altíssima confiança na suíte de testes automatizados, feature flags e capacidade de rollback.

### Pipeline típico (estágios)
```
[commit] → build → test (unit/integração) → configurar → deploy staging
              └─ CI ─┘
       └────────────── Continuous Delivery ──────────────┘ (gate manual) → prod
       └──────────── Continuous Deployment ──────────────────────────────→ prod (auto)
```

### Por que importa
A escolha entre Delivery e Deployment é uma decisão de risco organizacional. Continuous Deployment só é viável quando a confiança nos testes é altíssima; caso contrário, mantém-se o gate manual da Delivery.

### 📌 Pontos de prova
- **CI = integrar + buildar + testar cada mudança.** Para na validação.
- **Delivery = pronto para deploy, com aprovação manual.** "pode ser implantado".
- **Deployment = deploy automático em produção, sem humano.** "é implantado automaticamente".
- Mnemônico: **De*liver*y tem um humano apertando o botão; De*ploy*ment não.**
- Todos os três dependem de uma boa suíte de **testes automatizados** como rede de segurança.

---

## 2. GitHub Actions na prática

**🎬 Vídeo confirmado:** "Tudo sobre GitHub Actions | GitHub Mão na Massa" — canal **GitHub Mão na Massa** — https://www.youtube.com/watch?v=lcuobWOP40Y

### Conceito central
GitHub Actions é a plataforma de CI/CD nativa do GitHub. Você descreve **workflows** em arquivos YAML dentro de `.github/workflows/`. Cada workflow reage a **eventos** (triggers), executa um ou mais **jobs**, e cada job roda **steps** sequenciais em um **runner** (máquina virtual).

### O que o vídeo demonstra na prática (minutos ~14–45)
A parte central da aula é "mão na massa": criar um workflow do zero diretamente no repositório e ver o pipeline rodando. Os pontos que o vídeo constrói passo a passo:

1. **Onde o arquivo vive.** Todo workflow é um `.yml`/`.yaml` dentro de **`.github/workflows/`** no repositório. O GitHub detecta esse diretório automaticamente e passa a executar o que estiver lá. Pode-se criar pela aba **Actions** (que oferece templates prontos) ou criando o arquivo na mão.
2. **Anatomia do YAML, de cima para baixo.** O vídeo escreve o arquivo campo a campo, explicando a **indentação obrigatória** do YAML (espaços, nunca tab — erro clássico que quebra o workflow):
   - **`name:`** — nome do workflow exibido na aba Actions.
   - **`on:`** — o(s) **evento(s)/gatilho(s)**. A aula mostra `push`, `pull_request` e o **`workflow_dispatch`** (botão "Run workflow" para disparo manual pela interface).
   - **`jobs:`** — o bloco que agrupa um ou mais jobs.
3. **Job → `runs-on` → `steps`.** Para cada job o vídeo mostra:
   - **`runs-on: ubuntu-latest`** — o **runner**: uma VM efêmera hospedada pelo GitHub, criada do zero a cada execução e descartada no fim (também existem `windows-latest`, `macos-latest` e self-hosted).
   - **`steps:`** — a lista ordenada de passos, executados **de cima para baixo, em sequência**, compartilhando o mesmo filesystem do runner.
4. **`uses:` vs `run:`** — a distinção mais martelada na demonstração:
   - **`uses: actions/checkout@v4`** → reaproveita uma **Action** pronta do Marketplace (aqui, clonar o código do repo dentro do runner — quase sempre o **primeiro step**, senão o runner não tem o código).
   - **`run: npm test`** → executa um **comando de shell** direto na VM.
   O vídeo também usa `actions/setup-node` (ou setup equivalente) com `with:` para passar parâmetros (ex.: a versão da linguagem).
5. **Ver o resultado.** Após o `git push`/commit, a aula vai à aba **Actions**, abre o run, expande cada job e cada step, lê os **logs em tempo real** e mostra o **check verde (sucesso) / X vermelho (falha)** que aparece no commit e no pull request.

> Mensagem central do vídeo: GitHub Actions transforma "rodar build e testes a cada push" em algo declarativo — você descreve o **quê** num YAML versionado junto com o código, e o GitHub provisiona a máquina e executa.

### Hierarquia / vocabulário (memorize esta pirâmide)

```
Workflow  (arquivo .yml em .github/workflows/)
  └─ disparado por: on: (eventos / triggers)
  └─ Job(s)        (rodam em paralelo por padrão; runs-on: define o runner)
       └─ Step(s)  (rodam em sequência dentro do job)
            ├─ run:   → executa comando shell
            └─ uses:  → invoca uma Action reutilizável (ex: actions/checkout@v4)
```

| Termo | O que é |
|---|---|
| **Workflow** | Processo automatizado completo, definido em YAML em `.github/workflows/` |
| **Event / Trigger (`on`)** | O que dispara o workflow: `push`, `pull_request`, `schedule` (cron), `workflow_dispatch` (manual), `release` |
| **Job** | Conjunto de steps que rodam no **mesmo runner**. Jobs são **paralelos** por padrão; use `needs:` para sequenciar |
| **Step** | Tarefa individual dentro de um job. Roda comando (`run:`) ou usa uma action (`uses:`). Steps são **sequenciais** e compartilham o filesystem do job |
| **Runner** | Máquina (VM) que executa o job. GitHub-hosted (`ubuntu-latest`, `windows-latest`, `macos-latest`) ou self-hosted |
| **Action** | Unidade reutilizável publicada no Marketplace (ex: `actions/checkout`, `actions/setup-node`) |

### Exemplo completo de pipeline

```yaml
name: CI                                  # nome do workflow

on:                                       # TRIGGERS
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:                      # permite rodar manualmente

jobs:
  build-and-test:                         # nome do JOB
    runs-on: ubuntu-latest                # RUNNER
    steps:
      - name: Checkout do código          # STEP usando uma ACTION
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'                    # cache de dependências → acelera

      - name: Instalar dependências        # STEP com comando shell
        run: npm ci

      - name: Rodar testes
        run: npm test

  deploy:                                 # segundo JOB
    needs: build-and-test                 # só roda se o anterior passar (sequencia)
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'   # só na main
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: ./deploy.sh
```

### Conceitos avançados que caem em prova
- **`needs:`** cria dependências entre jobs (transforma paralelo em sequencial). É a chave para entender **paralelismo vs. dependência** no DAG do workflow.
- **Matrix strategy** roda o mesmo job em várias combinações (várias versões de linguagem/SO):
  ```yaml
  strategy:
    matrix:
      node-version: [18, 20, 22]
  ```
- **Cache** (`actions/cache` ou `cache:` no setup): evita reinstalar dependências a cada run → reduz tempo do pipeline.
- **Secrets:** `${{ secrets.MINHA_CHAVE }}` — variáveis sensíveis configuradas no repo.
- **Artifacts:** `actions/upload-artifact` / `download-artifact` para passar arquivos entre jobs.
- **Contexts e expressões:** `${{ github.ref }}`, `${{ github.event_name }}`, `${{ matrix.node-version }}`.

### 📌 Pontos de prova
- **Workflow → Jobs → Steps.** Jobs em paralelo por padrão; steps em sequência.
- **`on:`** define os triggers. Saiba citar `push`, `pull_request`, `schedule`, `workflow_dispatch`.
- **`runs-on:`** define o runner (ex: `ubuntu-latest`).
- **`uses:`** = action reutilizável; **`run:`** = comando shell.
- **`needs:`** = dependência entre jobs (sequencia + habilita paralelismo controlado).
- Arquivos ficam em **`.github/workflows/*.yml`**.
- **Do vídeo:** `workflow_dispatch` = disparo manual pelo botão "Run workflow"; YAML usa **espaços, nunca tab**; `actions/checkout` costuma ser o **primeiro step** (sem ele o runner não tem o código).

**Fontes da busca:** [GitHub Docs — Understanding GitHub Actions](https://docs.github.com/articles/getting-started-with-github-actions) · [GitHub Docs — Workflow syntax](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions) · [freeCodeCamp — Learn to Use GitHub Actions](https://www.freecodecamp.org/news/learn-to-use-github-actions-step-by-step-guide/)

---

# Semana 06 — Testes de integração e qualidade

## 3. Testes de integração no ASP.NET Core

**Fonte:** https://learn.microsoft.com/pt-br/aspnet/core/test/integration-tests?view=aspnetcore-8.0

### Conceito central
Testes de integração verificam que **dois ou mais componentes funcionam juntos** usando os componentes **reais** da aplicação (banco de dados, sistema de arquivos, rede, pipeline HTTP request/response) — diferente dos testes unitários, que isolam um componente com fakes/mocks.

### Unitário vs. Integração (tabela da Microsoft)

| Aspecto | Teste **unitário** | Teste de **integração** |
|---|---|---|
| Escopo | Componente isolado (um método) | Dois ou mais componentes juntos |
| Dependências | Fakes / objetos fictícios | Componentes **reais** (BD, FS, rede) |
| Velocidade | **Rápido** | **Mais lento** |
| Código/processamento | Pouco | Mais código e mais dados |
| O que valida | Lógica de negócio isolada | Infraestrutura: BD, sistema de arquivos, dispositivos de rede, pipeline de solicitação-resposta |

> "Os testes de integração confirmam que dois ou mais componentes trabalham juntos usando componentes reais que o aplicativo utiliza em produção." — Microsoft Learn

### Componentes-chave do ASP.NET Core
- **`WebApplicationFactory<TEntryPoint>`** — cria um `TestServer` em memória. Em ASP.NET Core 6.0+, `TEntryPoint` é a classe `Program`.
- **`TestServer`** — servidor HTTP **em memória** que processa requisições **sem rede real**.
- **`HttpClient`** (via `_factory.CreateClient()`) — envia requisições ao TestServer.

### Exemplo (smoke test de endpoints)
```csharp
public class BasicTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;
    public BasicTests(WebApplicationFactory<Program> factory) => _factory = factory;

    [Theory]
    [InlineData("/")]
    [InlineData("/Index")]
    public async Task Get_EndpointsReturnSuccessAndCorrectContentType(string url)
    {
        var client = _factory.CreateClient();          // Arrange
        var response = await client.GetAsync(url);     // Act
        response.EnsureSuccessStatusCode();            // Assert (200–299)
        Assert.Equal("text/html; charset=utf-8",
            response.Content.Headers.ContentType.ToString());
    }
}
```

### Padrão dos testes: Arrange–Act–Assert (AAA)
```
1. Arrange — configurar o host web do SUT (System Under Test)
2. Act     — cliente envia requisição, recebe resposta
3. Assert  — validar a resposta contra o resultado esperado
```

### Boas práticas (Microsoft)
1. **Separe** testes unitários e de integração em projetos diferentes.
2. **Limite** integração aos cenários de infraestrutura **críticos** — não escreva integração para cada permutação de dados (isso é trabalho de teste unitário).
3. Use **SQLite em memória** (recomendado) em vez do InMemoryDatabase do EF Core.
4. Defina o ambiente como `"Development"` ou `"Testing"`.

Pacotes NuGet: `Microsoft.AspNetCore.Mvc.Testing`, `xunit`, `AngleSharp` (para parsear HTML).

### 📌 Pontos de prova
- Integração = **componentes reais juntos** (BD, FS, rede, pipeline HTTP). Unitário = **isolado com mocks**.
- `WebApplicationFactory` → cria `TestServer` (HTTP **em memória**, sem rede).
- Padrão **Arrange-Act-Assert**.
- Integração é **mais lenta**; limite-os aos cenários críticos.

---

## 4. Preparar o ambiente de testes de integração

**Fonte:** https://learn.microsoft.com/pt-br/aspnet/core/test/integration-tests?view=aspnetcore-7.0

### Conceito central
Para testar com infraestrutura sob controle, você **substitui** os serviços de produção (ex.: o banco real) por equivalentes de teste dentro de uma `CustomWebApplicationFactory`, sobrescrevendo `ConfigureWebHost`.

### Substituir o DbContext por SQLite em memória
```csharp
public class CustomWebApplicationFactory<TProgram>
    : WebApplicationFactory<TProgram> where TProgram : class
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // 1. Remover o DbContext de produção
            var dbContextDescriptor = services.SingleOrDefault(d =>
                d.ServiceType == typeof(IDbContextOptionsConfiguration<ApplicationDbContext>));
            services.Remove(dbContextDescriptor);

            // 2. Remover a conexão de produção
            var dbConnectionDescriptor = services.SingleOrDefault(d =>
                d.ServiceType == typeof(DbConnection));
            services.Remove(dbConnectionDescriptor);

            // 3. Criar conexão SQLite EM MEMÓRIA (precisa ficar aberta)
            services.AddSingleton<DbConnection>(_ =>
            {
                var connection = new SqliteConnection("DataSource=:memory:");
                connection.Open();
                return connection;
            });

            // 4. Registrar o DbContext apontando para a conexão SQLite
            services.AddDbContext<ApplicationDbContext>((container, options) =>
            {
                var connection = container.GetRequiredService<DbConnection>();
                options.UseSqlite(connection);
            });
        });
        builder.UseEnvironment("Development");
    }
}
```

### SQLite em memória vs. EF Core InMemory

| Opção | Característica | Quando usar |
|---|---|---|
| **SQLite `:memory:`** (recomendado) | Suporta a maioria das operações SQL reais (constraints, transações) | Testes de integração confiáveis |
| **EF Core `UseInMemoryDatabase`** | Não é um BD relacional de verdade; ignora constraints e SQL | Testes básicos, rápidos, sem fidelidade SQL |

### Seed e reinicialização de dados entre testes
```csharp
public static class Utilities
{
    public static void InitializeDbForTests(ApplicationDbContext db)
    {
        db.Messages.AddRange(GetSeedingMessages());
        db.SaveChanges();
    }
    public static void ReinitializeDbForTests(ApplicationDbContext db)
    {
        db.Messages.RemoveRange(db.Messages);   // limpa
        InitializeDbForTests(db);               // re-seed → testes isolados
    }
    public static List<Message> GetSeedingMessages() => new()
    {
        new() { Text = "TEST RECORD: Message 1" },
        new() { Text = "TEST RECORD: Message 2" },
    };
}
```
Reinicializar entre testes garante **isolamento** (um teste não polui o estado do próximo).

### Injetar serviços fictícios por teste — `ConfigureTestServices`
```csharp
var client = _factory.WithWebHostBuilder(builder =>
{
    builder.ConfigureTestServices(services =>
    {
        services.AddScoped<IQuoteService, TestQuoteService>();  // mock do serviço
    });
}).CreateClient();
```
> Use `WithWebHostBuilder` + `ConfigureTestServices` para sobrepor serviços **por teste**; use `ConfigureWebHost` na factory para configuração **global**.

### Autenticação fictícia (testar páginas seguras)
Implementa-se um `TestAuthHandler : AuthenticationHandler<...>` que sempre autentica com um `ClaimsPrincipal` de teste, registrado com um `"TestScheme"`.

### Opções do HttpClient
```csharp
_factory.CreateClient(new WebApplicationFactoryClientOptions
{
    AllowAutoRedirect = false,   // permite verificar respostas 3xx intermediárias
    HandleCookies = true,
    MaxAutomaticRedirections = 7
});
```

### 📌 Pontos de prova
- **`ConfigureWebHost`** (factory inteira) vs **`ConfigureTestServices` + `WithWebHostBuilder`** (por teste).
- Remover descritor de produção → `services.Remove(...)` → adicionar substituto.
- **SQLite `:memory:` precisa ficar aberto** (singleton) ou o BD some.
- **`AllowAutoRedirect = false`** para inspecionar redirects.
- Reinicializar BD entre testes = **isolamento**.

---

## 5. Integration Test segundo Martin Fowler

**Fonte:** https://martinfowler.com/bliki/IntegrationTest.html

### Conceito central
Fowler alerta que "integration test" virou um termo **ambíguo** com pelo menos duas interpretações. Ele separa em **narrow** (estreito) e **broad** (amplo). Definição geral: testes que "determinam se unidades de software desenvolvidas independentemente funcionam corretamente quando conectadas uma à outra."

### Narrow vs. Broad

| | **Narrow integration test** | **Broad integration test** |
|---|---|---|
| Escopo | Só a porção de código que fala com **um** serviço externo | Caminhos através de **múltiplos serviços reais** |
| Dependências externas | **Test doubles** (em processo ou stubs remotos) | Versões **reais** de todos os serviços |
| Ambiente | Leve, roda com framework de unit test | Ambiente extenso + acesso à **rede** |
| Velocidade | Rápido (escopo de unit test) | Lento, frágil |

> Se seus únicos testes de integração forem **amplos**, considere migrar para o estilo **estreito** — provavelmente melhora muito a velocidade da suíte.

### Histórico e terminologia
- Anos 1980: "integration test" = "ativar muitos módulos e rodar testes de nível superior contra todos eles."
- Anos 2010+: alternativa com test doubles, reduzindo a dependência de ambientes complexos.
- Fowler **prefere** os termos: **"system test"** ou **"end-to-end test"** para os amplos; **"narrow integration tests"** para os estreitos; e **solitary/sociable unit tests** para variações de unitário.

### A pirâmide de testes (contexto consolidado)
```
            /\        Poucos testes E2E / UI  (lentos, frágeis, caros)
           /  \
          /----\      Testes de integração   (médios)
         /      \
        /--------\    Muitos testes unitários (rápidos, baratos, base)
       /__________\
```
Regra: **muitos** unitários na base, **alguns** de integração no meio, **pouquíssimos** E2E no topo. Testes amplos demais → suíte lenta e instável ("ice cream cone" anti-padrão = pirâmide invertida).

### 📌 Pontos de prova
- **Narrow** = um serviço externo, com **test doubles**, escopo de unit test, rápido.
- **Broad** = vários serviços **reais**, precisa de rede/ambiente, lento.
- Fowler prefere chamar os amplos de **"end-to-end / system tests"**.
- Pirâmide de testes: base larga de unitários, topo estreito de E2E.

---

## 6. Testes unitários e de integração com JUnit 5 e Mockito

**🎬 Vídeo confirmado:** "Software Testing Tutorial - Learn Unit Testing and Integration Testing" — canal **Amigoscode** (Nelson Djalo) — https://www.youtube.com/watch?v=Geq60OVyBPg

### Conceito central
JUnit 5 (Jupiter) é o framework padrão de testes em Java. Mockito cria **dublês de teste** (mocks/stubs) para isolar a unidade sob teste de suas dependências.

### Roteiro do vídeo (o que a aula constrói, em ordem)
O tutorial do Amigoscode é prático e segue uma aplicação **Spring Boot** real (camadas Controller → Service → Repository), partindo dos testes unitários da camada de baixo até integração. A sequência:

1. **Visão geral de testes de software** — por que testar, custo de bugs em produção, tipos de teste.
2. **Setup com Maven** — dependência **`spring-boot-starter-test`**, que já traz **JUnit 5, AssertJ, Mockito e MockMvc** juntos no classpath. (Saber que esse starter empacota tudo é detalhe que cai em prova.)
3. **JUnit 5 + AssertJ** — escrever os primeiros testes. O vídeo dá ênfase ao **AssertJ** (sintaxe fluente `assertThat(x).isEqualTo(y)`, `assertThat(lista).hasSize(2).contains(...)`) por ser mais legível que o `assertEquals` puro do JUnit. Cobre `@BeforeEach`/`@AfterEach` para preparar e limpar o SUT.
4. **Testar a camada Repository com `@DataJpaTest` + H2** — anotação que carrega **só a fatia JPA** do contexto Spring (não a aplicação inteira) e usa um **banco H2 em memória**, garantindo testes rápidos e isolados. Esse é o exemplo de **teste de integração estreito** (narrow, no sentido de Fowler — fala com um componente real, o BD, mas em ambiente leve).
5. **Testar a camada Service com Mockito** — aqui o repositório é **mockado**: o foco é a lógica de negócio isolada. Padrão do vídeo:
   - `@ExtendWith(MockitoExtension.class)` na classe;
   - `@Mock` na dependência (o repositório) e `@InjectMocks` no serviço sob teste;
   - `when(repo.metodo(...)).thenReturn(...)` para programar o stub;
   - `verify(repo).metodo(...)` para confirmar a interação.
6. **ArgumentCaptor** — recurso que o vídeo destaca: capturar o objeto **realmente passado** para um método mockado, para então fazer asserções sobre seus campos. Útil quando o serviço monta uma entidade internamente antes de salvar:
   ```java
   @Captor ArgumentCaptor<Usuario> captor;
   // ...
   verify(repo).save(captor.capture());
   Usuario salvo = captor.getValue();
   assertThat(salvo.getEmail()).isEqualTo("ana@x.com");
   ```
7. **`assertThatThrownBy`** (AssertJ) e **`assertThrows`** (JUnit) — testar caminhos de exceção (ex.: e-mail já cadastrado).

### JUnit 5 — anotações essenciais
```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculadoraTest {

    private Calculadora calc;

    @BeforeEach              // roda antes de CADA teste
    void setup() { calc = new Calculadora(); }

    @Test
    @DisplayName("soma de dois positivos")
    void deveSomar() {
        assertEquals(5, calc.somar(2, 3));
    }

    @Test
    void deveLancarExcecao() {
        assertThrows(ArithmeticException.class, () -> calc.dividir(1, 0));
    }

    @ParameterizedTest               // mesmo teste, vários inputs
    @ValueSource(ints = {2, 4, 6})
    void devePar(int n) { assertTrue(n % 2 == 0); }

    @AfterEach void cleanup() { /* libera recursos */ }
}
```

| Anotação | Quando roda |
|---|---|
| `@Test` | Marca um método de teste |
| `@BeforeEach` / `@AfterEach` | Antes / depois de **cada** teste |
| `@BeforeAll` / `@AfterAll` | Uma vez, antes/depois de **todos** (estático) |
| `@Disabled` | Ignora o teste |
| `@ParameterizedTest` | Roda com múltiplos parâmetros |

### Asserções comuns
`assertEquals(esperado, atual)`, `assertTrue/assertFalse`, `assertNull/assertNotNull`, `assertThrows`, `assertAll` (agrupa várias asserções), `assertTimeout`.

### Mockito — mocking
```java
import static org.mockito.Mockito.*;

@Test
void deveBuscarUsuario() {
    // 1. Cria o mock da dependência
    RepositorioUsuario repo = mock(RepositorioUsuario.class);

    // 2. Define comportamento (stub)
    when(repo.buscarPorId(1L)).thenReturn(new Usuario("Ana"));

    ServicoUsuario servico = new ServicoUsuario(repo);

    // 3. Exercita a unidade
    Usuario u = servico.obter(1L);

    // 4. Verifica resultado e interação
    assertEquals("Ana", u.getNome());
    verify(repo).buscarPorId(1L);            // confirma que o método foi chamado
    verify(repo, times(1)).buscarPorId(1L);
}
```
- **`mock()`** cria o dublê; **`when(...).thenReturn(...)`** programa o stub; **`verify(...)`** confirma interações.
- `@Mock` + `@InjectMocks` + `@ExtendWith(MockitoExtension.class)` automatizam a injeção.

### Unidade vs. integração em Java
- **Unitário:** uma classe isolada, dependências mockadas com Mockito.
- **Integração:** várias camadas reais juntas (ex.: Spring Boot com `@SpringBootTest`, banco H2 em memória, `MockMvc` para testar a camada HTTP de ponta a ponta dentro da app).

### 📌 Pontos de prova
- `@BeforeEach` (cada teste) vs `@BeforeAll` (uma vez, estático).
- `assertThrows` para exceções; `@ParameterizedTest` para múltiplos inputs.
- Mockito: **`when().thenReturn()`** (stub) e **`verify()`** (verificação de interação).
- Mock isola a unidade → teste **unitário**; sem mocks, camadas reais → **integração**.
- **Do vídeo (Amigoscode):** `spring-boot-starter-test` empacota **JUnit 5 + AssertJ + Mockito + MockMvc**.
- **AssertJ** = asserções fluentes (`assertThat(x).isEqualTo(...)`), preferidas no vídeo pela legibilidade.
- **`@DataJpaTest` + H2 em memória** = testar **só a camada Repository** (fatia JPA), rápido e isolado.
- **`@Mock` + `@InjectMocks` + `@ExtendWith(MockitoExtension.class)`** = injeção automática dos dublês.
- **ArgumentCaptor** = captura o argumento real passado a um método mockado para inspecioná-lo.

**Fontes da busca:** [Class Central — Amigoscode Software Testing Tutorial](https://www.classcentral.com/course/youtube-software-testing-tutorial-learn-unit-testing-and-integration-testing-92905) · [Amigoscode — Mockito & Java Unit Testing](https://amigoscode.com/courses/testing/mockito-java-unit-testing) · [Vogella — Unit tests with Mockito](https://www.vogella.com/tutorials/Mockito/article.html)

---

## 7. Fornecer serviços de qualidade com DevOps

**Fonte:** https://learn.microsoft.com/pt-br/devops/deliver/delivering-quality-services-with-devops

### Conceito central
Na **fase de entrega** do DevOps, o código passa pelo pipeline de release até produção, sendo testado em **múltiplas dimensões**: funcionalidade, escala e segurança. A qualidade é construída ao longo de todo o pipeline — não só no fim.

### Pontos-chave (citações da fonte)
- **Empregar entrega contínua (CD):** "o processo para compilar, testar, configurar e implantar automaticamente de um ambiente de build para um ambiente de produção." Plataformas citadas: **GitHub Actions** e **Azure Pipelines**.
- **Design para implantação ideal:**
  - **Arquitetura de microsserviços** — "facilita a criação e a implantação de serviços independentes que podem ser compostos em aplicativos maiores e mais mantenedíveis."
  - **Infraestrutura como Código (IaC)** — gerenciar ambientes de forma versionada e reproduzível.
- **Shift-left (deslocar para a esquerda):** rodar parte dos testes **mais cedo** no processo (na fase Develop) → feedback rápido, defeitos baratos.
- **Shift-right (deslocar para a direita / testar em produção):** "O teste em produção oferece garantia de qualidade que simplesmente não pode ser replicada em nenhum outro lugar do pipeline." Inclui canary, A/B, monitoramento sintético, chaos.

### Shift-left vs. shift-right (eixo de prova)
```
   DEVELOP ──────── BUILD ──────── DELIVER ──────── OPERATE
   ◄── shift-left ──┤                  ├── shift-right ──►
   (testar cedo:    │                  (testar tarde, em prod:
    unit, lint,     │                   canary, A/B, monitoring,
    static analysis)│                   chaos, feature flags)
```
Os dois são **complementares**: shift-left pega defeitos cedo e barato; shift-right valida o comportamento real que só existe em produção.

### 📌 Pontos de prova
- Qualidade é testada em **funcionalidade, escala e segurança**.
- **CD = compilar + testar + configurar + implantar automaticamente** de build → produção.
- **Shift-left** = testar cedo; **shift-right** = testar em produção (ambos complementares).
- Microsserviços + IaC = design para implantação ideal.

---

## 8. Como a Microsoft fornece software com DevOps

**Fonte:** https://learn.microsoft.com/pt-br/devops/deliver/how-microsoft-delivers-devops

### Conceito central
A Microsoft consolidou três iniciativas centrais para entregar software moderno:
1. **Focar mentalidade e ritmo organizacional na entrega.**
2. **Formar equipes autônomas e responsáveis** que possuem, testam e entregam funcionalidades.
3. **Shift-right:** testar e monitorar sistemas **em produção**.

### Práticas detalhadas (com citações)

**Foco na entrega:**
- Ciclos de **sprint curtos** com implantações regulares.
- **Removeram o período de estabilização** no fim do sprint: ele incentivava acumular dívida técnica de testes. "As funcionalidades são entregues quando estão comprovadas e valem o custo da implementação." Agora as equipes gerenciam a dívida **durante** o sprint.
- **Automatizar totalmente os pipelines** (repo → produção): CI + testes automatizados + CD.
- **Dívida de implantação:** "quanto menos frequentemente implantam, mais difícil fica. Quanto mais tempo entre as implantações, mais problemas se acumulam." → implantar em **partes pequenas e frequentes**.
- **Usar ferramentas internas:** a Microsoft usa o próprio sistema de release (dogfooding) — "um único investimento melhora a produtividade da equipe e os produtos."

**Autonomia da equipe:**
- **Sem KPIs rígidos** de produtividade; equipes gerenciam seus próprios planos/backlogs alinhados às metas. Comunicação direta > ferramentas.
- **Microsserviços** definem "limites naturais para a responsabilidade da equipe."
- **Trabalhar no branch principal (trunk-based):** abandonaram branches profundas. "Todo o tempo que costumava ser gasto na integração agora é direcionado para a entrega." Migração para **Git** pela ramificação leve.
- **Feature flags (sinalizadores de recursos):** mesclar/implantar código incompleto, ativando-o só para devs ou early adopters. "Controlam a exposição sem arriscar problemas com a base de usuários em geral."

**Testar em produção (shift-right):**
- **Instrumentar tudo:** "A instrumentação não só ajuda a identificar e corrigir problemas, mas pode fornecer pesquisas inestimáveis sobre o uso."
- **Testar padrões de resiliência:** evitar **falhas em cascata**; identificar e mitigar **pontos únicos de falha (SPOFs)**.
- **Escolher as métricas certas:** erro comum é ter métricas demais. "A velocidade ou aceleração dos ganhos do usuário pode ser uma métrica mais útil do que o número total de usuários." As mais úteis "têm potencial para impulsionar decisões de negócios."
- **Usar métricas para orientar o trabalho:** a cada **seis semanas**, organizações apresentam saúde, negócios, cenários e telemetria do cliente à liderança.

**Diretrizes de entrega:**
> "Nunca é uma linha reta para ir de A até B... Sempre haverá contratempos e erros... Veja os contratempos como oportunidades de aprendizado." Foco: **entregar valor**.

### 📌 Pontos de prova
- Três iniciativas: **foco na entrega, equipes autônomas, testar em produção**.
- **Removeram o período de estabilização** → dívida técnica gerida no próprio sprint.
- **Trunk-based development** (trabalhar na main) reduz dívida de merge.
- **Feature flags** desacoplam deploy de release.
- **Falhas em cascata** e **SPOF** são riscos a testar/mitigar.
- Cuidado com **excesso de métricas**; escolher as que dirigem decisões.

---

## 9. SRE e Disponibilidade no Mercado Livre

**🎬 Vídeo confirmado:** "SRE e Disponibilidade: Experiências e desafios do DevOps no Mercado Livre" — palestra/podcast (formato roda de conversa com SREs do Mercado Livre) — https://www.youtube.com/watch?v=_XIIG4Ga3L8

### Conceito central
O Mercado Livre opera em **escala latino-americana** (picos enormes em eventos como Black Friday / "Hot Sale"), o que torna disponibilidade e confiabilidade problemas de engenharia de primeira ordem. O vídeo é um relato de experiência: engenheiros do ML contam como aplicam SRE para sustentar confiabilidade sem travar a velocidade de entrega de centenas de times — e os **desafios reais** (não só a teoria) de fazer isso em produção.

### O que o vídeo discute (experiências e desafios relatados)
- **Escala é o ponto de partida.** O ML roda **dezenas de milhares de microsserviços** e milhões de requisições por segundo nos picos. A mensagem do vídeo: nessa escala, operação manual (**toil**) simplesmente não funciona — confiabilidade tem que ser **engenharia automatizada**, não heroísmo de plantão.
- **SLI/SLO/SLA na prática, e a dificuldade de defini-los.** O desafio relatado não é a fórmula, e sim **negociar metas** com os times de produto e escolher os indicadores que realmente representam a experiência do usuário (latência, taxa de erro, disponibilidade). **Error budget** como a "moeda" que decide quando se pode arriscar lançar e quando é hora de frear e estabilizar.
- **Disponibilidade vs. velocidade de entrega** — a tensão central do vídeo. SRE existe justamente para equilibrar os dois; o error budget transforma essa discussão (muitas vezes política) em **número objetivo**.
- **Cultura como maior desafio.** Mais difícil que a tecnologia é a **mudança cultural**: adoção de SLO pelos times, responsabilidade compartilhada ("**you build it, you run it**"), e a prática de **post-mortems sem culpa** (blameless) para que incidentes virem aprendizado, não caça às bruxas.
- **Observabilidade pervasiva** — métricas, logs e traces (os três pilares) e alertas baseados em **queima de error budget**, não em thresholds arbitrários.
- **Resiliência sob carga de pico** — padrões para evitar **falhas em cascata**: circuit breakers, retries com backoff, degradação graciosa.

### Por que importa
Mostra SRE aplicado a um caso real latino-americano em escala extrema: a teoria das semanas 09 (SLO, error budget, toil, post-mortem blameless — seções 17–20) vira prática de plantão, automação e — sobretudo — **cultura**.

### 📌 Pontos de prova
- Escala (dezenas de milhares de microsserviços + picos de venda) é o **driver** da adoção de SRE no ML.
- O maior desafio relatado não é técnico e sim **cultural/organizacional** (adoção de SLO, responsabilidade, blameless).
- SLOs + **error budgets** equilibram **velocidade de entrega vs. disponibilidade** (a tensão central).
- Observabilidade = **métricas + logs + traces**; alertas por **queima de error budget**.
- "You build it, you run it" + **post-mortem sem culpa** = pilares culturais.
- Resiliência: circuit breaker, retry/backoff, degradação graciosa contra falhas em cascata.

**Fontes da busca:** [YouTube — SRE e Disponibilidade no Mercado Livre](https://www.youtube.com/watch?v=_XIIG4Ga3L8) · [Workbook SRE (Elven) — Como o SRE se relaciona com o DevOps](https://elven.works/workbook-sre/capitulo-1-como-o-sre-se-relaciona-com-o-devops/) · [Nanoshots — SLI/SLO/SLA: por onde começar](https://www.nanoshots.com.br/2019/12/sre-slo-slis-nao-sabe-por-onde-comecar.html)

---

## 10. Plataforma Fury (Internal Developer Platform do Mercado Livre)

**🎬 Vídeo confirmado:** "Plataforma Fury no Mercado Livre" — canal/talk do Mercado Livre Tech — https://www.youtube.com/watch?v=jhSoFPONQ5s

### Conceito central
**Fury** é a **plataforma interna de desenvolvimento (Internal Developer Platform — IDP / PaaS)** do Mercado Livre, **criada em 2015**. É uma **camada de abstração entre o desenvolvedor e a infraestrutura** (AWS/GCP, Docker, Kubernetes): o dev pensa no seu serviço, e a Fury cuida do resto. Permite que qualquer time crie, implante, escale e opere **microsserviços** com autonomia, sem reinventar infra a cada projeto.

### Números e fatos do caso ML (apresentados em torno do vídeo)
- A Fury gerencia **dezenas de milhares de microsserviços** (referências citam de 24 mil a 30 mil+) e suporta **~16 mil desenvolvedores**.
- Filosofia **NoOps**: reduzir ao máximo a sobrecarga operacional do dev — a plataforma assume o trabalho de ops.
- **Kubernetes** é o motor central; a plataforma é construída sobre **AWS + Docker** (multicloud) e uma combinação de ferramentas **open source + soluções desenvolvidas internamente**.

### O que a Fury entrega (golden paths / self-service)
- **Interface web + CLI** para o dev criar e gerenciar recursos sozinho. Conceito de **"scope"** = a representação simplificada do serviço dentro do provedor de nuvem.
- **Provisionamento automático de infra ao criar um scope:** load balancer, autoscaling groups, instâncias, roteamento de tráfego — tudo gerado automaticamente, já com logs, métricas e alertas conectados.
- **Scaffolding / templates** de serviços padronizados (linguagem, observabilidade e CI já embutidos).
- **CI/CD self-service:** do commit ao deploy com pipelines padronizados; deploys frequentes e seguros, **rollback automático**, auditoria e controle de acesso.
- **Observabilidade integrada** (métricas/logs/traces) e alertas por padrão.
- **Infraestrutura serverless** disponível como opção.
- **Padronização em escala:** milhares de times seguindo os mesmos "golden paths" → menos toil, menos variação, mais confiabilidade.

### Por que importa (relação com DevOps/SRE)
Fury é a materialização concreta dos princípios da Microsoft (seção 8) e do SRE: **autonomia de times**, **microsserviços com limites claros**, **pipelines totalmente automatizados** e **observabilidade por padrão**. Transforma boas práticas no **caminho de menor resistência** — o jeito fácil já é o jeito certo. Reduz **carga cognitiva** dos times (Team Topologies) e **toil** (SRE). É o que viabiliza, na prática, o caso de disponibilidade da seção 9.

### 📌 Pontos de prova
- Fury = **IDP / PaaS interna** do Mercado Livre (desde **2015**) para microsserviços; **camada de abstração** sobre AWS/GCP + Docker + **Kubernetes**.
- Filosofia **NoOps**: a plataforma assume ops; **dezenas de milhares de microsserviços**, ~16 mil devs.
- Entrega **self-service** via **web + CLI**: criar um **scope** provisiona infra (LB, autoscaling, instâncias, observabilidade) **automaticamente**.
- CI/CD padronizado + **rollback automático**; "golden paths" incorporam as boas práticas.
- Objetivo: **autonomia + padronização em escala**, reduzindo toil e carga cognitiva.

**Fontes da busca:** [YouTube — Plataforma Fury no Mercado Livre](https://www.youtube.com/watch?v=jhSoFPONQ5s) · [Mercado Libre Developers — Fury: platform on top of AWS & Docker](https://developers.mercadolibre.com.br/es_ar/fury-mercado-libres-platform-top-aws-docker) · [Medium (ML Tech) — Kubernetes at Mercado Libre (+30.000 microservices)](https://medium.com/mercadolibre-tech/kubernetes-at-mercado-libre-ec331bea1866)

---

## 11. Garantia da qualidade de software — SQA (Pressman)

**Fonte:** Pressman, *Engenharia de Software*, p. 448–455 — _(livro pago, não acessível diretamente — coberto por conhecimento consolidado)_

### Conceito central
**SQA (Software Quality Assurance)** é o conjunto de **atividades sistemáticas e planejadas** que garantem que processos e produtos de software atendam aos requisitos e padrões de qualidade. SQA é **transversal** ao ciclo de vida — não é só "testar no fim".

### Elementos do SQA (Pressman)
- **Padrões (standards):** garantir adesão a padrões adotados (ex.: IEEE, ISO) e procedimentos internos.
- **Revisões e auditorias (reviews & audits):** revisões técnicas/de pares para encontrar defeitos cedo; auditorias verificam conformidade de processo.
- **Testes:** estratégia de testes (unit, integração, validação, sistema).
- **Coleta e análise de erros/defeitos:** rastrear defeitos, suas causas e tendências.
- **Gestão de mudança (change management):** controlar alterações para não introduzir regressões.
- **Educação/treinamento** e **gerenciamento de fornecedores**.
- **Segurança, gestão de riscos e gestão de recuperação.**

### Revisões de software (foco de p. 448–455)
- **Revisões técnicas formais (FTR — Formal Technical Reviews):** reuniões estruturadas (ex.: **inspeções de Fagan**, walkthroughs) que examinam um artefato (requisito, design, código) para encontrar defeitos.
- Princípio-chave: **revisar o produto, não o produtor** — foco no artefato, não na pessoa (ecoa o "post-mortem sem culpa" do SRE).
- Quanto **mais cedo** um defeito é encontrado, **mais barato** corrigi-lo (custo cresce exponencialmente nas fases tardias) — base econômica do shift-left.

### Métricas de qualidade (Pressman)
- **Densidade de defeitos** = defeitos / KLOC (mil linhas) ou por ponto de função.
- **DRE — Defect Removal Efficiency** = `E / (E + D)`, onde `E` = defeitos encontrados **antes** da entrega e `D` = defeitos encontrados **pelo cliente** (depois). Quanto mais próximo de **1**, melhor a eficiência de remoção.
- Métricas de confiabilidade: **MTBF** (Mean Time Between Failures), **MTTF**, **MTTR** (Mean Time To Repair).
- Atributos de qualidade (modelo McCall / ISO 9126/25010): correção, confiabilidade, eficiência, usabilidade, manutenibilidade, portabilidade.

### SQA estatístico e Six Sigma
- **SQA estatístico:** coletar dados de defeitos → categorizar por causa → aplicar **princípio de Pareto** (poucas causas geram a maioria dos defeitos) → corrigir as causas vitais.

### 📌 Pontos de prova
- SQA é **planejado e sistemático**, transversal ao ciclo — não só testes.
- **Revisar o produto, não o produtor.**
- **DRE = E / (E + D)**; ideal → 1. Densidade de defeitos = defeitos/KLOC.
- Defeito encontrado cedo é **mais barato** (fundamenta shift-left).
- **MTBF/MTTR** = métricas de confiabilidade (ligação direta com SRE).

---

# Semana 07 — Métricas de pipeline e fundamentos de computação

## 12. Coleta e análise de métricas em pipeline CI/CD

**Fonte:** Atividade prática (instrumentação de pipeline GitHub Actions + análise em Python)

### Conceito central
O objetivo é tratar o pipeline como um **experimento mensurável**: instrumentar um workflow do GitHub Actions, **coletar métricas** via API do GitHub, processá-las em Python (Pandas) e **visualizar** (Matplotlib/Plotly) para responder perguntas de engenharia (onde está o gargalo? cache ajuda? paralelismo via `needs` compensa?).

### Métricas a coletar
| Métrica | O que mede | Onde obter |
|---|---|---|
| **Tempo total do workflow** | Duração ponta a ponta de um run | `created_at` → `updated_at` do run |
| **Tempo por job/etapa** | Duração de cada job e step | `started_at`/`completed_at` dos jobs/steps |
| **Status** | `success`/`failure`/`cancelled` | `conclusion` do run/job |
| **Nº de testes / falhas** | Cobertura e estabilidade | Logs / relatórios de teste (JUnit XML) |
| **Taxa de sucesso** | % de runs verdes | agregação dos `conclusion` |
| **Lead time / frequência de deploy** | métricas DORA | histórico de runs |

> As **4 métricas DORA** (referência clássica de prova): **Deployment Frequency**, **Lead Time for Changes**, **Change Failure Rate**, **Mean Time to Restore (MTTR)**.

### Metodologia experimental
1. **Definir hipótese** (ex.: "habilitar cache de dependências reduz o tempo total em >30%").
2. **Variável independente** (ex.: cache on/off; jobs sequenciais vs. paralelos via `needs`).
3. **Coletar N execuções** de cada condição (para média e variância — uma medição só não vale).
4. **Comparar** medianas/médias e visualizar a distribuição.
5. **Concluir** com base nos dados.

### Script Python consultando a API do GitHub
```python
import requests, csv, json
import pandas as pd

OWNER, REPO = "usuario", "repositorio"
TOKEN = "ghp_xxx"                       # Personal Access Token (em env var, não hardcode!)
HEAD = {"Authorization": f"Bearer {TOKEN}",
        "Accept": "application/vnd.github+json"}

# 1. Listar execuções do workflow
runs = requests.get(
    f"https://api.github.com/repos/{OWNER}/{REPO}/actions/runs",
    headers=HEAD).json()["workflow_runs"]

linhas = []
for r in runs:
    run_id = r["id"]
    # 2. Para cada run, buscar os jobs (com tempos por job/step)
    jobs = requests.get(
        f"https://api.github.com/repos/{OWNER}/{REPO}/actions/runs/{run_id}/jobs",
        headers=HEAD).json()["jobs"]
    for j in jobs:
        ini = pd.to_datetime(j["started_at"])
        fim = pd.to_datetime(j["completed_at"])
        linhas.append({
            "run_id": run_id,
            "job": j["name"],
            "status": j["conclusion"],
            "duracao_s": (fim - ini).total_seconds(),
        })

df = pd.DataFrame(linhas)
df.to_csv("metricas.csv", index=False)               # exporta CSV
df.to_json("metricas.json", orient="records")        # exporta JSON
```

### Os 4 gráficos (Matplotlib / Pandas / Plotly)
```python
import matplotlib.pyplot as plt

# 1. Barras: tempo médio por job → revela qual ETAPA DOMINA o tempo
df.groupby("job")["duracao_s"].mean().plot.bar(title="Tempo médio por job")

# 2. Linha: tempo total do workflow ao longo das execuções → tendência
tot = df.groupby("run_id")["duracao_s"].sum()
tot.plot(title="Tempo total por execução")

# 3. Pizza/empilhado: proporção do tempo por etapa
df.groupby("job")["duracao_s"].mean().plot.pie(autopct="%1.0f%%")

# 4. Barras agrupadas: com cache vs sem cache (comparação experimental)
# df.groupby(["condicao", "job"])["duracao_s"].mean().unstack().plot.bar()
plt.show()
```

### Perguntas de análise (caem em prova como interpretação)
- **Qual etapa domina o tempo?** Normalmente *instalar dependências* ou *build* → candidatas a otimização (cache, build incremental).
- **Impacto do cache:** comparar runs com/sem `actions/cache`. Esperado: queda no tempo de instalação.
- **Paralelismo via `needs`:** jobs independentes rodam em paralelo; só use `needs` quando há dependência real. Sequenciar tudo desnecessariamente **infla** o tempo total.
- **Feedback rápido:** rodar testes rápidos (unit, lint) **primeiro** e em paralelo dá feedback ao dev mais cedo (fail-fast) — testes lentos (integração/E2E) ficam para depois.

### Por que importa
"Você não pode melhorar o que não mede." Métricas de pipeline conectam diretamente CI/CD (semana 5) com SRE/observabilidade (semana 9): o pipeline também é um sistema a ser observado e otimizado.

### 📌 Pontos de prova
- API do GitHub: endpoints `/actions/runs` e `/actions/runs/{id}/jobs`; duração = `completed_at − started_at`.
- **4 métricas DORA:** frequência de deploy, lead time, change failure rate, MTTR.
- Gargalo típico = instalação de dependências → mitigar com **cache**.
- **`needs`** sequencia; sem `needs` jobs rodam em **paralelo**.
- Sempre coletar **múltiplas execuções** (média + variância), nunca uma só.
- **Fail-fast:** testes rápidos primeiro → feedback cedo.

---

## 13. Padrões de software (Sommerville)

**Fonte:** Sommerville, *Engenharia de Software*, p. 458–460 — _(livro pago, não acessível diretamente — coberto por conhecimento consolidado)_

### Conceito central
Um **padrão (pattern)** é uma **solução reutilizável e nomeada** para um problema recorrente em um contexto. Padrões capturam conhecimento de projetistas experientes em um vocabulário comum. Dividem-se em **design patterns** (nível de classes/objetos) e **padrões de arquitetura** (nível de sistema).

### Design Patterns (Gang of Four — GoF)
Estrutura de um padrão (descrição de Sommerville/GoF): **Nome**, **Problema**, **Solução** e **Consequências/Trade-offs**.

| Categoria | Propósito | Exemplos |
|---|---|---|
| **Criacionais** | Como criar objetos | Singleton, Factory Method, Abstract Factory, Builder |
| **Estruturais** | Como compor objetos/classes | Adapter, Decorator, Facade, Proxy, Composite |
| **Comportamentais** | Como objetos colaboram/comunicam | **Observer**, Strategy, Command, State, Iterator |

### Observer (o exemplo citado) — em detalhe
- **Problema:** quando um objeto (Subject) muda de estado, vários objetos dependentes (Observers) precisam ser notificados **sem acoplamento forte** entre eles.
- **Solução:** o Subject mantém uma lista de Observers e os notifica (`notify()`) a cada mudança; cada Observer implementa `update()`. Relação **um-para-muitos**.
- **Consequência:** baixo acoplamento (Subject não conhece classes concretas dos Observers); base de sistemas orientados a eventos, MVC e bindings de UI.

```java
interface Observer { void update(String estado); }

class Subject {
    private List<Observer> obs = new ArrayList<>();
    private String estado;
    public void anexar(Observer o) { obs.add(o); }
    public void setEstado(String e) {            // mudança de estado
        this.estado = e;
        notificar();
    }
    private void notificar() {                   // notifica todos
        for (Observer o : obs) o.update(estado);
    }
}
```

### Padrões de arquitetura
Operam no nível do sistema inteiro:
- **MVC (Model-View-Controller)** — separa dados, apresentação e controle.
- **Camadas (Layered)** — apresentação → negócio → persistência.
- **Cliente-servidor**, **Pipe-and-filter**, **Repositório**, **Microsserviços**, **Event-driven**.

### Por que importa
Padrões dão um **vocabulário comum** ("vamos usar um Observer aqui") e soluções comprovadas, melhorando manutenibilidade e comunicação entre desenvolvedores.

### 📌 Pontos de prova
- Padrão = **problema recorrente + solução reutilizável nomeada**; descrito por Nome/Problema/Solução/Consequências.
- 3 categorias GoF: **criacional, estrutural, comportamental**.
- **Observer = comportamental, relação um-para-muitos, notificação, baixo acoplamento** (base de MVC/eventos).
- Padrões de **arquitetura** ≠ design patterns: operam no nível do sistema (MVC, camadas, microsserviços).

---

## 14. Manipulação de bits (bitwise)

**🎬 Vídeo confirmado:** "Manipulação de bits: uma técnica essencial para programação de alta performance" — **Elemar Júnior** (Clube de Estudos / EximiaCo) — https://www.youtube.com/watch?v=Tuok3H5Girw

### Conceito central
Operações bitwise manipulam os **bits individuais** de um número inteiro. São rápidas (instruções de CPU de 1 ciclo) e usadas em flags, máscaras, compressão, criptografia, gráficos e otimização.

### O argumento do vídeo de Elemar Júnior
A tese central da aula (vinda do grupo de estudos de algoritmos e estruturas de dados de Elemar): **operações bit a bit são geralmente mais rápidas que operações aritméticas convencionais**, e por isso são uma técnica essencial em código de **alta performance** — jogos, sistemas de tempo real, interpretadores e compiladores (área em que o próprio Elemar atua). Os fundamentos que o vídeo/artigo cobrem:

- **AND (`&`)** — resultado 1 só quando **ambos** os bits são 1.
- **OR (`|`)** — resultado 1 quando **ao menos um** bit é 1.
- **XOR (`^`)** — resultado 1 quando os bits são **diferentes**.
- **Deslocamentos (`<<`, `>>`)** — mover bits para a esquerda/direita, equivalente a multiplicar/dividir por potências de 2.

O material acompanha exemplos em **C**, demonstrando as operações sobre dois valores clássicos: **170 (`10101010`)** e **85 (`01010101`)** — propositalmente complementares, para que `a & b = 0`, `a | b = 255` e `a ^ b = 255` fiquem visualmente óbvios. Mostra também `a << 2` e `a >> 2`. Áreas de aplicação citadas: **criptografia, compactação de dados e processamento de imagens**.

> Observação: o vídeo/artigo de Elemar foca nos **fundamentos** (as quatro operações + shifts e o porquê da performance). Os truques avançados a seguir (potência de 2, contagem de bits, swap sem variável temporária, máscaras de flags) são **complemento consolidado** sobre o mesmo tema — úteis para a prova, mas não necessariamente todos demonstrados no vídeo.

### Operadores

| Operador | Símbolo | Regra | Exemplo (4 bits) |
|---|---|---|---|
| **AND** | `&` | 1 só se **ambos** 1 | `1100 & 1010 = 1000` |
| **OR** | `\|` | 1 se **algum** 1 | `1100 \| 1010 = 1110` |
| **XOR** | `^` | 1 se **diferentes** | `1100 ^ 1010 = 0110` |
| **NOT** | `~` | inverte todos | `~1100 = ...0011` (complemento) |
| **Shift esquerda** | `<<` | desloca p/ esquerda, preenche com 0 | `0011 << 1 = 0110` |
| **Shift direita** | `>>` | desloca p/ direita | `0110 >> 1 = 0011` |

### Truques e máscaras (clássicos de prova)

```c
// Multiplicar/dividir por potências de 2 (rápido)
x << 1     // x * 2
x << 3     // x * 8
x >> 1     // x / 2  (inteiro)

// Testar se o bit n está ligado (máscara)
(x & (1 << n)) != 0

// LIGAR o bit n
x |  (1 << n)

// DESLIGAR o bit n
x & ~(1 << n)

// ALTERNAR (toggle) o bit n
x ^  (1 << n)

// Par ou ímpar (último bit)
x & 1          // 1 = ímpar, 0 = par

// Trocar duas variáveis SEM variável temporária
a ^= b; b ^= a; a ^= b;

// Limpar o bit menos significativo ligado
x & (x - 1)    // útil para contar bits ligados (Brian Kernighan)

// Verificar se é potência de 2
(x != 0) && ((x & (x - 1)) == 0)

// Isolar o bit menos significativo ligado
x & (-x)
```

### Máscaras (bitmask) — flags compactas
```c
#define LEITURA  (1 << 0)   // 0001
#define ESCRITA  (1 << 1)   // 0010
#define EXEC     (1 << 2)   // 0100

int perms = LEITURA | ESCRITA;        // 0011 → tem leitura e escrita
if (perms & EXEC) { /* tem exec? */ } // 0 → não
```
Um único `int` guarda 32 flags booleanas → economia de memória (como as permissões `rwx` do Unix).

### Por que importa
Conecta diretamente com **representação de memória** (seção 16) e GC: entender bits é base para entender como dados são armazenados e por que certas operações são baratas.

### 📌 Pontos de prova
- AND/OR/XOR/NOT/shift e suas tabelas-verdade.
- **`x << n` = x·2ⁿ**; **`x >> n` = x/2ⁿ**.
- Máscara `1 << n` para testar/ligar/desligar/alternar bit n.
- **`x & (x-1)`** zera o LSB ligado → conta bits / testa potência de 2.
- **`x & 1`** = paridade. XOR troca variáveis sem temp.
- **Do vídeo (Elemar):** bitwise é **mais rápido que aritmética** → técnica de alta performance (jogos, tempo real, compiladores); operações-base = AND/OR/XOR + shifts; exemplo em C com 170 e 85.

**Fontes da busca:** [YouTube — Manipulação de bits (Elemar Júnior)](https://www.youtube.com/watch?v=Tuok3H5Girw) · [ElemarJR — artigo "Manipulação de Bits: técnica essencial para alta performance"](https://elemarjr.com/clube-de-estudos/artigos/manipulacao-de-bits-uma-tecnica-essencial-para-programacao-de-alta-performance/)

---

## 15. Fundamentos de Garbage Collection (.NET)

**Fonte:** https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals

### Conceito central
No CLR, o **garbage collector (GC)** é um **gerenciador automático de memória**: aloca objetos no **managed heap** e libera os que não estão mais em uso, eliminando vazamentos e acessos a memória já liberada.

### Benefícios (citação)
- Libera o dev de liberar memória manualmente.
- Aloca objetos no heap gerenciado **eficientemente**.
- Recupera objetos não usados, limpa e reaproveita a memória. "Managed objects automatically get clean content to start with."
- **Segurança de memória:** um objeto não pode usar a memória alocada para outro.

### Modelo de memória
- Cada **processo** tem seu próprio **espaço de endereçamento virtual** separado. Em x86, 2 GB de espaço de usuário por padrão.
- Memória virtual tem 3 estados: **Free** (livre), **Reserved** (reservada, não usável até commit), **Committed** (mapeada a armazenamento físico).
- **Fragmentação:** mesmo com 2 GB livres, uma alocação de 2 GB falha se não houver **um bloco contíguo** grande o bastante.

### Como o GC funciona — alocação
- No início do processo, o runtime reserva uma região contígua: o **managed heap**, com um **ponteiro** para o próximo endereço livre.
- **Todos os reference types** vão para o managed heap.
- Alocar = **somar um valor ao ponteiro** → "quase tão rápido quanto alocar na stack". Objetos consecutivos ficam contíguos → boa **localidade** de acesso.

### Como o GC funciona — liberação (mark / relocate / compact)
1. **Marking (marcação):** parte das **roots** (campos estáticos, variáveis locais na stack, registradores da CPU, GC handles, fila de finalização) e cria um **grafo de objetos alcançáveis**.
2. Objetos **não** no grafo = **inalcançáveis** = lixo → liberados.
3. **Relocating + Compacting:** copia os objetos sobreviventes para "compactar" a memória, remove os buracos dos objetos mortos e **corrige os ponteiros** das roots para os novos endereços.
> A compactação só ocorre se a coleta achar um número significativo de objetos inalcançáveis. Se todos sobrevivem, não há o que compactar.

### Gerações 0, 1, 2 (o coração da prova)
O heap é dividido em **3 gerações** baseado em premissas: objetos novos vivem pouco; objetos velhos vivem muito; compactar uma parte é mais rápido que o heap inteiro.

| Geração | Conteúdo | Coleta |
|---|---|---|
| **Gen 0** | Objetos **recém-criados, vida curta** (ex.: variável temporária) | **Mais frequente** |
| **Gen 1** | **Buffer** entre vida curta e vida longa | Intermediária |
| **Gen 2** | Objetos **de vida longa** (ex.: dados estáticos do processo) | **Menos frequente** (= **full GC**) |

- **Promoção:** sobreviveu à coleta da Gen 0 → promovido para Gen 1; sobreviveu na Gen 1 → Gen 2; sobreviveu na Gen 2 → **fica** na Gen 2.
- Coletar uma geração = coletar **ela e todas as mais jovens**. **Gen 2 collection = full GC** (coleta todo o managed heap).
- Gen 0 e Gen 1 são **efêmeras** (ephemeral), alocadas no **ephemeral segment**.

### Large Object Heap (LOH)
- Objetos **≥ 85.000 bytes** (geralmente arrays) vão para o **LOH**, às vezes chamado de **"geração 3"** (mas coletado **junto com a Gen 2**).
- O LOH **normalmente não é compactado** (copiar objetos grandes é caro), mas pode ser compactado sob demanda via `GCSettings.LargeObjectHeapCompactionMode`.

### Quando o GC ocorre (condições)
1. Memória física **baixa** no sistema.
2. A memória usada no managed heap **ultrapassa um limite** (ajustado dinamicamente).
3. Chamada explícita a **`GC.Collect()`** (raríssimo; só para testes/casos especiais).

### Managed vs. unmanaged
- **Managed:** o GC cuida. A maioria dos objetos.
- **Unmanaged resources:** handles de SO (arquivo, socket, janela). O GC **não sabe** como liberá-los. Você deve:
  - Implementar **`Dispose()`** (padrão `IDisposable`, usar com `using`), e/ou
  - Sobrescrever **`Object.Finalize()`** (finalizador) ou usar **SafeHandle** como rede de segurança caso o consumidor esqueça o `Dispose`.
- Antes de uma coleta, **todas as threads gerenciadas são suspensas** exceto a que disparou o GC ("stop-the-world").

### Fases (resumo)
```
Marking   → encontra objetos vivos (grafo a partir das roots)
Relocating → atualiza referências dos objetos que serão movidos
Compacting → libera espaço dos mortos e junta os sobreviventes
```

### 📌 Pontos de prova
- GC = gerenciador **automático** de memória do managed heap; reference types vão para o heap.
- **3 gerações: 0 (curta, coletada mais), 1 (buffer), 2 (longa, full GC).** LOH = "gen 3", coletado com a 2, **não compactado** por padrão.
- Algoritmo: **mark → relocate → compact**, partindo das **roots**.
- Promoção: sobreviver promove para a próxima geração; Gen 2 fica na Gen 2.
- **LOH ≥ 85.000 bytes.**
- 3 condições de coleta: pouca memória, threshold excedido, `GC.Collect()`.
- **Unmanaged → `Dispose()`/`IDisposable`/Finalize**; "stop-the-world" suspende threads.

---

## 16. Mapa de memória de um processo

**Fonte:** UFRJ — https://www.gta.ufrj.br/~cruz/courses/eel770/slides/9_memoria.pdf _(o PDF são slides em formato de imagem; o texto não pôde ser extraído automaticamente — tópico coberto por conhecimento consolidado, base padrão de Sistemas Operacionais)_

### Conceito central
Quando um programa vira processo, o SO dá a ele um **espaço de endereçamento virtual** organizado em **segmentos** com propósitos distintos. Entender esse layout é base para depuração, performance e segurança (stack overflow, vazamentos de heap).

### Layout clássico (endereços baixos → altos)

```
  Endereços ALTOS
┌─────────────────────────────┐  0xFFFF...
│  Argumentos (argv) e env     │
├─────────────────────────────┤
│  STACK (pilha)               │  ← cresce para BAIXO ↓
│  ─ frames de função          │     (variáveis locais, params,
│  ─ variáveis locais          │      endereço de retorno)
│            │                 │
│            ▼                 │
│                              │
│        (espaço livre)        │  ← região de colisão potencial
│                              │
│            ▲                 │
│            │                 │
│  HEAP (monte)                │  ← cresce para CIMA ↑
│  ─ malloc/new (dinâmico)     │     (alocação em tempo de execução)
├─────────────────────────────┤
│  BSS                         │  variáveis globais/estáticas
│  (não inicializadas → 0)     │
├─────────────────────────────┤
│  DATA (dados)                │  variáveis globais/estáticas
│  (inicializadas)             │  inicializadas com valor
├─────────────────────────────┤
│  TEXT (código)               │  instruções do programa
│  (read-only)                 │  geralmente somente-leitura
└─────────────────────────────┘  0x0000...
  Endereços BAIXOS
```

### Segmentos em detalhe

| Segmento | Conteúdo | Características |
|---|---|---|
| **Text (código)** | Instruções de máquina do programa | **Somente leitura** (protege contra auto-modificação); compartilhável entre processos do mesmo binário |
| **Data** | Variáveis globais/estáticas **inicializadas** (`int x = 5;`) | Lida e escrita; tamanho fixo, vem do executável |
| **BSS** | Variáveis globais/estáticas **não inicializadas** (`int y;`) | Zeradas na carga; **não ocupam espaço no arquivo** (só anotação de tamanho). "BSS" = *Block Started by Symbol* |
| **Heap** | Alocação **dinâmica** (`malloc`/`free`, `new`/`delete`) | Cresce para **cima**; gerenciado pelo programador (em C) ou pelo GC; fonte de **memory leaks** e fragmentação |
| **Stack** | Frames de chamada: variáveis locais, parâmetros, endereço de retorno | Cresce para **baixo**; LIFO; rápido; **stack overflow** se exceder (ex.: recursão infinita) |

### Pontos finos
- **Heap e Stack crescem um em direção ao outro**; o espaço livre entre eles é compartilhado. Colisão = esgotamento de memória.
- **Stack é automática** (alocação/liberação por entrada/saída de função); **heap é manual/GC** (vida útil controlada explicitamente).
- Variável **local** → stack. Variável **global/estática** → data (se inicializada) ou BSS (se não). `malloc`/`new` → heap.
- Ligação com a seção 15 (GC): em linguagens gerenciadas, o **managed heap** corresponde ao heap aqui; reference types ficam no heap, value types locais ficam na stack.

### Por que importa
Explica bugs reais: **stack overflow** (recursão profunda), **memory leak** (heap não liberado), **segfault** (escrever no segmento text/somente-leitura). É a fundação física por trás de GC, ponteiros e performance.

### 📌 Pontos de prova
- 5 segmentos: **text (código, RO), data (globais init), BSS (globais não-init, zeradas), heap (dinâmico, ↑), stack (locais, ↓)**.
- **Heap cresce para cima, stack para baixo**, um em direção ao outro.
- Locais → stack; globais/estáticas → data/BSS; `malloc`/`new` → heap.
- BSS **não ocupa espaço no executável** (só tamanho).
- Stack overflow ≠ memory leak (stack vs. heap).

---

# Semana 09 — SRE

## 17. SRE: ciclos virtuosos

**Fonte:** https://learn.microsoft.com/pt-br/training/modules/intro-to-site-reliability-engineering/4-key-principles-1-virtuous-cycles

### Conceito central
**Ciclos virtuosos** são práticas que criam **loops de feedback** numa organização para que ela **melhore continuamente** a confiabilidade. As duas práticas fundamentais: (1) **SLIs e SLOs** e (2) **post-mortems sem culpa**.

### Ciclo virtuoso nº 1 — SLIs, SLOs e Error Budgets

**SLI (Service Level Indicator) — Indicador de Nível de Serviço.** "Como saber quando o serviço está funcionando bem?" Tipos:
- **Sucesso vs. falha:** % de operações concluídas com sucesso (ex.: HTTP 200 vs 500).
- **Medidas de tempo:** resposta dentro de um limite de latência.
- **Medidas de throughput:** quantidade de dados processada.

**SLO (Service Level Objective) — Objetivo de Nível de Serviço.** A **meta** desejada de confiabilidade, definida **em colaboração com os desenvolvedores**. Deve ser:
> "algo que possa ser medido com precisão e representado no sistema de monitoramento... uma meta objetiva e bem compreendida. Ou o serviço está cumprindo seu SLO ou não. Os dados devem ser claros."

**Error Budget (Orçamento de erro):**
> "Um orçamento de erro é a diferença entre a confiabilidade perfeita potencial do serviço e sua confiabilidade desejada (100% − 80% = 20%)."

Exemplo da Microsoft: SLO de **80%** → error budget de **20%**. Durante esses 20% de "não confiabilidade permitida", a organização **pode gastar** o orçamento lançando novas versões (que podem introduzir instabilidade temporária). Mecânica:
- **Dentro do orçamento** → libere features à vontade.
- **Orçamento esgotado / SLO não atingido** → **congelar lançamentos** e redirecionar engenharia para confiabilidade. O cálculo é **contínuo** (janela móvel de mês/trimestre): se a confiabilidade melhora, o orçamento volta.
- Usar error budget para congelar releases exige **aceitação institucional** ("algumas organizações") — é uma decisão difícil de respeitar.

**O aspecto de ciclo virtuoso:** SLIs/SLOs dão uma forma **objetiva** de descrever, comunicar e decidir sobre confiabilidade, alinhando todos na mesma direção.

### Ciclo virtuoso nº 2 — Post-mortems sem culpa (blameless)
> A SRE insiste que post-mortems sejam **isentos de acusação**. Foco na falha de **processo/tecnologia**, não nas ações de pessoas.

Perguntas típicas: "O que havia de errado no processo que permitiu a ação que levou à falha? Que informação não estava disponível? Quais proteções deveriam existir?"
> "Você não pode ser confiável por meio de demissões." Uma organização que demite a cada incidente **não aprende** — acaba com "uma pessoa apenas, tremendo no canto, com receio de fazer qualquer mudança."

O post-mortem bem feito **fecha o loop**: a organização aprende com a interrupção e melhora os sistemas (desde que haja **acompanhamento** das ações).

### 📌 Pontos de prova
- **SLI = indicador** (o que medir: sucesso/latência/throughput). **SLO = objetivo/meta** mensurável.
- **Error budget = 100% − SLO.** É um orçamento de "não-confiabilidade permitida".
- Orçamento **esgotado → congelar releases** e focar em confiabilidade; cálculo é **contínuo**.
- Post-mortem **blameless**: foco no processo, não na pessoa. "Você não pode ser confiável por meio de demissões."

---

## 18. SRE: o lado humano

**Fonte:** https://learn.microsoft.com/pt-br/training/modules/intro-to-site-reliability-engineering/5-key-principles-2-human-side-of-sre

### Conceito central
Confiabilidade sustentável depende de como **as pessoas** são tratadas. Dois pilares humanos: **eliminar o toil (trabalho árduo)** e **limitar o trabalho reativo a ≤ 50%**.

### Toil (trabalho árduo) — definição precisa
Trabalho operacional com estas características:
- **Sem valor duradouro** — não melhora o serviço a longo prazo.
- **Repetitivo** e **predominantemente manual** (mesmo que automatizável).
- **Escala linearmente** com o crescimento do serviço.
- Exemplos: redefinir algo toda semana, provisionar contas/disco manualmente, reiniciar um processo repetidamente.

> **Atenção (pegadinha de prova):** estar registrado num sistema de tickets **não** deixa de ser toil — "é apenas um trabalho árduo bem controlado." Ter ticket **não** é característica de toil.

> "As SREs odeiam trabalho árduo." Atuam para **eliminá-lo via automação** sempre que possível e apropriado, liberando a equipe para trabalho de maior impacto.

### A regra dos 50% (trabalho de projeto vs. Ops reativo)
> A carga operacional **não deve passar de 50%** do tempo da equipe (modelo original do Google).

- Os outros ≥50% devem ir para **trabalho de engenharia/projeto**: escrever código que elimina toil, automação self-service, projetos que tornam serviço e pessoas mais eficientes.
- Se o trabalho reativo (apagar incêndios, atender páginas, fila de tickets) passa de 50% por **muito tempo** → "receita para o **esgotamento (burnout)** e baixa confiabilidade." Nesse estado, os **ciclos virtuosos não conseguem operar**.
- A SRE também vigia a **carga mal balanceada** entre membros da equipe (também prejudica).

### 📌 Pontos de prova
- **Toil:** manual, repetitivo, sem valor duradouro, escala com o serviço. **Ter ticket NÃO é característica de toil.**
- SREs **eliminam toil via automação** (não apenas "gerenciam melhor").
- **Regra dos 50%:** Ops reativo ≤ 50%; o resto é projeto/engenharia. Acima disso → **burnout** e quebra dos ciclos virtuosos.

---

## 19. SRE na prática / getting started

**Fonte:** https://learn.microsoft.com/pt-br/training/modules/intro-to-site-reliability-engineering/6-getting-started

### Conceito central
SRE **não é "tudo ou nada"** — comece com pequenos passos. A ordem dos primeiros passos segue uma **hierarquia de confiabilidade**.

### Hierarquia de confiabilidade (Mikey Dickerson — inspirada em Maslow)
Mikey Dickerson (do US Digital Service, conhecido por **salvar o healthcare.gov**) propôs a pirâmide. A base e o primeiro passo é o **monitoramento**:
> "Você não pode determinar se algo é confiável (ou está melhorando ou piorando) se não pode medi-lo."

```
        ┌───────────────────┐
        │  Product / UX      │   (topo — o que o usuário quer)
        ├───────────────────┤
        │  Development       │
        ├───────────────────┤
        │  Capacity Planning │
        ├───────────────────┤
        │  Testing + Release │
        ├───────────────────┤
        │  Postmortem / RCA  │
        ├───────────────────┤
        │  Incident Response │
        ├───────────────────┤
        │  MONITORING        │   (BASE — primeiro passo!)
        └───────────────────┘
```

### Sequência prática recomendada
1. **Monitoramento funcional e confiável** primeiro (a base de tudo).
2. Escolher **um serviço** em funcionamento.
3. Iniciar **conversas de SLI e SLO** sobre ele — **comece simples**.
4. Implementar os SLIs/SLOs no sistema de monitoramento e observar a confiabilidade "pela lente do SRE".

### Fontes para se aprofundar (citadas)
1. **"O Livro SRE"** — *Site Reliability Engineering: How Google Runs Production Systems* (como o Google implementou).
2. **"O Manual/Workbook SRE"** — *The Site Reliability Workbook* (o "como" e "por quê", prático).
3. **"Seeking SRE"** — SRE em outros ambientes além do Google.
- Talk recomendada: **"Keys to SRE"** de **Ben Treynor** (SREcon14) — Treynor é o criador do termo SRE no Google.
- Comunidades/conferências: **SREcon (USENIX)**, Velocity, LISA, DevOps Days.

### 📌 Pontos de prova
- SRE **não é tudo-ou-nada**; comece pequeno.
- **Monitoramento é o primeiro passo** (base da hierarquia de Dickerson) — "não dá para saber se é confiável se não dá para medir."
- Depois: 1 serviço → SLI/SLO simples → monitorar.
- **Ben Treynor (Google)** = origem do SRE; "O Livro SRE" é a referência.

---

## 20. O papel do SRE: SLI, SLO, SLA, error budget, toil

**Fonte:** https://cloudcasters.io/pt-br/site-reliability-engineer-sre/ _(retornou HTTP 403 — inacessível; tópico coberto por conhecimento consolidado + Google SRE Book, complementando as seções 17–19)_

### Conceito central
SRE (Site Reliability Engineering), criado por **Ben Treynor no Google (~2003)**, é "o que acontece quando você pede a um engenheiro de software para projetar uma equipe de operações." Aplica **engenharia de software a problemas de operações**, tratando confiabilidade como uma feature mensurável.

### SLI vs. SLO vs. SLA (a tríade — distinção crítica de prova)

| Sigla | Nome | O que é | Exemplo |
|---|---|---|---|
| **SLI** | *Service Level Indicator* | A **métrica medida** | Latência p99 = 220 ms; disponibilidade = 99,95% |
| **SLO** | *Service Level Objective* | A **meta interna** sobre o SLI | "99,9% das requisições < 300 ms no mês" |
| **SLA** | *Service Level Agreement* | **Contrato com o cliente** + **penalidades** se violado | "99,9% uptime ou reembolso de 10%" |

Regra de ouro: o **SLO é mais rígido que o SLA** (você se dá margem internamente antes de quebrar o contrato e pagar penalidade). Ordem de severidade: **SLI mede → SLO mira → SLA obriga (com multa)**.

### Error Budget (orçamento de erro)
- **Fórmula:** `Error Budget = 100% − SLO`.
- Exemplo: SLO de **99,9%** de disponibilidade → orçamento de erro de **0,1%**.
  - Em **30 dias** (43.200 min): 0,1% ≈ **43,2 minutos** de downtime permitido por mês.
- Função: **alinhar dev e ops**. Devs querem lançar rápido (mais risco); ops querem estabilidade. O error budget é a **moeda comum**:
  - Orçamento sobrando → libere features.
  - Orçamento esgotado → **congele releases**, foque em confiabilidade.

#### Tabela de referência — disponibilidade vs. downtime ("os noves")

| SLO | Downtime/ano | Downtime/mês |
|---|---|---|
| 99% ("dois noves") | ~3,65 dias | ~7,2 h |
| 99,9% ("três noves") | ~8,77 h | ~43,8 min |
| 99,99% ("quatro noves") | ~52,6 min | ~4,38 min |
| 99,999% ("cinco noves") | ~5,26 min | ~26 s |

### Toil
Trabalho manual, repetitivo, automatizável, sem valor duradouro, que escala com o serviço. SRE busca **automatizá-lo**; meta: trabalho reativo ≤ **50%** (ver seção 18).

### Eliminação de silos dev ↔ ops
- SRE quebra o "muro" tradicional entre Desenvolvimento (quer mudança) e Operações (quer estabilidade). SREs **são engenheiros de software fazendo operações**.
- Princípio **"you build it, you run it"** — quem constrói também opera, internalizando a responsabilidade pela confiabilidade.

### SRE vs. DevOps (comparação clássica)
| | **DevOps** | **SRE** |
|---|---|---|
| Natureza | **Filosofia/cultura** (o "porquê" e "o quê") | **Implementação concreta** (o "como") |
| Origem | Movimento da comunidade | Google |
| Frase | "Se DevOps fosse uma interface..." | "...SRE é uma classe que a implementa" (Google) |
| Foco | Colaboração dev+ops, automação, fluxo | SLO, error budget, toil, confiabilidade mensurável |

### Pilares práticos do SRE
- **Observabilidade:** métricas, logs, traces.
- **Resposta a incidentes:** on-call, runbooks, **post-mortems blameless**.
- **Automação:** eliminar toil.
- **Capacity planning** e **gestão de releases** (canary, rollback, feature flags).
- **Engenharia de resiliência:** circuit breakers, retries, degradação graciosa contra **falhas em cascata**.

### 📌 Pontos de prova
- **SLI = mede; SLO = meta interna; SLA = contrato externo com penalidade.** SLO mais rígido que SLA.
- **Error budget = 100% − SLO**; 99,9% → ~43 min/mês. É a moeda dev↔ops; esgotou → congela releases.
- "Os noves": saiba converter 99,9% etc. em tempo de downtime.
- SRE = **implementação concreta** do DevOps (Google); DevOps = **filosofia/cultura**.
- "You build it, you run it" elimina o silo dev/ops.

---

# Semana 10 — Habilidades de programação e OOP

## 21. Como melhorar suas habilidades de programação

**Fonte:** https://www.linkedin.com/advice/3/how-do-you-improve-your-programming-skills

### Conceito central
Melhorar como programador é menos sobre "decorar sintaxe" e mais sobre **resolver problemas** e prática deliberada contínua. Citação central: *"O que importa é resolver problemas e não apenas escrever programas"* — a linguagem é só a ferramenta.

### Recomendações (da fonte)
1. **Escolha uma linguagem e domine-a** — adequada aos seus objetivos; pratique com cursos, livros, tutoriais.
2. **Aprenda com outros programadores** — leia código bom no **GitHub**, contribua em **open source**, use Stack Overflow, busque **mentores** e **pair programming**. "Ler código de pessoas realmente boas permite aprender padrões e práticas."
3. **Trabalhe em projetos reais** — freelancing, hackathons, projetos pessoais, open source.
4. **Revise e refatore seu código** — cheque bugs e legibilidade; use **linters** e **debuggers**; melhore a estrutura sem mudar a funcionalidade; aplique **KISS** (*Keep It Short & Simple*).
5. **Aprenda novas tecnologias** — acompanhe tendências, novos frameworks/bibliotecas. "A curiosidade insaciável propele você adiante; ouse fracassar tentando novas abordagens."
6. **Busque feedback e orientação** — comunidades, mentores, **code reviews**, abertura a crítica construtiva.

### Fundamentos essenciais complementares (da fonte)
- **Estruturas de dados e algoritmos (DSA)** — base para soluções eficientes.
- **Design patterns**, **sistemas distribuídos**, **OOP**, **prática deliberada constante**.

### Dicas práticas finais (da fonte)
- Comente o código explicando o **porquê** (não o "o quê").
- Mantenha um repositório pessoal no GitHub.
- Pratique **diariamente**, mesmo em pequenos projetos.
- Não se prenda a uma única linguagem — mantenha flexibilidade.
- "Durma bem antes de refatorar" (contexto mental fresco).
- Use **análise estática** automatizada.

### 📌 Pontos de prova
- Foco em **resolver problemas**, não em decorar linguagem.
- **Ler código bom (GitHub), open source, code review, mentoria.**
- Refatorar sem mudar funcionalidade; **KISS**; linters/debuggers.
- Base: **DSA + design patterns + OOP + prática deliberada**.

---

## 22. How To Be A GREAT Programmer

**🎬 Vídeo confirmado:** "How To Be A GREAT Programmer" — https://www.youtube.com/watch?v=X99Be8wJBMI

### Conceito central
A tese de abertura do vídeo: o que separa um **great developer** de um **good developer** **não é a linguagem nem as ferramentas** — é um **conjunto de outras habilidades e atributos** (mentalidade, fundamentos e hábitos de engenharia). Saber mais sintaxe não te torna ótimo.

### Os dois pilares do vídeo
A mensagem se organiza em torno de duas fundações (na mesma linha do artigo homônimo de referência sobre o tema):

1. **Excelência em resolução de problemas — "programar É resolver problemas".**
   - **Entender o problema a fundo antes de codar:** identificar o que se sabe, os dados de entrada e as restrições.
   - **Fazer um plano** (esboço, rascunho, diagrama) em vez de sair digitando.
   - **Quebrar o problema em pedaços menores** e atacar cada um sistematicamente.
   - **Simplificar e visualizar** — usar desenhos/objetos para enxergar o problema.
   - Referência clássica citada: **"How to Solve It"**, de **George Pólya** — metodologia intencional de resolução de problemas.
   - **Escrever código limpo:** nomes de variáveis significativos e funções com propósito claro refletem pensamento claro.

2. **Fundamentos de Ciência da Computação — entender o "porquê".**
   - Saber **o que acontece nos bastidores** ao usar uma função pronta.
   - Estudar **gerência de memória, eficiência em tempo de execução (Big-O) e a call stack** (liga direto com as seções 14, 15 e 16 deste material).
   - Dominar conceitos como **iteração, recursão e abstração**.
   - Esse domínio acelera **aprender novas linguagens** e dá confiança nas decisões de design.

> Imagem-chave do vídeo: os fundamentos são a **base da pirâmide** — quanto mais sólida, mais alto e mais impressionante o que se constrói em cima.

### Características de grandes programadores (consolidado)
- **Dominam os fundamentos:** estruturas de dados, algoritmos, complexidade (Big-O), como a máquina funciona (memória, bits — ligação com seções 14 e 16).
- **Resolvem problemas, não escrevem código** — entendem o problema antes de codar; decompõem em subproblemas.
- **Escrevem código legível e simples (KISS, DRY, YAGNI):** otimizam para o **próximo humano que vai ler**, não para impressionar. "Código é lido muito mais vezes do que escrito."
- **Aprendizado contínuo** e **curiosidade**: leem código alheio, estudam sistemas, fazem projetos.
- **Debugam metodicamente:** hipótese → instrumentação → isolamento, em vez de "tentativa e erro".
- **Pensam em manutenção e trade-offs:** custo de longo prazo, dívida técnica, testabilidade.
- **Recebem feedback bem:** code review como aprendizado, não como crítica pessoal (ecoa o blameless do SRE).
- **Comunicam-se bem:** explicam decisões, escrevem bons commits/docs.
- **Consistência > intensidade:** prática deliberada e diária supera "maratonas".

### Princípios de engenharia citados
- **DRY** (*Don't Repeat Yourself*), **KISS** (*Keep It Simple*), **YAGNI** (*You Aren't Gonna Need It*), **SOLID** (princípios de design OO).

### 📌 Pontos de prova
- Fundamentos (DSA, Big-O, memória) > sintaxe.
- **Código legível e simples**: KISS, DRY, YAGNI, SOLID.
- Resolver problema antes de codar; debugar com método; aprender continuamente.
- Feedback/code review como aprendizado (paralelo com cultura blameless).
- **Do vídeo:** o que faz um **great** ≠ **good** dev **não é linguagem/ferramenta**, e sim habilidades/atributos.
- **Dois pilares:** (1) **resolução de problemas** ("programar É resolver problemas"; método de **George Pólya**) e (2) **fundamentos de CS** (memória, Big-O, call stack, recursão).
- Entender o **porquê** (o que acontece nos bastidores) acelera aprender novas linguagens.

**Fontes da busca:** [YouTube — How To Be A GREAT Programmer](https://www.youtube.com/watch?v=X99Be8wJBMI) · [freeCodeCamp — How to be a great programmer](https://www.freecodecamp.org/news/how-to-be-a-great-programmer-34939494996d/)

---

## 23. Programação Orientada a Objetos (os 4 pilares)

**Fonte:** MIT 6.01SC, cap. 1 — https://ocw.mit.edu/courses/6-01sc-introduction-to-electrical-engineering-and-computer-science-i-spring-2011/resources/mit6_01scs11_chap01/ _(o PDF do capítulo não pôde ser carregado — excesso de redirecionamentos; tópico coberto por conhecimento consolidado, alinhado ao conteúdo padrão do curso, que usa Python)_

### Conceito central
OOP organiza o software em torno de **objetos** — unidades que combinam **estado (atributos/dados)** e **comportamento (métodos/funções)**. Uma **classe** é o molde; um **objeto** é uma instância concreta desse molde.

### Vocabulário fundamental

| Termo | Definição | Exemplo |
|---|---|---|
| **Classe** | Molde/blueprint que define atributos e métodos | `class Conta` |
| **Objeto / Instância** | Exemplar concreto criado a partir da classe | `c = Conta("Ana")` |
| **Atributo** | Variável que guarda o estado do objeto | `c.saldo` |
| **Método** | Função que define comportamento do objeto | `c.depositar(100)` |
| **`self`** (Python) / `this` | Referência ao próprio objeto dentro do método | `self.saldo` |
| **Construtor** | Inicializa o objeto | `__init__` (Python) |

### Exemplo em Python (estilo MIT 6.01)
```python
class Conta:
    def __init__(self, dono, saldo=0):   # construtor
        self.dono = dono                 # atributo
        self.saldo = saldo               # atributo (estado)

    def depositar(self, valor):          # método (comportamento)
        self.saldo += valor

    def sacar(self, valor):
        if valor <= self.saldo:
            self.saldo -= valor
        else:
            raise ValueError("Saldo insuficiente")

c = Conta("Ana", 100)    # c é uma INSTÂNCIA da classe Conta
c.depositar(50)          # chamada de método
print(c.saldo)           # 150
```

### Herança (inheritance)
Uma **subclasse** herda atributos e métodos de uma **superclasse**, podendo **estender** ou **sobrescrever** (override).
```python
class ContaPoupanca(Conta):              # ContaPoupanca herda de Conta
    def __init__(self, dono, saldo=0, taxa=0.01):
        super().__init__(dono, saldo)    # chama o construtor da superclasse
        self.taxa = taxa

    def render_juros(self):              # método NOVO (extensão)
        self.saldo += self.saldo * self.taxa

    def sacar(self, valor):              # OVERRIDE (sobrescreve) o método da superclasse
        # regra específica da poupança...
        super().sacar(valor)
```
- **Superclasse (pai/base)** ↔ **Subclasse (filha/derivada)**.
- `super()` acessa a implementação da superclasse.
- Reuso de código + relação **"é-um"** (ContaPoupanca **é uma** Conta).

### Os 4 PILARES da OOP (memorize — **A-E-H-P**)

| Pilar | Definição | Como aparece no código |
|---|---|---|
| **Encapsulamento** | Agrupar dados + métodos numa unidade e **esconder o estado interno**; acesso só via interface pública | Atributos "privados" (`__saldo` em Python; `private` em Java) + getters/setters |
| **Abstração** | Expor **o que** o objeto faz, escondendo **como** faz; modelar só o essencial | Interfaces, classes abstratas; usar `depositar()` sem saber a implementação |
| **Herança** | Subclasse reutiliza/estende a superclasse; relação "é-um" | `class B(A)` / `class B extends A` |
| **Polimorfismo** | Um mesmo nome/interface se comporta de formas diferentes conforme o tipo | Override de métodos; mesma chamada `area()` em `Circulo` e `Quadrado` dá resultados diferentes |

#### Polimorfismo — exemplo
```python
class Forma:
    def area(self): raise NotImplementedError

class Circulo(Forma):
    def __init__(self, r): self.r = r
    def area(self): return 3.14159 * self.r ** 2

class Quadrado(Forma):
    def __init__(self, l): self.l = l
    def area(self): return self.l ** 2

formas = [Circulo(2), Quadrado(3)]
for f in formas:
    print(f.area())   # mesma chamada, comportamentos diferentes → polimorfismo
```

- **Polimorfismo de subtipo (override):** subclasses redefinem o método.
- **Polimorfismo ad-hoc (overload):** mesmo nome, assinaturas diferentes (em linguagens que suportam, como Java).

### Por que importa
OOP é a base de design patterns (seção 13 — Observer usa interface + polimorfismo) e dos princípios SOLID (seção 22). Encapsulamento conecta com o mapa de memória (objetos no heap) e GC (seção 15).

### 📌 Pontos de prova
- **Classe = molde; objeto/instância = exemplar concreto.** Atributo = estado; método = comportamento.
- **4 pilares: Encapsulamento, Abstração, Herança, Polimorfismo.** Saber definir e dar exemplo de cada.
- **Encapsulamento ≠ Abstração:** encapsular = esconder/proteger o estado; abstrair = esconder a complexidade/expor só o essencial.
- **Herança = relação "é-um"**; `super()`/override.
- **Polimorfismo:** mesma interface, comportamentos diferentes (override = subtipo; overload = ad-hoc).

---

# Síntese: do commit à confiabilidade em produção

O curso conta **uma história contínua**: como um pedaço de código vai do teclado do dev até rodar de forma **confiável** para milhões de usuários — e como cada disciplina é uma camada dessa jornada.

```
 COMMIT                                                         PRODUÇÃO CONFIÁVEL
   │                                                                   │
   ▼                                                                   ▼
┌──────────┐  ┌──────────────┐  ┌───────────────┐  ┌──────────────┐  ┌────────────┐
│  Código  │→ │ CI: build +  │→ │ CD: deploy     │→ │ Operar +     │→ │ SRE:       │
│  (OOP,   │  │ testes       │  │ (Delivery c/   │  │ monitorar    │  │ SLO/error  │
│  bits,   │  │ unit+integr. │  │ gate manual ou │  │ (shift-right,│  │ budget,    │
│  memória)│  │ Fowler,JUnit)│  │ Deployment auto)│  │ métricas)    │  │ toil, post-│
└──────────┘  └──────────────┘  └───────────────┘  └──────────────┘  │ mortem)    │
   S10            S06              S05                  S07/S08         └────────────┘
 fundamentos    testes          entrega             qualidade/         S09
                                contínua            métricas          confiabilidade
```

**A linha condutora, semana a semana:**

1. **Fundamentos (S10, S07-fund.):** Tudo começa com **bons fundamentos** — OOP (os 4 pilares), manipulação de bits, layout de memória do processo e como o **GC** gerencia o heap. Um bom programador (S10) entende a máquina por baixo do código.

2. **Testes como rede de segurança (S06):** Antes de automatizar entregas, é preciso **confiar no código**. A pirâmide de Fowler (muitos unitários, alguns de integração narrow, pouquíssimos E2E broad) e ferramentas como JUnit/Mockito e o `WebApplicationFactory` do ASP.NET tornam a confiança **mensurável e automatizável**. O **shift-left** (testar cedo) torna defeitos baratos — base econômica do SQA (Pressman) e da DRE.

3. **Entrega contínua (S05):** Com testes confiáveis, automatiza-se o caminho até produção. **CI** integra e valida; **Continuous Delivery** deixa pronto para deploy (gate manual); **Continuous Deployment** publica automaticamente. **GitHub Actions** (workflows → jobs → steps → runners, triggers, `needs`) é a ferramenta concreta.

4. **Qualidade e cultura DevOps (S06/S08):** A Microsoft mostra que entregar bem é **cultural**: equipes autônomas, trunk-based, feature flags, instrumentar tudo e **testar em produção (shift-right)**. Métricas guiam decisões — mas escolher as métricas certas é difícil.

5. **Métricas de pipeline (S07):** O próprio pipeline vira objeto de medição (tempo por job, cache, paralelismo via `needs`, métricas **DORA**). Aqui CI/CD encontra a observabilidade: "você não melhora o que não mede."

6. **Confiabilidade em produção — SRE (S09):** Por fim, em produção, a confiabilidade vira **engenharia mensurável**: **SLI** (medir) → **SLO** (mirar) → **SLA** (contratar). O **error budget** (100% − SLO) é a moeda que equilibra **velocidade vs. estabilidade** — o mesmo dilema dev↔ops que o DevOps resolve culturalmente, o SRE resolve numericamente. **Eliminar toil** via automação e os **ciclos virtuosos** (SLO + post-mortem blameless) fazem a organização melhorar continuamente. Casos como **Mercado Livre** (SRE em escala) e a plataforma **Fury** (IDP) mostram tudo isso junto na prática.

**A grande ideia:** confiabilidade não é acidente nem heroísmo de plantão — é **construída** em cada camada: código fundamentado → testado → entregue continuamente → medido → operado com SLOs e cultura sem culpa. Do `git commit` ao `99,9% de uptime`, cada semana do curso é um elo dessa corrente.

---

_Bons estudos! Revise primeiro os 📌 Pontos de prova de cada seção — eles concentram o que mais costuma ser cobrado._
