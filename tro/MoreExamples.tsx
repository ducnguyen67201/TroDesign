import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Backdrop from '@mui/material/Backdrop';
import Badge from '@mui/material/Badge';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MobileStepper from '@mui/material/MobileStepper';
import Modal from '@mui/material/Modal';
import NativeSelect from '@mui/material/NativeSelect';
import NoSsr from '@mui/material/NoSsr';
import OutlinedInput from '@mui/material/OutlinedInput';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Popper from '@mui/material/Popper';
import Portal from '@mui/material/Portal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Skeleton from '@mui/material/Skeleton';
import Slide from '@mui/material/Slide';
import Slider from '@mui/material/Slider';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepConnector from '@mui/material/StepConnector';
import StepContent from '@mui/material/StepContent';
import StepIcon from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import SvgIcon from '@mui/material/SvgIcon';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import TabScrollButton from '@mui/material/TabScrollButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '@mui/material/TablePaginationActions';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tabs from '@mui/material/Tabs';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import FocusTrap from '@mui/material/Unstable_TrapFocus';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AutoStories from '@mui/icons-material/AutoStories';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import Public from '@mui/icons-material/Public';

interface MoreExamplesProps {
  page: string;
  onNotice: (message: string) => void;
}

const activities = [
  'Build a rover',
  'Tell an interactive story',
  'Explore motion',
  'Design a habitat',
];
const materials = ['Motion blocks', 'Paper shapes', 'Sound kit', 'Drawing tools'];

function TrailIcon() {
  return (
    <SvgIcon titleAccess="Learning trail">
      <path d="M4 19Q6 3 12 12T20 5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="20" cy="5" r="2" />
    </SvgIcon>
  );
}

