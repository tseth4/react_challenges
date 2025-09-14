import React, { useState, useCallback, useEffect } from 'react'
import debounce from '../../lib/debounce'

interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {

  const log = debounce((msg: string) => {
    console.log(msg);
  }, 300);
  const log2 = debounce((msg: string) => {
    console.log(msg);
  }, 10000);
  useEffect(() => {
    log("hello"); // logs after 300ms
    log2("world"); // logs after 300ms
  }, [])

  return (
    <div>
    </div>
  );
}
export default Index;