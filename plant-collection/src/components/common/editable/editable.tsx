import React, { useState } from 'react';



interface EditableProp {
    text: string,
    type: string,
    placeholder: string,
    children: any,
}


export default function Editable(props: EditableProp) {
    const [isEditing, setEditing] = useState(false);
    return (
        <section {...props} className="section-container">
            {isEditing ? (
                <div onBlur={() => setEditing(false)}
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
