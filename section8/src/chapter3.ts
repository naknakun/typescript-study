// 맵드 타입
// 인터페이스에서 사용x

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key]
}

type BooleanUser = {
  [key in keyof User]: boolean
}

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
}

function fetchUser(): User {
  return {
    id: 1,
    name: 'asd',
    age: 123
  }
}

// 한명의 유저정보 수정

function updateUser(user: PartialUser) {

}

updateUser({
  id: 1,
  name: 'aasd',
  age: 12
})