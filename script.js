document.addEventListener('DOMContentLoaded', () => {
    const sounds = {
      sound1: new Audio('sound1.mp3'),
      sound2: new Audio('sound2.mp3'),
      sound3: new Audio('sound3.mp3'),
      sound4: new Audio('sound4.mp3'),
      sound5: new Audio('sound5.mp3'),
      sound6: new Audio('sound6.mp3'),
      sound7: new Audio('sound7.mp3'),
      sound8: new Audio('sound8.mp3'),
      sound9: new Audio('sound9.mp3')
    };
  
    document.getElementById('sound1').addEventListener('click', () => sounds.sound1.play());
    document.getElementById('sound2').addEventListener('click', () => sounds.sound2.play());
    document.getElementById('sound3').addEventListener('click', () => sounds.sound3.play());
    document.getElementById('sound4').addEventListener('click', () => sounds.sound4.play());
    document.getElementById('sound5').addEventListener('click', () => sounds.sound5.play());
    document.getElementById('sound6').addEventListener('click', () => sounds.sound6.play());
    document.getElementById('sound7').addEventListener('click', () => sounds.sound7.play());
    document.getElementById('sound8').addEventListener('click', () => sounds.sound8.play());
    document.getElementById('sound9').addEventListener('click', () => sounds.sound9.play());
  });
  