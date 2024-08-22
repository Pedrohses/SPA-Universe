export class Router {
    routes = {}

    add(route, page) {
        this.routes[route] = page
    }

    router(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        let app = document.querySelector(".app")
        const route = this.routes[pathname]
        fetch(route).then(data => data.text()).then(html => app.innerHTML = html)
        
        const cssClass = pathname.replace('/', '') || 'home'
        app.classList.add(`${cssClass}`)
        document.body.classList.add(`${cssClass}`)
    }
}