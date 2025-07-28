


export default function debounce(func: Function, wait: number): Function {

  let timer: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: any[]) {
    // clearTimeout: so we keep delaying, thus if they dont type anything for 300ms it will execute
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
