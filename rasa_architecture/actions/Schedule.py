from typing import Dict, List, Text, Any

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class GiveScheduleDetais(Action):
    def name(self) -> Text:
        return "utter_schedule_details"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain : Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text = "Hello from action")
        return []