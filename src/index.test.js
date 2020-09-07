import { getMonth } from "./index.js";

describe('test for getMonth', ()=> {
    it('', ()=> {
        expect(getMonth(12)).toBe('декабрь')
    })
    it('', ()=> {
        expect(getMonth(17)).toBe('неизвестно')
    })
    it('', ()=> {
        expect(getMonth(0)).toBe('неизвестно')
    })
    it('', ()=> {
        expect(getMonth('декабрь')).toBe('неизвестно')
    })
})


