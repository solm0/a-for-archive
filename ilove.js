var currentImage = 1;
    var totalImages = 3;

    function showImage() {
      var image = document.getElementById('image');
      image.src = '../img/iloveyou-' + currentImage + '.png';

      var prevButton = document.querySelector('.prev');
      var nextButton = document.querySelector('.next');

      // 현재 이미지가 첫 번째 이미지인 경우 'prev' 버튼 숨김
      if (currentImage === 1) {
        prevButton.style.display = 'none';
      } else {
        prevButton.style.display = 'inline';
      }

      // 현재 이미지가 마지막 이미지인 경우 'next' 버튼 숨김
      if (currentImage === totalImages) {
        nextButton.style.display = 'none';
      } else {
        nextButton.style.display = 'inline';
      }
    }

    function prevImage() {
      if (currentImage > 1) {
        currentImage--;
        showImage();
      }
    }

    function nextImage() {
      if (currentImage < totalImages) {
        currentImage++;
        showImage();
      }
    }

    showImage(); // 초기 이미지 표시