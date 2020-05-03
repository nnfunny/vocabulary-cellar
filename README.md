# Vocabulary Cellar Desktop Application 🎉📝🎯

#### The Vocabulary Cellar assists Enlgish learners to store all related information of vocabularies to reduce "forgetting curve" and expand vocabulary

#### All following frameworks/technologies are implemented in this project:
- Front-end: React (Basic)
- Desktop Framework: Electron.js (Node.js)
- Data Storage: JSON (assisted by "electron-store" - npm package)
- Cross-platform app: Windows, MacOS, Linux

### Instructions to run the program:
1. Download the repository:
	> git clone https://github.com/nnfunny/vocabulary-cellar.git
2. Install all needed packages:
	> npm install
	
	or
	> yarn 
3.  Optional: If you are using "yarn" please move to step 4. However, if you are using "npm", please jump into package.json, look at "scripts" and the "start" line into the following line:
	> "start": "concurrently \"cross-env BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\""
4. Run the application locally:
	> yarn start
	
	or
	> npm run start

The desktop app will pop up to create vocabulary lists.

### The below image shows screenshot of my application:

