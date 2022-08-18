import React, { useContext } from 'react';
import { CurrentUserContext } from '../../App';

interface Props {
    children: any;
}

export default function PrivateRoute({ children }: Props) {

    const currentUser = useContext(CurrentUserContext);
    

    const isCurrentUser = currentUser !== null;
    const notLoggedInElement = <div></div>

    if (!isCurrentUser) {
        return notLoggedInElement
    } else {
        return (
            children
        )
    }
}