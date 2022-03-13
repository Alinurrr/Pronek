import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

function Guest({ children }) {
  // if the user already logged in user cannot access the page
  const redirect = useHistory()
  const auth = useRecoilValue(authenticated)

  useEffect(() => {
    if (auth.check) {
      redirect.push('/')
    }
  }, [auth.check, redirect])

  return children;
}

export default Guest;