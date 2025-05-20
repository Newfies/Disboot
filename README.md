## Disboot v1.4.3
 Disboot, a bot designed to ban users that have been flagged suspicious. The intent of this bot is to ban accounts that join via Disboard and start messaging users for self promotion, paying for art, etc.

## Updates
 -  Removed the timer feature, for now the config.ini is not needed.
 -  Added a new feature to easily add users to the ban list :D
 -  Changed the /add list to add "[DISBOOT]" to the end

## Plans
 - Permission checking. This will bring back the config.ini file.
 - Version checking. This will also add a new config.ini to ignore updates.

### How To Setup?
 For now, this project will require you to setup this on your own to self host.
 
 -  Run the following in your terminal
    ```
    git clone https://github.com/Newfies/Disboot.git
    ```
    > You can also download this GitHub repo by going to Code > Download ZIP, however you will still need to use your terminal to setup and use this.

 -  Run the following in your terminal
    ```
    cd Disboot
    ```
    
 -  Run the following in your terminal
    ```
    npm install
    ```

 -  Create a new file with the name of **.env** and open it and add the following line to your **.env** file
    ```
    TOKEN={YOUR DISCORD BOT TOKEN HERE}
    ```
    > You will need to enter your Discord Bot Token, if you do not have a bot setup currently, simply head over to https://discord.com/developers/applications and make a new bot.

 -  Then when your ready to use Disboot run the following in your terminal
    ```
    npm run start
    ```
    Or
    ```
    node src/bot.js
    ```

### Help, Notices, and whatnot.
 The bans.json file will not matter to you as the tool gets the ban list from my GitHub repository, and not that file.

 If you want to add users to this you should submit an issue to the GitHub with proof of the user, and providing the UserID, Or fork the GitHub repository, and adding to the bans.json file, and adding your proof to the message.

### How To Use?
 After setting up and running the bot as shown above, simply add your bot to the server if it isnt already and just use the /run command