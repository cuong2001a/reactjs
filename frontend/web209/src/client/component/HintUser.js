import React, { useEffect, useState } from 'react'

const HintUser = () => {
    const [user, setUser] = useState({})
    useEffect(async () => {
        const token = await localStorage.getItem("token")
        setUser(JSON.parse(token))
        if(user.user){
        console.log('user', user.user.name)
        }

    }, [])
    return (
        <div class="dropdown">
            <a class="dropdown-toggle text-decoration-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {user.user && user.user.name}
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}

export default HintUser
