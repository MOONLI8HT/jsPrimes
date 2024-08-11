let primes = [1, 2, 3], lastNum = 4
function createTable(matrix) {
  document.getElementById('PrimeTable').innerHTML += createRow(matrix);
}

function createMatrixN2(n) {
  let M = [], curr = 1;
  for (let i=0; i<n; i++){
  	M[i] = []
    for (let j=0; j<n; j++){
    	M[i].push(curr);
      curr++;
    }
  }
  return M;
}

function createColumn(arr) {
	arr.forEach((el, i, a) => {a[i] = '<th>' + checkPrime(el) + '</th>' })
	return arr.join('')
}

function createRow(matrix) {
	matrix.forEach((row, i, m) => {m[i] = "<thead><tr>" + createColumn(row) + "</tr></thead>"})
	return matrix.join('')
}

function checkPrime(n) {
	if (n > lastNum) { addPrimes(n) }
	if (n in primes) {
  return '<a style="color:green">' + n + '</a>';
  }
  return '<a style="color:red">' + n + '</a>';
}

function addPrimes(n) {
  for (; lastNum <= n; lastNum++){
  	let i = 1
		for (; i < primes.length; i++){
    	if (lastNum % primes[i] == 0) { break; } 
    } 
    if (i+1 == primes.length){
    	primes.push(lastNum);
    }
    
  }
}

createTable(createMatrixN2(5));
