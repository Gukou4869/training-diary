import * as React from 'react';
import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import Overlay from '../overlay/Backdrop';
import styles from '@/styles/components/Modal.module.scss';

interface ModalProps {
    children?: React.ReactElement;
    clickOutside?: boolean;
    maxWidth?: string;
    open?: boolean;
    title?: string;
    toggleModal?: (event: React.MouseEvent) => void;
}

const Modal: React.VFC<ModalProps> = props => {
    const { children, clickOutside, maxWidth, open, title, toggleModal } =
        props;
    const node = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (clickOutside) {
            const handleClickOutside = (event: any) => {
                if (node.current.contains(event.currentTarget)) {
                    // inside click
                    return;
                }
                // outside click
                toggleModal(event);
            };
            if (open) {
                document.addEventListener('mousedown', handleClickOutside);
            } else {
                document.removeEventListener('mousedown', handleClickOutside);
            }

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [clickOutside, open, toggleModal]);
    return (
        <Overlay>
            <div
                className={`${styles['tralog-modal']} ${
                    open ? `${styles['tralog-modal--open']}` : ''
                }`}
                style={{ maxWidth: maxWidth ? maxWidth : '30rem' }}
                ref={node}
            >
                {title ? (
                    <div className="modal__container__header">
                        <div className="modal__container__header__title">
                            {title}
                        </div>
                    </div>
                ) : null}
                <button
                    className={styles['tralog-modal__container__close']}
                    onClick={toggleModal}
                    aria-label="close"
                >
                    <FaTimes />
                </button>
                <div className="modal__container__content">{children}</div>
            </div>
        </Overlay>
    );
};

export default Modal;
