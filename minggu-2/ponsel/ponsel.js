const ponsel = [
        {
        "nama":"oppo a71",
        "harga":"Rp.1.999.000",
        "ram":"3GB",
        "storage":"16GB/32GB (microSD,up to 256GB)",
    },
        {
        "nama":"vivo s1",
        "harga":"Rp. 3.599.00",
        "ram":"4GB",
        "storage":"128GB(microSD,up to 256GB)",
    },
        {
        "nama":"samsung A80",
        "harga":"Rp.9.499.000",
        "ram":"8GB",
        "storage":"128GBGB",
    },
        {
        "nama":"Iphone X",
        "harga":"Rp.17.399.00",
        "ram":"3GB",
        "storage":"64GB/256GB",
    },
        {
        "nama":"xiomi 6Pro",
        "harga":"Rp.2.200.000",
        "ram":"3GB/4GB",
        "storage":"32GB/64GB (microSD,up to 256GB)",
    },
        {
        "nama":"vivo S1",
        "harga":"Rp.3.599.000",
        "ram":"4GB",
        "storange":"128GB (microSD,up to 256GB)",
    },
        {
        "nama":"oppo a5S",
        "harga":"Rp.1.999.000",
        "ram":"2GB/3GB",
        "storage":"32GB (microSD,up to 256GB)",
    },
        {
        "nama":"oppo 1k",
        "harga":"Rp.1.800.000",
        "ram":"2GB/3GB",
        "storage":"16GB/32GB (microSD,up to 256GB)",
    },
        {
        "nama":"Realme 3i",
        "harga":"Rp.1.600.000",
        "ram":"23GB",
        "storage":"16GB (microSD,up to 256GB)",
    },
        {
        "nama":"oppo a39",
        "harga":"Rp.1.300.000",
        "ram":"2GB/3GB",
        "storage":"16GB/32GB (microSD,up to 256GB)",
    },
]

let x;

for(x in ponsel){
    let namaponsel = ponsel[x].nama
    let hargaponsel = ponsel[x].harga
    let ramponsel = ponsel[x].ram
    let storageponsel = ponsel[x].storage
    let divider = "<div><span class='nama-ponsel'>"+namaponsel+"</span><span class='harga-ponsel'>"+hargaponsel+"</span><span class='ram-ponsel'>"+ramponsel+"</span><span class='storage-ponsel'>"+storageponsel+"</span></div>";
document.getElementById('ponsel').innerHTML += divider
}