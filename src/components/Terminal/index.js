import React from 'react';
import styles from './styles.module.css';

export default function NeutronTerminal({ version }) {
  const printNewLine = () => (<span> </span>);

  const printDivider = () => (
    <span style={{ color: '#666' }}>{('-').repeat(63)}</span>
  );

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.content}>
        <p><span className={styles.dir}>~$</span><span className={styles.command}>neutron</span></p>
        <span className={styles.commandResult}>
          {printDivider()}
          <span> _   _            _                       _ ____</span>
          <span>|:\ | | ___ _   _|:|_ _ __ ___  _ __     | /:___|</span>
          <span>|  \| |/ _ \ | | | __| '__/ _ \| '_ \ _  | \___ \</span>
          <span>| |\  |  __/ |_| | |_| | | (_) | | | |:|_| |___) |</span>
          <span>|_| \_|\___|\__,_|\__|_|  \___/|_| |_|\___/|____/</span>
          {printNewLine()}
          <span style={{ color: '#7f7' }}>React {'&'} React Native Flux Architecture CLI {version}</span>
          {printNewLine()}
          {printDivider()}
          {printNewLine()}
          <span>For more information:</span>
          <span style={{ color: '#37e' }}>https://www.neutronjs.com</span>
          {printNewLine()}
          {printDivider()}
          <p><span className={styles.dir}>~$</span><span className={styles.commandResultClear}>clear</span></p>
        </span>
      </div>
    </div>
  );
}
