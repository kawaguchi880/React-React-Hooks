// 値(a)がnull or undifinedを判別
const a = 0;
if (a == undefined) {
  // trueの時，nullまたはundifinedの処理をここに書く.

}
const ex1 = 0;
const ex2 = 0;
// nullかundifineの時のみだけ値を返す．
ex1 ?? ex2
//ex1がnullかundifine

const sampleFunc = (a, b, ...rest) => {
  console.log(rest);
}

sampleFunc(1, 2, 3, 4, 5, 6, 7);

const sampleObject = {
  a: 'aiueo',
  b: 'asd'
}

// 
for (let key in sampleObject) {
  console.log(sampleObject[key]);
}

let items = ["a", 'b', 'c'];

for (let item of items) {
  console.log(item);
}

// 変数itemsがオブジェクトかどうか？true;
console.log(Array.isArray(items));

// 最初にマッチするもののindex値，ないなら-1
console.log(items.indexOf('b'));

// 含まれているか？？
console.log(items.includes('b'));

console.log(items.length);

console.log(items.toString());
const items2 = ['d', 'e', 'f'];
// concatはコピーしてから引数を文字列として足す．
console.log(items.concat(items2));

const newArray = [...items, ...items2];

console.log(newArray);

const array1 = newArray.join('/');

console.log(array1);

