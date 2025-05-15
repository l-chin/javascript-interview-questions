function romanToInt(s: string): number {
  const baseMap = new Map<string, number>([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
  let result = 0
  let y = 0
  for(let i = s.length - 1; i >= 0; i--) {
     let x = baseMap.get(s[i])!
     if(y > x) {
         result -= x
     } else {
         result += x
     }
     y = x
  }
 return result
};