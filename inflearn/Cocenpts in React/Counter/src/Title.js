import React, { useState } from 'react';

function Title({ title }) {
    return <p>{title}</p>;
}

export default React.memo(Title);