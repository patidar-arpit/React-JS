function customRender(reactElement, mainContainer) {

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement)


}


const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: 'Ckicke me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)
//customeRender(what you want to Render,wher you want to render )

