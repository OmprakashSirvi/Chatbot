This is my CP project where i am creating a chatbot

To get started run the following commands

    npm install

2: create a python virtual envirnoment:

    virtualenv chatbot_env --python=python3.8

(recommended version: python 3.8)

3: Now activate your virtual envirnoment

To activate follow these steps:

1 run:

    cd name_of_env
    cd Scripts
    activate

4: And then run this command:

    pip install rasa==3.1 --extra-index-url https://pypi.rasa.com/simple

5: Meanwhile make sure you have docker installed in your system

6: With docker installed excecute this command:

    docker pull rasa/duckling

7: And then install all these packages:
Flask
sklearn
pymongo[srv]
flask_restful
flask_pymongo

Remember to change dir to rasa_architecture folder

Run(on new terminal):

    cd rasa_architecture

To run chatbot use this:
First traing your model:

    rasa train

For command line interface of chatbot:

    rasa shell

Now to interact with the bot more deeply use this:

    srasa interactive

To start the api server use this command:

    docker run rasa/duckling

To run actions server of rasa:

    rasa run actions

To start rasa api server:

    rasa run --enable-api --i 127.0.0.1 -p 4000

ports to note:

        rasa/duckling : 5001
        react : http://localhost:3000
        rasa actions : http://0.0.0.0:5055
        flask : http://127.0.0.1:5000
        node : http://localhost:8000
