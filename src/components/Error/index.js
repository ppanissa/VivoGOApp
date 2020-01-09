import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { authLogout } from '~/store/modules/auth/actions';

export default function Error({ noAuth }) {
  const dispatch = useDispatch();

  useEffect(() => {
    function initError() {
      if (noAuth) {
        dispatch(authLogout());
      }
    }
    initError();
    // Cleanup
    return () => {};
  }, [dispatch, noAuth]);
}
Error.propTypes = {
  noAuth: PropTypes.bool,
};

Error.defaultProps = {
  noAuth: false,
};