/** Tro-authored compositions using public components from the local fork. */
export default function MoreExamples({ page, onNotice }: MoreExamplesProps) {
  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down('sm'));
  const reducesMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [open, setOpen] = React.useState(false);
  const [drawerKind, setDrawerKind] = React.useState<'temporary' | 'swipeable'>('temporary');
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);
  const [choice, setChoice] = React.useState('beginner');
  const [view, setView] = React.useState('board');
  const [tags, setTags] = React.useState<string[]>(['Motion']);
  const [selectedMaterials, setSelectedMaterials] = React.useState<string[]>([]);
  const [assigned, setAssigned] = React.useState<string[]>(['Drawing tools']);
  const [rating, setRating] = React.useState<number | null>(4);
  const [nav, setNav] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [resultPage, setResultPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sorted, setSorted] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [menuName, setMenuName] = React.useState('Activity');
  const portalTarget = React.useRef<HTMLDivElement>(null);
  const menuTriggers = React.useRef<(HTMLButtonElement | null)[]>([]);
  const popupId = React.useId();
  const timeout = reducesMotion ? 0 : 220;

  const close = () => {
    setOpen(false);
    setAnchor(null);
  };
  const notice = (message: string) => {
    close();
    onNotice(message);
  };
  const panel = (text: string) => (
    <Paper variant="outlined" sx={{ p: 3, width: '100%' }}>
      {text}
    </Paper>
  );

  if (page === 'Autocomplete') {
    return (
      <Stack spacing={3} sx={{ width: '100%', maxWidth: 480 }}>
        <Autocomplete
          options={activities}
          renderInput={(params) => <TextField {...params} label="Find an activity" />}
        />
        <Autocomplete
          multiple
          options={activities}
          renderInput={(params) => <TextField {...params} label="Build a learning playlist" />}
        />
        <Autocomplete
          disabled
          options={activities}
          renderInput={(params) => <TextField {...params} label="Unavailable activity search" />}
        />
      </Stack>
    );
  }
  if (page === 'Button group') {
    return (
      <Stack spacing={3}>
        <ButtonGroup aria-label="Activity sequence">
          <Button onClick={() => onNotice('Previous activity selected.')}>Previous</Button>
          <Button onClick={() => onNotice('Next activity selected.')}>Next</Button>
        </ButtonGroup>
        <ButtonBase
          onClick={() => onNotice('Custom base action selected.')}
          sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}
        >
          A custom named action
        </ButtonBase>
      </Stack>
    );
  }
  if (page === 'Checkbox') {
    return (
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Include materials" />
        <FormControlLabel control={<Checkbox indeterminate />} label="Some activities selected" />
        <FormControlLabel control={<Checkbox disabled />} label="Archived activity" />
      </FormGroup>
    );
  }
  if (page === 'Floating action button') {
    return (
      <Stack direction="row" spacing={3}>
        <Fab
          color="primary"
          aria-label="Create activity"
          onClick={() => onNotice('New activity selected.')}
        >
          <span aria-hidden="true">＋</span>
        </Fab>
        <Fab
          variant="extended"
          color="secondary"
          onClick={() => onNotice('New learning trail selected.')}
        >
          <TrailIcon /> New trail
        </Fab>
      </Stack>
    );
  }
  if (page === 'Number field') {
    return (
      <Stack spacing={3} sx={{ maxWidth: 400 }}>
        <Alert severity="info">
          Tro recipe using a native numeric input. This is not the Base UI NumberField recipe or a
          new package export.
        </Alert>
        <TextField
          type="number"
          label="Learners in this group"
          defaultValue={12}
          slotProps={{
            htmlInput: { min: 1, max: 30, step: 1 },
            input: { endAdornment: <InputAdornment position="end">learners</InputAdornment> },
          }}
          helperText="Choose between 1 and 30 learners."
        />
        <TextField
          type="number"
          label="Activity duration"
          defaultValue={30}
          slotProps={{
            htmlInput: { min: 5, max: 120, step: 5 },
            input: { endAdornment: <InputAdornment position="end">min</InputAdornment> },
          }}
        />
      </Stack>
    );
  }
  if (page === 'Radio group') {
    return (
      <FormControl>
        <FormLabel id={`${popupId}-format`}>Learning format</FormLabel>
        <RadioGroup aria-labelledby={`${popupId}-format`} defaultValue="studio">
          <FormControlLabel value="studio" control={<Radio />} label="Studio" />
          <FormControlLabel value="self" control={<Radio />} label="Self-paced" />
          <FormControlLabel
            value="field"
            disabled
            control={<Radio />}
            label="Field trip · coming later"
          />
        </RadioGroup>
        <FormHelperText>Choose one format for this example.</FormHelperText>
      </FormControl>
    );
  }
  if (page === 'Rating') {
    return (
      <Stack spacing={2}>
        <Typography component="label" htmlFor={`${popupId}-rating`}>
          How helpful was this activity?
        </Typography>
        <Rating
          id={`${popupId}-rating`}
          name="activity-rating"
          value={rating}
          onChange={(_event, value) => setRating(value)}
        />
        <Typography variant="body2">{rating ?? 'No'} stars selected</Typography>
        <Rating name="read-only-rating" value={4.5} precision={0.5} readOnly />
        <Rating name="disabled-rating" value={3} disabled />
      </Stack>
    );
  }
  if (page === 'Select') {
    return (
      <Stack spacing={3} sx={{ width: '100%', maxWidth: 440 }}>
        <TextField
          select
          label="Learning level"
          value={choice}
          onChange={(event) => setChoice(event.target.value)}
        >
          {['beginner', 'explorer', 'creator'].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <InputLabel variant="standard" htmlFor={`${popupId}-native`}>
            Native format
          </InputLabel>
          <NativeSelect defaultValue="studio" inputProps={{ id: `${popupId}-native` }}>
            <option value="studio">Studio</option>
            <option value="self">Self-paced</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel id={`${popupId}-tags`}>Learning topics</InputLabel>
          <Select
            multiple
            labelId={`${popupId}-tags`}
            label="Learning topics"
            value={tags}
            onChange={(event) => {
              const value = event.target.value;
              setTags(typeof value === 'string' ? value.split(',') : value);
            }}
          >
            {['Motion', 'Robotics', 'Storytelling'].map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Selected level" value={choice} disabled />
      </Stack>
    );
  }
  if (page === 'Slider') {
    return (
      <Stack spacing={4} sx={{ width: '100%', maxWidth: 420 }}>
        <Typography>Activity duration in minutes</Typography>
        <Slider
          aria-label="Activity duration"
          defaultValue={30}
          min={10}
          max={90}
          step={5}
          marks
          valueLabelDisplay="auto"
        />
        <Slider
          aria-label="Activity duration range"
          defaultValue={[20, 50]}
          min={10}
          max={90}
          valueLabelDisplay="auto"
        />
        <Slider aria-label="Unavailable duration" disabled defaultValue={30} />
      </Stack>
    );
  }
  if (page === 'Switch') {
    return (
      <Stack>
        <FormControlLabel control={<Switch defaultChecked />} label="Show hints" />
        <FormControlLabel control={<Switch />} label="Play activity sounds" />
        <FormControlLabel control={<Switch disabled />} label="Unavailable setting" />
      </Stack>
    );
  }
  if (page === 'Transfer list') {
    const renderMaterials = (title: string, values: string[]) => (
      <Paper variant="outlined" sx={{ flex: 1, minWidth: 0 }}>
        <List aria-label={title} subheader={<ListSubheader>{title}</ListSubheader>}>
          {values.map((value) => (
            <ListItem key={value} disablePadding>
              <ListItemButton
                onClick={() =>
                  setSelectedMaterials((current) =>
                    current.includes(value)
                      ? current.filter((item) => item !== value)
                      : [...current, value],
                  )
                }
              >
                <ListItemIcon>
                  <Checkbox
                    checked={selectedMaterials.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    slotProps={{ input: { 'aria-label': value } }}
                  />
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {renderMaterials(
            'Available',
            materials.filter((value) => !assigned.includes(value)),
          )}
          {renderMaterials('In this activity', assigned)}
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            disabled={!selectedMaterials.some((value) => !assigned.includes(value))}
            onClick={() => {
              setAssigned((current) => [...new Set([...current, ...selectedMaterials])]);
              setSelectedMaterials([]);
            }}
          >
            Add selected →
          </Button>
          <Button
            disabled={!selectedMaterials.some((value) => assigned.includes(value))}
            onClick={() => {
              setAssigned((current) =>
                current.filter((value) => !selectedMaterials.includes(value)),
              );
              setSelectedMaterials([]);
            }}
          >
            ← Remove selected
          </Button>
        </Stack>
      </Stack>
    );
  }
  if (page === 'Toggle button') {
    return (
      <ToggleButtonGroup
        value={view}
        exclusive
        aria-label="Workspace view"
        onChange={(_event, value: unknown) => {
          if (typeof value === 'string') {
            setView(value);
          }
        }}
      >
        {['board', 'list', 'timeline'].map((value) => (
          <ToggleButton key={value} value={value}>
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    );
  }
  if (page === 'Avatar') {
    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>AL</Avatar>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText' }}
          >
            MK
          </Avatar>
          <Avatar variant="square">JS</Avatar>
        </Stack>
        <AvatarGroup max={3}>
          {['AL', 'MK', 'JS', 'NT', 'QH'].map((value) => (
            <Avatar key={value}>{value}</Avatar>
          ))}
        </AvatarGroup>
      </Stack>
    );
  }
  if (page === 'Badge') {
    return (
      <Stack direction="row" spacing={4}>
        <Badge badgeContent={4} color="secondary">
          <Button
            aria-label="Feedback, 4 unread items"
            onClick={() => onNotice('Feedback preview opened.')}
          >
            Feedback
          </Button>
        </Badge>
        <Badge variant="dot" color="success">
          <Chip label="Studio is available" />
        </Badge>
      </Stack>
    );
  }
  if (page === 'Chip') {
    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onDelete={() => setTags((current) => current.filter((value) => value !== tag))}
            />
          ))}
          <Chip
            label="Robotics"
            variant="outlined"
            onClick={() =>
              setTags((current) =>
                current.includes('Robotics') ? current : [...current, 'Robotics'],
              )
            }
          />
          <Chip label="Archived" disabled />
        </Stack>
        <Button onClick={() => setTags(['Motion'])}>Reset tags</Button>
      </Stack>
    );
  }
  if (page === 'Divider') {
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Typography>Explore an idea.</Typography>
        <Divider>Then</Divider>
        <Typography>Make something from it.</Typography>
        <Divider />
        <Typography variant="body2">Reflect on what changed.</Typography>
      </Stack>
    );
  }
  if (page === 'Icons' || page === 'Material icons') {
    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
          {page === 'Icons' ? (
            <React.Fragment>
              <TrailIcon />
              <SvgIcon titleAccess="Open world" color="secondary">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M4 12h16M12 4q-7 8 0 16 7-8 0-16" fill="none" stroke="currentColor" />
              </SvgIcon>
              <Icon baseClassName="" aria-label="Next step">
                ↗
              </Icon>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <AutoStories titleAccess="Learning materials" color="primary" />
              <LightbulbOutlined titleAccess="An idea" color="secondary" />
              <Public titleAccess="Explore the world" color="info" />
            </React.Fragment>
          )}
        </Stack>
        <Typography variant="body2">
          {page === 'Icons'
            ? 'Original Tro symbols use SvgIcon and the project palette.'
            : 'These three icons come from the separate @mui/icons-material package. Their shapes remain upstream artwork; Tro supplies the colors.'}
        </Typography>
      </Stack>
    );
  }
  if (page === 'List') {
    return (
      <List sx={{ width: '100%' }} subheader={<ListSubheader>Learning studio</ListSubheader>}>
        {['Alex', 'Minh', 'Jules'].map((name, index) => (
          <ListItem key={name}>
            <ListItemAvatar>
              <Avatar>{name.slice(0, 1)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={activities[index]} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label={`View ${name}'s activity`}
                onClick={() => onNotice(`${name}'s example activity selected.`)}
              >
                ↗
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
  if (page === 'Tooltip') {
    return (
      <Tooltip title="Open the activity guide">
        <Button variant="outlined" onClick={() => onNotice('Activity guide selected.')}>
          Activity guide
        </Button>
      </Tooltip>
    );
  }
  if (page === 'Backdrop') {
    return (
      <React.Fragment>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open task backdrop
        </Button>
        <Modal
          open={open}
          onClose={close}
          aria-labelledby={`${popupId}-backdrop-title`}
          slots={{ backdrop: Backdrop }}
        >
          <Paper
            tabIndex={-1}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              p: 4,
              width: 340,
              maxWidth: 'calc(100vw - 32px)',
            }}
          >
            <Stack spacing={3} sx={{ alignItems: 'center' }}>
              <Typography id={`${popupId}-backdrop-title`} component="h2" variant="h6">
                A moment to prepare
              </Typography>
              <CircularProgress aria-label="Illustrative task in progress" />
              <Button onClick={close}>Close preview</Button>
            </Stack>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
  if (page === 'Skeleton') {
    return (
      <Stack sx={{ width: '100%', maxWidth: 440 }} spacing={2}>
        <Skeleton variant="rounded" height={150} />
        <Skeleton variant="text" sx={{ fontSize: '1.6rem' }} />
        <Skeleton width="70%" />
        <Stack direction="row" spacing={2}>
          <Skeleton variant="circular" width={44} height={44} />
          <Skeleton width="50%" />
        </Stack>
      </Stack>
    );
  }
  if (page === 'Accordion') {
    return (
      <Box sx={{ width: '100%' }}>
        {['Activity materials', 'A question to begin'].map((name, index) => (
          <Accordion key={name}>
            <AccordionSummary
              expandIcon={<span>＋</span>}
              id={`${popupId}-${index}-heading`}
              aria-controls={`${popupId}-${index}-content`}
            >
              {name}
            </AccordionSummary>
            <AccordionDetails id={`${popupId}-${index}-content`}>
              {index === 0
                ? 'Bring paper, shapes and one question.'
                : 'What changes when you make one small adjustment?'}
            </AccordionDetails>
            <AccordionActions>
              <Button onClick={() => onNotice('Activity guide selected.')}>View guide</Button>
            </AccordionActions>
          </Accordion>
        ))}
      </Box>
    );
  }
  if (page === 'App bar') {
    return (
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ border: 1, borderColor: 'divider' }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <IconButton
            aria-label="Open workspace menu"
            onClick={() => onNotice('Workspace menu selected.')}
          >
            ☰
          </IconButton>
          <Typography variant="h6" component="p" sx={{ flex: 1 }}>
            Learning studio
          </Typography>
          <Button onClick={() => onNotice('Workspace saved locally for this example only.')}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
  if (page === 'Paper') {
    return (
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ width: '100%' }}>
        <Paper variant="outlined" sx={{ p: 3, flex: 1 }}>
          A quiet working surface.
        </Paper>
        <Paper elevation={2} sx={{ p: 3, flex: 1 }}>
          A lifted surface for focused work.
        </Paper>
      </Stack>
    );
  }
  if (page === 'Bottom navigation') {
    return (
      <BottomNavigation
        showLabels
        value={nav}
        onChange={(_event, value: number) => setNav(value)}
        sx={{ width: '100%' }}
      >
        {['Explore', 'My work', 'Studio'].map((label) => (
          <BottomNavigationAction key={label} label={label} icon={<TrailIcon />} />
        ))}
      </BottomNavigation>
    );
  }
  if (page === 'Breadcrumbs') {
    return (
      <Breadcrumbs aria-label="Breadcrumb">
        <Link href="#content" underline="hover">
          Learning studio
        </Link>
        <Link href="#content" underline="hover">
          Motion lab
        </Link>
        <Typography color="text.primary">First animation</Typography>
      </Breadcrumbs>
    );
  }
  if (page === 'Drawer') {
    const contents = (
      <Box
        sx={{ p: 3, width: 280, maxWidth: '85vw' }}
        role="navigation"
        aria-label="Workspace destinations"
      >
        <Typography variant="h5">Your studio</Typography>
        <List>
          {['Explore', 'My activities', 'Learning groups'].map((name) => (
            <ListItem key={name} disablePadding>
              <ListItemButton onClick={() => notice(`${name} selected.`)}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button onClick={close}>Close workspace menu</Button>
      </Box>
    );
    return (
      <React.Fragment>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            onClick={() => {
              setDrawerKind('temporary');
              setOpen(true);
            }}
          >
            Open workspace drawer
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerKind('swipeable');
              setOpen(true);
            }}
          >
            Open swipeable drawer
          </Button>
        </Stack>
        {drawerKind === 'temporary' ? (
          <Drawer open={open} onClose={close}>
            {contents}
          </Drawer>
        ) : (
          <SwipeableDrawer open={open} onClose={close} onOpen={() => setOpen(true)}>
            {contents}
          </SwipeableDrawer>
        )}
      </React.Fragment>
    );
  }
  if (page === 'Link') {
    return (
      <Typography>
        Start with a question, then{' '}
        <Link href="#content" underline="always">
          explore the activity guide
        </Link>
        .
      </Typography>
    );
  }
  if (page === 'Menu' || page === 'Menubar') {
    const names = ['Activity', 'View', 'Help'];
    return (
      <Stack spacing={3}>
        <Box
          role={page === 'Menubar' ? 'menubar' : undefined}
          aria-label="Studio actions"
          sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}
        >
          {(page === 'Menu' ? ['Activity actions'] : names).map((name, index) => (
            <Button
              key={name}
              ref={(element) => {
                menuTriggers.current[index] = element;
              }}
              role={page === 'Menubar' ? 'menuitem' : undefined}
              tabIndex={page !== 'Menubar' || nav === index ? 0 : -1}
              variant="outlined"
              aria-haspopup="menu"
              aria-expanded={anchor && menuName === name ? 'true' : undefined}
              aria-controls={anchor ? popupId : undefined}
              onKeyDown={(event) => {
                if (
                  page === 'Menubar' &&
                  ['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)
                ) {
                  event.preventDefault();
                  let next = (index + (event.key === 'ArrowRight' ? 1 : 2)) % 3;
                  if (event.key === 'Home') {
                    next = 0;
                  }
                  if (event.key === 'End') {
                    next = 2;
                  }
                  setNav(next);
                  menuTriggers.current[next]?.focus();
                }
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  setMenuName(name);
                  setAnchor(event.currentTarget);
                }
              }}
              onClick={(event) => {
                setMenuName(name);
                setAnchor(event.currentTarget);
              }}
            >
              {name}
            </Button>
          ))}
        </Box>
        <Menu id={popupId} anchorEl={anchor} open={Boolean(anchor)} onClose={close}>
          <MenuItem onClick={() => notice(`${menuName}: new activity selected.`)}>
            New activity
          </MenuItem>
          <MenuItem onClick={() => notice(`${menuName}: duplicate selected.`)}>
            Duplicate{' '}
            <Typography variant="caption" sx={{ ml: 3 }}>
              ⌘D
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem disabled>Publish · unavailable in preview</MenuItem>
        </Menu>
        {page === 'Menu' ? (
          <Paper variant="outlined">
            <MenuList aria-label="Example persistent actions">
              <MenuItem onClick={() => onNotice('Activity guide selected.')}>
                Activity guide
              </MenuItem>
              <MenuItem disabled>Archived resources</MenuItem>
            </MenuList>
          </Paper>
        ) : (
          <Alert severity="info">
            Tro menu composition. Use Left/Right or Home/End between triggers, Down to open, and
            Escape to close. A standalone Menubar is not exported by this core package.
          </Alert>
        )}
      </Stack>
    );
  }
  if (page === 'Pagination') {
    return (
      <Stack spacing={3} sx={{ width: '100%' }}>
        <Pagination
          aria-label="Activity result pages"
          count={Math.ceil(40 / rowsPerPage)}
          page={resultPage}
          onChange={(_event, value) => setResultPage(value)}
          renderItem={(item) => <PaginationItem {...item} />}
        />
        <Typography>
          Showing activity page {resultPage} of {Math.ceil(40 / rowsPerPage)}
        </Typography>
        <TablePagination
          component="div"
          count={40}
          page={resultPage - 1}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10]}
          onPageChange={(_event, value) => setResultPage(value + 1)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(Number(event.target.value));
            setResultPage(1);
          }}
          ActionsComponent={TablePaginationActions}
        />
      </Stack>
    );
  }
  if (page === 'Speed dial') {
    return (
      <Box
        sx={{
          position: 'relative',
          height: 270,
          width: '100%',
          overflow: 'hidden',
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        <Typography sx={{ p: 3 }}>Start something new.</Typography>
        <SpeedDial
          ariaLabel="Create in studio"
          icon={<SpeedDialIcon />}
          sx={{ position: 'absolute', bottom: 24, right: 24 }}
        >
          <SpeedDialAction
            icon={<TrailIcon />}
            slotProps={{ tooltip: { title: 'Learning trail' } }}
            onClick={() => onNotice('New trail selected.')}
          />
          <SpeedDialAction
            icon={<span>＋</span>}
            slotProps={{ tooltip: { title: 'Activity' } }}
            onClick={() => onNotice('New activity selected.')}
          />
        </SpeedDial>
      </Box>
    );
  }
  if (page === 'Stepper') {
    return (
      <Stack spacing={3} sx={{ width: '100%' }}>
        <Stepper activeStep={step} alternativeLabel connector={<StepConnector />}>
          {['Explore', 'Create', 'Reflect'].map((label, index) => (
            <Step key={label}>
              <StepButton onClick={() => setStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <Typography>
          {['Start with a question.', 'Build one small idea.', 'Notice what changed.'][step]}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button disabled={step === 0} onClick={() => setStep((value) => value - 1)}>
            Back
          </Button>
          <Button
            variant="contained"
            disabled={step === 2}
            onClick={() => setStep((value) => value + 1)}
          >
            Next
          </Button>
        </Stack>
        <Stepper activeStep={step} orientation="vertical">
          {['Explore', 'Create', 'Reflect'].map((label) => (
            <Step key={label}>
              <StepLabel slots={{ stepIcon: StepIcon }}>{label}</StepLabel>
              <StepContent>Try one change, then compare the result.</StepContent>
            </Step>
          ))}
        </Stepper>
        <MobileStepper
          variant="dots"
          steps={3}
          activeStep={step}
          position="static"
          nextButton={
            <Button disabled={step === 2} onClick={() => setStep((value) => value + 1)}>
              Next
            </Button>
          }
          backButton={
            <Button disabled={step === 0} onClick={() => setStep((value) => value - 1)}>
              Back
            </Button>
          }
        />
      </Stack>
    );
  }
  if (page === 'Tabs') {
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={nav}
          onChange={(_event, value: number) => setNav(value)}
          aria-label="Activity views"
          variant="scrollable"
          scrollButtons="auto"
          slots={{ scrollButtons: TabScrollButton }}
        >
          {['Explore', 'Create', 'Reflect'].map((label, index) => (
            <Tab
              key={label}
              label={label}
              id={`${popupId}-tab-${index}`}
              aria-controls={`${popupId}-panel-${index}`}
            />
          ))}
        </Tabs>
        {['Explore', 'Create', 'Reflect'].map((label, index) => (
          <Box
            key={label}
            role="tabpanel"
            hidden={nav !== index}
            id={`${popupId}-panel-${index}`}
            aria-labelledby={`${popupId}-tab-${index}`}
            sx={{ p: 3 }}
          >
            {label}: take one step and see what happens.
          </Box>
        ))}
      </Box>
    );
  }
  if (page === 'Box') {
    return (
      <Box
        sx={{
          p: 3,
          width: '100%',
          bgcolor: 'background.default',
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        Make room for an idea.
      </Box>
    );
  }
  if (page === 'Container') {
    return (
      <Container maxWidth="sm">
        {panel('A focused reading space that stays comfortable on larger screens.')}
      </Container>
    );
  }
  if (page === 'Grid') {
    return (
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {['Explore', 'Create', 'Reflect', 'Share'].map((label) => (
          <Grid key={label} size={{ xs: 12, sm: 6 }}>
            {panel(label)}
          </Grid>
        ))}
      </Grid>
    );
  }
  if (page === 'Stack') {
    return (
      <Stack spacing={3} sx={{ width: '100%' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {['Explore', 'Create', 'Reflect'].map((label) => (
            <Chip key={label} label={label} />
          ))}
        </Stack>
        {panel('Spacing comes from the project design setup.')}
      </Stack>
    );
  }
  if (page === 'Image list') {
    return (
      <ImageList cols={isNarrow ? 1 : 2} gap={16} sx={{ width: '100%', m: 0 }}>
        {[
          'Follow a question',
          'Make a new connection',
          'Build a small world',
          'Reflect and repeat',
        ].map((title, index) => (
          <ImageListItem key={title}>
            <img
              src={`/LearningTrail.svg?tile=${index}`}
              alt={`Abstract learning trail for ${title.toLowerCase()}`}
              loading="lazy"
            />
            <ImageListItemBar title={title} />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  if (page === 'Click-away listener') {
    return (
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div>
          <Button
            variant="outlined"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Show a small hint
          </Button>
          {open ? panel('Try changing just one thing. Click outside this area to dismiss.') : null}
        </div>
      </ClickAwayListener>
    );
  }
  if (page === 'CSS baseline') {
    return (
      <ScopedCssBaseline sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
        <GlobalStyles styles={{ '.tro-baseline-example': { margin: 0 } }} />
        <Typography className="tro-baseline-example">
          A scoped reading surface. The global catalog already uses CssBaseline.
        </Typography>
      </ScopedCssBaseline>
    );
  }
  if (page === 'Color scheme script') {
    return (
      <Alert severity="info">
        Server integration recipe: place InitColorSchemeScript before application content and pair
        it with matching ThemeProvider CSS-variable color schemes. This client preview uses an
        explicit light/dark project theme; inserting the script here would not demonstrate server
        hydration.
      </Alert>
    );
  }
  if (page === 'Focus containment') {
    return (
      <Stack spacing={2}>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open focus prompt
        </Button>
        {open ? (
          <FocusTrap open={open}>
            <Paper tabIndex={-1} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
              <Typography>Tab stays within this teaching prompt until it is closed.</Typography>
              <TextField label="A question to explore" sx={{ my: 2 }} />
              <Button onClick={close}>Close focus prompt</Button>
            </Paper>
          </FocusTrap>
        ) : null}
      </Stack>
    );
  }
  if (page === 'Modal') {
    return (
      <React.Fragment>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open learning prompt
        </Button>
        <Modal
          open={open}
          onClose={close}
          aria-labelledby={`${popupId}-title`}
          aria-describedby={`${popupId}-description`}
        >
          <Paper
            tabIndex={-1}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              p: 4,
              width: 420,
              maxWidth: 'calc(100vw - 32px)',
            }}
          >
            <Typography id={`${popupId}-title`} variant="h5" component="h2">
              Start with curiosity.
            </Typography>
            <Typography id={`${popupId}-description`} sx={{ my: 2 }}>
              What would you like to understand better?
            </Typography>
            <Button onClick={close}>Close prompt</Button>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
  if (page === 'No SSR') {
    return (
      <NoSsr fallback={<span>Preparing studio…</span>}>
        <Chip label="Client preview ready" color="success" variant="outlined" />
      </NoSsr>
    );
  }
  if (page === 'Popover' || page === 'Popper') {
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          aria-describedby={anchor ? popupId : undefined}
          onClick={(event) => setAnchor(anchor ? null : event.currentTarget)}
        >
          Show a learning hint
        </Button>
        {page === 'Popover' ? (
          <Popover
            id={popupId}
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={close}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          >
            <Typography sx={{ p: 3 }}>Start with a question, then try one small change.</Typography>
          </Popover>
        ) : (
          <Popper
            id={popupId}
            open={Boolean(anchor)}
            anchorEl={anchor}
            sx={{ zIndex: theme.zIndex.tooltip }}
          >
            <ClickAwayListener onClickAway={close}>
              <Paper sx={{ p: 3, maxWidth: 280 }}>
                <Typography>Try a smaller step.</Typography>
                <Button onClick={close}>Close hint</Button>
              </Paper>
            </ClickAwayListener>
          </Popper>
        )}
      </React.Fragment>
    );
  }
  if (page === 'Portal') {
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={() => setOpen((value) => !value)}>
          {open ? 'Remove annotation' : 'Add annotation'}
        </Button>
        <Box
          ref={portalTarget}
          sx={{ minHeight: 80, border: 1, borderStyle: 'dashed', borderColor: 'divider', p: 2 }}
          aria-label="Annotation area"
        >
          {open ? (
            <Portal container={() => portalTarget.current}>
              <Chip label="Rendered in the annotation area" />
            </Portal>
          ) : (
            <Typography variant="body2">The annotation will appear here.</Typography>
          )}
        </Box>
      </Stack>
    );
  }
  if (page === 'Textarea autosize') {
    return (
      <TextareaAutosize
        aria-label="Learning reflection"
        minRows={3}
        placeholder="What did you discover?"
        style={{
          width: '100%',
          padding: 16,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
          font: 'inherit',
          color: theme.palette.text.primary,
          background: theme.palette.background.default,
        }}
      />
    );
  }
  if (page === 'Transitions') {
    return (
      <Stack spacing={3} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={() => setVisible((value) => !value)}>
          Toggle motion examples
        </Button>
        <Typography variant="body2">
          {reducesMotion
            ? 'Reduced motion is enabled; transitions are instant.'
            : 'Each transition uses the same 220ms example duration.'}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Fade in={visible} timeout={timeout}>
            <Paper sx={{ p: 2 }}>Fade</Paper>
          </Fade>
          <Grow in={visible} timeout={timeout}>
            <Paper sx={{ p: 2 }}>Grow</Paper>
          </Grow>
          <Zoom in={visible} timeout={timeout}>
            <Paper sx={{ p: 2 }}>Zoom</Paper>
          </Zoom>
        </Stack>
        <Box sx={{ overflow: 'hidden' }}>
          <Slide in={visible} direction="up" timeout={timeout}>
            <Paper sx={{ p: 2 }}>Slide</Paper>
          </Slide>
        </Box>
        <Collapse in={visible} timeout={timeout}>
          {panel('Collapse')}
        </Collapse>
      </Stack>
    );
  }
  if (page === 'Media query') {
    return (
      <Alert severity="info">
        The viewport currently uses the {isNarrow ? 'compact' : 'wide'} layout. Narrow and wide
        screens use the same project tokens. Reduced motion:{' '}
        {reducesMotion ? 'enabled' : 'disabled'}.
      </Alert>
    );
  }
  if (page === 'Package guide') {
    return (
      <Stack spacing={3}>
        <Alert severity="info">
          This catalog previews the local Tro fork. The distribution is @ducnguyen67201/tro-ui.
          Registry publication requires a verified release; workspace imports remain @mui/material.
        </Alert>
        <Typography>
          One project setup defines colors, fonts, spacing and geometry. Component APIs remain
          compatible with the pinned upstream baseline.
        </Typography>
        <Link href="/llms.txt">Read the assistant entry guide</Link>
        <Link href="/llms-full.txt">Read the complete local assistant guide</Link>
        <Typography variant="body2">
          Core MIT notices remain included. Separate MUI X commercial features and store templates
          are not bundled into this catalog.
        </Typography>
      </Stack>
    );
  }
  if (page === 'Component parts') {
    return (
      <Stack spacing={3} sx={{ width: '100%', maxWidth: 560 }}>
        <Typography variant="h6" component="h3">
          Form primitives
        </Typography>
        <FormControl>
          <InputLabel htmlFor={`${popupId}-outline`}>Outlined primitive</InputLabel>
          <OutlinedInput id={`${popupId}-outline`} label="Outlined primitive" />
          <FormHelperText>Inputs can be composed without the TextField wrapper.</FormHelperText>
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor={`${popupId}-filled`}>Filled primitive</InputLabel>
          <FilledInput id={`${popupId}-filled`} />
        </FormControl>
        <Input
          inputProps={{ 'aria-label': 'Standard input primitive' }}
          placeholder="Standard input"
        />
        <InputBase
          inputProps={{ 'aria-label': 'Base input primitive' }}
          placeholder="Base input"
          sx={{ p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}
        />
        <Card>
          <CardHeader
            avatar={<Avatar>TR</Avatar>}
            title="A question worth following"
            subheader="Sample studio activity"
          />
          <CardActionArea onClick={() => onNotice('Activity preview selected.')}>
            <CardMedia
              component="img"
              image="/LearningTrail.svg"
              alt="An original abstract learning trail"
            />
            <Typography sx={{ p: 2 }}>Explore the next connection.</Typography>
          </CardActionArea>
        </Card>
        <Table size="small" aria-label="Sortable sample activities">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active
                  direction={sorted ? 'desc' : 'asc'}
                  onClick={() => setSorted((value) => !value)}
                >
                  Activity
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...activities]
              .sort((first, second) =>
                sorted ? second.localeCompare(first) : first.localeCompare(second),
              )
              .map((activity) => (
                <TableRow key={activity}>
                  <TableCell>{activity}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>4 sample activities</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Stack>
    );
  }
  return <Alert severity="warning">No example is registered for this page.</Alert>;
}
