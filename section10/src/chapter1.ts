// partial<T>

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [Key in keyof T]?: T[Key];
};

const draft: Partial<Post> = {
  title: 'asd',
  content: 'asd'
}

// Required<T>
type Required<T> = {
  [Key in keyof T]-?: T[Key];
};

const withThumbnailPost: Required<Post> = {
  title: 'asd',
  content: 'asd',
  tags: [''],
  thumbnailURL: ''
}

// Readonly<T>
type Readonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const readonlyPost: Readonly<Post> = {
  title: 'asd',
  content: 'asd',
  tags: [''],
}

// readonlyPost.title = 'asd';