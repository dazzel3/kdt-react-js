import { useCallback, useState } from 'react';

const useToggle = (initialstate = false) => {
  const [state, setState] = useState(initialstate);
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
