import React from 'react';
import csvIcon from './image/csv.png';
import asciiIcon from './image/ascii.png';
import xmlIcon from './image/xml.png';

function Legend() {
    const styles = {
        legendContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'transparent', // Modifié pour rendre la légende transparente
            gap: '50px' // Space between the two sections
        },
        legendItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
        },
        legendText: {
            marginLeft: '10px',
            color: '#333',
            fontWeight: 'bold',
        },
        icon: {
            width: '20px',
            height: '20px',
        },
        arrowContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        arrowItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            position: 'relative', // For positioning the arrowhead
        },
        solidArrow: {
            width: '80px', // Increased width
            height: '2px',
            backgroundColor: '#333',
            marginRight: '10px',
            position: 'relative', // For the arrowhead
        },
        dottedArrow: {
            width: '80px', // Increased width
            height: '2px',
            borderBottom: '2px dotted #333',
            marginRight: '10px',
            position: 'relative', // For the arrowhead
        },
        arrowHead: {
            width: 0,
            height: 0,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderTop: '15px solid #333',
            position: 'absolute',
            top: '3px', // Adjusted to ensure it’s above the arrow
            left: '100px', // Positioned to the end of the arrow
            transform: 'translateX(-200%) rotate(-90deg)', // Ajout de rotate(180deg) pour retourner l'élément
       marginLeft: '30px',
        },
    };

    return (
        <div style={styles.legendContainer}>
            {/* Existing icons section */}
            <div>
                <div style={styles.legendItem}>
                    <img src={xmlIcon} style={styles.icon} alt="XML Icon" />
                    <span style={styles.legendText}>Fichier XML</span>
                </div>
                <div style={styles.legendItem}>
                    <img src={csvIcon} style={styles.icon} alt="CSV Icon" />
                    <span style={styles.legendText}>Fichier plat TXT ou CSV</span>
                </div>
                <div style={styles.legendItem}>
                    <img src={asciiIcon} style={styles.icon} alt="ASCII Icon" />
                    <span style={styles.legendText}>Fichier ASCII</span>
                </div>
            </div>

            {/* New arrows section */}
            <div style={styles.arrowContainer}>
                <div style={styles.arrowItem}>
                    <div style={styles.dottedArrow}></div>
                    <div style={styles.arrowHead}></div>
                    <span style={styles.legendText}>CFT</span>
                </div>
                <div style={styles.arrowItem}>
                    <div style={styles.solidArrow}></div>
                    <div style={styles.arrowHead}></div>
                    <span style={styles.legendText}>TCP/IP</span>
                </div>
                <div style={styles.arrowItem}>
                    <div style={styles.dottedArrow}></div>
                    <div style={styles.arrowHead}></div>
                    <span style={styles.legendText}>MQ Series</span>
                </div>
            </div>
        </div>
    );
}

export default Legend;
