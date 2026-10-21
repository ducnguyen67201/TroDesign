import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import Button, { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LinearProgress from '@mui/material/LinearProgress';
import Slider from '@mui/material/Slider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import { createTroTheme, ThemeProvider, resolveTroDesign } from '@mui/material/styles';
import componentCoverage from './ComponentCoverage';
import catalogEntries from './CatalogEntries';
import MoreExamples from './MoreExamples';
import SnackbarExamples from './SnackbarExamples';
import packageConfig from './PackageConfig';
import { projectDesign, exampleDesign } from './ProjectDesign';
import './Catalog.css';

const pages = {
  ...catalogEntries,
  Overview: {
    group: 'Start here',
    description: 'The Tro Open World identity, implemented in a local fork of Material UI.',
  },
  'Component coverage': {
    group: 'Start here',
    description:
      'Every public component export in this fork, with an honest record of which ones have local examples. An example is not a complete variant or accessibility audit.',
  },
  Colors: {
    group: 'Foundations',
    description: 'A warm foundation, an expressive spark, and clear semantic roles.',
  },
  Typography: {
    group: 'Foundations',
    description: 'Confident headlines. Calm working text. Room for every language.',
  },
  Buttons: {
    group: 'Inputs',
    description:
      'Clear, familiar actions. Tro styling is built into the fork, so you can focus on the next step.',
  },
  'Text fields': {
    group: 'Inputs',
    description: 'Readable labels, clear instructions and useful validation states.',
  },
  Selection: {
    group: 'Inputs',
    description: 'Choices that feel familiar, with visible labels and meaningful state.',
  },
  Dialogs: {
    group: 'Feedback',
    description: 'Focused decisions with established keyboard and focus behavior.',
  },
  Alert: {
    group: 'Feedback',
    description:
      'Persistent feedback in the page, with four severities and standard, outlined and filled appearances.',
  },
  Snackbar: {
    group: 'Feedback',
    description:
      'Brief status updates after an action. Try a message, an undo action, or a success alert inside a snackbar.',
  },
  Progress: {
    group: 'Feedback',
    description:
      'Linear and circular progress for waiting states, with skeletons for loading content.',
  },
  Feedback: {
    group: 'Feedback',
    description: 'Name the state, explain what happened and show a useful next step.',
  },
  Navigation: {
    group: 'Navigation',
    description: 'Help learners and teachers find their place and move with confidence.',
  },
  Cards: {
    group: 'Surfaces',
    description: 'Give related content a clear hierarchy and one meaningful next action.',
  },
  Tables: {
    group: 'Data display',
    description: 'Quiet, readable structure for comparing information.',
  },
  Classroom: {
    group: 'Patterns',
    description: 'Combine familiar components into a learner-led classroom experience.',
  },
} as const;

type PageName = keyof typeof pages;

function isPageName(value: string): value is PageName {
  return Object.hasOwn(pages, value);
}

function Catalog() {
  const [page, setPage] = React.useState<PageName>('Buttons');
  const [search, setSearch] = React.useState('');
  const [dark, setDark] = React.useState(false);
  const [useExample, setUseExample] = React.useState(false);
  const project = useExample ? exampleDesign : projectDesign;
  const [variant, setVariant] = React.useState<NonNullable<ButtonProps['variant']>>('contained');
  const [size, setSize] = React.useState<NonNullable<ButtonProps['size']>>('medium');
  const [disabled, setDisabled] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [notice, setNotice] = React.useState('');
  const [alertVariant, setAlertVariant] = React.useState<'standard' | 'outlined' | 'filled'>(
    'standard',
  );
  const [coverageSearch, setCoverageSearch] = React.useState('');
  const [showCode, setShowCode] = React.useState(true);
  const theme = React.useMemo(
    () => createTroTheme({ design: project.design, palette: { mode: dark ? 'dark' : 'light' } }),
    [dark, project],
  );
  const settings = resolveTroDesign(project.design, dark ? 'dark' : 'light');
  const catalogStyle = {
    '--canvas': theme.palette.background.default,
    '--surface': theme.palette.background.paper,
    '--ink': theme.palette.text.primary,
    '--muted': theme.palette.text.secondary,
    '--line': theme.palette.divider,
    '--selected': settings.colors.selected,
    '--blue': theme.palette.info.main,
    '--accent': theme.palette.secondary.main,
    '--control-border': settings.colors.controlBorder,
    '--font': settings.fontFamily,
    fontFamily: settings.fontFamily,
    '--heading-font': settings.headingFontFamily,
    '--control-radius': `${settings.controlRadius}px`,
    '--card-radius': `${settings.cardRadius}px`,
    '--small-radius': `${settings.smallRadius}px`,
    '--control-height': `${settings.controlHeight}px`,
  } satisfies React.CSSProperties & Record<`--${string}`, string>;
  const entries = Object.entries(pages).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  function getExampleCode(): string {
    const extra = Object.entries(catalogEntries).find(([name]) => name === page)?.[1];
    if (extra) {
      return extra.code;
    }
    if (page === 'Buttons') {
      return `import Button from '@mui/material/Button';\n\n<Button variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>\n  Explore the next step\n</Button>`;
    }
    if (page === 'Text fields') {
      return `import TextField from '@mui/material/TextField';\n\n<TextField label="Outlined" variant="outlined" />\n<TextField label="Filled" variant="filled" />\n<TextField label="Standard" variant="standard" />`;
    }
    if (page === 'Alert') {
      return `import Alert from '@mui/material/Alert';\nimport AlertTitle from '@mui/material/AlertTitle';\n\n<Alert severity="success" variant="${alertVariant}">\n  <AlertTitle>Ready to continue</AlertTitle>\n  Your changes have been saved.\n</Alert>`;
    }
    if (page === 'Snackbar') {
      return `import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Snackbar from '@mui/material/Snackbar';\n\nexport default function SaveFeedback() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Show snackbar</Button>\n      <Snackbar open={open} autoHideDuration={6000}\n        onClose={(_event, reason) => { if (reason !== 'clickaway') setOpen(false); }}\n        message="Activity archived"\n        action={<Button color="inherit" onClick={() => setOpen(false)}>Undo</Button>}\n      />\n    </>\n  );\n}`;
    }
    if (page === 'Progress') {
      return `import LinearProgress from '@mui/material/LinearProgress';\nimport CircularProgress from '@mui/material/CircularProgress';\nimport Skeleton from '@mui/material/Skeleton';\n\n<LinearProgress aria-label="Uploading activity" variant="determinate" value={45} />\n<CircularProgress aria-label="Loading activity" />\n<Skeleton variant="rounded" width={240} height={100} />`;
    }
    if (page === 'Dialogs') {
      return `import Dialog from '@mui/material/Dialog';\n\n<Dialog open={open} onClose={closeDialog}>\n  <DialogTitle>Ready for the next step?</DialogTitle>\n  {/* Content and explicit actions */}\n</Dialog>`;
    }
    return `import { createTroTheme, ThemeProvider } from '@mui/material/styles';\n\nimport { projectDesign } from './ProjectDesign';\n\nconst theme = createTroTheme({ design: projectDesign.design });\n\n<ThemeProvider theme={theme}>\n  {/* Your ${page.toLowerCase()} */}\n</ThemeProvider>`;
  }

  const code = getExampleCode().replace(/@mui\/material(?=\/|['"])/g, packageConfig.name);

  async function copyCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(code);
      setNotice('Example copied. These imports resolve to this local fork.');
    } catch {
      setNotice('Clipboard is unavailable. Select and copy the visible example.');
    }
  }

  function renderDemo(): React.ReactNode {
    if (Object.hasOwn(catalogEntries, page)) {
      return <MoreExamples key={page} page={page} onNotice={setNotice} />;
    }
    if (page === 'Component coverage') {
      const shown = componentCoverage.filter((component) =>
        component.name.toLowerCase().includes(coverageSearch.toLowerCase()),
      );
      const examples = componentCoverage.filter((component) => component.page).length;
      return (
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Alert severity="info">
            {examples} of {componentCoverage.length} public component exports have a local example
            or integration recipe. Composition parts are included. Server-only recipes are
            explicitly labelled. Variant/state coverage remains partial.
          </Alert>
          <TextField
            label="Filter component coverage"
            value={coverageSearch}
            onChange={(event) => setCoverageSearch(event.target.value)}
          />
          <TableContainer sx={{ maxHeight: 520 }}>
            <Table stickyHeader aria-label="Component coverage">
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell>Local example</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shown.map((component) => (
                  <TableRow key={component.name}>
                    <TableCell>{component.name}</TableCell>
                    <TableCell>
                      {component.page ? (
                        <Button
                          size="small"
                          onClick={() => {
                            const destination = component.page;
                            if (destination && isPageName(destination)) {
                              setPage(destination);
                            }
                          }}
                        >
                          {component.page}
                        </Button>
                      ) : (
                        'To add'
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {shown.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={2}>No matching components.</TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      );
    }
    if (page === 'Snackbar') {
      return <SnackbarExamples />;
    }
    if (page === 'Progress') {
      return (
        <Stack spacing={3} sx={{ width: '100%', maxWidth: 520 }}>
          <Typography>Determinate progress · 45%</Typography>
          <LinearProgress aria-label="Activity upload progress" variant="determinate" value={45} />
          <Typography>Indeterminate progress</Typography>
          <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
            <CircularProgress aria-label="Loading activity" />
            <LinearProgress aria-label="Preparing activity" sx={{ flex: 1 }} />
          </Stack>
          <Typography>Loading content</Typography>
          <Skeleton variant="rounded" height={100} />
          <Skeleton width="80%" />
          <Skeleton width="55%" />
        </Stack>
      );
    }

    if (page === 'Colors') {
      const colors = settings.colors;
      return (
        <div className="color-grid">
          {Object.entries(colors).map(([name, value]) => (
            <div key={name}>
              <div className="color-block" style={{ backgroundColor: value }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {value}
              </Typography>
            </div>
          ))}
        </div>
      );
    }

    if (page === 'Typography') {
      return (
        <Stack spacing={3}>
          <Typography variant="h2">
            A small hint.
            <br />A whole new world.
          </Typography>
          <Typography variant="h5" lang="vi">
            Mỗi câu hỏi mở ra một thế giới.
          </Typography>
          <Typography>Clear instructions, comfortable reading, and room to think.</Typography>
          <Typography variant="body2" color="text.secondary">
            {settings.fontFamily}. Display 500. Body 400. Actions 600.
          </Typography>
        </Stack>
      );
    }

    if (page === 'Text fields') {
      return (
        <Stack spacing={3} sx={{ width: '100%', maxWidth: 440 }}>
          <Typography variant="h6">Three text-field variants</Typography>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Filled" variant="filled" />
          <TextField label="Standard" variant="standard" />
          <Typography variant="h6">States and supporting text</Typography>
          <TextField label="Project name" helperText="Choose a name that makes sense to you." />
          <TextField
            label="Tên dự án"
            helperText="Đặt một cái tên giúp bạn nhớ ý tưởng của mình."
          />
          <TextField
            label="Example error"
            defaultValue=""
            error
            helperText="Add a project name to continue."
          />
          <TextField
            label="Unavailable example"
            disabled
            helperText="This example is currently unavailable."
          />
        </Stack>
      );
    }

    if (page === 'Selection') {
      return (
        <Stack spacing={2}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Include this activity" />
          <FormControlLabel control={<Switch defaultChecked />} label="Show example hints" />
          <RadioGroup defaultValue="explore" aria-label="Example activity choice">
            <FormControlLabel value="explore" control={<Radio />} label="Explore an idea" />
            <FormControlLabel value="create" control={<Radio />} label="Create something new" />
          </RadioGroup>
          <Typography variant="body2">Example pace</Typography>
          <Slider
            defaultValue={40}
            aria-label="Example pace"
            sx={{ width: 220, maxWidth: '100%' }}
          />
        </Stack>
      );
    }

    if (page === 'Dialogs') {
      return (
        <Button variant="contained" onClick={() => setDialog(true)}>
          Open example dialog ↗
        </Button>
      );
    }

    if (page === 'Alert' || page === 'Feedback') {
      return (
        <Stack spacing={2} sx={{ width: '100%' }}>
          {page === 'Alert' ? (
            <label className="size-label" style={{ alignSelf: 'flex-start' }}>
              Appearance
              <select
                aria-label="Alert appearance"
                value={alertVariant}
                onChange={(event) => {
                  const value = event.target.value;
                  if (value === 'standard' || value === 'outlined' || value === 'filled') {
                    setAlertVariant(value);
                  }
                }}
              >
                <option value="standard">Standard</option>
                <option value="outlined">Outlined</option>
                <option value="filled">Filled</option>
              </select>
            </label>
          ) : null}
          <Alert variant={alertVariant} severity="info">
            <AlertTitle>A small step</AlertTitle>Try one small step, then see what changes.
          </Alert>
          <Alert variant={alertVariant} severity="success">
            <AlertTitle>Ready to continue</AlertTitle>Example saved state. No data is persisted.
          </Alert>
          <Alert variant={alertVariant} severity="warning">
            Check the example details before continuing.
          </Alert>
          <Alert
            variant={alertVariant}
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => setNotice('Example retry selected.')}
              >
                Try again
              </Button>
            }
          >
            Something needs another look.
          </Alert>
          <LinearProgress aria-label="Illustrative progress" variant="determinate" value={45} />
        </Stack>
      );
    }

    if (page === 'Navigation') {
      return (
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={tab}
            onChange={(_event, value: number) => setTab(value)}
            aria-label="Example classroom navigation"
          >
            <Tab label="Overview" id="overview-tab" aria-controls="classroom-panel" />
            <Tab label="Materials" id="materials-tab" aria-controls="classroom-panel" />
            <Tab label="My work" id="work-tab" aria-controls="classroom-panel" />
          </Tabs>
          <Box
            role="tabpanel"
            id="classroom-panel"
            aria-labelledby={['overview-tab', 'materials-tab', 'work-tab'][tab]}
            sx={{ p: 3 }}
          >
            <Typography>
              {
                [
                  'A clear goal and room to explore.',
                  'Sample lesson material and a starting question.',
                  'Your next creation starts with an idea.',
                ][tab]
              }
            </Typography>
          </Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<span aria-hidden="true">＋</span>}
              aria-controls="activity-details"
              id="activity-heading"
            >
              About this sample activity
            </AccordionSummary>
            <AccordionDetails id="activity-details">
              Ask a question, try a small change, then compare what happens.
            </AccordionDetails>
          </Accordion>
        </Box>
      );
    }

    if (page === 'Tables') {
      return (
        <TableContainer>
          <Table aria-label="Sample activities">
            <TableHead>
              <TableRow>
                <TableCell>Sample activity</TableCell>
                <TableCell>Focus</TableCell>
                <TableCell>Format</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {['First animation', 'A tiny world', 'Ask a better question'].map((name) => (
                <TableRow key={name}>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell>Exploration</TableCell>
                  <TableCell>Project</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

    if (page === 'Cards' || page === 'Classroom' || page === 'Overview') {
      return (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ alignItems: 'stretch', width: '100%' }}
        >
          <Card sx={{ maxWidth: 370, flex: 1 }}>
            <div className="lesson-art" aria-hidden="true">
              <svg viewBox="0 0 320 150">
                <path
                  d="M20 110Q90 0 160 85T300 25"
                  fill="none"
                  stroke={theme.palette.info.main}
                  strokeWidth="2"
                  strokeDasharray="5 7"
                />
                <circle cx="160" cy="85" r="30" fill={theme.palette.secondary.main} />
                <path
                  d="m148 85 9 9 17-23"
                  fill="none"
                  stroke={theme.palette.secondary.contrastText}
                  strokeWidth="3"
                />
              </svg>
            </div>
            <CardContent>
              <Chip size="small" label="Sample activity" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                Make your first animation.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try an idea. Explore movement. See what happens next.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                variant="contained"
                onClick={() =>
                  setNotice(
                    'Example hint: start with one motion block. What changes when you add more steps?',
                  )
                }
              >
                Show an example hint ↗
              </Button>
            </CardActions>
          </Card>
          <Stack spacing={2} sx={{ flex: 1, maxWidth: 340, justifyContent: 'center' }}>
            <Typography variant="h5">
              Room to think.
              <br />
              Confidence to try.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use the same component language across lessons, materials and classroom workflows.
            </Typography>
            <Alert severity="info">
              Illustrative pattern. No student records or live classroom actions.
            </Alert>
          </Stack>
        </Stack>
      );
    }

    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button
          variant={variant}
          size={size}
          disabled={disabled}
          onClick={() => setNotice('Example action selected. No request was sent.')}
        >
          Explore the next step{' '}
          <span aria-hidden="true" style={{ marginLeft: 12 }}>
            ↗
          </span>
        </Button>
        <Button
          variant="outlined"
          size={size}
          disabled={disabled}
          onClick={() => setNotice('Secondary example selected.')}
        >
          Keep exploring
        </Button>
        <Tooltip title="An accessible label belongs on every icon-only action">
          <IconButton
            aria-label="Example more information"
            onClick={() => setNotice('This icon button has an accessible name.')}
          >
            ↗
          </IconButton>
        </Tooltip>
      </Stack>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="catalog" style={catalogStyle} data-mode={dark ? 'dark' : 'light'}>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <header className="catalog-header">
          <a className="catalog-brand" href="#content" onClick={() => setPage('Overview')}>
            {project.logo ? <img src={project.logo} alt="" /> : null}
            <strong>
              {project.name}
              <span>Design</span>
            </strong>
          </a>
          <span className="header-tag">{project.collection} / LOCAL FORK</span>
          <div className="header-actions">
            <label className="project-picker">
              Project
              <select
                aria-label="Project identity"
                value={useExample ? 'example' : 'tro'}
                onChange={(event) => setUseExample(event.target.value === 'example')}
              >
                <option value="tro">{projectDesign.name}</option>
                <option value="example">{exampleDesign.name}</option>
              </select>
            </label>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setDark((value) => !value)}
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {dark ? '☀ Light' : '◐ Dark'}
            </Button>
          </div>
        </header>
        <aside className="catalog-sidebar" aria-label="Component navigation">
          <label className="search-label" htmlFor="component-search">
            Find a component
          </label>
          <input
            id="component-search"
            className="component-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search components…"
          />
          {[
            'Start here',
            'Foundations',
            'Inputs',
            'Data display',
            'Feedback',
            'Surfaces',
            'Navigation',
            'Layout',
            'Utilities',
            'Patterns',
          ].map((group) => (
            <div className="nav-group" key={group}>
              <p>{group}</p>
              {entries
                .filter(([, metadata]) => metadata.group === group)
                .map(([name]) => (
                  <button
                    type="button"
                    key={name}
                    aria-current={page === name ? 'page' : undefined}
                    onClick={() => {
                      if (isPageName(name)) {
                        setPage(name);
                      }
                    }}
                  >
                    {name}
                    <span aria-hidden="true">{page === name ? '↗' : ''}</span>
                  </button>
                ))}
            </div>
          ))}
          {entries.length === 0 && (
            <p className="search-empty">
              No matching components.
              <button type="button" onClick={() => setSearch('')}>
                Clear search
              </button>
            </p>
          )}
          <div className="sidebar-foot">
            <span className="status-dot" /> Built from fork source
            <br />
            <small>{packageConfig.name} · release candidate</small>
          </div>
        </aside>
        <main id="content" className="catalog-main">
          <div className="mobile-navigation">
            <label htmlFor="mobile-page">Component</label>
            <select
              id="mobile-page"
              value={page}
              onChange={(event) => {
                if (isPageName(event.target.value)) {
                  setPage(event.target.value);
                }
              }}
            >
              {Object.keys(pages).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className="breadcrumbs">
            {project.name.toUpperCase()} DESIGN <span>/</span> {pages[page].group.toUpperCase()}
          </div>
          <div className="page-title">
            <h1>{page === 'Overview' ? 'A world of possibility.' : page}</h1>
            <Chip label={`${project.name} styled`} size="small" variant="outlined" />
          </div>
          <p className="page-description">{pages[page].description}</p>
          <div className="page-meta">
            <span>React components</span>
            <span>TypeScript</span>
            <span>{project.collection}</span>
            <a href="https://mui.com/material-ui/" target="_blank" rel="noreferrer">
              Upstream documentation ↗
            </a>
          </div>
          <section className="example-section" aria-label="Live component example">
            <div className="example-heading">
              <h2>{page === 'Buttons' ? 'An action, in your own voice.' : 'Live example'}</h2>
              <span>INTERACTIVE PREVIEW</span>
            </div>
            {page === 'Buttons' && (
              <div className="demo-controls">
                <ToggleButtonGroup
                  value={variant}
                  exclusive
                  size="small"
                  aria-label="Button variant"
                  onChange={(_event, value: string | null) => {
                    if (value === 'contained' || value === 'outlined' || value === 'text') {
                      setVariant(value);
                    }
                  }}
                >
                  <ToggleButton value="contained">Filled</ToggleButton>
                  <ToggleButton value="outlined">Outlined</ToggleButton>
                  <ToggleButton value="text">Text</ToggleButton>
                </ToggleButtonGroup>
                <label className="size-label">
                  Size
                  <select
                    aria-label="Button size"
                    value={size}
                    onChange={(event) => {
                      const value = event.target.value;
                      if (value === 'small' || value === 'medium' || value === 'large') {
                        setSize(value);
                      }
                    }}
                  >
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                  </select>
                </label>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={disabled}
                      onChange={(event) => setDisabled(event.target.checked)}
                    />
                  }
                  label="Disabled"
                />
              </div>
            )}
            <div className="demo-canvas">{renderDemo()}</div>
            <div className="code-toolbar">
              <button
                type="button"
                onClick={() => setShowCode((value) => !value)}
                aria-expanded={showCode}
                aria-controls="example-code"
              >
                {showCode ? '⌄ Hide code' : '› Show code'}
              </button>
              <button type="button" onClick={copyCode}>
                Copy example ↗
              </button>
            </div>
            {showCode && (
              <pre id="example-code" className="code-block">
                <code>{code}</code>
              </pre>
            )}
          </section>
          <section className="usage-section">
            <h2>Designed to work together.</h2>
            <p>
              The fork keeps familiar component APIs. Tro supplies the colors, typography, shapes
              and default states. Compose a screen with the components, then add only the layout
              your task needs.
            </p>
            <div className="usage-grid">
              <div>
                <span>01 / FOUNDATION</span>
                <h3>One visual language</h3>
                <p>Cream and ink for focus. Orange for the spark. Blue for exploration.</p>
              </div>
              <div>
                <span>02 / IMPLEMENTATION</span>
                <h3>Familiar components</h3>
                <p>Buttons, forms, dialogs and navigation use the underlying MUI implementation.</p>
              </div>
              <div>
                <span>03 / OWNERSHIP</span>
                <h3>A maintained fork</h3>
                <p>
                  Tro changes stay visible beside a pinned upstream baseline. Package renaming is a
                  release step.
                </p>
              </div>
            </div>
          </section>
          <footer className="catalog-footer">
            {project.name} {project.collection} · Local fork preview · Original Material UI
            attribution retained.
          </footer>
        </main>
        <Dialog
          open={dialog}
          onClose={() => setDialog(false)}
          aria-labelledby="example-dialog-title"
        >
          <DialogTitle id="example-dialog-title">Ready for the next step?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a local example. Try keyboard navigation, press Escape, or choose an action.
              No data will be saved.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)}>Keep exploring</Button>
            <Button
              variant="contained"
              onClick={() => {
                setDialog(false);
                setNotice('Example confirmed. No data was saved.');
              }}
            >
              Try it
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          open={notice !== ''}
          autoHideDuration={5000}
          onClose={() => setNotice('')}
          message={notice}
        />
      </div>
    </ThemeProvider>
  );
}

const root = document.getElementById('root');

if (!root) {
  throw new Error(
    'Tro Design: the page root is missing. Restore the root element in tro/index.html.',
  );
}

ReactDOM.createRoot(root).render(<Catalog />);
