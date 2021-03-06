import React from "react";
import { Link } from "react-router-dom";
//styles
import {Wrapper, Content} from './Breadcrumb.styles';
//types
type Props = {
    movieTitle: string;
}

const Breadcrumb: React.FC<Props> = ({movieTitle})=>(
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default Breadcrumb;