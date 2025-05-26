window.onload = function iniciarEfectoMatrix() {
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  const container = document.getElementById("matrix-container");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;

  const letters = "アァイィウエカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: columns }).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 33);
};