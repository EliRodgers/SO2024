export const eventMap = new Map<number, string>([
    [101,"Changquan"],
    [102, "Nanquan"],
    [111, "Changquan (nandu)"],
    [112, "Nanquan (nandu)"],
    [121, "Straightsword"],
    [122, "Broadsword"],
    [123, "Nandao"],
    [141, "Spear"],
    [142, "Staff"],
    [143, "Southern Staff"],
    [161, "Open Barehand"],
    [181, "Other Weapon"],
    [201, "Traditional Open Barehand"],
    [221, "Traditional Short Weapon"],
    [241, "Traditional Long Weapon"],
    [281, "Traditional Soft Weapon"],
    [301, "42 Fist"],
    [302, "42 Sword"],
    [311, "Taiji Barehand (nandu)"],
    [321, "24 Taiji"],
    [322, "Open Yang"],
    [323, "Open Chen"],
    [341, "Taiji Weapon"],
    [361, "Internal Open Fist"],
    [381, "Internal Open Weapon"],
    [901, "Group Set"]
])

export const getEventName = (eventId : string) => {
    if (eventId === undefined || eventId.length != 6) {
        return ""
    }

    const levelCode = eventId[0]
    const genderCode = eventId[1]
    const eventCode = eventId.slice(3)
    
    let level = ""
    switch (levelCode) {
        case "A":
            level = "Advanced"
            break;
        case "I":
            level = "Intermediate"
            break;
        case "B":
            level = "Beginner"
            break;
        case "N":
        default:
    }

    let gender = ""
    switch (genderCode) {
        case "M":
            gender = "Male"
            break;
        case "F":
            gender = "Female"
            break;
        case "N":
        default:
    }

    let event = eventMap.get(+eventCode)

    return [level, gender, event].join(" ")
}