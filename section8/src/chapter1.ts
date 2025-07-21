// 인텍스드 액세스 타입

// 객체
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}[];


function printauthorinfo(author: PostList[0]['author']) {
  console.log(author.name)
}

const post: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: 'ㅁㄴㅇ'
  }
}

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type Tup3Num = Tup[number];