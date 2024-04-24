from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = '94070ea7775cf6cdc707b655741a7728'
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def weather():
    city = request.form.get('city')
    
    params = {
        'q': city,
        'appid': API_KEY,
        'units': 'metric'  # You can change to 'imperial' for Fahrenheit
    }
    
    response = requests.get(BASE_URL, params=params)
    weather_data = response.json()
    
    if weather_data['cod'] == 200:
        temperature = weather_data['main']['temp']
        description = weather_data['weather'][0]['description']
        icon = weather_data['weather'][0]['icon']
        
        return render_template('weather.html', city=city, temperature=temperature, description=description, icon=icon)
    else:
        return render_template('error.html', message=weather_data['message'])

if __name__ == '__main__':
    app.run(debug=True)
