import * as Functions from '../src/assets/utils/utils'


// Tests for formatFirstCharacterUpperCase()
describe("'formatFirstCharacterUpperCase' utility", () => {
    it('Formats first letter correctly from one lowercase string', () => {
        expect(Functions.formatFirstCharacterUpperCase('barcelona')).toBe('Barcelona')
    })

    it('Formats first letter correctly from one uppercase string', () => {
        expect(Functions.formatFirstCharacterUpperCase('BARCELONA')).toBe('Barcelona')
    })

    it('Formats only first word if there is a second one', () => {
        expect(Functions.formatFirstCharacterUpperCase('barcelona test')).toBe('Barcelona test')
    })

    it('Formats only first word if there is a second one', () => {
        expect(Functions.formatFirstCharacterUpperCase('barcelona TEST')).toBe('Barcelona TEST')
    })
})

// Tests for formatedDayTime()
describe("'formatedDayTime' utility", () => {
    it('Return string as it is if does not include word "midnight"', () => {
        expect(Functions.formatedDayTime('2023-06-29 09:00:00')).toBe('2023-06-29 09:00:00')
    })

    it('Formats first letter correctly from one uppercase string', () => {
        expect(Functions.formatedDayTime('2023-06-29 midnight')).toBe('2023-06-29 00:00:00')
    })
})

// Tests for formatedDayTime()
describe("'getHighestCountPosition' utility", () => {
    it('Return correct most common object in array position', () => {
        const arrayUniqueKeys: string[] = ['test1', 'test2', 'test3']
        const arrayKeys: string[] = ['test1', 'test2', 'test2', 'test2', 'testß3']

        expect(Functions.getHighestCountPosition(arrayUniqueKeys, arrayKeys)).toBe(1)
    })

    it('Return first most common object in array position if there are multiple with same count', () => {
        const arrayUniqueKeys: string[] = ['test1', 'test2', 'test3']
        const arrayKeys: string[] = ['test1', 'test2', 'test2', 'test2', 'test3', 'test3', 'test3']

        expect(Functions.getHighestCountPosition(arrayUniqueKeys, arrayKeys)).toBe(1)
    })
})