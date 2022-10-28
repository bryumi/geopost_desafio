function makeTeams(group, array) {
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 32);
        function found() {
            return sortedNumbers.find(element => element === random);
        }
        while (found() !== undefined) {
            random = Math.floor(Math.random() * 32);
            found()
        }
        sortedNumbers.push(random);
        group.push(array[random]);
    }
}

export default makeTeams;