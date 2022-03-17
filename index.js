function superbowlWin(record) {
    const result = record.find(year => year.result === "W")
    if (result === undefined) {
        return undefined
    }
    return result.year
}
//     if (superbowlWin === true) {
        
//     }
// }



// function superbowlWin(record) {
//     const result = record.find(year => year.result === "W") 
//     return (result.year) 
// }

// function superbowlWin(record) {
//     return record.result === "W";
// }

// return (record.find(superbowlWin).year);