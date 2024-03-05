
export  function NavFromLeft ({link, text}: {link: string, text: string}) {
    const onClick = () => {
        import.meta.env.FROM_LEFT.set("true");
    }
    return <a className="text-2xl text-slate-500 hover:text-orange-600" href={link} onClick={onClick}>{text}</a>
}
export  function NavFromRight ({link, text}: {link: string, text: string}) {
    const onClick = () => {
        import.meta.env.FROM_LEFT.set("false");
    }
    return <a className="text-2xl text-slate-500 hover:text-orange-400" href={link} onClick={onClick}>{text}</a>
}

