
const deleteMarkDown = (element) => {
    return element.replace(/(#|\*|\[|\])+/gm, '')
}




export default deleteMarkDown;
