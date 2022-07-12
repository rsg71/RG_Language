import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

export default function DefaultBreadcrumb({ pageTitle }) {

    const navigate = useNavigate();

    return (
        <div>
            <Breadcrumb bg="white">
                <Breadcrumb.Item as={Link} to="/" onClick={() => navigate("/")}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {pageTitle}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
