This is my CP project where i am creating a chatbot

To get started run the following commands

npm install

create a python virtual envirnoment

recommended version: python 3.8

And then run this command
pip install rasa-x==0.42.5 --extra-index-url https://pypi.rasa.com/simple

and then install all tese packages:
Flask
pymongo[srv]
sklearn
apiclient
tensorflow
flask_restful
flask_pymongo
google-api-python-client

Remember to change dir to rasa_architecture folder

to run chatbot use this:
rasa train

rasa run actions

rasa shell
