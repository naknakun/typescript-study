// 프로미스 

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
      resolve(20);
      reject('asd')
  }, 3000);
})

promise.then((response) => {
  console.log(response * 20);
})

promise.catch((err) => {
  if (typeof err === 'string') {
    console.log(err)
  }
})


// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '123',
        content: '124'
      })
    }, 3000);
  })
}

const postRequest = fetchPost().then((post) => {
  post.id;
})