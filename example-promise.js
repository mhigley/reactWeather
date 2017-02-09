// function getTempCallback(location, callback){
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Fresno', function( err, temp ){
//     if(err){
//         console.log('error', err);
//     }else{
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City isn\'t found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Fresno').then(function(temp){
//     console.log('promise success', temp);
// }, function(err){
//     console.log('promise error', err);
// });

// Challenge area
// 2 & 6

function addPromise(a, b){
    // for(var i = 0; i < arguments.length; i++){
    //     if(typeof arguments[i] === 'number'){
    //         return new Promise(function(){
    //
    //         });
    //     }
    // }

    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }else{
            reject('A & B need to be numbers!');
        }
    });
}
addPromise(2, 6).then(function(sum){
    console.log('promise sum success:', sum);
}, function(err){
    console.log('promise sum error:', err);
});

addPromise(2, 'matt').then(function(sum){
    console.log('this should not show up');
}, function(err){
    console.log('this should appear', err);
});
