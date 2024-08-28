from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/projects')
def projects():
    try:
        projects = [
            {"name": "Auto Quiz Generator", "url": "https://micymike-auto-quiz.hf.space", "description": "An AI-powered quiz generation tool."},
            {"name": "AI Chatbot Assistant", "url": "https://micymike-michaelmosesbot.hf.space", "description": "A smart chatbot for various tasks."},
            {"name": "Notification System", "url": "https://auto-notification-2.onrender.com/", "description": "Automated notification service."},
            {"name": "Tic Tac Toe Game", "url": "https://micymike-starlets-tictactoe.hf.space", "description": "Interactive Tic Tac Toe game."},
            {"name": "Rocket Simulator", "url": "https://mike-s-rocket.onrender.com/", "description": "3D rocket simulation experience."},
            {"name": "Language Tutor", "url": "https://language-tutor-awhjjxckxjtezfr9wma3of.streamlit.app/", "description": "AI-powered language learning platform."},
            {"name": "Football Team Management", "url": "https://nrcf-team.onrender.com/", "description": "Efficient team management solution."},
            {"name": "Social Media Web App", "url": "https://solo-project-production.up.railway.app/", "description": "AI-driven social media web app (Project LuNa)."}
        ]
        return jsonify(projects)
    except Exception as e:
        app.logger.error(f"Error fetching projects: {e}")
        return jsonify({"error": "An error occurred while fetching projects."}), 500

if __name__ == '__main__':
    app.run(debug=True)