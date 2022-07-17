function curry(func) {

//   当前传入的参数args
  return function curried(...args) {
     // 如果当前获取参数已经大于等于原函数参数长度
    if (args.length >= func.length) {
      // 直接在原函数上应用参数，执行
      return func.apply(this, args);
    } else {
      // 否则继续返回函数，同时把当前参数传入，直到参数长度等于原函数，才会执行
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}
