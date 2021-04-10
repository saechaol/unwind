from flask import Flask, request, jsonify, make_response, render_template
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from flask_pymongo import pymongo
from bson import json_util
import requests
import json
import config

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)

@app.route('/')
def get_entry():
    return ("GET request successful!\n/")

@app.route('/api/test/get')
def test_get():
    return ("GET request successful!\n/api/test/get")

# test get data
@app.route('/api/test/get/item')
def test_get_item():
    documents = config.user_collection.find_one()
    response = []
    response.append(documents)
    # for document in documents:
    #     document['_id'] = str(document['_id'])
    #     response.append(document)
    #     print(document)
    return json.dumps(response, default=json_util.default)

if __name__ == '__main__':
    app.run()