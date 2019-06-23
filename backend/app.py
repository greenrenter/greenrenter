from flask import Flask, render_template, g, request, redirect, url_for,session,jsonify
from flaskext.mysql import MySQL
import json
import os


# settingup the app
app = Flask(__name__)


# config
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = os.urandom(24)

# MYSQL configurations
app.config['MYSQL_DATABASE_USER'] = 'green'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Grenter@123'
app.config['MYSQL_DATABASE_DB'] = 'green_renter_db'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

flaskmysql = MySQL()
flaskmysql.init_app(app)


def connect_db(flaskmysql):
    """from werkzeug.security import generate_password_hash, check_password_hash
    connecting to the database
    :param flaskmysql:
    :return:
    """
    con = flaskmysql.connect()
    return con


def get_db(flaskmysql):
    if not hasattr(g,'mysql_db'):
        g.mysql_db = connect_db(flaskmysql)
    return g.mysql_db


@app.teardown_appcontext
def close_db(error):
    """
    dissconnecting the database
    :param error:
    :return:
    """
    if hasattr(g, 'mysql_db'):
        g.mysql_db.close()


@app.route('/', methods=['GET', 'POST'])
def index():
    return "the backend api are mess so please come back"


@app.route('/form')
def form():
    return render_template('form.html')


@app.route('/data')
def data():
    """
    rest api for all the data for the applieces consumptioon

    :return: the json format data
    """
    db = get_db(flaskmysql)
    cur = db.cursor()
    cur.execute('select * from appliences')
    result = cur.fetchall()
    data= {}
    dline=[]
    for row in result:
        drow={}
        drow['id'] = row[0]
        drow['name'] = row[1]
        drow['power'] = row[2]
        drow['rate'] = row[3]
        drow['cost'] = row[4]

        dline.append(drow)
    return jsonify(dline)


@app.route('/average')
def average():
    """
    api for the average consumption for comparing
    :return: json data
    """
    db = get_db(flaskmysql)
    cur = db.cursor()
    cur.execute('select * from area_average')
    result = cur.fetchall()
    dline = []
    for row in result:
        drow = {}
        drow['id'] = row[0]
        drow['area'] = row[1]
        drow['average'] = row[2]

        dline.append(drow)
    return jsonify(dline)


@app.route('/providers')
def providers():
    """
    api to get the providers list is a rest api for all the data
    :return: json reply
    """
    db = get_db(flaskmysql)
    cur = db.cursor()
    cur.execute('select * from providers')
    result = cur.fetchall()
    dline = []
    for row in result:
        drow = {}
        drow['id'] = row[0]
        drow['name'] = row[1]
        drow['plan'] = row[2]
        drow['annual_cost'] = row[3]

        dline.append(drow)
    return jsonify(dline)


@app.route('/user_data',methods=['GET','POST'])
def user_data():
    content = request.get_json()
    average= 0.0
    y=0
    appliences = {}
    d= []
    names =[]
    for x in content['appliances']:
        name = (x['name'])
        rating = x['rating']
        hours = x['frequency']

        db = get_db(flaskmysql)
        cur = db.cursor()
        cur.execute("select power from appliences where name = %s and rating = %s",(name,rating))
        power = cur.fetchone()
        power = power[0]
        average = average +(power * hours)
        d.append( power * hours)
        names.append(x['name'])
        y = y+1
    sum= average
    i=0
    average = average/y
    for name1 in names:

        appliences[name1]= (d[i]/sum)*100
        i = i + 1

    x =content['household']
    if x['number_of_people'] != 0:
        average = average + (float(x['number_of_people'])/10)* average

    data2 = [ {'average':average}, {'appliences':appliences}]
    # entering into the database
    db = get_db(flaskmysql)
    cur = db.cursor()
    cur.execute('insert into user_data (no_of_people,postcode,energysuplier ,bill) values(%s,%s,%s,%s)',(x['number_of_people'], x['postcode'], x['energy_supplier'], x['bill']))
    db.commit()
    return jsonify(data2)
'''    no_of_people = request.form['no_of_people']
    postcode = request.form['postcode']
    energy_supplier = request.form['energy_supplier']
    bill = request.form['bill']
    fridge = request.form['fridge']
    dishwasher = request.form['dishwasher']
    tv = request.form['tv']
    washer = request.form['washer']
    dryer = request.form['dryer']

    

    total = fridge+ dishwasher+ tv+ washer+ dryer
    fridge = (fridge /total)*100
    dishwasher = (dishwasher / total) * 100
    tv = (tv / total) * 100
    washer = (washer / total) * 100
    dryer = (dryer / total) * 100

    dt = [{'fridge': fridge}, {'dishwasher': dishwasher}, {'tv': tv}, {'washer': washer},{'dryer': dryer}]
    data.append(dt)
    '''



@app.route('/result')
def result():
    """
    index page with list of the issues
    :return:
    """

    return render_template('result.html')


if __name__ == '__main__':
    app.run()