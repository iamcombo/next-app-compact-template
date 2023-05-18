import { useState } from 'react';

const useToggle = (
  initialState = false
): Readonly<{
  isOn: boolean;
  toggle: () => void;
  toggleOn: () => void;
  toggleOff: () => void;
}> => {
  const [state, setState] = useState<boolean>(initialState);

  return {
    isOn: state,
    toggle: () => setState(!state),
    toggleOn: () => setState(true),
    toggleOff: () => setState(false),
  };
};

export default useToggle;
