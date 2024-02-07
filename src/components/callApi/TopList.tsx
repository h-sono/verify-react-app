import { Post } from './post';

export interface viewTestReq {
  code: string;
}

export const viewTestPost = (req: viewTestReq) => {
  return Post('http://127.0.0.1:8000/api/v1/cannaapp/views_test/', req);
};
