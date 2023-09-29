# react-hooks

This is a custom react hooks library for react based applications.

## Installation

This project is currenlty published at NPM with package name `@charan379/react-hooks`, so you can install it from NPM repository.

```bash
npm install @charan379/react-hooks
```

## Usage

To import all hooks.

```bash
import * from "@charan379/react-hooks"
```

To import specific hook.

```bash
import { <hook_name> } from "@charan379/react-hooks"
```

### Example

```bash
import { useOnOutsideClick } from "@charan379/react-hooks";
```

### Use it in your component like

```bash
  useOnOutsideClick(
    # // [ ref : RefObject ] of element to be watched
    ref,
    # //[callBackFun; () => {} ] to be execute on outside click
    () => {
      console.log("Clicked out side this component");
    },
    # // [executeOnlyOnTouchDevices : boolean ] whether only watch on touchscreen devices only of all other devices.
    # // by default false
    false
  );
```

### Example React Code

```bash
import { useOnOutsideClick } from "@charan379/react-hooks";
import React, { useCallback, useRef, useState } from "react";

const RevealOnClick = (props) =>  {
  const thisComponentRef = useRef(null);
  const [reveal, setReveal] = useState(false);

  useOnOutsideClick(
    thisComponentRef,
    useCallback(() => {
      setReveal(false);
    }, [thisComponentRef.current]),
    false
  );

  return (
    # if user clicks outside this div <p> tag will not be rendered
    <div ref={thisComponentRef}>
    .
    .
    # if user click on `Reveal Element` button <p> tag will be rendered
    <button onClick={() => setReveal(true)}>Reveal Element</button>
    .
    .
    {
      reveal ? <p> This will render only if reveal true </p> : ""
    }
    .
    .
    </div>
  )
}

export default RevealOnClick;
```

## Authors

- [@charan379](https://www.github.com/charan379)

## License

[![AGPL License](https://img.shields.io/badge/LICENSE-GNU%20AGPLv3-brightgreen)](https://www.gnu.org/licenses/agpl-3.0.en.html)
