function init() {
    $ui.register(ctx => {
        ctx.screen.onNavigate(e => {
            console.log(e.pathname)
            if (e.pathname === "/discover") {
                ctx.screen.navigateTo("/search")
                ctx.screen.reload()
            }
        })
    })
}