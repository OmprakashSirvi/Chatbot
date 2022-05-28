import requests, datetime, json
from typing import Text

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher


import firebase_admin
from firebase_admin import credentials, storage, db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('expensetracker-9b633-firebase-adminsdk-w8ir9-830c51a426.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://expensetracker-9b633-default-rtdb.firebaseio.com/'
})

root = db.reference('/')



# As an admin, the app has access to read and write all data, regradless of Security Rules
# ref = db.refer

# PROJECT_ID = "expensetracker-9b633"

# IS_EXTERNAL_PLATFORM = True # False if using Cloud Functions

# firebase_app = None

# def init_firebase():
#     global firebase_app
#     if firebase_app:
#         return firebase_app

#     import firebase_admin
#     from firebase_admin import credentials

#     if IS_EXTERNAL_PLATFORM:
#         cred = credentials.Certificate('expensetracker-9b633-firebase-adminsdk-w8ir9-830c51a426.json')
#     else:
#         cred = credentials.ApplicationDefault()

#     firebase_app = firebase_admin.initialize_app(cred, {
#         # 'projectId': PROJECT_ID,
#         'storageBucket': f"{PROJECT_ID}.appspot.com"
#     })

#     return firebase_app
# # ref = db.reference('/expense/expenses')
# init_firebase()


class GiveUserStateDetails(Action):
    def name(self) -> Text:
        return "action_add_expense"

    def run(self, dispatcher, tracker, domain):
        try:
            item = tracker.get_slot("item")
            time = tracker.get_slot("time")
            price = tracker.get_slot("amount-of-money")

            if (time == None):
                time = datetime.now()

            print(f"item : {item}, time : {time}, price : {price}")

            con_time = datetime.datetime.strptime(time, "%Y-%m-%dT%H:%M:%S.000+00:00")
            con_time = int(con_time.timestamp() * 1000)

            newExpense = {"item" : item, "price" : price, "time" : con_time}

            

            # bucket = storage.bucket()
            # blob = bucket.blob(newExpense)
            # blob.upload_from_string(json.dumps(newExpense, indent=2))

            dispatcher.utter_message(text = f"you are purchasing : {item}")

        except:
            dispatcher.utter_message(text = "Something went wrong while creating your expense")

        return []