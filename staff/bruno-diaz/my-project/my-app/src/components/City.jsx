import React from 'react';

export function City({ city }) {
    const { name, province, description } = city
    return (
        <>
            <strong>{name}</strong> ({province}) : <i>{description}</i>
        </>
    )
}