function showFullImg(id)
        {
            
            
            document.getElementById('video_play').style.display='none';
            document.getElementById('MainImg').style.display='block';
            document.getElementById("MainImg").setAttribute('src',document.getElementById(id).getAttribute('src'));
            var video = document.getElementById('video_play');
            video.currentTime = 0;
            video.load()
        }
        function playVideo()
        {
            // alert("click for play video");
           
            document.getElementById('video_play').style.display='block';
            document.getElementById('MainImg').style.display='none';
        }