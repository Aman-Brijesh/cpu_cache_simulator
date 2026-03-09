let cache = [null, null, null, null];

function accessMemory(){
    let input = document.getElementById("addressInput").value;
    let inputValue = parseInt(input);
    console.log(inputValue);

    if(inputValue<0||inputValue>255){
        console.log("Invalid");
        return;
    }else{
        let binary = inputValue.toString(2).padStart(8,"0");
        console.log(binary);
        let tag = binary.slice(0,3);
        let index = binary.slice(3,5);
        let offset = binary.slice(5,8);
        console.log(tag,index,offset);

        let blockNumber = parseInt(index, 2);
        console.log(blockNumber);


        if(cache[blockNumber] == tag){
            console.log("Hit");
        }else{
            console.log("Miss");
            cache[blockNumber] = tag;
        }
    }
}