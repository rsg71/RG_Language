import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

interface Props {
    pageTitle: String;
}

export default function DefaultBreadcrumb({ pageTitle }: Props) {

    const navigate = useNavigate();

    return (
        <div>
            <Breadcrumb className="bg-white">
                <Breadcrumb.Item as={Link} to="/" onClick={() => navigate("/")}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {pageTitle}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
