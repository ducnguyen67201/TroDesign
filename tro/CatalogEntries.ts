/** Tro-authored catalog pages. Components name actual public exports, not wrapper claims. */
const catalogEntries = {
  Autocomplete: {
    group: 'Inputs',
    description: 'Search a set of activities and choose a suggestion.',
    components: ['Autocomplete'],
    code: '<Autocomplete options={["Build a rover", "Make a story"]} renderInput={(params) => <TextField {...params} label="Activity" />} />',
  },
  'Button group': {
    group: 'Inputs',
    description: 'Related actions share a border and a clear order.',
    components: ['ButtonGroup', 'ButtonBase'],
    code: '<ButtonGroup><Button>Previous</Button><Button>Next</Button></ButtonGroup>',
  },
  Checkbox: {
    group: 'Inputs',
    description: 'Independent choices, including mixed and disabled states.',
    components: ['Checkbox', 'FormGroup', 'FormControlLabel'],
    code: '<FormControlLabel control={<Checkbox defaultChecked />} label="Include materials" />',
  },
  'Floating action button': {
    group: 'Inputs',
    description: 'One prominent creation action with a visible name.',
    components: ['Fab'],
    code: '<Fab color="primary" aria-label="Create activity">+</Fab>',
  },
  'Number field': {
    group: 'Inputs',
    description:
      'A native numeric input composed with Tro form controls. This is a recipe, not an exported NumberField component.',
    components: ['InputAdornment'],
    code: '<TextField type="number" label="Learners" slotProps={{htmlInput:{min:1,max:30,step:1}}} />',
  },
  'Radio group': {
    group: 'Inputs',
    description: 'Choose one learning format from a labelled group.',
    components: ['RadioGroup', 'Radio', 'FormControl', 'FormLabel'],
    code: '<FormControl><FormLabel>Format</FormLabel><RadioGroup defaultValue="studio"><FormControlLabel value="studio" control={<Radio />} label="Studio" /></RadioGroup></FormControl>',
  },
  Rating: {
    group: 'Inputs',
    description: 'A named rating with editable, read-only and disabled examples.',
    components: ['Rating'],
    code: '<Rating name="activity-rating" defaultValue={4} />',
  },
  Select: {
    group: 'Inputs',
    description: 'Single, native and multiple choice fields with persistent labels.',
    components: ['Select', 'NativeSelect', 'MenuItem', 'InputLabel'],
    code: '<TextField select label="Level" defaultValue="beginner"><MenuItem value="beginner">Beginner</MenuItem></TextField>',
  },
  Slider: {
    group: 'Inputs',
    description: 'Choose an activity duration with keyboard-adjustable values.',
    components: ['Slider'],
    code: '<Slider aria-label="Activity duration" defaultValue={30} min={10} max={90} valueLabelDisplay="auto" />',
  },
  Switch: {
    group: 'Inputs',
    description: 'An explicit label describes the setting being changed.',
    components: ['Switch'],
    code: '<FormControlLabel control={<Switch defaultChecked />} label="Show hints" />',
  },
  'Transfer list': {
    group: 'Inputs',
    description:
      'Move selected materials between two labelled lists. A composition recipe, not a TransferList export.',
    components: ['List', 'ListItem', 'ListItemButton', 'ListItemIcon', 'ListItemText'],
    code: '<List aria-label="Available materials"><ListItem disablePadding><ListItemButton><ListItemText primary="Motion blocks" /></ListItemButton></ListItem></List>',
  },
  'Toggle button': {
    group: 'Inputs',
    description: 'A labelled, exclusive choice of workspace view.',
    components: ['ToggleButton', 'ToggleButtonGroup'],
    code: '<ToggleButtonGroup exclusive value="board" aria-label="Workspace view"><ToggleButton value="board">Board</ToggleButton><ToggleButton value="list">List</ToggleButton></ToggleButtonGroup>',
  },
  Avatar: {
    group: 'Data display',
    description: 'Initials and grouped identities without external profile photographs.',
    components: ['Avatar', 'AvatarGroup'],
    code: '<AvatarGroup max={3}><Avatar>AL</Avatar><Avatar>MK</Avatar><Avatar>JS</Avatar></AvatarGroup>',
  },
  Badge: {
    group: 'Data display',
    description: 'Small counts supplement a clearly named action.',
    components: ['Badge'],
    code: '<Badge badgeContent={4} color="secondary"><Button>Feedback</Button></Badge>',
  },
  Chip: {
    group: 'Data display',
    description: 'Compact labels with selectable and removable examples.',
    components: ['Chip'],
    code: '<Chip label="Robotics" variant="outlined" onDelete={removeTag} />',
  },
  Divider: {
    group: 'Data display',
    description: 'Quiet structure between related content, with a label when useful.',
    components: ['Divider'],
    code: '<Divider>Next activity</Divider>',
  },
  Icons: {
    group: 'Data display',
    description:
      'Original Tro path symbols use the current theme color and explicit accessible names.',
    components: ['Icon', 'SvgIcon'],
    code: '<SvgIcon titleAccess="Explore"><path d="M4 18 12 4l8 14z" fill="none" stroke="currentColor" /></SvgIcon>',
  },
  'Material icons': {
    group: 'Data display',
    description:
      'Optional upstream icon-package examples, recolored through Tro. Original icon notices are retained.',
    components: ['SvgIcon'],
    code: 'import AutoStories from "@mui/icons-material/AutoStories";\n<AutoStories titleAccess="Learning materials" color="primary" />',
  },
  List: {
    group: 'Data display',
    description: 'A classroom roster with secondary text, avatars and an explicit action.',
    components: [
      'List',
      'ListItem',
      'ListItemAvatar',
      'ListItemText',
      'ListSubheader',
      'ListItemSecondaryAction',
    ],
    code: '<List><ListItem><ListItemAvatar><Avatar>AL</Avatar></ListItemAvatar><ListItemText primary="Alex" secondary="Exploring motion" /></ListItem></List>',
  },
  Tooltip: {
    group: 'Data display',
    description:
      'Supplementary hints appear on hover or keyboard focus. Essential labels remain visible.',
    components: ['Tooltip'],
    code: '<Tooltip title="Open the activity guide"><Button>Activity guide</Button></Tooltip>',
  },
  Backdrop: {
    group: 'Feedback',
    description:
      'A blocking overlay for a deliberate, brief task. Escape or the close action dismisses this example.',
    components: ['Backdrop'],
    code: '<Backdrop open={open} onClick={close}><Button color="inherit" onClick={close}>Close preview</Button></Backdrop>',
  },
  Skeleton: {
    group: 'Feedback',
    description: 'Content placeholders preserve layout while information is loading.',
    components: ['Skeleton'],
    code: '<Skeleton variant="rounded" height={120} /><Skeleton width="75%" /><Skeleton width="45%" />',
  },
  Accordion: {
    group: 'Surfaces',
    description: 'Expandable activity details with linked headings and content.',
    components: ['Accordion', 'AccordionSummary', 'AccordionDetails', 'AccordionActions'],
    code: '<Accordion><AccordionSummary>Activity materials</AccordionSummary><AccordionDetails>Paper, blocks and an idea.</AccordionDetails></Accordion>',
  },
  'App bar': {
    group: 'Surfaces',
    description: 'A quiet workspace header with a named menu action.',
    components: ['AppBar', 'Toolbar'],
    code: '<AppBar position="static" color="default"><Toolbar><Typography variant="h6">Learning studio</Typography></Toolbar></AppBar>',
  },
  Paper: {
    group: 'Surfaces',
    description: 'Outlined and elevated surfaces inherit the project canvas and geometry.',
    components: ['Paper'],
    code: '<Paper variant="outlined" sx={{p:3}}>A place to start.</Paper>',
  },
  'Bottom navigation': {
    group: 'Navigation',
    description: 'A compact choice of primary destinations with persistent labels.',
    components: ['BottomNavigation', 'BottomNavigationAction'],
    code: '<BottomNavigation showLabels value={value} onChange={(_event,next) => setValue(next)}><BottomNavigationAction label="Explore" icon={<ExploreIcon />} /></BottomNavigation>',
  },
  Breadcrumbs: {
    group: 'Navigation',
    description: 'A readable path back through a learning workspace.',
    components: ['Breadcrumbs', 'Link'],
    code: '<Breadcrumbs aria-label="Breadcrumb"><Link href="#content">Studio</Link><Typography>Motion lab</Typography></Breadcrumbs>',
  },
  Drawer: {
    group: 'Navigation',
    description: 'A temporary destination panel with working focus and Escape behavior.',
    components: ['Drawer', 'SwipeableDrawer'],
    code: '<Drawer open={open} onClose={close}><Box sx={{p:3}}><Button onClick={close}>Close workspace menu</Button></Box></Drawer>',
  },
  Link: {
    group: 'Navigation',
    description: 'Underlined text links remain recognizable within sentences.',
    components: ['Link'],
    code: '<Link href="#content" underline="always">Explore the learning guide</Link>',
  },
  Menu: {
    group: 'Navigation',
    description: 'Anchored actions include grouping, shortcuts and disabled items.',
    components: ['Menu', 'MenuList', 'MenuItem'],
    code: '<Menu anchorEl={anchor} open={Boolean(anchor)} onClose={close}><MenuItem onClick={close}>Duplicate activity</MenuItem></Menu>',
  },
  Menubar: {
    group: 'Navigation',
    description:
      'A Tro toolbar composition of menus with arrow-key navigation between triggers. No Menubar export is implied.',
    components: ['Menu', 'MenuItem'],
    code: '<Box role="menubar" aria-label="Studio actions">{/* Named Button triggers and anchored Menu panels */}</Box>',
  },
  Pagination: {
    group: 'Navigation',
    description: 'Select a results page and adjust table page size.',
    components: ['Pagination', 'PaginationItem', 'TablePagination', 'TablePaginationActions'],
    code: '<Pagination count={8} page={page} onChange={(_event,next) => setPage(next)} />',
  },
  'Speed dial': {
    group: 'Navigation',
    description: 'An expandable group of creation shortcuts with accessible names.',
    components: ['SpeedDial', 'SpeedDialAction', 'SpeedDialIcon'],
    code: '<SpeedDial ariaLabel="Create in studio" icon={<SpeedDialIcon />}><SpeedDialAction icon={<span>+</span>} slotProps={{tooltip:{title:"New activity"}}} /></SpeedDial>',
  },
  Stepper: {
    group: 'Navigation',
    description: 'A short learning workflow shows progress and supports moving back.',
    components: [
      'Stepper',
      'Step',
      'StepLabel',
      'StepButton',
      'StepConnector',
      'StepContent',
      'StepIcon',
      'MobileStepper',
    ],
    code: '<Stepper activeStep={1}><Step><StepLabel>Explore</StepLabel></Step><Step><StepLabel>Create</StepLabel></Step></Stepper>',
  },
  Tabs: {
    group: 'Navigation',
    description: 'Related views use linked tab and panel semantics.',
    components: ['Tabs', 'Tab', 'TabScrollButton'],
    code: '<Tabs value={value} onChange={(_event,next) => setValue(next)} aria-label="Activity views"><Tab label="Explore" /><Tab label="Create" /></Tabs>',
  },
  Box: {
    group: 'Layout',
    description: 'The basic layout surface consumes theme spacing and colors.',
    components: ['Box'],
    code: '<Box sx={{p:3,bgcolor:"background.paper",border:1,borderColor:"divider",borderRadius:2}}>Make room for an idea.</Box>',
  },
  Container: {
    group: 'Layout',
    description: 'Readable content width with responsive horizontal gutters.',
    components: ['Container'],
    code: '<Container maxWidth="sm"><Typography>A focused learning space.</Typography></Container>',
  },
  Grid: {
    group: 'Layout',
    description: 'Responsive columns collapse into one column on narrow screens.',
    components: ['Grid'],
    code: '<Grid container spacing={2}><Grid size={{xs:12,sm:6}}>Explore</Grid><Grid size={{xs:12,sm:6}}>Create</Grid></Grid>',
  },
  Stack: {
    group: 'Layout',
    description: 'A consistent spacing rhythm for horizontal and vertical content.',
    components: ['Stack'],
    code: '<Stack direction={{xs:"column",sm:"row"}} spacing={2}><Chip label="Explore" /><Chip label="Create" /></Stack>',
  },
  'Image list': {
    group: 'Layout',
    description: 'Original local learning illustrations in a responsive gallery.',
    components: ['ImageList', 'ImageListItem', 'ImageListItemBar'],
    code: '<ImageList cols={2}><ImageListItem><img src="/LearningTrail.svg" alt="A learning path" /><ImageListItemBar title="Explore motion" /></ImageListItem></ImageList>',
  },
  'Click-away listener': {
    group: 'Utilities',
    description: 'Dismiss a small teaching hint by clicking outside it.',
    components: ['ClickAwayListener'],
    code: '<ClickAwayListener onClickAway={close}><Box><Button onClick={toggle}>Show hint</Button>{open && <Paper>Try one small change.</Paper>}</Box></ClickAwayListener>',
  },
  'CSS baseline': {
    group: 'Utilities',
    description:
      'The catalog applies a global baseline. A scoped baseline can isolate a smaller subtree.',
    components: ['CssBaseline', 'ScopedCssBaseline', 'GlobalStyles'],
    code: '<><CssBaseline /><ScopedCssBaseline><Typography>Scoped reading surface</Typography></ScopedCssBaseline></>',
  },
  'Color scheme script': {
    group: 'Utilities',
    description:
      'An integration recipe for avoiding color-scheme flashes in server-rendered apps. It is not executed inside this client-only preview.',
    components: ['InitColorSchemeScript'],
    code: '// Put before application content in server-rendered HTML.\n<InitColorSchemeScript attribute="class" />\n// Pair with a ThemeProvider using matching CSS-variable color schemes.',
  },
  Modal: {
    group: 'Utilities',
    description: 'An accessible, labelled overlay with focus management and a close action.',
    components: ['Modal', 'Unstable_TrapFocus'],
    code: '<Modal open={open} onClose={close} aria-labelledby="modal-title"><Paper tabIndex={-1}><Typography id="modal-title">A new idea</Typography><Button onClick={close}>Close</Button></Paper></Modal>',
  },
  'No SSR': {
    group: 'Utilities',
    description: 'Defer a client-only subtree while preserving a readable fallback.',
    components: ['NoSsr'],
    code: '<NoSsr fallback={<span>Preparing studio\u2026</span>}><Chip label="Client preview ready" /></NoSsr>',
  },
  Popover: {
    group: 'Utilities',
    description: 'An anchored explanatory surface with Escape dismissal.',
    components: ['Popover'],
    code: '<Popover open={Boolean(anchor)} anchorEl={anchor} onClose={close}><Typography sx={{p:3}}>Start with a question.</Typography></Popover>',
  },
  Popper: {
    group: 'Utilities',
    description: 'A positioned hint that follows its anchor and closes on click-away.',
    components: ['Popper'],
    code: '<Popper open={Boolean(anchor)} anchorEl={anchor}><Paper sx={{p:2}}>Try a smaller step.</Paper></Popper>',
  },
  Portal: {
    group: 'Utilities',
    description: 'Render an annotation into a separate, explicitly scoped DOM container.',
    components: ['Portal'],
    code: '<Portal container={targetElement}><Chip label="Rendered in the annotation area" /></Portal>',
  },
  'Textarea autosize': {
    group: 'Utilities',
    description: 'A labelled writing area grows as the learner writes.',
    components: ['TextareaAutosize'],
    code: '<TextareaAutosize aria-label="Learning reflection" minRows={3} placeholder="What did you discover?" />',
  },
  Transitions: {
    group: 'Utilities',
    description: 'Fade, collapse, grow, slide and zoom use a shared reduced-motion preference.',
    components: ['Collapse', 'Fade', 'Grow', 'Slide', 'Zoom'],
    code: '<Fade in={visible}><Paper sx={{p:2}}>One idea becomes another.</Paper></Fade>',
  },
  'Media query': {
    group: 'Utilities',
    description:
      'A responsive hint reflects the current viewport without guessing device identity.',
    components: [],
    code: 'const isNarrow = useMediaQuery(theme.breakpoints.down("sm"));',
  },
  'Package guide': {
    group: 'Start here',
    description: 'The assistant guide, package boundaries and a reusable project setup.',
    components: [],
    code: 'import { createTroTheme, ThemeProvider } from "@mui/material/styles";\nconst theme = createTroTheme({design: projectDesign.design});\n<ThemeProvider theme={theme}>{children}</ThemeProvider>;',
  },
  'Component parts': {
    group: 'Utilities',
    description: 'Lower-level form, card and table parts composed with the same Tro theme.',
    components: [
      'CardActionArea',
      'CardHeader',
      'CardMedia',
      'Input',
      'InputBase',
      'InputLabel',
      'FilledInput',
      'OutlinedInput',
      'FormControl',
      'FormHelperText',
      'TableFooter',
      'TableSortLabel',
    ],
    code: '// Prefer TextField and Card for ordinary screens.\n// Compose primitives only when the task needs a custom structure.\n<FormControl><InputLabel htmlFor="idea">Idea</InputLabel><Input id="idea" /></FormControl>',
  },
  'Focus containment': {
    group: 'Utilities',
    description:
      'Keep keyboard focus inside a temporary teaching prompt, then restore it to the opening action.',
    components: ['Unstable_TrapFocus'],
    code: 'import FocusTrap from "@mui/material/Unstable_TrapFocus";\n<FocusTrap open={open}><Paper tabIndex={-1}><Button onClick={close}>Close focus prompt</Button></Paper></FocusTrap>',
  },
} as const;

export default catalogEntries;
