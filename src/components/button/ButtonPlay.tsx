import React from 'react';
import styles from './ButtonPlay.module.scss';

interface Props {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isPlaying?: boolean;
    [x: string]: any;
}

function ButtonPlay(props: Props) {
    return (
        <button
            onClick={props.onClick}
            className={`${styles.buttonPlay}${
                props.className ? ` ${props.className}` : ''
            }${props.isPlaying ? ` ${styles.showPause}` : ''}`}
        >
            <div className={styles.icon} />
        </button>
    );
}

function getCssClassNames(): string[] {
    return [styles.buttonPlay];
}

export { ButtonPlay, getCssClassNames };
