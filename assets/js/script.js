    var caixaAberta = false;

    function toggleCaixaTexto() {
        var caixaTexto = document.getElementById('caixaTexto');

        if (caixaAberta) {
            caixaTexto.style.display = 'none';
            caixaAberta = false;
        } else {
            caixaTexto.style.display = 'block';
            caixaAberta = true;
        }
    }



        var caixaAberta = false;

        function toggleCaixaTexto() {
            var caixaTexto = document.getElementById('caixaTexto');

            if (caixaAberta) {
                caixaTexto.style.display = 'none';
                caixaAberta = false;
            } else {
                caixaTexto.style.display = 'block';
                caixaAberta = true;
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            var video = document.getElementById('myVideo');
            var playPauseBtn = document.getElementById('playPauseBtn');
    
            function togglePlayPause() {
                if (video.paused || video.ended) {
                    video.play();
                    playPauseBtn.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
                    playPauseBtn.classList.add('hidden');
                } else {
                    video.pause();
                    playPauseBtn.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
                    playPauseBtn.classList.remove('hidden');
                }
            }
    
            playPauseBtn.addEventListener('click', togglePlayPause);
    
            video.addEventListener('click', function () {
                togglePlayPause();
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            var video = document.getElementById('myVideo');
            var playPauseBtn = document.getElementById('playPauseBtn');
            var videoContainer = document.getElementById('videoContainer');
    
            function togglePlayPause() {
                if (video.paused || video.ended) {
                    video.play();
                    playPauseBtn.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
                    playPauseBtn.classList.add('hidden');
                } else {
                    video.pause();
                    playPauseBtn.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
                    playPauseBtn.classList.remove('hidden');
                }
            }
    
            playPauseBtn.addEventListener('click', togglePlayPause);
            videoContainer.addEventListener('click', function () {
                togglePlayPause();
            });
        });

     