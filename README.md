## Инструкция для запуска
#### Уставите [Node.js](https://nodejs.org/ru/download/)
#### Склонируйте проект
Введите в вашей командной строке*:

    git clone git@github.com:OlBol/voice_assistant.git
###### Если у вас не установлен git, то [установите его](https://git-scm.com/downloads)
А затем: 
 
    cd voice_assistant
Далее установите [nvm](https://github.com/nvm-sh/nvm):

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash; 

Затем:
    
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


И теперь установите определенную версию Node:
    
    nvm install 15.3.0

#### Установите зависимости в проекте
    npm i

#### Запустите проект 
    npm run start
###### Чтобы оставить выполнение программы, в командной строке зажмите комбинацию клавиш cmd + с

### Готово, можете открыть в браузере http://localhost:3000 и вводить фразы
###### Ошибки смотрите, пожалуйста, в вашей командной строке. Как будет свободная минутка, сделаю обработку ошибок и вывод в браузер.

#### Если нужно будет забрать изменения, то находясь в проекте, введите в командной строке
    git pull

`*` Если у вас MacOS, то у вас приложение называется Terminal. Откройте его и перейдите на ваш рабочий стол. Это можно сделать с помощью команды `cd`, которая позволяет путешествовать по вашим директориям. 
Скорее всего, вам будет достаточно набрать `cd Desktop`. А чтобы посмотреть какие директории есть в той директории, где вы находитесь, нужно ввести команду `ls`
