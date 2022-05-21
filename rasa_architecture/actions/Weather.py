from typing import Dict, List, Text, Any

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher

class GiveWeatherDetails(Action):
    def name(self):
        return "action_utter_weather"

    def run(self, dispatcher, tracker, domain):

        location = tracker.get_slot("location")
        dispatcher.utter_message(text = "I got your request")

        return []
    