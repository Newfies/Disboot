## Disboot v1.0.0
 Disboot, a bot designed to ban users that have been flagged suspicious. The intent of this bot is to ban accounts that join via Disboard and start messaging users for self promotion, paying for art, etc.


### How To Setup?
 For now, this project will require you to setup this on your own to self host.
 
 -  Run the following in your terminal
    ```
    git clone https://github.com/Newfies/Disboot.gitz
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