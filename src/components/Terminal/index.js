import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function NeutronTerminal({ version }) {
  const printNewLine = () => <span> </span>;

  const printDivider = () => (
    <span style={{ color: 'var(--neutron-regular)' }}>{'-'.repeat(63)}</span>
  );

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.content}>
        <p>
          <span className={styles.dir}>~$</span>
          <span className={styles.command}>neutron</span>
        </p>
        <span className={styles.commandResult}>
          {printDivider()}
          <span> _ _ _ _ ____</span>
          <span>|:\ | | ___ _ _|:|_ _ __ ___ _ __ | /:___|</span>
          <span>| \| |/ _ \ | | | __| &apos;__/ _ \| &apos;_ \ _ | \___ \</span>
          <span>| |\ | __/ |_| | |_| | | (_) | | | |:|_| |___) |</span>
          <span>|_| \_|\___|\__,_|\__|_| \___/|_| |_|\___/|____/</span>
          {printNewLine()}
          <span style={{ color: 'var(--neutron-custom-green)' }}>
            {`React & React Native Flux Architecture CLI ${version}`}
          </span>
          {printNewLine()}
          {printDivider()}
          {printNewLine()}
          <span>For more information:</span>
          <span style={{ color: 'var(--neutron-custom-blue)' }}>
            https://www.neutronjs.com
          </span>
          {printNewLine()}
          {printDivider()}
          <p>
            <span className={styles.dir}>~$</span>
            <span className={styles.commandResultClear}>clear</span>
          </p>
        </span>
      </div>
    </div>
  );
}

NeutronTerminal.propTypes = {
  version: PropTypes.string.isRequired,
};

export default NeutronTerminal;
