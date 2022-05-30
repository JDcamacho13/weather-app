import { Status } from "./styles"

export const Description = ({ weather }) => {
    return (
        <Status>
            {weather}
        </Status>
    )
}