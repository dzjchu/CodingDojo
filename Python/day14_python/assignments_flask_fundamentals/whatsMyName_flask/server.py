from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html")

@app.route("/process", methods=['POST'])
def print_user_name():
  print request.form['name']
  name = request.form['name']

  return redirect('/')

app.run(debug=True)