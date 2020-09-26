import React, { useState } from 'react';



interface EditableProp {
    text: string,
    type: string,
    placeholder: string,
    children: any,
}


export default function Editable(props: EditableProp) {
    const [isEditing, setEditing] = useState(false);
    const handleKeyDown = (event: any, type: any) => {
        // Handle when key is pressed
    };
    return (
        <section {...props}>
            {isEditing ? (
                <div onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, props.type)}
                >
                    {props.children}
                </div>
            ) : (
                    <div onClick={() => setEditing(true)}
                    >
                        <span>
                            {props.text || props.placeholder || "Editable content"}

                        </span>

                    </div>
                )
            }
        </section>
    )
}
