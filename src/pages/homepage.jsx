import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Homepage() {
    return (
            <div className="text-center">
                <h1 className="text-6xl font-bold text-teal-300 mb-20 mt-36">
                    LIFE ASSIST
                </h1>
                <TypeAnimation class="text-6xl font-bold text-teal-300 mt-20"
                    sequence={[
                        'Need an Excuse?',
                        1000, 
                        'Want some Advice?',
                        1000,
                        'Need Therapy?',
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ fontSize: '5em', display: 'inline-block',color:'cyan'}}
                    repeat={Infinity}
                />
            </div>
    );
}

export default Homepage;