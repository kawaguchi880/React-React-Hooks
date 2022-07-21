
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
const sampleNumberArray = [2, 4, 6, 8,];

//Foreachについて 
// 第一引数はfor文のように配列の中身を一つずつ吐き出す．
// 第二引数はindex
// 第三引数は配列全てを文字列として出力する．
sampleNumberArray.forEach((value, index, array) => {
  console.log(`value:${value},index:${index},array:${array}`)
})

// map()について
// 使い方の一つとして，配列をもとに別の配列を作成する．
// 非破壊的メソッドなので使いやすい．
const sample1NumberArray = sampleNumberArray.map((value) => {
  return value * value;
})
// .filter()について
// これも既存の配列をもとに新しい配列を作る際に便利．
console.log("\nfilter関数")
const sample2NumberArray = sampleNumberArray.filter((value) => {
  return value > 5;
})
console.log(sample2NumberArray);
// .find()は条件に合うものだけを出力．
// 組み合わせ
// 組み合わせた順に実行される．
// 条件に当てはまらない場合-1を返す．
const sample3NumberArray = sampleNumberArray.map(value => value + 10).filter(value => value < 15)
const sample4NumberArray = sampleNumberArray.filter(value => value < 15).map(value => value + 10)
console.log(sample3NumberArray);
console.log(sample4NumberArray);

const sampleObject1 = {
  name: "js",
  age: 7,
};
// ドット記法
console.log("\nドット記法");
console.log(sampleObject1.name);
console.log("ブラケット記法");
console.log(sampleObject1['name']);

//よくわからないところ
const birthplace = "japan";
console.log(sampleObject1[birthplace]);

const obj1 = {
  a: 10,
  b: 20
}

const obj2 = {
  c: 30,
  d: 40,
  a: 400
}

const obj3 = {
  ...obj1, ...obj2
}
console.log("\nスプレッド構文でオブジェクトを合わせて表示");
console.log(obj3);
// オブジェクトのkey要素のみを取り出す．
console.log("keyのみを表示");
const keys = Object.keys(obj3);
console.log(keys);

// オブジェクトを配列に！
console.log("配列にして表示");
const arr = Object.entries(obj3);
console.log(arr);

// 複数のオブジェクトを要素に持つ配列
const posts = [
  {
    id: 1,
    content: 'js1',
    likes: 2
  },
  {
    id: 2,
    content: 'js2',
    likes: 3,
  },
  {
    id: 3,
    content: 'js3',
    likes: 500,
  }
]

// forでの要素取り出し
console.log("\nforでの要素取り出し");
for (let i = 0; i < posts.length; i++) {
  console.log(`タイトル:${posts[i].content}  ${posts[i].likes}`)
}

// foreachでの取り出し
console.log("\nforeachでの取り出し");
posts.forEach((post) => {
  return console.log(`タイトル${post.content} ${post.likes}いいね！`)
})

// mapで新しい配列を作成してからそれを表示
console.log("\nmapで新配列を表示")
const objMap = posts.map((post) => {
  return `タイトル：${post.content} ${post.likes}いいね！`
})
console.log(objMap);

// 非同期処理
// setTimeout(何かしらの関数,時間(ms));
// ここで何かしらの関数はコールバック関数という。s
const callbackFunc = () => {
  console.log(`処理が実行されました！`)
}

setTimeout(callbackFunc, 500)

// promiseオブジェクトについて
// const statements = (resolve, reject) => {
//   // resolve() 成功を通知する関数
//   // reject()  失敗を通知する関数 
// }
// // promiseのインスタンスを作成
// const promise = new Promise(statements)

const promise = new Promise((resolve, reject) => {
  resolve()
})

const incaseOfSuccess = () => {
  console.log("非同期処理成功&resolveの通知!!")
}
const incaseOfFailure = () => {
  console.log("非同期処理失敗&rejectの通知...")
}
// resolve()で成功したかどうかを受け取る。
promise.then(incaseOfSuccess, incaseOfFailure);

const asyncsampleFunc = async () => {
  let x, y;
  x = await new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000)
  })

  y = await new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000)
  })
  console.log(x + y)
}
asyncsampleFunc();
const sampleFunc1 = async () => {
  return "非同期関数です"
}
