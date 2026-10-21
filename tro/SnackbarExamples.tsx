import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import reduceSnackbarQueue from './SnackbarQueue';

const positions = {
  'Bottom center': { vertical: 'bottom', horizontal: 'center' },
  'Bottom right': { vertical: 'bottom', horizontal: 'right' },
  'Bottom left': { vertical: 'bottom', horizontal: 'left' },
  'Top center': { vertical: 'top', horizontal: 'center' },
  'Top right': { vertical: 'top', horizontal: 'right' },
  'Top left': { vertical: 'top', horizontal: 'left' },
} as const satisfies Record<string, SnackbarOrigin>;

/** Single-message queue: consecutive notices replace after exit, rather than stacking. */
export default function SnackbarExamples() {
  const [position, setPosition] = React.useState<keyof typeof positions>('Bottom center');
  const [duration, setDuration] = React.useState(6000);
  const [transition, setTransition] = React.useState('Grow');
  const [dismissOnClickAway, setDismissOnClickAway] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [queueState, dispatchQueue] = React.useReducer(reduceSnackbarQueue, {
    messages: [],
    open: false,
  });
  const active = queueState.messages[0];
  const open = queueState.open;
  const queue = queueState.messages.slice(1);
  const [result, setResult] = React.useState('No example action yet.');
  const sequence = React.useRef(0);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  function addMessage(text: string, success = false) {
    sequence.current += 1;
    dispatchQueue({ type: 'enqueue', message: { id: sequence.current, text, success } });
  }

  const transitions = { Grow, Fade, Slide };
  const selectedTransition =
    Object.entries(transitions).find(([name]) => name === transition)?.[1] ?? Grow;

  const notification = (
    <Snackbar
      key={active?.id ?? 'idle'}
      open={open}
      anchorOrigin={positions[position]}
      autoHideDuration={duration === 0 ? null : duration}
      onClose={(_event, reason) => {
        if (reason !== 'clickaway' || dismissOnClickAway) {
          dispatchQueue({ type: 'close' });
        }
      }}
      slots={{ transition: reducedMotion ? Fade : selectedTransition }}
      slotProps={{
        transition: {
          timeout: reducedMotion ? 0 : 220,
          onExited: () => {
            if (active) {
              dispatchQueue({ type: 'exited', id: active.id });
            }
          },
        },
      }}
      message={active?.text}
      action={
        <Stack direction="row">
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              setResult('Example move undone. No stored data changed.');
              dispatchQueue({ type: 'close' });
            }}
          >
            Undo
          </Button>
          <Button
            color="inherit"
            size="small"
            aria-label="Dismiss notification"
            onClick={() => dispatchQueue({ type: 'close' })}
          >
            ×
          </Button>
        </Stack>
      }
      sx={{ zIndex: (theme) => theme.zIndex.modal + 10 }}
    >
      {active?.success ? (
        <Alert
          severity="success"
          variant="filled"
          onClose={() => dispatchQueue({ type: 'close' })}
          sx={{ width: '100%' }}
        >
          {active.text}
        </Alert>
      ) : undefined}
    </Snackbar>
  );

  return (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: 650 }}>
      <Typography>
        Choose an appearance, then trigger a notification. These examples change no saved data.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          select
          label="Snackbar position"
          value={position}
          onChange={(event) => {
            const next = event.target.value;
            if (
              next === 'Bottom center' ||
              next === 'Bottom right' ||
              next === 'Bottom left' ||
              next === 'Top center' ||
              next === 'Top right' ||
              next === 'Top left'
            ) {
              setPosition(next);
            }
          }}
          sx={{ flex: 1 }}
        >
          {Object.keys(positions).map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Dismiss after"
          value={duration}
          onChange={(event) => setDuration(Number(event.target.value))}
          sx={{ flex: 1 }}
        >
          <MenuItem value={6000}>6 seconds</MenuItem>
          <MenuItem value={10000}>10 seconds</MenuItem>
          <MenuItem value={0}>Until dismissed</MenuItem>
        </TextField>
        <TextField
          select
          label="Transition"
          value={transition}
          onChange={(event) => setTransition(event.target.value)}
          sx={{ flex: 1 }}
        >
          {['Grow', 'Fade', 'Slide'].map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <FormControlLabel
        control={
          <Switch
            checked={dismissOnClickAway}
            onChange={(_event, checked) => setDismissOnClickAway(checked)}
          />
        }
        label="Dismiss when clicking away"
      />
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          onClick={() => addMessage('Activity moved to your collection.')}
        >
          Show message with Undo
        </Button>
        <Button
          variant="outlined"
          onClick={() => addMessage('Your activity is ready to explore.', true)}
        >
          Show success snackbar
        </Button>
        <Button
          onClick={() => {
            addMessage('First: a question worth exploring.');
            addMessage('Next: one idea to try.');
          }}
        >
          Queue two messages
        </Button>
        <Button onClick={() => setDialog(true)}>Try inside a dialog</Button>
      </Stack>
      <Typography role="status" variant="body2">
        {result} {queue.length ? `${queue.length} notification(s) waiting.` : ''}
      </Typography>
      <SnackbarContent
        message="A longer learning update can wrap across lines and still offer a clear next action."
        action={
          <Button color="inherit" onClick={() => setResult('The activity guide was selected.')}>
            View guide
          </Button>
        }
      />
      <Alert severity="info">
        Escape dismisses the current notification. Hovering pauses its timer. Consecutive examples
        appear one at a time. Reduced motion{' '}
        {reducedMotion ? 'is enabled.' : 'uses your system preference.'}
      </Alert>
      <Dialog
        open={dialog}
        onClose={(_event, reason) => {
          if (reason === 'escapeKeyDown' && open) {
            dispatchQueue({ type: 'close' });
          } else {
            setDialog(false);
          }
        }}
        aria-labelledby="snackbar-dialog-title"
      >
        <DialogTitle id="snackbar-dialog-title">Keep the learning flow</DialogTitle>
        <DialogContent>
          <Typography>
            A notification can appear without closing this dialog. Escape dismisses the notification
            first.
          </Typography>
          <Button onClick={() => addMessage('A small step has been captured.', true)}>
            Show dialog notification
          </Button>
          {dialog ? notification : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(false)}>Close dialog</Button>
        </DialogActions>
      </Dialog>
      {!dialog ? notification : null}
    </Stack>
  );
}
