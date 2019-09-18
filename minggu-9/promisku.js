const a = 'a';
const promiiseku = new Promise((resolve, reject) => {
    if (a === 'a') {
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

promiiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});