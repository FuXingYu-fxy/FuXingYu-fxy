const p = document.createElement("p");
p.textContent = `您现在位于 ${process.env.NODE_ENV} 环境中, 欢迎您: ${process.env.ROMAN_APP_NAME}, API ${process.env.ROMAN_APP_BASE_API}`;
p.style.cssText = `
  text-align: center;
  color: teal;
  font-size: 2em;`;
document.body.appendChild(p);
console.log(process.env);
