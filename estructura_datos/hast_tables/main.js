const table = []

const _hash = (value) => {
  if (value === null) {
    return 0;
  }
  
  // const hash = Math.abs(value.toString().hashCode());

  const key = value.toString();

  let hash = 0;
  
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  
  }
  return hash;
}

const setTable = (value) => {
  const hash = _hash(value);
  table[hash] = value;

  return table;
}

setTable('python');
setTable('java');
setTable('javascript');
setTable('Java')
setTable('avaj');
setTable('jvaa')
setTable('c++');

const getValue = (value) => {
  const hash = _hash(value);
  
  if (!table[hash]) {
    return null;
  }

  return table[hash];
}

console.log(getValue('avaja'))