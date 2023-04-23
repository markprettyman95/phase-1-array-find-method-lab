function superbowlWin(record) {
    const winningRecord = record.find((entry) => entry.result === "W");
    if (winningRecord) {
        return winningRecord.year;
    }   else {
        return undefined;
    }
    }