import { useRouteError } from "react-router-dom"


export default function NotFound404() {
    const error = useRouteError()
    return (
        <div>
            <h1>Uppss....</h1>
            <p>Sorry, unexpected error</p>
            <p>Page {error.statusText || error.message}</p>
        </div>
    )
}
