import aiogram
from aiogram import Bot, types
from aiogram.dispatcher import Dispatcher
from aiogram.types import ParseMode
from aiogram.utils import executor
import requests
import os

# Підключення до API погоди
def get_weather(city):
    api_key = 'b28855a8120da3ed7313b60d67d3f732'  # Замініть це на ваш API-ключ
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    data = response.json()
    return data

# Ініціалізація бота та диспетчера
bot = Bot(token='6837949958:AAF8U6juCjQi1BjeXBxgwZPnEx1wzNlKQBg')  # Замініть це на ваш токен
dp = Dispatcher(bot)

# Обробник команди /start
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await message.reply("Привіт! Я бот погоди. Введи назву міста, щоб дізнатися погоду.")

# Обробник текстового повідомлення
@dp.message_handler(lambda message: message.text)
async def get_weather_by_city(message: types.Message):
    city = message.text
    weather_data = get_weather(city)

    if weather_data['cod'] == '404':
        await message.reply("Місто не знайдено. Будь ласка, перевірте правильність написання.")
    else:
        weather_description = weather_data['weather'][0]['description']
        temp = weather_data['main']['temp']
        await message.reply(f"У місті {city} зараз {weather_description}. Температура: {temp}°C")

# Set Webhook URL
async def on_startup(dp):
    webhook_url = 'https://your_pythonanywhere_domain.pythonanywhere.com/webhook'
    await bot.set_webhook(webhook_url)

# Check if running on PythonAnywhere and run the app accordingly
if 'PYTHONANYWHERE_DOMAIN' in os.environ:
    import uvicorn
    from app import app

    uvicorn.run(app, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
else:
    executor.start_polling(dp)
