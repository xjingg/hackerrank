/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let arr = s.split('');
    let map={};
    let res = '';
    for(let i=0;i<arr.length;i++){
        map[arr[i]] = map[arr[i]]+1 || 1;
    }
    Object.keys(map).sort((a,b)=>map[b] - map[a]).forEach(function(v){
        for(let j=0;j<map[v];j++){
            res += v; 
        }
    })
    return res;
};