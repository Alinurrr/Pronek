import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

function AuthMitra({ children }) {
  // for if the user must be login
  const redirect = useHistory()
  const auth = useRecoilValue(authenticated)

  useEffect(() => {
    if (auth.user.email !== 'mitra@pronek.id') {
      redirect.push('/dashboard/cust')
    }
  }, [auth.user.email, redirect])

  return children;
}

export default AuthMitra;