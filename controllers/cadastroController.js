let usuarioLogado = (req.session.usuario !== undefined);
 res.render("login.ejs", { ..., usuarioLogado})