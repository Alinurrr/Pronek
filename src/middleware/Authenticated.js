import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

function Authenticated({ children }) {
  // for if the user must be login
  const redirect = useHistory()
  const auth = useRecoilValue(authenticated)

  useEffect(() => {
    if (!auth.check) {
      redirect.push('/login-dulu-yuk')
    }
  }, [auth.check, redirect])

  return children;
}

export default Authenticated;