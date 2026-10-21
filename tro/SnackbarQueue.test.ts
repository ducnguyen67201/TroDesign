import { describe, it, expect } from 'vitest';
import reduceSnackbarQueue, { SnackbarQueueState } from './SnackbarQueue';

const empty: SnackbarQueueState = { messages: [], open: false };
const first = { id: 1, text: 'First', success: false };
const second = { id: 2, text: 'Second', success: true };

describe('Tro snackbar queue', () => {
  it('opens the first message and retains later messages without stacking', () => {
    const started = reduceSnackbarQueue(empty, { type: 'enqueue', message: first });
    const queued = reduceSnackbarQueue(started, { type: 'enqueue', message: second });
    expect(queued.open).to.equal(true);
    expect(queued.messages.map((message) => message.id)).to.deep.equal([1, 2]);
    expect(empty.messages).to.have.length(0);
  });
  it('waits for the exit transition before opening the next message', () => {
    const state = { messages: [first, second], open: true };
    const closing = reduceSnackbarQueue(state, { type: 'close' });
    expect(closing.open).to.equal(false);
    expect(closing.messages[0]?.id).to.equal(1);
    const next = reduceSnackbarQueue(closing, { type: 'exited', id: 1 });
    expect(next.open).to.equal(true);
    expect(next.messages[0]?.id).to.equal(2);
  });
  it('does not reopen an outgoing message when another notice arrives', () => {
    const state = reduceSnackbarQueue(
      { messages: [first], open: false },
      { type: 'enqueue', message: second },
    );
    expect(state.open).to.equal(false);
    expect(reduceSnackbarQueue(state, { type: 'exited', id: 1 }).messages[0]?.id).to.equal(2);
  });
  it('ignores a stale exit callback and empties the final message', () => {
    const state = { messages: [second], open: true };
    expect(reduceSnackbarQueue(state, { type: 'exited', id: 1 })).to.equal(state);
    expect(reduceSnackbarQueue(state, { type: 'exited', id: 2 })).to.deep.equal(empty);
  });
});
