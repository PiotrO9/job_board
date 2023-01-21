import SetClassNameForUserLocationDatas from '@/utils/SetClassNameForUserLocationDatas.js'

test('Get class name depending of text length. Text length is longer that 18 so it should return SmallerLocationFont', () => {
    let UserDatas = {
        location: {
            city: "Zielona Góra",
            country: "Poland"
        }
    }

    expect(SetClassNameForUserLocationDatas(UserDatas)).toBe("SmallerLocationFont")
});