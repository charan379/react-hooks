import { MutableRefObject, RefObject, useEffect } from "react";

type OnOutsideClickCallback = () => void;

function useOnOutsideClick(
  ref: RefObject<HTMLElement | null> | MutableRefObject<HTMLElement | null>,
  callbackFunc: OnOutsideClickCallback,
  executeOnlyOnTouchDevices: boolean = false
): void {

  useEffect(() => {
    const listener = (event: Event) => {

      // do nothing if event type is not 'touchstart' and executeOnlyOnTouchDevices is true
      if (event.type !== 'touchstart' && executeOnlyOnTouchDevices) {
        return;
      }

      // Do nothing if clicking ref's element or descendent elements
      if (!ref?.current || ref?.current?.contains(event.target as HTMLElement)) {
        return;
      }
      callbackFunc();
    };
    // listen to mousedown, touchstart events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // stop listening when component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callbackFunc]);
}

export { useOnOutsideClick };
