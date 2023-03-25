function superbowlWin(year, result){
    for (const record of year) {
        if (record.result === "W"){
            return record.year
        }
    }
}