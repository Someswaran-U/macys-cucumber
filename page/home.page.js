import input from '../TestData/input.json' with { type: "json" }
export class home{
    constructor(page){
        this.page = page
        this.url = input.url_mcom
        this.searchBar = page.getByRole('textbox', { name: 'search input' })
        this.searchInput = page.getByRole('textbox', { name: 'search input' })
        this.title = input.title_mcom
    }
    
}