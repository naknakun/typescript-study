// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};
type Member = {
  tag: 'MEMBER';
  name: string;
  point: number
};
type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number
};

type User = Admin | Member | Guest;


function login(user: User) {
  if (user.tag === 'ADMIN') {
    console.log(user.kickCount);
  } else if (user.tag === 'MEMBER') {
    console.log(user.point);
  } else {
    console.log(user.visitCount);
  }
}

// example
type LoadingTask = {
  state: 'loading'
}

type FailedTask = {
  state: 'failed',
  error: {
    message: 'asdasd'
  }
}

type SuccessTask = {
  state: 'success',
  response: {
    data: 'asdasfasf'
  }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch(task.state){
    case 'loading': {
      break;
    }
    case 'failed': {
      console.log(task.error.message);
      break;
    }
    case 'success': {
      console.log(task.response.data);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: 'loading'
}

const filed: AsyncTask = {
  state: 'failed',
  error: {
    message: 'asdasd'
  }
}

const success: AsyncTask = {
  state: 'success',
  response: {
    data: 'asdasfasf'
  }
}