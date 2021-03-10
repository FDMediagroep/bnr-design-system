import React from 'react';
import styles from './ButtonPlay.module.scss';

interface Props {
    isPlaying?: boolean;
    [x: string]: any;
}

function ButtonPlay(props: Props) {
    return (
        <div
            {...props}
            className={`${styles.buttonPlay}${
                props.className ? ` ${props.className}` : ''
            }${props.isPlaying ? ` ${styles.showPause}` : ''}`}
        >
            <div className={styles.icon} />
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.buttonPlay];
}

export { ButtonPlay, getCssClassNames };
