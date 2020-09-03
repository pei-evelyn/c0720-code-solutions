/* eslint-disable no-unused-vars */

const defaults = (target, source) => {
  const targetKeys = Object.keys;
  const sourceKeys = Object.keys;
  for (let targetKeysIndex = 0; targetKeysIndex < targetKeys.length; targetKeysIndex++) {
    for (let sourceKeysIndex = 0; sourceKeysIndex < sourceKeys.length; sourceKeysIndex++) {
      if (targetKeys[targetKeysIndex] === sourceKeys[sourceKeysIndex]) {
        return 'hello';
      }
    }
  }
  Object.assign(target, source);
};
