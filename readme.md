This is my CP project where i am creating a chatbot

To get started run the following commands

1: npm install

2: create a python virtual envirnoment:
virtualenv chatbot_env --python=python3.8
(recommended version: python 3.8)

3: Now activate your virtual envirnoment

4: And then run this command
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

To run chatbot use this:

rasa train

rasa run actions

rasa shell

Now to interact with the bot more deeply use this:

rasa interactive

To start the api server use this command :

docker run rasa/duckling

rasa run --enable-api --i 127.0.0.1 -p 4000
