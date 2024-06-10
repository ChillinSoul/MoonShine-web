import {useState, useEffect} from 'react';

export default function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let user = sessionStorage.getItem('user');
        console.log(user)
        if (user) {
            user = JSON.parse(user);
            setUser(user);
        }
    }, []);

    return (
        <div className="nav flex w-full items-center justify-between p-4 rounded drop-shadow">
            <h1 className="text-2xl font-bold">Moonshine</h1>
            <div className="flex items-center space-x-4">
                <a href="/"> Home</a>
                { user ? 
                    <>
                        <p> {user.USERNAME} </p>
                        <a href="/logout">Logout</a>
                    </>
                    :
                    <a href="/login">Login</a>
                }

                <a href="/settings">Settings</a>
            </div>
        </div>
    );
}