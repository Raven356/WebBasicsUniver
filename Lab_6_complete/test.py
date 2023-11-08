from aiogram.dispatcher import Dispatcher
from aiogram.dispatcher.webhook import SendMessage
from aiogram.utils.executor import start_webhook
from aiogram import Bot, types
import os
import requests


API_TOKEN = os.environ['TG_TOKEN']

# webhook settings
WEBHOOK_HOST = 'https://raven356.alwaysdata.net/'
WEBHOOK_PATH = '/bot/'
WEBHOOK_URL = f"{WEBHOOK_HOST}{WEBHOOK_PATH}"

# webserver settings
WEBAPP_HOST = '::'  # or ip
WEBAPP_PORT = 8346


bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

# Підключення до API погоди
def get_weather(city):
    api_key = 'b28855a8120da3ed7313b60d67d3f732'  
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    data = response.json()
    return data

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


async def on_startup(dp):
    await bot.set_webhook(WEBHOOK_URL)
    # insert code here to run it after start


async def on_shutdown(dp):

    # insert code here to run it before shutdown

    # Remove webhook (not acceptable in some cases)
    await bot.delete_webhook()

    # Close DB connection (if used)
    await dp.storage.close()
    await dp.storage.wait_closed()




if __name__ == '__main__':
    start_webhook(
        dispatcher=dp,
        webhook_path=WEBHOOK_PATH,
        on_startup=on_startup,
        on_shutdown=on_shutdown,
        skip_updates=True,
        host=WEBAPP_HOST,
        port=WEBAPP_PORT,
    )