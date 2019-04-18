
const Add = require('./string-calculator')
test('#####',()=>{
        expect(Add(':\n')).toBe(0)
        expect(Add(';\n4')).toBe(4)
        expect(Add('\n\n1\n2\n3')).toBe(6)
        expect(Add(',\n4,5,6')).toBe(15)
        expect(Add('^\n4^6^3^5')).toBe(18)
        expect(Add('?\n1?10?20')).toBe(31)
        expect(Add(' \n9 10 11')).toBe(30)
        try{
                expect(Add(',\n4,-9,-8'))
        }
        catch(e){
                expect(e).toBe('Negative numbers are -9,-8')
        }
})