import { Link } from "react-router-dom"
import { useState } from "react"

export default function RoutingElement({profile}) {

    const [rootLocation, setRootLocation] = useState("Home")

    return (
        <section className="navBar_options">
            {profile
            ?   <>
                    <Link 
                        to="/" 
                        className={rootLocation === "Home" ? "root_underlign_color" :  "root_underlign_black"}
                        onClick={ () => setRootLocation("Home")}>
                            Home
                    </Link>
                    <Link
                        to="/" 
                        className={rootLocation === "Channels" ? "root_underlign_color" :  "root_underlign_black"}
                        onClick={ () => setRootLocation("Channels")}>
                        Channels
                    </Link>
                    <Link 
                        to="/" 
                        className={rootLocation === "Game" ? "root_underlign_color" :  "root_underlign_black"}
                        onClick={ () => setRootLocation("Game")}>
                        Game
                    </Link>
                    <Link 
                        to="/users" 
                        className={rootLocation === "users" ? "root_underlign_color" :  "root_underlign_black"}
                        onClick={ () => setRootLocation("users") }>
                            Users
                    </Link>
                    <Link 
                        to="/about" 
                        className={rootLocation === "about" ? "root_underlign_color" :  "root_underlign_black"}
                        onClick={ () => setRootLocation("about") }>
                            About
                    </Link>
                </>
            : null
            }
        </section>
    )
}