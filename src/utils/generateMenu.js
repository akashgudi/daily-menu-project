export const generateMenu = (proteins,regular) => {
    // console.log(proteins + regular)

    console.log(proteins.map(item => item.name))
    let proteins_arr = proteins.map(item => item.name)
    let regular_arr = regular.map(item => item.name)
    let consolidated = proteins_arr.concat(regular_arr)
    console.log(consolidated.length)
    return consolidated
}