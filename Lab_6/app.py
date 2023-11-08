from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()
    # Обробка отриманих даних від бота тут

    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=True)