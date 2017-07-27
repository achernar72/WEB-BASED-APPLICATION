from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
import time
access_token = "768298204567711744-8REnbwuK8dPT8LLRMm2hlMFbesnWbWK"
access_token_secret = "uX4si9CirS4pp8OhFME3ZaIwyfvT7bPyFcZh0KRyCWjZX"
consumer_key= "wXqjPxA9jcWGBtcgI7Fd0ROTq"
consumer_secret	=  "O5OsHRQAn3CQ2v6CLFs8t14ZI6wDVx1QW8B572QAS0B5XnqZgv"
class listener(StreamListener):		
   def on_data(self, data):
       try:
           saveFile = open('tweets.json','a')
           saveFile.write(data)
           saveFile.write(',  \n')
           saveFile.close()
           return True
       except Except:
           print ("failed ondata")
           time.sleep(1)
           

   def on_error(self, status):
        print(tweets)
auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
twitterStream = Stream(auth, listener())
twitterStream.filter(track=["#AbdulKalam"])
