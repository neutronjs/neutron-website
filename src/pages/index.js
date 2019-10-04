/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>React JS / React Native</>,
    imageUrl: 'img/brand-react.svg',
    description: (
      <>
        React is a JavaScript library for building user interfaces.
      </>
    ),
  },
  {
    title: <>Redux</>,
    imageUrl: 'img/brand-redux.svg',
    description: (
      <>
        Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments and are easy to test.
      </>
    ),
  },
  {
    title: <>Redux-Saga</>,
    imageUrl: 'img/brand-redux-saga.svg',
    description: (
      <>
        Redux Saga is a library that aims to make application side effects easier to manage, more efficient to execute, easy to test, and better at handling failures.
      </>
    ),
  },
];

const team = [
  {
    imageUrl: 'https://avatars3.githubusercontent.com/u/6491925?v=4',
    name: 'Thiago de Souza'
  },
  {
    imageUrl: 'https://avatars0.githubusercontent.com/u/4061079?v=4',
    name: 'Luis Vinicius'
  },
  {
    imageUrl: 'https://avatars2.githubusercontent.com/u/8473855?v=4',
    name: 'Lucas Martioli'
  }
]

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className={classnames('hero__title', styles.title)}>{`Neutron JS was born to help developers create new react projects with `}
            <a href="https://redux.js.org/" target="_blank">Redux</a> {` + `} <a href="https://redux-saga.js.org/" target="_blank">Redux Saga</a>. </h1>
          <p className={classnames('hero__subtitle', styles.subTitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={withBaseUrl('docs/introduction/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>

        <section className={styles.terminal}>
          <div className="container">
            <div className="row">
              <div
                className={classnames('col col--4')}>
                <section className={styles.terminal}>
                  <div className="container">
                    <div className="row">
                      <div
                        className={classnames('col col--12')}>
                        <div className="text--center">
                          <img src="/img/logo-black.svg" />
                          <p>To install Neutron JS, you can enter with:</p>
                          <code>yarn global add @nutron.js/cli</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className={classnames('col col--8')}>
                <section className={styles.terminal}>
                  <div className="container">
                    <div className="row">
                      <div
                        className={classnames('col col--12')}>
                        <div className="text--center">
                          <div className={classnames(styles.terminalContainer)}>
                            <ul className={classnames(styles.terminalButtons)}>
                              <li className="red"></li>
                              <li className="yellow"></li>
                              <li className="green"></li>
                            </ul>
                            <img src="/img/neutron-terminal.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {team && team.length && (
          <section className={styles.teamUsers}>
            <div className="container">
              <h1>Team</h1>
              <div className="row">
                {team.map(({ imageUrl, name }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.teamUser)}>
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.teamUserImage}
                          src={withBaseUrl(imageUrl)}
                          alt={name}
                        />
                      </div>
                    )}
                    <h3 className={classnames(styles.teamUserName)}>{name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
