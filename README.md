# Efficientia · Cinttia Docs

Página estática de documentação sobre o funcionamento do SRE da Cinttia: fluxo de uma solicitação, métricas de confiabilidade, cálculo de custos de modelos e princípios de privacidade.

## Conteúdo

A página apresenta:

- **Fluxo da solicitação:** entrada, roteamento, especialista, auditoria e saída.
- **Confiabilidade:** latência p95, taxa de erro, disponibilidade alvo e fallback.
- **Custos:** fórmula de cálculo por tokens e preços configurados por modelo.
- **Privacidade:** dados observados, informações protegidas e localização do painel SRE/FinOps.

## Como executar

O projeto não possui dependências de build. Para visualizar localmente, abra `index.html` diretamente no navegador ou inicie um servidor HTTP na raiz:

```bash
python -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000).

> O botão **Ir para o chat** aponta para `/` e o botão **Abrir painel SRE / FinOps** aponta para `/monitor`. Esses caminhos precisam estar disponíveis no ambiente que hospeda a documentação.

## Estrutura

```text
.
├── index.html   # Estrutura e conteúdo da documentação
├── style.css    # Layout, cores, responsividade e acessibilidade visual
├── script.js    # Navegação suave entre as seções
└── README.md    # Documentação do projeto
```

## Tecnologias

- HTML5 semântico
- CSS3 responsivo, sem framework
- JavaScript nativo, sem dependências externas

## Desenvolvimento

Para alterar o conteúdo, edite `index.html`. Mudanças de aparência devem ser feitas em `style.css`, e comportamentos de navegação em `script.js`.

Após qualquer alteração, verifique:

1. Se a página continua carregando os arquivos `style.css` e `script.js`.
2. Se os links de navegação levam às seções corretas.
3. Se a tabela de custos permanece legível em telas pequenas.
4. Se os links para o chat e o painel apontam para as rotas corretas do ambiente.

## Publicação

O projeto é publicado no branch `main` do repositório:

<https://github.com/Efficientia/Efficientia-Cinttia-Docs>

Para enviar uma atualização:

```bash
git add .
git commit -m "Descreva a alteração"
git push origin main
```
