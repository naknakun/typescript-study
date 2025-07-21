// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  bio: string;
}

let user1: User = {
  id: 1,
  name: 'asd',
  nickname: 'asd',
  bio: 'asd'
}

let user2: User = {
  id: 1,
  name: 'asd',
  nickname: 'asd',
  bio: 'asd'
}

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  Efsdf: ''
}

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 1,
  UnitedState: 2,
}