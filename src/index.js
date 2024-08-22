import { Router } from './router.js'

const routes = new Router()

routes.add("/", "/pages/home.html")
routes.add("/ouniverso", "/pages/ouniverso.html")
routes.add("/exploracao", "/pages/exploracao.html")

routes.handle()

window.onpopstate = () => handle()
window.route = () => route()