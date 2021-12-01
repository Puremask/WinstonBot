# WinstonBot
  This is a bot I wrote to send a random photo of my dog Winston every time the command "!winston" is used.
  I took out the photos and clips just for security's sake, as well as the authentication token. You can use this for your own dog photo bot if you so please!
  
  How this works is;
    I numbered the photos of my dog (1.jpg, 2.jpg, etc). 
    I then call a math.random from 1-18, (it works a little weird in JS as I recall)
    I finally use the number generated as the name of the file, upload(num + ".jpg")
 
