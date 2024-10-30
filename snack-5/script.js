const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const evenNumbers = nums.filter((pari) => pari % 2 === 0)
console.log(evenNumbers)
// Risultato: [2, 8, 4, 12]