from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/ninja')
def ninja():
  return render_template("ninja_all.html")
  
@app.route('/ninja/<ninjaname>')

app.run(debug=True)