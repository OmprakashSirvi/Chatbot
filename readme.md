This is my CP project where i am creating a chatbot

To get started run the following commands

npm install

create a python virtual envirnoment:

python virtualenv python=python3.8

recommended version: python 3.8

And then run this command
pip install rasa==3.1 --extra-index-url https://pypi.rasa.com/simple

and then install all these packages:
Flask
pymongo[srv]
sklearn
apiclient
tensorflow
flask_restful
flask_pymongo
google-api-python-client

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
