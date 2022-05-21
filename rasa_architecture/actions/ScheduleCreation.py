import datetime

from typing import Dict, List, Text, Any
from urllib import response

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher

from flask import jsonify, request

class ConfirmScheduleDetails(Action):
    def name(self) -> Text:
        return "action_utter_schedule_confirmation"

    def run(self, dispatcher, tracker, domain):

        req_time = tracker.get_slot("time")
        task = tracker.get_slot("task")

        # con_time = datetime.datetime.strptime(req_time, "%Y-%m-%dT%H:%M:%S.000+00:00")
        # end_time = con_time + datetime.timedelta(minutes = 60)

        # data = {"startTime" : str(con_time), "endTime" : str(end_time), 'task' : task}

        # response = request.post("http://127.0.0.1:8000/api/v1/schedule", json = data)

        dispatcher.utter_message(text = f"time is {str(req_time)} and task is {task}")

        return []

class CreateSchedule(Action):
    def name(self) -> Text:
        return "action_create_schedule"

    def run(self, dispatcher, tracker, domain):

        req_time = tracker.get_slot("time")
        task = tracker.get_slot("task")

        con_time = datetime.datetime.strptime(req_time, "%Y-%m-%dT%H:%M:%S.000+00:00")
        end_time = con_time + datetime.timedelta(minutes = 60)

        data = {"startTime" : str(con_time), "endTime" : str(end_time), 'task' : task}

        # res = request.post("http://127.0.0.1:8000/api/v1/schedule", json = data)

        # print(res)

        dispatcher.utter_message(text = f"requeset sent to the server")

        return []