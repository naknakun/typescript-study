// enum 타입
enum Role {
  ADMIN,
  USER,
  GUREST
}

enum language {
  korean = 'ko',
  english = 'en'
}

const user1 = {
  name: 'asd',
  role: Role.ADMIN,
  language: language.korean
}


const user2 = {
  name: 'wef',
  role: Role.USER
}

const user3 = {
  name: 'asd',
  role: Role.GUREST
}

console.log(user1, user2, user3)