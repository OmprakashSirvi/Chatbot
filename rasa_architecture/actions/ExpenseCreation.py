from typing import Text

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher

class GiveUserStateDetails(Action):
    def name(self) -> Text:
        return "action_add_expense"

    def run(self, dispatcher, tracker, domain):

        item = tracker.get_slot("item")

        dispatcher.utter_message(text = f"you are purchasing : {item}")

        return []