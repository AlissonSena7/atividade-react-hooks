# Desafio Prático: Hook `useOnlineStatus`

## Disciplina

**Programação para Internet I**

## Objetivo

Desenvolver um hook personalizado chamado `useOnlineStatus` utilizando React e TypeScript para monitorar o estado da conexão de internet do usuário.

O hook deve detectar quando a conexão é perdida ou restabelecida, permitindo que os componentes reajam a essas mudanças em tempo real.

---

## Requisitos

* Utilizar React com TypeScript.
* Criar o hook personalizado `useOnlineStatus`.
* Utilizar os eventos nativos do navegador:

  * `online`
  * `offline`
* O hook deve encapsular o `useContext(AuthContext)`.
* Deve lançar um erro claro caso seja utilizado fora do componente `<AuthProvider />`.

Exemplo de erro:

```ts
throw new Error(
  "useAuth deve ser utilizado dentro de um AuthProvider"
);
```

---

## Estrutura do Projeto

```text
src/
├── components/
├── context/
│   ├── AuthContext.tsx
│   └── AuthProvider.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useOnlineStatus.ts
├── App.tsx
└── main.tsx
```

---

## Instalação

Clone o projeto ou extraia os arquivos fornecidos.

Instale as dependências:

```bash
npm install
```

---

## Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Após iniciar, o Vite exibirá um endereço semelhante a:

```text
http://localhost:5173
```

Abra o endereço no navegador.

---

## Scripts Disponíveis

### Executar em modo de desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

### Visualizar build

```bash
npm run preview
```

---

## Tecnologias Utilizadas

* React
* TypeScript
* Vite
* Context API
* Custom Hooks

---

## Autor

Aluno: Alisson Ramires S. da Silva

Disciplina: Programação para Internet I

Instituição: IFPI
