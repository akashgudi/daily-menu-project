export const ValidateMenu = (menu,dispatch) => {
    let protein_lunches = 0;
    let arrayLength = menu.length
    let i=0;
    while (i<arrayLength) {
        if (i%2 == 0) {
            if (menu[i].is_protein) {
                    [menu[i],menu[i+1]] = [menu[i+1],menu[i]]           
            }
        }
        i++;
    }
    return menu
}