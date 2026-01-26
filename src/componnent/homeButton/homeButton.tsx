import "./homeButton.css"

type buttonProps = {
    props: {buttonName: string, href: string, alt: string}[]
}

export function HomeButton({props}: buttonProps) {
    return (
        <div>
            {props.map(({buttonName, href, alt}) => (
                <a className="home-btn" href={href} aria-label={alt}>{buttonName}</a>
            ))}
        </div>
    )
}
