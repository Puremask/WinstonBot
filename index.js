const {Client, Attachment} = require('discord.js');
const bot = new Client();
const token = 'AUTH_TOKEN';
const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot do be online!');
})
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]) {
        case 'winston':
                num = Math.round((Math.random()) * 40);
                if (num == 0) {
                    num += 1;
                    message.channel.send({
                        files: [
                            "./" + num + ".jpg"
                        ]
    
                    });                    
                }
                else {
                message.channel.send({
                    files: [
                        "./" + num + ".jpg"
                    ]

                });
            }
            break;
        case 'clip':
            num = Math.round((Math.random()) * 18);
            if (args[1] == null) {
            if (num == 0) {
                num += 1;
                message.channel.send({
                    files: [
                        ".//clips" + num + ".mp4"
                    ]

                });                    
            }
            else {
            message.channel.send({
                files: [
                    "./clips/" + num + ".mp4"
                ]

            });
        }
    }
        else {
            if (args[1] == 420) {
                message.reply('Error: Too Dank!');

            }
            else if (args[1] == 69) {
                message.reply('Error: We\'re talking about a dog here!');

            }
            else if (parseFloat(args[1]) > 18 && args[1] != 69 && args[1] != 420) {
                message.reply('Invalid argument! Clips go up to 18.');

            }

            else {
            message.channel.send({
                files: [
                    "./clips/" + parseFloat(args[1]) + ".mp4"
                ]

            });           

        }
    }
        break;            

    }
})


bot.login(token);
