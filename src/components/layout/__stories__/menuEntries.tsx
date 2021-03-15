import { camelize } from '@cpmech/basic';
import { RcMenuEntry, RcMenuSubEntry } from '../RcMenuTypes';
import { IconEarth } from './IconEarth';
import { IconHeart } from './IconHeart';
import { IconHome } from './IconHome';
import { IconImage } from './IconImage';
import { IconRocket } from './IconRocket';
import { IconSparkles } from './IconSparkles';
import { IconStar } from './IconStar';

export const entries: RcMenuEntry[] = [
  {
    comp: <button onClick={() => window.alert('first clicked')}>First</button>,
  },
  {
    comp: <button onClick={() => window.alert('second clicked')}>Second</button>,
  },
  {
    icon: <IconHome size="32px" />,
    href: 'route',
  },
  {
    icon: <IconEarth size="32px" />,
    label: 'Hello World',
    href: 'route',
    underline: true,
  },
  {
    icon: <IconEarth size="32px" />,
    link: <button onClick={() => window.alert('earth clicked')}>Link</button>,
  },
  {
    icon: <IconHeart size="32px" />,
    label: 'Love is in the air',
    underline: true,
    onClick: () => window.alert('Love is in the air selected'),
  },
  {
    icon: <IconHeart size="32px" />,
    label: 'Love is in the air',
    onClick: () => window.alert('Love is in the air selected'),
  },
  {
    icon: <IconImage size="32px" />,
    label: 'Little house',
    entries: [
      {
        label: 'First',
        onClick: () => window.alert('First clicked'),
      },
      {
        label: 'Second',
        href: 'route',
      },
      {
        label: 'Third',
        onClick: () => window.alert('Third clicked'),
      },
    ],
  },
  {
    icon: <IconRocket size="32px" />,
    label: 'Address book with nice people in it',
    entries: [
      {
        icon: <IconSparkles size="24px" />,
        label: 'Bender Rodriguez',
        onClick: () => window.alert('Bender clicked'),
        subSubEntries: [
          {
            icon: <IconStar size="18px" />,
            label: `first`,
            onClick: () => window.alert(`Bender clicked on first`),
          },
          {
            icon: <IconStar size="18px" />,
            label: `second`,
            onClick: () => window.alert(`Bender clicked on second`),
          },
          {
            icon: <IconStar size="18px" />,
            label: `third`,
            onClick: () => window.alert(`Bender clicked on third`),
          },
        ],
      },
      {
        icon: <IconEarth size="24px" />,
        label: 'Turanga Leela',
        onClick: () => window.alert('Leela clicked'),
        subSubEntries: [
          {
            icon: <IconStar size="18px" />,
            label: `first`,
            href: 'route',
            underline: true,
          },
          {
            icon: <IconStar size="18px" />,
            link: <button onClick={() => window.alert('second clicked')}>second</button>,
          },
          {
            icon: <IconStar size="18px" />,
            label: `third`,
            href: 'route',
            underline: true,
          },
        ],
      },
      {
        icon: <IconSparkles size="24px" />,
        label: 'Philip J Fry',
        onClick: () => window.alert('Fry clicked'),
      },
    ],
  },
];

const divider = (title: string) => (
  <div style={{ fontWeight: 'bold', borderBottom: '1px solid #484848' }}>{title.toUpperCase()}</div>
);

const getCourseLabel = (mdKey: string) => {
  if (mdKey.startsWith('civl')) {
    const label = mdKey.slice(9);
    if (label.startsWith('tutw') || label.startsWith('lecw')) {
      const key = label.slice(0, 6).replace(/^./, (m) => m.toUpperCase());
      return `${key} ${camelize(label.slice(7), true)}`;
    }
  }
  return mdKey;
};

const getMediaItemLabel = (title: string) => {
  const maxChars = 32;
  if (title.length > maxChars) {
    return title.slice(0, maxChars) + '...';
  }
  return title;
};

const otherArticles = [
  'About me',
  'Parallel evolutionary algorithm for single and multi-objective optimisation: differential evolution and constraints handling',
];

const uqCourses = ['civl4230', 'civl4290', 'civl7215'];

const uqCoursesData = {
  civl4230: {
    lectures: [],
    tutorials: [],
    articles: [],
  },
  civl4290: {
    lectures: ['civl4290-lecw01-introduction'],
    tutorials: [],
    articles: [],
  },
  civl7215: {
    lectures: [
      'civl7215-lecw01-introduction',
      'civl7215-lecw02-geomaterials',
      'civl7215-lecw03-compaction1',
      'civl7215-lecw04-compaction2',
      'civl7215-lecw05-replacement',
      'civl7215-lecw06-micropiles',
    ],
    tutorials: [
      'civl7215-tutw02-python',
      'civl7215-tutw03-consolid',
      'civl7215-tutw04-dyncompact',
      'civl7215-tutw05-vibrocompact',
    ],
    articles: ['The soil consolidation equations'],
  },
};

const iconSize = '18px';
const subIconSize = '14px';

export const dpEntries: RcMenuEntry[] = [
  {
    comp: divider('UQ COURSES'),
    separator: true,
  },
  ...uqCourses.map((course) => {
    const { lectures, tutorials, articles } = (uqCoursesData as any)[course];
    const entries: RcMenuSubEntry[] = [];
    if (lectures.length > 0) {
      entries.push({
        icon: <IconEarth size={iconSize} />,
        link: <a href="/">LECTURES</a>,
        initShowSubSub: course === 'civl7215',
        subSubEntries: lectures.map((presentation: string) => ({
          icon: <IconRocket size={subIconSize} />,
          link: getCourseLabel(presentation),
        })),
      });
    }
    if (tutorials.length > 0) {
      entries.push({
        icon: <IconEarth size={iconSize} />,
        link: <a href="/">TUTORIALS</a>,
        initShowSubSub: false,
        subSubEntries: tutorials.map((presentation: string) => ({
          icon: <IconImage size={subIconSize} />,
          link: getCourseLabel(presentation),
        })),
      });
    }
    if (articles.length > 0) {
      entries.push({
        icon: <IconEarth size={iconSize} />,
        link: <a href="/">ARTICLES</a>,
        initShowSubSub: false,
        subSubEntries: articles.map((article: string) => ({
          icon: <IconSparkles size={subIconSize} />,
          link: getMediaItemLabel(article),
        })),
      });
    }
    return {
      icon: <IconEarth size={iconSize} />,
      link: <a href="/">{course.toUpperCase()}</a>,
      entries,
    } as RcMenuEntry;
  }),
  {
    comp: divider('ARTICLES'),
    separator: true,
  },
  ...otherArticles.map(
    (article) =>
      ({
        icon: <IconStar size={iconSize} />,
        link: getMediaItemLabel(article),
      } as RcMenuEntry),
  ),
];
