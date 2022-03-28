(function(){
    let GetUserNumeral = RomanInputs()
    let input = GetUserNumeral.next().value
    while(true){
        if(input == '') break
        let result = RomanToNumber(input)
        console.log(input + ' = ' + result)
        input = GetUserNumeral.next().value
    }
})();


function* RomanInputs(){
    yield I
    yield II
    yield III
    yield IV
    yield V
    yield VI
    yield VII
    yield VIII
    yield IX
    yield X
    yield XI
    yield XII
    yield XIII
    yield XIV
    yield XV
    yield XVI
    yield XVII
    yield XVIII
    yield XIX
    yield XX
    yield XXI
    yield XXII
    yield XXIII
    yield XXIV
    yield XXX
    yield XL
    yield L
    yield LX
    yield LXX
    yield LXXX
    yield XC
    yield C
    yield CI
    yield CII
    yield CC
    yield CCC
    yield CD
    yield D
    yield DC
    yield DCC
    yield DCCC
    yield CM
    yield M
    yield MI
    yield MII
    yield MIII
    yield MCM
    yield MM
    yield MMI
    yield MMII
    yield MMC
    yield MMM
    yield MV
    yield V
    return ''
}

function GetNumeralValue(numeral){
    numeral.toUpper
    
    switch(numeral){
        case 'I': return 1
        case 'V': return 5
        case 'X': return 10
        case 'L': return 50
        case 'C': return 100
        case 'D': return 500
        case 'M': return 1000
        default: return -1
    }
}
function RomanToNumber(romanNumeral){
    let numResult = 0
    let stack = new Array()

    for(let index = 0; index < romanNumeral.length; index++){        
        // if invalid roman numeral, return -1
        let romanValue = GetNumeralValue(romanNumeral[index])
        if(romanValue == -1){
            return -1
        }

        // first item always push
        if(stack.length == 0){
            stack.push(romanValue)
            continue
        }

        // current numeral is less than the one ontop of the stack
        let topOfStackValue = stack[stack.length - 1]
        if(romanValue < topOfStackValue){
            stack.push(romanValue)
        } else if(romanValue == topOfStackValue){
            stack[stack.length - 1] += romanValue
        } else{
            numResult += (romanValue - stack.pop())
        }
    }

    while(stack.length > 0){
        numResult += stack.pop()
    }
    return numResult
}