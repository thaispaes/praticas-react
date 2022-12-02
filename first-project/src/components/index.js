function Header() {

    return (
        <header>
            <div className="content">
                <div className="pt1">
                    <Link to="/"><h3>Teste</h3></Link>
                    <nav>
                        <ul>
                            <li> <Link to="/photos">Imagem</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}