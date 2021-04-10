from flask import Flask, request, jsonify, make_response, render_template
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from flask_pymongo import pymongo
from flask_restful import Resource, Api
from bson import json_util
from bson.json_util import dumps
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
    documents = dumps(config.sample_collection.find_one({"_id" : "10006546"}))
    #response = []
    #response.append(documents)
    # for document in documents:
    #     document['_id'] = str(document['_id'])
    #     response.append(document)
    #     print(document)
    #return json.dumps(response, default=json_util.default)
    return documents

# post user data
@app.route('/api/post/register/test', methods=["POST"])
def test_register_user():
    config.user_collection.insert_one({'_id': '0', 'username': 'john', 'score': 1000})
    return jsonify(message="success")

# register user
@app.route('/api/post/register', methods=["POST"])
def register_user(): 
    email = request.args.get('email')
    if config.user_collection.count_documents({ 'email': email }, limit = 1) != 0:
        return jsonify(message="email already exists")
    userId = config.user_collection.count()
    firstname = request.args.get('firstName')
    lastname = request.args.get('lastName')
    password = request.args.get('password')
    score = 0
    config.user_collection.insert_one({'_id': userId, "firstname": firstname, "lastname": lastname, "email": email, "password": password, "score": score})
    return jsonify(message="success")
@app.route('/api/post/auth', methods=['POST'])
def auth_user():
    email = request.args.get('email')
    password = request.args.get('password')
    user = config.user_collection.find_one({'email' : email})
    if user and password == user['password']:
        del user['password']
        return jsonify(message="success")
    else:
        return jsonify(message="Invalid email or password")


# get user 
@app.route('/api/get/user/', methods=["GET"])
def get_user():
    # if key doesnt exist, return nothing
    userId = request.args.get('userId')
    user = config.user_collection.find_one({"_id": int(userId)})
    return user


# update
@app.route('/api/user/update', methods=["POST"])
def update_user():
    email = request.args.get('email')
    user = config.user_collection.find_one({'email': email})
    firstname = request.args.get('firstname')
    lastname = request.args.get('lastname')
    password = request.args.get('password')

    if not firstname:
        firstname = user['firstname']
    if not lastname:
        lastname = user['lastname']
    if not password:
        password = user['password']

    config.user_collection.find_one_and_update({'email': email}, {'$set': {'firstname': firstname, 'lastname': lastname, 'password': password}})
    return jsonify(message="success")
    
@app.route('/api/get/username', methods=["GET"])
def get_username():
    # if key doesnt exist, return nothing
    userId = request.args.get('userId')
    user = config.user_collection.find_one({"_id": int(userId)})
    print(user['email'])
    return jsonify(message="success")

if __name__ == '__main__':
    app.run()