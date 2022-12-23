# Instrucions to Start the app

After you install the project, you need to install **pip**, **npm**, and **Node**. Then go to the Project folder, by typing in the terminal, ```cd backend```, then activate the virtual envorenment by typing ```venv/scripts/activate```, and then type ```cd Project```. Next type ```pip install -r requirements.txt``` to install all the requirements (if in the future you will get an error that the “name of the package” is not installed, try to type the ```pip install requirements.txt``` again or just install the package itself). Next, apply migrations by typing ```python manage.py makemigrations``` and then ```python manage.py migrate```. After that create a super user by typing the ```python manage.py createsuperuser``` command, and then put the superuser information. **After that CREATE FIRST VIDEO IN THE ADMIN**. Finally, type ```python manage.py runserver``` to start the server. Now we’re going to install the frontend. Create a new terminal and go to the frontend folder by writing ```cd React-Frontend``` and ```cd frontend```. Next type the ```npm install --legacy-peer-deps```. And then you can type ```npm start``` to start the server.

# Instructions About Videos

In my FaTube app, you need to **register**. After you registered, you can go to the **Video Panel**, and click on the button, **New Video**. You can't create two same videos, because we don't want to see channels with 1000 same videos to earn subscribers. After you created the video you can go back to see it on the main page or you can go to the **Video Panel** and then edit or delete it. If you are going to have an empty screen, try to reload the page and then log out and log in back.

# Instruction About Chat

To test the chat app you need to start the new localhost server in the new terminal and when you got to the chat app, you need to write the person's name in the search bar and then click enter after that you have to click twice on that person to open the chatroom with him. You can send messages in real-time and images too, but they are supposed to be **under 250KB**.

If you want to email me about a bug or something else, you can click on the contact us link in the navigation bar, and then put your information in the box and send an email message.


