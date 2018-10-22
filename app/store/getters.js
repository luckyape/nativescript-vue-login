const getters = {
    prettyAppName: state => state.appName.split('-').join(' ').replace((/\b(\w)/g), c => c.toUpperCase()),
    sessionColor: ({ colors }) => {
        let colorNames = Object.keys(colors);
        return colors[colorNames[Math.floor((Math.random() * colorNames.length) + 1)]]
    }
}

export default getters
