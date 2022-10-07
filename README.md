# task-micro-front-end

Para inicializar o micro front-end, deve ser inicializado os projetos individualmente com o comando `yarn`.


- task-root: `yarn install` e `yarn start`
  - O projeto será executado na porta 9000.

- task-create: `yarn install` e `yarn start --port 8500`
  - O projeto será executado na porta 8500 onde foi configurado em nosso orquestrador (task-root) para identificar o build.

- task-list: `yarn install` e `yarn start --port 8501`
  - O projeto será executado na porta 8501 onde foi configurado em nosso orquestrador (task-root) para identificar o build.
