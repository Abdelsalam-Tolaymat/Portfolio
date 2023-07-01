
function setColors(theme:string):void {
    for(let [key,value] of Object.entries<string>(customColors[theme])){
        document.documentElement.style.setProperty(key,value)
    }
}

interface Theme{
    [key:string]:string
}
interface CustomColors{
    [key:string]:Theme
}


const customColors:CustomColors = {
    PatchMeDark : {
        '--main-website-color': '#00c6bd',
        '--main-website-hover-color': '#25f3e9',
        '--main-background-color': '#2e313a',
        '--main-text-color': 'white'
    },

    PatchMePurple : {
        '--main-website-color': 'rgb(168, 87, 243)',
        '--main-website-hover-color': 'rgb(155 109 245)',
        '--main-background-color': 'rgb(43, 8, 69)',
        '--main-text-color': 'white',
    },

    AnimeGetter : {
        '--main-website-color': 'blueviolet',
        '--main-website-hover-color': '#a749ff',
        '--main-background-color': '#1F1E1F',
        '--main-text-color': 'white',
    },

    CheckMyWeather : {
        '--main-website-color': 'rgb(219, 94, 94)',
        '--main-website-hover-color': '#fd3737',
        '--main-background-color': 'rgb(235, 234, 232)',
        '--main-text-color': '#2c3e50',
    },

}

export default setColors