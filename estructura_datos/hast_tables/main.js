
const hash = (value) => {
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

}
