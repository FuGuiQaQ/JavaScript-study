function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 使用这个函数来生成 1 到 10 之间的随机整数
  let randomNumber = getRandomInt(1, 10);