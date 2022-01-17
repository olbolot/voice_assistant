## Инструкция для запуска
#### Уставите [Node.js](https://nodejs.org/ru/download/)
#### Склонируйте проект
Введите в вашей командной строке*:

    git clone git@github.com:OlBol/voice_assistant.git
###### Если у вас не установлен git, то [установите его](https://git-scm.com/downloads)
###### Если у вас все еще выводится ошибка при попытке клонирования, то, скорее всего, у вас не настроен SSH: [инструкция по настройке](https://github.com/OlBol/voice_assistant#%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B5-ssh)
А затем:

    cd voice_assistant
Далее установите [nvm](https://github.com/nvm-sh/nvm):
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
Затем:
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

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


### *Инструкция по настройке SSH

Если у вас при попытке клонирования репозитория выводится ошибка, то скорее всего, у вас не настроен SSH. 

Введите в командной строке:

    ssh-keygen -t ed25519 -C "your_email@example.com"
(замените на свою почту, на которую зарегистрирован аккаунт на GitHub)

Далее нужно забрать ключ по адресу (адрес актуален для Mac OS, для остальных ОС можно самими поискать или поугуглить адрес):
    
    open /Users/имяМакбука/.ssh/
(имяМакбука заменить на имя своего пользователя)

Откроется директория с нужным файлом, можно его открыть в Sublime Text или браузере, а затем скопировать.

Затем переходите сюда: https://github.com/settings/keys и нажимайте 'New SSH key', вводите только что скопированный ключ.

Готово, после этого можно клонировать и запускать проект.
