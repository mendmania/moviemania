export function mDebounce(func, timeout = 300){
    let timer;
    
    return (...args) => {

      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };

}