from flask import Flask, request, jsonify, make_response, render_template, session
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
    firstname = request.args.get('firstname')
    lastname = request.args.get('lastname')
    password = request.args.get('password')
    score = 0
    config.user_collection.insert_one({'_id': userId, "firstname": firstname, "lastname": lastname, "email": email, "password": password, "score": score})
    return jsonify(message="success")

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
    if '_id' in session:
        current_user_id = session['_id']
    else:
        current_user_id = request.args.get('userId')
    user = config.user_collection.find_one({'_id': current_user_id})
    firstname = request.args.get('firstname')
    lastname = request.args.get('lastname')
    password = request.args.get('password')

    if not firstname:
        firstname = user['firstname']
    if not lastname:
        lastname = user['lastname']
    if not password:
        password = user['password']

    config.user_collection.find_one_and_update({"_id": int(current_user_id)}, {'$set': {'firstname': firstname, 'lastname': lastname, 'password': password}})
    return jsonify(message="success")
    
@app.route('/api/get/username', methods=["GET"])
def get_username():
    # if key doesnt exist, return nothing
    userId = request.args.get('userId')
    user = config.user_collection.find_one({"_id": int(userId)})
    print(user['email'])
    return jsonify(message="success")

# get transactions by user
# if transactionId is provided, searches for this instead
# else returns all transactions as a list
@app.route('/api/user/transactions', methods=["GET", "POST"])
def get_user_transactions():
    if '_id' in session:
        current_user_id = session['_id']
    else:
        current_user_id = request.args.get('userId')
    
    user = config.user_collection.find_one({"_id": int(current_user_id)})
            
    if request.method == "POST":
        rewardId = request.args.get('rewardId')
        reward = config.reward_collection.find_one({"_id": int(rewardId)})
        if user['score'] < reward['cost']:
            return jsonify(message="You don't have enough points to redeem this reward.")
        transactionId = config.transaction_collection.count()
        while config.transaction_collection.count_documents({ '_id': transactionId }, limit = 1) != 0:
            transactionId += 1
        
        transact_score(user['_id'], reward['_id'])
        config.transaction_collection.insert_one({"_id": transactionId, "reward_id": reward['_id'], "redeemed_by": user['_id']})
        return jsonify(message="success")
    else:
        if 'transactionId' in request.args:
            transaction_id = request.args.get('transactionId')
            transaction = config.transaction_collection.find_one({"_id": int(transaction_id)})
            if not transaction:
                return jsonify(message="Requested resource does not exist")
            return transaction 
        else:
            transactions = dumps(config.transaction_collection.find({"redeemed_by": user['_id']}))
        return transactions

# get activities completed by user
@app.route('/api/user/activities', methods=["GET"])
def get_user_activities():
    if '_id' in session:
        current_user_id = session['_id']
    else:
        current_user_id = request.args.get('userId')
    if 'completionId' in request.args:
        completion_id = request.args.get('completionId')
        activity = config.completed_collection.find_one({"_id": int(completion_id)})
        if not activity:
            return jsonify(message="Requested resource does not exist")
        return activity
    else:
        user = config.user_collection.find_one({"_id": int(current_user_id)})
        if not user:
            return jsonify(message="Requested resource does not exist")
        activities = dumps(config.completed_collection.find({"user_id": user['_id']}))
        if not activities:
            return jsonify(message="Requested resource does not exist")
    return activities

# get activities
@app.route('/api/get/activities', methods=["GET"])
def get_activities():
    return dumps(config.activity_collection.find())

# get rewards
@app.route('/api/get/rewards', methods=["GET"])
def get_rewards():
    if 'rewardId' in request.args:
        rewardId = request.args.get('rewardId')
        return config.reward_collection.find_one({"_id": int(rewardId)})
    return dumps(config.reward_collection.find())

def transact_score(user_id, reward_id):
    reward = config.reward_collection.find_one({"_id": reward_id})
    cost = reward['cost']
    user = config.user_collection.find_one({"_id": user_id})
    if user['score'] < cost:
        return jsonify(message="You don't have enough points to redeem this reward")
    else:
        new_score = user['score'] - cost
        config.user_collection.find_one_and_update({"_id": user_id}, {'$set': {"score": new_score}})

if __name__ == '__main__':
    app.run()