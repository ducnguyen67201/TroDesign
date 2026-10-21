export interface PreviewMessage {
  id: number;
  text: string;
  success: boolean;
}

export interface SnackbarQueueState {
  messages: PreviewMessage[];
  open: boolean;
}

type SnackbarQueueAction =
  { type: 'enqueue'; message: PreviewMessage } | { type: 'close' } | { type: 'exited'; id: number };

/** Keep the active message until its exit finishes; ignore stale exit callbacks. */
export default function reduceSnackbarQueue(
  state: SnackbarQueueState,
  action: SnackbarQueueAction,
): SnackbarQueueState {
  if (action.type === 'enqueue') {
    return {
      messages: [...state.messages, action.message],
      open: state.messages.length === 0 || state.open,
    };
  }
  if (action.type === 'close') {
    return { ...state, open: false };
  }
  if (state.messages[0]?.id !== action.id) {
    return state;
  }
  const messages = state.messages.slice(1);
  return { messages, open: messages.length > 0 };
}
