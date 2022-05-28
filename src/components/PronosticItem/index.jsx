import { Item, Icon } from './styles'

export const PronosticItem = ({ date, iconType, temperature }) => {
    return (
        <Item>
            <span>{ date }</span>
            <Icon>{ iconType }</Icon>
            <span>{ temperature }</span>
        </Item>
    )
}