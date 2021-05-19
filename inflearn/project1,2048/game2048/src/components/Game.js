import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constant';
import { getInitialTileList } from '../util/tile';

export default function Game() {
    const [tileList, setTileList] = useState(getInitialTileList);
    return (
        <div className="game-container">
            <div className="grid-container">
                {times(MAX_POS, () => (
                    <div className="grid-row">
                        {times(MAX_POS, () => (
                            <div className="grid-cell"></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="tile-container">
                {tileList.map(item => (
                    <div className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
                    <div className="tile-inner">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}