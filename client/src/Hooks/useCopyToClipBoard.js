import { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";
const useCopyToClipBoard = (resetInterval = null) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = useCallback((text) => {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.log(
        `Could not copy text because ${typeof text} is not a string or a number`
      );
    }
  }, []);

  useEffect(() => {
    let timeOut;
    if (isCopied && resetInterval) {
      timeOut = setTimeout(() => setIsCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopyToClipboard];
};

export default useCopyToClipBoard;
