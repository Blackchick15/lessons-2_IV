// const targetElement = document.querySelector('.animated-text');

// const handleObserver = entries => {

//   console.log('entris', entries);

//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//         entry.target.classList.add('visible');
//     } else{
//         entry.target.classList.remove('visible');
//     };
//   })

// };



// const wotcher = new IntersectionObserver(handleObserver, { threshold: 1 });

// wotcher.observe(targetElement);


const videoPlayer = document.querySelector('video');

const hendelVideoObserve = () =>{
  if(!videoPlayer.paused){
    videoPlayer.pause();
  }else{
    videoPlayer.play();
  }
}

const watcher = new IntersectionObserver(hendelVideoObserve, {
  threshold: 0.5,
});

watcher.observe(videoPlayer);