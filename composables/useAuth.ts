export const useAuth = () => {
  const { authUser } = useAuthUser();

  const signIn = (email: string, password: string) => {
    console.log('signIn..', email, password);
    const user = getUser(email, password);

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password',
      });
    }
    authUser.value = user;
  };

  const signOut = () => {
    console.log('signOut..');
    authUser.value = null;
  };

  return {
    signIn,
    signOut,
  };
};
