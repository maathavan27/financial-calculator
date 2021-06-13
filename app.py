from flask import Flask, render_template, redirect, url_for, request, send_file

app = Flask(__name__)

#when play is pressed
@app.route("/", methods=['GET','POST'])
def index():
    return render_template('finance.html')

@app.route("/results", methods=['GET', 'POST'])
def results():
    return render_template('results.html')

if __name__ == '__main__':
    app.run(debug=True)