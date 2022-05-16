from typing import Dict, List, Text, Any

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher

class GiveScheduleDetais(Action):
    def name(self) -> Text:
        return "action_utter_state_got"

    def run(self, dispatcher, tracker, domain):

        state = tracker.get_slot("state")

        dispatcher.utter_message(text = f"so you are {state}")

        return [SlotSet('state', state)]