module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map(it => it.join(""));
  const arr = [...str];

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < config.length; k++) {
      if (`${arr[i]}${arr[i + 1]}` === config[k]) {
         arr.splice(i, 2);
        i = -1;
      }
    }
  }
  
  return arr.length === 0;
}