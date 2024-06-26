from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    weight = float(request.form['weight'])
    height = float(request.form['height'])

    bmi = calculate_bmi(weight, height)

    return render_template('index.html', bmi=bmi)

def calculate_bmi(weight, height):
    return round(weight / (height ** 2), 2)

if __name__ == '__main__':
    app.run(debug=True)
