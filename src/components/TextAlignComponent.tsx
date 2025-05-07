// TextAlignComponent.tsx

import React from 'react'

interface TextAlignProps {
    value?: 'left' | 'right' | 'center' | 'justify';
    children?: React.ReactNode;
}

export const TextAlign = (props: TextAlignProps) => {
    return (
        <div style={{ textAlign: props.value ? props.value : 'left', width: '100%' }}>
            {props.children}
        </div>
    )
}