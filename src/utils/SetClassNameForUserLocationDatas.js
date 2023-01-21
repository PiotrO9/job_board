function SetClassNameForUserLocationDatas(UserDatas) {
    let CountryLength = UserDatas.location.country.length
    let CityLength = UserDatas.location.city.length
    let sum = CountryLength + CityLength + 2

    if(sum >= 24) {
        return "SmallestLocationFont"
    }
    else if(sum >= 18) {
        return "SmallerLocationFont"
    }
    else {
        return ""
    }
}

export default SetClassNameForUserLocationDatas;