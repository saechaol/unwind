from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import requests
import json

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)

@app.route('/')
def get_entry():
    return ("GET request successful!\n/")

@app.route('/api/test/get')
def test_get():
    return ("GET request successful!\n/api/test/get")