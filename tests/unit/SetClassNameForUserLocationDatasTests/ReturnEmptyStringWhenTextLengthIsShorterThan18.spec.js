import SetClassNameForUserLocationDatas from '@/utils/SetClassNameForUserLocationDatas.js'

test('Get class name depending of text length. Text length is shorter that 18 so it should return empty string', () => {
    let UserDatas = {
        location: {
            city: "Warsaw",
            country: "Poland"
        }
    }

    expect(SetClassNameForUserLocationDatas(UserDatas)).toBe("")
});