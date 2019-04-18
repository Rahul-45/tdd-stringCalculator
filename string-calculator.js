function Add(str){
    //total will store sum of each number
    let total = 0         
    //will keep all numbers 
    let num = []
    //temp index for extracting substrings separated by delimiter
    let temp_index = 2
    //this list keep track of all negative number
    let err_arr = []
    //will keep track str contains negative or not
    let flag = false
    //to change delimiter by '<delimiter>\n' followed by number eg: ':\n4:5:6'
    let delimiter = ','
    if(str[1]==='\n')
    {
        delimiter = str[0];
    }
    for(let i=2;i<str.length;i++){
        if(str[i]===delimiter )
        {
            num.push(str.substring(temp_index,i))
            temp_index = i+1
        }
        if(i===str.length-1)
        {
            num.push(str.substring(temp_index,str.length))
        }
    }
    
    for(let i=0;i<num.length;i++)
    {
        temp = parseInt(num[i])
        
        
        if(temp<0)
        {
            err_arr.push(temp)
            flag = true
        }
        else{
            total += temp
        }
    }
    if(flag)
    {
        throw `Negative numbers are ${err_arr}`
    }

    return total
}
module.exports = Add