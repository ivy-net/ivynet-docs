import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'End to End Observability',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
               The IvyNet client is built to make managing any decentralized service easy. Always have complete confidence your nodes are running correctly
            </>
        ),
    },
    {
        title: 'AI Ops Problem Solving',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Use Ivynet's AI to harness the power of your metrics to predict and diagnose problems on your nodes. Identify problems and implement solutions before bad things happen, not after.
            </>
        ),
    },
    {
        title: 'Retain Full Control',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                While the IvyNet client focuses on reliability and ease of use, you retain full control over your node and deployments. This means every decision is made by you, on your hardware, with your stake.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
