from flask import Flask, render_template, request, session, jsonify
import json

app = Flask(__name__)
app.secret_key = 'enrollment-demo-key'

# Load enrollment form structure
with open('enrollment_form.json', 'r', encoding='utf-8') as f:
    form_data = json.load(f)

@app.route('/')
def enrollment_form():
    return render_template('enrollment.html', menu=form_data)

@app.route('/submit_enrollment', methods=['POST'])
def submit_enrollment():
    data = request.get_json()
    print("Enrollment submitted:", data)  # Optional: log or process data
    return jsonify({"status": "success", "message": "Enrollment received!"})

if __name__ == '__main__':
    print("Running Enrollment Form on port 8080...")
    app.run(host='0.0.0.0', port=8080)
