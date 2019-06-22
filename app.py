from flask import Flask, render_template, g, request, redirect, url_for,session,jsonify
from flaskext.mysql import MySQL
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
    return render_template('index.html')


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


@app.route('/result')
def result():
    """
    index page with list of the issues
    :return:
    """

    return render_template('result.html')


if __name__ == '__main__':
    app.run()