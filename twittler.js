 //put in twittler.js file
      $(document).ready(function(){
        var $body = $('body');
        $body.append('<h1 id="title"> Twittler </h1>')
        .append('<button type="button" class="twittleBtn btn btn-primary">Update Feed</button>')
        .append('<button type="button" class="pauseBtn btn btn-secondary">Pause</button>')
        .append('<span id="currentFeed">Home Tweets</span>')
        .append('<div class="tweetBody"></div>');
        var $tweetBody = $('.tweetBody');
        var tweetsArr = streams.home; // initial lookup on the home array 
        var timer;

        var generateContent = function(){
         $tweetBody.html('');
          timer = setTimeout(generateContent, Math.random()* 1500);

          // while(index >= 0){ // iterate through array
          // for( var index = 0 ; index <= tweetsArr.length-1 ; index++){
          for( var index = tweetsArr.length-1 ; index >= 0 ; index--){
            var tweet = tweetsArr[index]; 
            var $tweet = $('<div class="tweet alert alert-light"> </div>'); 
            var $tweetUser = '<h5>@<span class="user">' + tweet.user + '</span></h5>';

            var tweetStructure = $tweetUser + `<p> ${tweet.message}</p> <span><img class="tweetImage" src=${tweet.image}> </span> <h6 class = "time">${jQuery.timeago(tweet.created_at)} </h6>`;
                                
            var createTweet = function(){return tweetStructure;}


            $tweet.html(createTweet()).appendTo($tweetBody);
          }    
          $('.tweet').click(function(){
            clearTimeout(timer);
            $tweetBody.html(''); 
          $('#currentFeed').html(event.target.innerText + " Tweets")
            tweetsArr = streams.users[event.target.innerText];
            generateContent();
           
            
          });

        };
    
        $('#title').click(function(){
          clearTimeout(timer);
            $tweetBody.html('');
            $('#currentFeed').html("Home Tweets")
              tweetsArr = streams.home;
              generateContent();
        })
        $('.twittleBtn').click(function(){
         generateContent(); 
        })
        $('.pauseBtn').click(function(){
         clearTimeout(timer); 
        })

        // twittleForm.addEventListener('submit', writeTweet());

      });
