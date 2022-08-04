import { Container, Label } from './filter'
import { RestPropsWithChildren } from '../../types/props'

const Filter = ({ children, ...props }: RestPropsWithChildren) => {
	return <Container {...props}>{children}</Container>
}

Filter.Label = ({ children, ...props }: RestPropsWithChildren) => {
	return <Label {...props}>{children}</Label>
}

export default Filter
