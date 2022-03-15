import * as React from 'react';

const MockImage: React.VFC = () => {
    return (
        <div
            className=""
            style={{
                width: '100%',
            }}
        >
            <svg
                width="500"
                height="500"
                viewBox="0 0 2240 2000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect width="2240" height="2000" fill="url(#pattern0)" />
                <defs>
                    <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            xlinkHref="#image0_2_17"
                            transform="scale(0.000446429)"
                        />
                    </pattern>
                    <image id="image0_2_17" width="2240" height="2000" />
                </defs>
            </svg>
        </div>
    );
};

export default MockImage;
