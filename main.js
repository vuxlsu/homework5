for(let i=0; i <=10; i++){
    console.log(i);
}

let i = 10;
while(i >=0){
    console.log(i);
    i--;
}

let a = 20;
do{
    console.log(a);
    a++;
}while(a <= 50);

for(let b = 0; b <= 100; b++){
    if(b% 2 === 0){
        console.log(b);
    }
}

let arr = [];
for(let m = 0; m < 10; m++) {
    arr.push(Math.floor(Math.random() * 101));
}

let sum = 0;
for(let n = 0; n < arr.length; n++) {
    sum += arr[n];
}

console.log(sum);
for(let o = 0; o < arr.length; o++) {
    console.log("$" + arr[o]);
}

let evenSum = 0;
for(let d=0; d<arr.length; d++){
    if(arr[d]% 2 === 0){
        evenSum += arr[d];
    }
}console.log(evenSum);

console.log(arr);
console.log(arr.reverse());

for(let f = 0; f<arr.length; f++){
    arr[f] *=2;
}
console.log(arr);

