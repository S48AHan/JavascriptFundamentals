const arr = [1, 2, 3, 4];

const doubledArr = arr.map((x) => x * 2);

console.log("Mapped Array:",doubledArr);

const filterArr = arr.filter((x) => x % 2 === 0);

console.log("Filtered Array:",filterArr);

const reducedArr = arr.reduce((acc,cur)=>{
    return acc+ cur;
},0);
console.log("Rediced Arrat:", reducedArr)