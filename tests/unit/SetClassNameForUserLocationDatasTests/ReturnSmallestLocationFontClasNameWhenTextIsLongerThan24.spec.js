import SetClassNameForUserLocationDatas from '@/utils/SetClassNameForUserLocationDatas.js'

test('Get class name depending of text length. Text length is longer that 24 so it should return SmallestLocationFont', () => {
    let UserDatas = {
        location: {
            city: "Ostrowiec Mazowiecki Północny",
            country: "Poland"
        }
    }

    expect(SetClassNameForUserLocationDatas(UserDatas)).toBe("SmallestLocationFont")
});