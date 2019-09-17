const hewan = ['singa', 'ular', 'harimau'],tambahan = 
['buaya', 'beruang', { obj: 'rusa' }]
const arrayPushHewan = async() =>{
	await tambahan.pop();
    await tambahan.map(res => hewan.arrayPush(res))
    console.log(hewan);
}

arrayPushHewan();
//*NOTE:Array map adalah fungsi perulangan array seperti for in dan foreach*/