import {useCallback, useState} from "react";

export default function () {
  const [_value, setValue] = useState(undefined);

  return useCallback(() => setValue(Math.random()), []);
}