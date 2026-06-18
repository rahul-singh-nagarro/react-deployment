import React from 'react';
import styles from './GridTable.module.css';

export const GridTable: React.FC<{ users: any[] , handleDelete: (id: number) => void }> = ({ users, handleDelete }) => {
    return <div className={styles.gridTable}>
        <div className={`${styles.header} ${styles.row}`}>
            <div className={styles.cell}>ID</div>
            <div className={styles.cell}>Title</div>
            <div className={styles.cell}>Completed</div>
            <div className={styles.cell}>Action</div>
        </div>
        {users.map(user => (
            <div className={styles.row} key={user.id}>
                <div className={styles.cell}>{user.id}</div>
                <div className={styles.cell}>{user.title}</div>
            <div className={styles.cell}>Yes</div>
            <div className={styles.cell}>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
        </div>))}
    </div>
}