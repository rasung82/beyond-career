import type { User, UserWithoutPassword } from '~/types/user';

const users: User[] = [
  {
    id: '66fad0b6-06d0-4767-9ef3-fe9d0173add2',
    email: 'rasung.woo@sk.com',
    password: '663927',
    roles: ['ADMIN'],
  },
  {
    id: 'c7c00dae-8e59-4029-83e2-4b265eb54a22',
    email: 'rasung82@naver.com',
    password: '663927',
    roles: ['USER'],
  },
];

export const getUser = (
  email: string,
  password: string,
): Maybe<UserWithoutPassword> => {
  const foundUser = users.find(
    u => u.email === email && u.password === password,
  );
  if (foundUser) {
    return {
      id: foundUser.id,
      email: foundUser.email,
      roles: foundUser.roles,
    };
  }
};
