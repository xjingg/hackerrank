// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    // var arra = a.split('');
    // var arrb = b.split('');
    // var map1 = {};
    // var map2 = {};
    // var sum1 = 0, sum2 =0;
    // for(let i=0;i<arra.length;i++){
    //     map1[arra[i]] == map1[arra[i]]+1 || 1;
    // }
    //     console.log(map1);

    // for(let i=0;i<arrb.length;i++){
    //     map2[arrb[i]] == map2[arrb[i]]+1 || 1;
    // }
    // for(let i=0;i<arra.length;i++){
    //     if(map2.hasOwnProperty(arra[i])){
    //         map2[arra[i]]--;
    //     }
    //     if(map2[arra[i]] ===0){
    //         delete(map2[arr[a]]);
    //     }
    // }
    //  for(let i=0;i<arrb.length;i++){
    //     if(map1.hasOwnProperty(arrb[i])){
    //         map1[arrb[i]]--;
    //     }
    //     if(map1[arrb[i]] ===0){
    //         delete(map1[arr[i]]);
    //     }
    // }
    // for(key in map1){
    //     sum1 += map1[key];
    // }
    //  for(key in map2){
    //     sum2 += map2[key];
    // }

    // return sum1+sum2;
    var s1 = a.split('');
    var s2= b.split('');
    var dic = {};
    var i;
    for(i=0; i< s1.length; i++){
        dic[s1[i]] = (dic[s1[i]]||0) + 1;
    }
    for(i=0; i< s2.length; i++){
        dic[s2[i]] = (dic[s2[i]]||0) - 1;
    }
    var total = 0;
    for(var key in dic){
        if(dic.hasOwnProperty(key)){
            total += Math.abs(dic[key]);
        }
    }
    return total;
}